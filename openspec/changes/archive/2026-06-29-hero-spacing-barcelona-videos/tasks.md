## 1. Homepage hero spacing

- [x] 1.1 In `components/hero.tsx`, reduce bottom margin on the logo (`mb-6 md:mb-8` → tighter values per design)
- [x] 1.2 Align logo display to top-left (`object-left object-top` or equivalent) so transparent padding in the logo asset does not inflate gap to the tagline
- [x] 1.3 Verify on mobile and desktop that logo, "We guide your journey", headline, and CTA remain visible and left-aligned

## 2. Barcelona video constants

- [x] 2.1 Add `lib/barcelona-videos.ts` with ordered `BARCELONA_HORIZONTAL_CLIPS` and `BARCELONA_VERTICAL_CLIPS` arrays matching exact filenames under `public/videos/barcelona/`

## 3. Seamless dual-clip player

- [x] 3.1 Create `components/seamless-video-pair.tsx` (or extract from `hero-video-background.tsx`) implementing two-layer cut-switch playback for exactly two clips
- [x] 3.2 First clip: `preload="auto"`, autoplay muted on ready; show spinner only until first frame plays
- [x] 3.3 On first clip `onPlaying`, trigger preload/`load()` on the hidden second clip
- [x] 3.4 On first clip `ended`, switch to second clip seamlessly using existing hero handoff pattern (`requestVideoFrameCallback` + z-index swap)
- [x] 3.5 Loop the pair (clip 2 → clip 1) using the same dual-layer recycle logic

## 4. About Spain video section

- [x] 4.1 Create `components/about-spain-videos.tsx` with section heading (Spain/Barcelona framing, consistent with About Dubai videos section styling)
- [x] 4.2 Render horizontal pair in `hidden md:block` container with `aspect-video`
- [x] 4.3 Render vertical pair in `md:hidden` container with portrait aspect ratio (`aspect-[9/16]` or similar)
- [x] 4.4 Import and mount `AboutSpainVideos` in `app/about-spain/page.tsx` after the market insights section

## 5. Verification

- [x] 5.1 Confirm horizontal pair plays `barcelona-horizontal-1` then `barcelona-horizontal-2` with no gap on desktop
- [x] 5.2 Confirm vertical pair plays `Barcelona-Vertical-1` then `Barcelona-Vertical-2` with no gap on mobile
- [x] 5.3 Confirm only one orientation pair loads per viewport (no duplicate bandwidth on narrow screens)
