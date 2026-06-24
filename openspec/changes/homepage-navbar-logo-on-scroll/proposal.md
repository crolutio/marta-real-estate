## Why

The homepage hero already displays a prominent logo in the hero panel. Showing the same logo again in the fixed navbar at the top of the page is redundant. Once the visitor scrolls past the hero and the hero logo is no longer visible, the navbar should provide logo branding and a home link—matching common luxury-site patterns.

## What Changes

- **Homepage navbar logo (scroll-gated)**: On `/` only, hide the header logo while the hero logo is visible in the viewport. When the user scrolls far enough that the hero logo is no longer visible, show the header logo (with a smooth transition).
- **All other pages unchanged**: Header logo remains always visible on non-home routes.
- **Mobile sheet menu**: Apply the same homepage scroll rule to the visible header logo area (mobile menu trigger layout stays usable; logo link hidden at top of homepage until scroll threshold).

## Capabilities

### New Capabilities

- `homepage-header`: Scroll-aware header logo visibility on the homepage only.

### Modified Capabilities

- `site-branding`: Header logo requirement updated to allow homepage-only conditional visibility while hero logo is in view.

## Impact

- `components/site-header.tsx` — scroll/visibility state, homepage-only logo toggle
- `components/hero.tsx` — marker element (e.g. `id` or `data-*`) on hero logo for intersection detection
- Possible small hook: `useHeroLogoVisible` or inline `IntersectionObserver` in header
- No changes to footer, other pages, or logo asset
