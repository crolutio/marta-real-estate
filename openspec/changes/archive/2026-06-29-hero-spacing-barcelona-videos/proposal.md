## Why

The homepage hero feels visually loose: excessive vertical gap between the agency logo and the "We guide your journey" tagline breaks the typographic stack. Separately, the About Spain page lacks Barcelona footage the team has added under `public/videos/barcelona`; visitors should see those clips with fast first paint and seamless handoff between the first and second clip in each orientation pair.

## What Changes

- **Homepage hero spacing**: Tighten vertical spacing between the hero logo and the "We guide your journey" subheadline so the content reads as one cohesive block (without changing copy or removing the logo).
- **About Spain Barcelona videos**: Add a video section on `/about-spain` using assets in `public/videos/barcelona/`:
  - **Horizontal pair**: `barcelona-horizontal-1.mp4` → `barcelona-horizontal-2.mp4`
  - **Vertical pair**: `Barcelona-Vertical-1.mp4` → `Barcelona-Vertical-2.mp4`
  - Numeric suffix in filenames defines playback order (1 first, 2 second).
  - First clip in the active pair loads with `preload="auto"`, displays as soon as it can play, and begins playback immediately.
  - While the first clip plays, the second clip preloads in the background so the transition when clip 1 ends is seamless (no flash, spinner, or reload gap).
  - Show the horizontal pair on wide viewports and the vertical pair on narrow viewports (orientation-appropriate aspect ratios).

## Capabilities

### New Capabilities

_(none — behavior extends existing page specs)_

### Modified Capabilities

- `homepage-hero`: Add requirement for tight vertical spacing between logo and "We guide your journey" tagline.
- `about-spain-page`: Add requirement for Barcelona video showcase with ordered pairs, progressive preload, and seamless clip transitions.

## Impact

- `components/hero.tsx` — logo/tagline spacing (margin, optional logo display tuning)
- New component e.g. `components/about-spain-videos.tsx` (or shared dual-clip player) — Barcelona horizontal/vertical pairs with preload handoff
- `app/about-spain/page.tsx` — mount the video section
- `lib/` — optional constants for Barcelona clip paths (ordered pairs)
- `public/videos/barcelona/` — four MP4 assets (already added)
- Reuse patterns from `components/hero-video-background.tsx` (dual-layer cut/crossfade) where applicable
