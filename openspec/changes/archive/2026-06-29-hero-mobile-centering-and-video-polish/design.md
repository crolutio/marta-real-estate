## Context

All three video heroes render through `HeroVideoBackground` (`components/hero-video-background.tsx`), which has three internal variants: `SingleClipHero`, `CutSwitchHero` (hard cut, used by About Dubai/Spain), and `CrossfadeHero`. Current state:

- The loading spinner in every variant is gated only by `firstPlaying` (set `true` on the first `onPlaying`/`onError`). It is shown whenever `!firstPlaying`. Because About Spain remounts the player on viewport orientation change (`key={orientation}`), `firstPlaying` resets and the spinner re-shows even when a clip could play promptly — and the gate has no relationship to actual buffering during playback.
- `CutSwitchHero` advances on `onEnded`, calling `vIn.play()` then committing the layer swap on the first presented frame (with timeout fallbacks). If the incoming clip is not sufficiently buffered, the cut reveals a stalling video → visible stutter (and, with an event-driven spinner, a legitimate brief spinner).
- About Dubai (`about-dubai-hero.tsx`) and About Spain (`about-spain-hero.tsx`) wrap content in `max-w-2xl bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg`. The homepage hero (`hero.tsx`) already has no panel (`max-w-2xl`).
- Content is left-aligned in all three (text defaults + `object-left` logo on homepage).

## Goals / Non-Goals

**Goals:**

- Center hero content on mobile, keep left alignment on desktop, for all three heroes.
- Remove the black panel from About Dubai and About Spain heroes.
- Show the hero loading spinner only when a video is genuinely buffering, anywhere.
- Remove the About Dubai transition stutter.

**Non-Goals:**

- Changing hero copy, video assets, routes, or the desktop layout.
- Reintroducing a crossfade dissolve (homepage stays hard-cut).
- Redesigning the heroes beyond alignment/background/spinner.

## Decisions

### 1. Mobile centering pattern

Apply responsive utilities to each hero's content wrapper:

- Content block: `mx-auto md:mx-0 text-center md:text-left`.
- Homepage logo (`<Image>`): `mx-auto md:mx-0` and `object-center md:object-left` so the wide logo centers on mobile and hugs the left on desktop.
- CTA button (homepage): ensure it centers on mobile — wrap in a `flex justify-center md:justify-start` container (a `text-center` parent does not reliably center an inline-flex button).

Keep `contentAlign` shell behavior as-is; centering is handled at the content-block level so desktop is unaffected.

### 2. Remove black hero panels

In `about-dubai-hero.tsx` and `about-spain-hero.tsx`, drop `bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg`, leaving `max-w-2xl` (plus the new centering classes). Existing white text remains legible over video; if needed, a subtle text shadow can be added, but no opaque box.

### 3. Buffering-driven loading spinner

Replace the `!firstPlaying` spinner gate with a `showSpinner` state driven by media events on the **front/active** video:

- Show when the active clip cannot yet play: initial mount before first `canplay`, or `onWaiting`/`onStalled` during playback.
- Hide on `onPlaying`, `onCanPlay`/`onCanPlayThrough`, or when playback time advances (`onTimeUpdate`).
- Do not show the spinner merely because a hidden/back layer is loading, and do not show it during a normal clip-to-clip cut.

This applies to all three variants. `firstPlaying` (used elsewhere for the initial reveal) can remain, but the spinner no longer keys off it directly.

**Alternative considered:** Keep `firstPlaying` and just also hide on transitions — rejected; it does not capture mid-playback buffering and still mis-fires on remount.

### 4. Stutter-free hard cut

In `CutSwitchHero.advance`, before committing the swap, require the incoming video to have `readyState >= HAVE_FUTURE_DATA` (3). If not yet ready when the front clip ends:

- Keep the (ended) front frame briefly and wait for the incoming `canplay`/frame, then commit — rather than cutting to a stalling clip.
- Combined with `preload="auto"` on the back layer, the incoming is normally ready well before the front ends, so the cut is clean.

This removes the stutter and ensures any spinner that does show corresponds to real buffering.

### 5. About Dubai orientation-aware video source

Mirror the About Spain hero pattern (`matchMedia("(min-width: 768px)")` + `key={orientation}` remount). On desktop, `AboutDubaiHero` passes the four horizontal clips (`ABOUT_DUBAI_HERO_CLIP_PATHS`) to `HeroVideoBackground`. On mobile, it passes a single-element array with the vertical clip, which routes through `SingleClipHero` and loops.

Add to `lib/hero-videos.ts`:

```ts
export const ABOUT_DUBAI_HERO_VERTICAL_CLIP = "/videos/about-dubai/about-dubai-vertical.mp4";
```

Because the mobile case is a single looping clip, it inherits the buffering-driven spinner (Decision 3) and has no hard-cut handoff (so the stutter fix in Decision 4 is moot on mobile). Only one orientation's asset is mounted at a time, avoiding wasted bandwidth.

## Risks / Trade-offs

- **[Risk] Text legibility without the black panel on bright video frames** → Mitigation: retain strong white weight; optionally add a light text-shadow utility if a frame proves too bright (not a full box).
- **[Risk] Spinner event wiring differs across browsers** → Mitigation: cover both `waiting`/`stalled` (show) and `playing`/`canplay`/`timeupdate` (hide); default to hidden once playback has progressed.
- **[Risk] Holding on the ended frame while waiting for incoming buffer could feel like a pause** → Mitigation: rare given `preload="auto"`; acceptable and still better than a stutter; spinner appears only if the wait is real.
- **[Trade-off] Centardized mobile layout changes established left-aligned look** → Intended per request; desktop unchanged.

## Open Questions

- Should the homepage hero also drop `object-left` entirely in favor of a centered logo on all breakpoints? Default: center on mobile only, left on desktop (consistent with the other heroes).
