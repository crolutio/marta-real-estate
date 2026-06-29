## 1. Hero video player: spinner + stutter

- [x] 1.1 In `components/hero-video-background.tsx`, add a buffering-driven `showSpinner` state for the active clip (show on initial pre-`canplay`, `onWaiting`, `onStalled`)
- [x] 1.2 Hide the spinner on `onPlaying`, `onCanPlay`/`onCanPlayThrough`, and `onTimeUpdate` progress
- [x] 1.3 Replace the `!firstPlaying` spinner gate with `showSpinner` in all three variants (`SingleClipHero`, `CutSwitchHero`, `CrossfadeHero`)
- [x] 1.4 Ensure a preloading hidden/back layer does not trigger the spinner and that routine cuts do not show it
- [x] 1.5 In `CutSwitchHero.advance`, require the incoming video `readyState >= 3` (HAVE_FUTURE_DATA) before committing the cut; if not ready, wait for its `canplay`/frame then commit (fixes About Dubai stutter)

## 2. Mobile centering — homepage hero

- [x] 2.1 In `components/hero.tsx`, add `mx-auto md:mx-0 text-center md:text-left` to the content block
- [x] 2.2 Center the logo on mobile (`mx-auto md:mx-0`, `object-center md:object-left`)
- [x] 2.3 Center the CTA on mobile (wrap in `flex justify-center md:justify-start`)

## 3. Mobile centering + remove panel — About Dubai hero

- [x] 3.1 In `components/about-dubai-hero.tsx`, remove `bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg` from the content wrapper
- [x] 3.2 Add `mx-auto md:mx-0 text-center md:text-left` to center on mobile, left on desktop
- [x] 3.3 Add `ABOUT_DUBAI_HERO_VERTICAL_CLIP = "/videos/about-dubai/about-dubai-vertical.mp4"` to `lib/hero-videos.ts`
- [x] 3.4 Make `AboutDubaiHero` orientation-aware (mirror `AboutSpainHero`: `matchMedia("(min-width: 768px)")` + `key={orientation}`), passing the vertical clip on mobile and the horizontal clips on desktop

## 4. Mobile centering + remove panel — About Spain hero

- [x] 4.1 In `components/about-spain-hero.tsx`, remove `bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg` from the content wrapper
- [x] 4.2 Add `mx-auto md:mx-0 text-center md:text-left` to center on mobile, left on desktop

## 5. Verification

- [x] 5.1 Mobile: all three heroes show centered text/elements; desktop unchanged (left-aligned)
- [x] 5.2 No black panel behind About Dubai or About Spain hero content
- [x] 5.3 About Dubai hero plays through and loops with no stutter at the transition (desktop); mobile shows the looping vertical clip and not the horizontal clips
- [x] 5.4 Loading spinner appears only during genuine buffering (not during playback, cuts, or on orientation remount of About Spain)
- [x] 5.5 Typecheck/build passes
