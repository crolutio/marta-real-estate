## Why

Hero video assets are misnamed and misorganized: the homepage hero plays clips from `public/videos/marsa/` while the About Dubai hero plays clips from `public/videos/hero/` — the opposite of what the folder names imply. The homepage hero logo is also smaller than desired, the About Dubai hero stops instead of looping, and the homepage hero shows a visible flash when crossfading between clips.

## What Changes

- **Bigger homepage hero logo**: Increase the homepage hero logo size by ~50% (`h-32 md:h-40` → `h-48 md:h-60`).
- **Rename About Dubai hero assets**: `public/videos/hero/` → `public/videos/about-dubai/`, and rename `Hero001.mp4 … Hero004.mp4` → `about-dubai-horizontal-1.mp4 … about-dubai-horizontal-4.mp4`.
- **Rename homepage hero assets**: `public/videos/marsa/` → `public/videos/hero/`, and rename `Marsa1.mp4 … Marsa6.mp4` → `hero-horizontal-1.mp4 … hero-horizontal-6.mp4`. (Rename ordering matters — see design — because `hero/` must be vacated before `marsa/` takes that name.)
- **Update code references**: Rename `lib/marsa-hero-videos.ts` → `lib/hero-videos.ts` with clearer constant names (`HOME_PAGE_HERO_CLIP_PATHS` keeps its name but new paths; `MARSA_HERO_CLIP_PATHS` → `ABOUT_DUBAI_HERO_CLIP_PATHS`). Update `components/hero.tsx`, `components/about-dubai-hero.tsx`, and the hardcoded paths in `components/about-dubai-videos.tsx`.
- **Fix About Dubai hero looping**: The About Dubai hero (hard-cut player) SHALL loop continuously through its clips instead of stopping after the last clip.
- **Fix homepage hero flash**: The homepage hero (crossfade player) SHALL transition between clips without a visible flash.

## Capabilities

### New Capabilities

- `about-dubai-page`: About Dubai page hero video behavior — continuous looping playback of the About Dubai hero clips.

### Modified Capabilities

- `homepage-hero`: Larger hero logo; homepage hero video transitions between clips are flash-free.

## Impact

- `public/videos/hero/` → `public/videos/about-dubai/` (4 clips renamed)
- `public/videos/marsa/` → `public/videos/hero/` (6 clips renamed)
- `lib/marsa-hero-videos.ts` → `lib/hero-videos.ts` (constant rename + new paths)
- `components/hero.tsx` — logo size classes + updated import
- `components/about-dubai-hero.tsx` — updated import/constant
- `components/about-dubai-videos.tsx` — hardcoded clip paths updated to the new `hero/` location
- `components/hero-video-background.tsx` — fix crossfade flash (homepage) and ensure hard-cut player loops (About Dubai)
- Filename casing normalized to lowercase to avoid case-sensitivity issues on Linux deploys
