## 1. Homepage hero logo size

- [x] 1.1 In `components/hero.tsx`, change the logo classes `h-32 md:h-40` to `h-48 md:h-60` (≈50% larger), keeping `w-auto object-contain object-left object-top` and the existing bottom margin

## 2. Rename video assets (order matters)

- [x] 2.1 `git mv` `public/videos/hero/` → `public/videos/about-dubai/`
- [x] 2.2 Rename `about-dubai/Hero001.mp4 … Hero004.mp4` → `about-dubai-horizontal-1.mp4 … about-dubai-horizontal-4.mp4` (lowercase)
- [x] 2.3 `git mv` `public/videos/marsa/` → `public/videos/hero/`
- [x] 2.4 Rename `hero/Marsa1.mp4 … Marsa6.mp4` → `hero-horizontal-1.mp4 … hero-horizontal-6.mp4` (lowercase)

## 3. Update code references

- [x] 3.1 Rename `lib/marsa-hero-videos.ts` → `lib/hero-videos.ts`
- [x] 3.2 Update `HOME_PAGE_HERO_CLIP_PATHS` to `/videos/hero/hero-horizontal-1.mp4` … `-6.mp4`
- [x] 3.3 Rename `MARSA_HERO_CLIP_PATHS` → `ABOUT_DUBAI_HERO_CLIP_PATHS` with paths `/videos/about-dubai/about-dubai-horizontal-1.mp4` … `-4.mp4`
- [x] 3.4 Update import in `components/hero.tsx` to `@/lib/hero-videos`
- [x] 3.5 Update import and constant in `components/about-dubai-hero.tsx` to `ABOUT_DUBAI_HERO_CLIP_PATHS` from `@/lib/hero-videos`
- [x] 3.6 Update the inline array in `components/about-dubai-videos.tsx` to `/videos/hero/hero-horizontal-1.mp4` … `-6.mp4`
- [x] 3.7 Grep for `marsa`, `Hero00`, `videos/hero`, `videos/marsa`, `MARSA_HERO_CLIP_PATHS`, `marsa-hero-videos` and confirm no stale references remain (excluding archived changes)

## 4. Fix About Dubai hero looping (hard-cut player)

- [x] 4.1 In `components/hero-video-background.tsx` `CutSwitchHero`, add a timeout fallback so the layer swap (`switchNow`) always runs even if `requestVideoFrameCallback`/`play().then` never fire
- [x] 4.2 Ensure `transitioning.current` is always reset after a swap completes or fails (no permanent stuck state)
- [x] 4.3 Verify the cycle wraps for any clip count including last→first (`(index + 1) % n`)

## 5. Fix homepage hero flash

- [x] 5.1 Set the homepage hero to use the hard-cut handoff (`crossfade={false}`) in `components/hero.tsx` so transitions are clean cuts (no opacity-blend flash)
- [x] 5.2 Confirm the hardened `CutSwitchHero` (section 4) drives the homepage hero with flash-free, looping playback

## 6. Verification

- [x] 6.1 Homepage hero: logo is noticeably larger; clips advance with no flash and loop continuously
- [x] 6.2 About Dubai hero: clips play through and loop back to the first without freezing
- [x] 6.3 About Dubai mid-page gallery still plays its videos from the new `/videos/hero/` paths
- [x] 6.4 Typecheck/build passes with no broken imports or missing asset paths
