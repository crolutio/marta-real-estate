## 1. Hero marker

- [x] 1.1 Add stable `id="hero-logo"` (or equivalent) to the logo `Image` in `components/hero.tsx`

## 2. Header scroll logic

- [x] 2.1 In `components/site-header.tsx`, detect homepage via `usePathname() === "/"`
- [x] 2.2 Add `IntersectionObserver` on `#hero-logo` when on homepage; set `showNavLogo` when hero logo is not intersecting
- [x] 2.3 Default `showNavLogo` to `false` on homepage to avoid flash at load; always `true` on other routes
- [x] 2.4 Clean up observer on route change and unmount

## 3. Header logo visibility UI

- [x] 3.1 Conditionally hide navbar logo on homepage when `showNavLogo` is false (opacity/width transition)
- [x] 3.2 Disable pointer events and keyboard focus when hidden (`aria-hidden`, `tabIndex={-1}`)
- [x] 3.3 Verify desktop nav layout remains stable when logo appears/disappears

## 4. Verification

- [x] 4.1 Manual QA on `/`: logo hidden at top, appears after scroll past hero, hides when scrolling back
- [x] 4.2 Confirm header logo always visible on `/about`, `/properties`, etc.
- [x] 4.3 Run `npm run build` and fix any errors
