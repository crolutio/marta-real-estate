## Context

`components/hero-video-background.tsx` implements three player variants behind one exported component: `SingleClipHero` (one clip, native `loop`), `CutSwitchHero` (two stacked layers, hard cut) and `CrossfadeHero` (two layers, opacity blend). The homepage passes `crossfade={false}` and six clips, so it runs `CutSwitchHero`. All three variants already set `muted`, `playsInline`, `preload="auto"` and drive `play()` from a `useLayoutEffect` "kick" — the standard iOS autoplay-eligibility set. That part is correct, which is why the failure is not a blanket autoplay block.

What is missing is anything to fall back to. Every variant renders a bare `<video>` over a transparent section, and the `onError` handler only calls `setBuffering(false)`. On decode failure the spinner disappears and the visitor is left with hero text over nothing.

Container inspection of `public/videos/hero/` (via `ffprobe` and a raw top-level atom walk) found clips 1 and 2 non-faststart with a second AC-3 audio track, and clips 3–6 clean. Clip 1 is index 0 in `HOME_PAGE_HERO_CLIP_PATHS`.

On the copy side, `lib/i18n/dictionaries.ts` is a single 2350-line file holding a `Dictionary` type plus three literals (`en`, `es`, `de`) typed against it. `aboutPreview` currently exposes flat `p1`/`p2` strings, rendered as two `<p>` elements by `components/about-preview.tsx`. The new copy is four headed subsections, so the flat shape no longer fits.

## Goals / Non-Goals

**Goals:**

- Hero clip 1 plays on iOS and macOS Safari, verified on real hardware.
- A failed or slow-loading hero degrades to a still frame, never to an empty section.
- The `/about` company block reads as company-level copy with visible subsection headings, in all three locales.
- No regression to the existing hard-cut and crossfade transition behavior already specified in `hero-video-background`.

**Non-Goals:**

- Reworking the transition state machine. The `advance`/`finishCrossfade` logic and its spinner rules are covered by existing requirements and stay as they are.
- Adding a WebM/VP9 or HLS alternate source. H.264 is universally supported; a second codec is cost without benefit here.
- Rewriting Marta's biography. The "Marta's Story" section is unchanged by this work.
- Reducing clip file sizes or resolution. Worth doing, but it is a separate performance concern and would muddy the before/after signal on this fix.

## Decisions

### Remux rather than re-encode

`ffmpeg -i in.mp4 -map 0:v:0 -map 0:a:0 -c copy -movflags +faststart out.mp4` fixes both defects without touching the video bitstream: `-map` selects only the first video and first audio track (dropping AC-3), `-c copy` avoids a generation loss, `+faststart` moves `moov` ahead of `mdat`.

Alternative considered: full re-encode to H.264 Baseline for maximum device compatibility. Rejected — the clips are already High/Main `yuv420p`, which every Apple device since roughly 2011 decodes, and re-encoding costs quality for no reachable audience. Also rejected: dropping audio entirely with `-an`. It would work, since the players are hard-muted anyway, but keeping a single AAC track leaves the clips reusable elsewhere and makes the change smaller.

Only clips 1 and 2 are remuxed. Touching clean files would add churn to the diff and make it harder to attribute a behavior change.

### Poster as the universal fallback layer

Add a `poster` prop threaded to all three variants and set on every `<video>`. Safari paints the poster until the first frame decodes and keeps it if decoding never succeeds, so one attribute covers both the slow-load and hard-failure cases.

The `onError` path additionally sets a state flag so the spinner is suppressed permanently rather than re-triggered by a later `stalled` event on a dead element. Alternative considered: rendering a separate `<Image>` beneath the video layers. Rejected as redundant — `poster` is native, needs no extra DOM, and cannot get out of sync with the video element's own lifecycle.

The poster still is extracted from frame 0 of clip 1 (`ffmpeg -i ... -frames:v 1`) and saved as WebP for size.

### Reshape `aboutPreview` to a `sections` array

Replace `p1`/`p2` with:

```ts
aboutPreview: {
  eyebrow: string;
  title: string;
  sections: { heading?: string; paragraphs: string[] }[];
  // ...unchanged trust-signal and stat keys
}
```

`about-preview.tsx` maps over `sections`, rendering `heading` as an `<h3>` when present and its paragraphs as `<p>` elements. The array shape keeps the copy fully in the dictionary — no headings hardcoded in JSX — which is what lets `es` and `de` carry their own translated headings.

`heading` is optional because the supplied copy's first heading, "Your Trusted Partner for Investing in Dubai", reads as the section title rather than a peer of the other three. So `title` takes that line, the opening market paragraphs become a leading heading-less section, and "Excellence in Real Estate" and "Personalised Advisory. Exceptional Results." become headed sections beneath it. The `eyebrow` moves from "About Marta Duran" to a company-level label, since the block is no longer about Marta.

Alternative considered: keeping flat keys (`p1`…`p8` plus `h1`…`h4`). Rejected — it encodes document structure in key names, and every future copy revision means renumbering across three locales.

### Marta's portrait moves down to "Marta's Story"

Marta's portrait and its floating stats overlay ("10+ Years Experience", "+AED200M In Transactions") follow her biography down into the "Marta's Story" section. Leaving a photo of Marta beside copy that is entirely about the company would read as a mismatch, and the stats are personal figures, not company ones. Marta chose the relocation over keeping the portrait in place.

This inverts two existing requirements. `Marta's Story without portrait image` currently forbids an image in the story section — its stated rationale was that the portrait already appeared in the block above, which is no longer true, so the requirement flips. `Tighter About Marta two-column spacing` governs the portrait-to-copy gap in the company block, which no longer has a portrait, so it is removed rather than modified.

The story section takes the two-column grid the company block is giving up — `lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]`, portrait left and top-aligned, prose right — and the company block becomes single-column `max-w-3xl` prose, matching what the story section used to be. The two sections effectively swap layouts.

Alternative considered: giving the company block a different image, such as the existing `/dubai-skyline.jpg`. Rejected — nothing in the request asked for a new image, and `dubai-skyline.jpg` is already used further down the same page in the investors section. Repeating it would look like an oversight.

The portrait keeps its `max-w-sm` constraint and its compact stats overlay, so the `Smaller portrait than former homepage` and `Compact floating stats overlay` requirements carry over to the new location unchanged in substance.

### Translations authored, not machine-passed

The `es` and `de` copy is written to match the register of the surrounding dictionary entries, which are already idiomatic rather than literal. The existing `es`/`de` entries are the style reference. Marta reads Spanish natively and should review that locale before this ships.

## Risks / Trade-offs

- **The remux may not fix it** → Reproduce on a real iPhone and a real Mac *before* changing anything, so there is a known-bad baseline to compare against. If the remux does not clear it, the poster work still lands a visible improvement, and the next suspects (1920x960 frame height, per-clip payload over cellular) are documented in the proposal.
- **`+faststart` on a 3.2MB file is cheap, but the diff is a full binary replacement** → Two files change wholesale in git history. Acceptable; the repo already tracks ~24MB of hero video, and clip content is unchanged.
- **A poster adds one more asset to the critical path** → Keep it small (WebP, hero-sized, not full 1920px) so it lands before the video does. A poster that arrives after the first video frame is wasted bytes.
- **Reshaping `aboutPreview` is a typed breaking change** → The shared `Dictionary` type means `tsc` fails loudly on any locale left un-migrated. That is the desired behavior: it makes a partial migration impossible to ship silently.
- **The new copy is materially longer than the two paragraphs it replaces** → The `/about` page gets taller and the company block now outweighs the Marta section visually. Flagging for Marta rather than pre-emptively trimming her supplied text; trimming is her call.

## Migration Plan

1. Capture the before-state on real Apple hardware (screen recording or screenshot of the failing hero).
2. Remux clips 1 and 2; verify `moov` precedes `mdat` and only one audio stream remains.
3. Extract and add the poster still.
4. Thread `poster` through the three player variants; harden the error path.
5. Re-verify on the same Apple hardware. This is the gate — the video half is not done without it.
6. Reshape the dictionary and `about-preview.tsx`; `tsc --noEmit` and `npm run build` must pass.
7. Review `/about` in all three locales.

Rollback is `git revert` — no data migration, no schema change, no external dependency.

## Open Questions

- Should the hero poster be the first frame of clip 1, or a separately chosen "best" still? First frame is the default here because it makes the poster-to-video handoff invisible; a curated still would look better on slow connections but visibly jump when playback starts.
- Does Marta want the company copy's subsections visually separated (rules, spacing) or run together as continuous prose under headings? Defaulting to headings with generous spacing, matching the existing `space-y-4` rhythm on the page.
