## Context

`SiteHeader` is a client component fixed at the top of every page. It always renders `/logo.webp` in a home link on the left of the nav bar. The homepage hero (`components/hero.tsx`) also renders a larger `/logo.webp` inside the hero panel. Both logos are visible simultaneously at page load, which feels redundant.

The header is shared via `app/layout.tsx`; route detection uses `usePathname()`.

## Goals / Non-Goals

**Goals:**

- On `/` only, hide the navbar logo while the hero logo is visible in the viewport.
- Show the navbar logo once the hero logo scrolls out of view (above or below viewport).
- Reverse behavior when scrolling back to top: hide navbar logo again when hero logo re-enters view.
- Use a smooth visual transition (opacity and/or width) without breaking nav layout on desktop and mobile.
- Keep header logo always visible on all non-home routes.

**Non-Goals:**

- Changing hero logo size, placement, or content.
- Hiding the entire header or changing nav link behavior.
- Sticky header style changes (background, border) tied to scroll—logo visibility only.
- Footer logo behavior.

## Decisions

### 1. IntersectionObserver on hero logo (not raw scroll offset)

**Decision:** Add a stable id (e.g. `id="hero-logo"`) to the hero `Image` and observe it from `SiteHeader` when `pathname === "/"`.

**Rationale:** Tracks actual hero logo visibility regardless of viewport height, font scaling, or future hero layout changes. More accurate than a fixed pixel threshold.

**Alternatives considered:**
- `window.scrollY > N` — fragile across breakpoints and hero edits.
- Separate React context from Hero → Header — extra plumbing for the same signal.

### 2. Header state: `showNavLogo`

**Decision:** In `SiteHeader`, derive `showNavLogo` as:
- `pathname !== "/"` → always `true`
- `pathname === "/"` → `true` when hero logo is **not** intersecting the viewport (with small root margin if needed)

Use `IntersectionObserver` with `threshold: 0` and optional `rootMargin: "-80px 0px 0px 0px"` to account for fixed header height so the nav logo appears slightly before the hero logo is fully obscured by the header.

### 3. Hide without layout jump

**Decision:** Wrap the header logo link in a container that collapses when hidden using `opacity-0`, `pointer-events-none`, `invisible` or `w-0 overflow-hidden` with `transition`. Prefer width + opacity transition on a flex child so nav links don't jump abruptly.

**Alternative:** Keep invisible placeholder width — rejected; wastes space when hero logo is showing.

### 4. Observer lifecycle

**Decision:** Set up observer in `useEffect` when on homepage; disconnect on unmount or route change. If `#hero-logo` is not found (SSR/hydration timing), retry once on next frame or fall back to showing nav logo.

### 5. Accessibility

**Decision:** When hidden, apply `aria-hidden="true"` on the nav logo link and `tabIndex={-1}` so keyboard users aren't focused on an invisible control. When visible, restore default link behavior and `aria-label`.

## Risks / Trade-offs

- **[Risk] Hero logo element missing on non-home routes** → Observer only runs when `pathname === "/"`; no impact elsewhere.
- **[Risk] Hydration flash (nav logo briefly visible)** → Initial state on homepage: assume hidden (`showNavLogo = false`) until observer first callback; avoids flash at top.
- **[Risk] Mobile nav layout shift when logo appears** → Use transition on logo wrapper; menu button stays on the right via `justify-between`.
- **[Risk] Conflicts with site-branding spec ("header always renders logo")** → Delta spec clarifies homepage exception while hero logo is visible.

## Migration Plan

1. Add `id="hero-logo"` to hero logo in `components/hero.tsx`.
2. Add observer + conditional visibility in `components/site-header.tsx`.
3. Manual QA: `/` at top, scroll down, scroll up; verify other pages unchanged.
4. Run `npm run build`.

## Open Questions

- None blocking. Optional `rootMargin` tuning can be done during visual QA.
