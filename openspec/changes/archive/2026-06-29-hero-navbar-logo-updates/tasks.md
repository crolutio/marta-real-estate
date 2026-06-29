## 1. Homepage hero — remove dark overlay panel

- [x] 1.1 In `components/hero.tsx`, remove `bg-black/80`, `rounded-lg`, and panel padding classes (`p-5 sm:p-6 md:p-8`) from the hero content wrapper
- [x] 1.2 Keep `max-w-2xl`, left alignment within `container-wide`, and white text styling on hero copy and logo
- [x] 1.3 Verify hero still shows logo, subheadline, headline, and View Properties CTA with no dark box behind them

## 2. Navbar logo — theme-aware asset

- [x] 2.1 In `components/site-header.tsx`, set navbar `Image` `src` to `/logo-black.webp` when `theme === "light"` and `/logo.webp` when `theme === "dark"`
- [x] 2.2 Confirm hero logo (`components/hero.tsx`) and footer logo (`components/site-footer.tsx`) still use `/logo.webp` unchanged
- [x] 2.3 Manually verify logo contrast in light and dark themes after toggling, including on homepage after scrolling past hero

## 3. Verification

- [x] 3.1 Load `/` and confirm hero text sits over video with no black square; check mobile and desktop viewports
- [x] 3.2 Toggle theme on a non-home page and confirm navbar logo switches between black and white variants
- [x] 3.3 Run lint/build if available to ensure no regressions
