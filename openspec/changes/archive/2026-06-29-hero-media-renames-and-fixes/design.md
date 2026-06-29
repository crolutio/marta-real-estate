## Context

Current hero video wiring is inverted relative to folder names:

| Surface | Component | Constant | Current source |
|---------|-----------|----------|----------------|
| Homepage hero | `Hero` | `HOME_PAGE_HERO_CLIP_PATHS` | `public/videos/marsa/Marsa1..6.mp4` |
| About Dubai hero | `AboutDubaiHero` | `MARSA_HERO_CLIP_PATHS` | `public/videos/hero/Hero001..004.mp4` |
| About Dubai mid-page gallery | `AboutDubaiVideos` | inline array | `public/videos/marsa/Marsa1..6.mp4` |

Both heroes render through `HeroVideoBackground`:
- Homepage uses the default `crossfade={true}` → `CrossfadeHero` (two-layer opacity blend).
- About Dubai (and About Spain) use `crossfade={false}` → `CutSwitchHero` (two-layer hard cut).

Disk filenames are capitalized (`Marsa1.mp4`, `Hero001.mp4`) but constants reference mixed/lowercase paths; this works on Windows but is fragile on case-sensitive (Linux) hosts.

## Goals / Non-Goals

**Goals:**

- Homepage hero logo ~50% larger.
- Rename video folders/files to match their actual usage, with lowercase, ordered names.
- About Dubai hero loops continuously through its clips.
- Homepage hero transitions between clips with no visible flash.

**Non-Goals:**

- Re-encoding or compressing the video assets.
- Changing hero copy, layout, or the About Dubai mid-page gallery design (only its source paths update).
- Changing the About Spain (Barcelona) hero behavior beyond shared-player fixes it inherits.

## Decisions

### 1. Logo size +50%

`h-32 md:h-40` → `h-48 md:h-60` (8rem→12rem, 10rem→15rem). Keep `w-auto object-contain object-left object-top` and the tight bottom margin from the prior change.

### 2. Asset rename + ordering

Renames must happen in this order to avoid a name collision on `hero/`:

1. `public/videos/hero/` → `public/videos/about-dubai/`
   - `Hero001.mp4 → about-dubai-horizontal-1.mp4` … `Hero004.mp4 → about-dubai-horizontal-4.mp4`
2. `public/videos/marsa/` → `public/videos/hero/`
   - `Marsa1.mp4 → hero-horizontal-1.mp4` … `Marsa6.mp4 → hero-horizontal-6.mp4`

Use `git mv` so history is preserved and casing changes are tracked reliably on Windows.

### 3. Constant/module rename

Rename `lib/marsa-hero-videos.ts` → `lib/hero-videos.ts`:

```ts
/** Homepage hero reel (`public/videos/hero`). */
export const HOME_PAGE_HERO_CLIP_PATHS = [
  "/videos/hero/hero-horizontal-1.mp4",
  // … through hero-horizontal-6.mp4
];

/** About Dubai hero clips (`public/videos/about-dubai`). */
export const ABOUT_DUBAI_HERO_CLIP_PATHS = [
  "/videos/about-dubai/about-dubai-horizontal-1.mp4",
  // … through about-dubai-horizontal-4.mp4
];
```

Update imports in `hero.tsx` and `about-dubai-hero.tsx` (`MARSA_HERO_CLIP_PATHS` → `ABOUT_DUBAI_HERO_CLIP_PATHS`). Update the inline array in `about-dubai-videos.tsx` to the new `/videos/hero/hero-horizontal-N.mp4` paths (it currently reuses the homepage clips; that pre-existing behavior is preserved).

### 4. Homepage hero flash fix

Root cause: `CrossfadeHero` blends two layers via opacity over `CROSSFADE_MS`, with `finishCrossfade` driven by a `setTimeout` that is decoupled from the actual CSS transition and from the slot/`src` recycle. At the recycle boundary the back layer's `src` changes (reload to next clip) while opacity/z are reset, which can surface a brief flash.

**Decision:** Switch the homepage hero to the hard-cut handoff (`crossfade={false}`) which is already flash-free on About Dubai/Spain, and harden that shared path (Decision 5). The transition becomes a clean frame-accurate cut instead of a blend.

**Alternative considered:** Keep the crossfade and fix the timing (drive `finishCrossfade` off `transitionend`, defer the `src` recycle a frame). Rejected for now as more fragile than a cut; can be revisited if a dissolve is desired.

### 5. About Dubai loop fix + shared hard-cut hardening

`CutSwitchHero` advances on each clip's `onEnded` and gates the swap behind `requestVideoFrameCallback`, setting `transitioning.current = true` up front. If `play()` never resolves or the frame callback never fires (decoder stall on reset, especially at the loop-back boundary), `transitioning` stays `true` permanently and playback freezes on the last frame — matching the reported "doesn't loop" symptom.

**Decision:** Make the hard-cut handoff self-healing:

- Add a timeout fallback so `switchNow` runs (and `transitioning` resets) even if `requestVideoFrameCallback`/`play().then` never fire.
- Always reset `transitioning.current = false` after a swap completes or fails.
- Ensure the incoming hidden layer has the next clip preloaded so `play()` resolves promptly.
- Guarantee the cycle wraps (`(index + 1) % n`) for any `n`, including the last→first transition.

This fixes About Dubai looping and makes the now-shared homepage cut robust.

## Risks / Trade-offs

- **[Risk] Broken paths if a rename or reference is missed** → Mitigation: grep for `marsa`, `Hero00`, `videos/hero`, `videos/marsa` after edits; verify all three surfaces load.
- **[Risk] Case-sensitivity regressions on deploy** → Mitigation: normalize all new names to lowercase and reference them exactly.
- **[Trade-off] Homepage loses the crossfade dissolve** → Accepted: user reported the blend as a "weird flash"; a clean cut is more reliable. Crossfade can be reintroduced later if desired.
- **[Risk] `git mv` casing on Windows** → Mitigation: rename via a temporary name if Git ignores case-only differences (none here since names change fully).

## Open Questions

- Should the About Dubai mid-page gallery (`AboutDubaiVideos`) eventually use its own dedicated clips rather than reusing the homepage hero reel? Out of scope here; paths are just updated to keep it working.
