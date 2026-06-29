## Context

The homepage hero (`components/hero.tsx`) wraps content in a panel with `bg-black/80`, padding, and `rounded-lg`. The video background already provides visual interest; the dark box was added for text contrast but reads as a heavy block. The site header (`components/site-header.tsx`) always renders `/logo.webp`, which is optimized for dark backgrounds. On the light header (`bg-background/95`), that logo lacks contrast. A dark-variant asset (`/logo-black.webp`) already exists in `public/`.

Theme is managed client-side in `SiteHeader` via a `theme` state (`"light" | "dark"`) synced to `document.documentElement.classList` and `localStorage`.

## Goals / Non-Goals

**Goals:**

- Remove the hero dark overlay panel while keeping hero content left-aligned and readable (white text over video).
- Show `/logo-black.webp` in the navbar when theme is light; show `/logo.webp` when theme is dark.
- Update homepage-hero and site-branding specs to reflect the new behavior.

**Non-Goals:**

- Changing hero or footer logo assets (both stay `/logo.webp`).
- Adding text shadows, gradients, or other contrast aids to the hero unless readability proves insufficient after removing the panel.
- Refactoring theme management into a shared hook or context (use existing header `theme` state).

## Decisions

### 1. Strip panel classes, keep layout wrapper

Remove `bg-black/80`, `rounded-lg`, and panel padding from the hero content wrapper. Retain `max-w-2xl` and left alignment within `container-wide`. Keep `text-white` on inner content so copy remains legible over the video.

**Alternative considered:** Replace solid panel with a subtle gradient scrim. Rejected—the user asked to remove the black square, not replace it with another overlay.

### 2. Theme-based `src` on a single navbar `Image`

Use the existing `theme` state in `SiteHeader`:

```tsx
src={theme === "dark" ? "/logo.webp" : "/logo-black.webp"}
```

No CSS `dark:` visibility swap of two stacked images—one `Image` with dynamic `src` is simpler and matches how theme is already tracked.

**Alternative considered:** CSS-only with two `<Image>` elements toggled via `hidden dark:block`. Rejected—theme is JS-driven via class toggle, not purely CSS `prefers-color-scheme`.

### 3. Scope logo change to header only

Hero logo and footer logo remain `/logo.webp` (white wordmark suits video and footer contexts). Only the navbar logo switches by theme.

## Risks / Trade-offs

- **[Reduced hero text contrast without panel]** → White text on bright video frames may be harder to read in some clips. Mitigation: monitor after deploy; add a light text-shadow only if needed (out of scope unless requested).
- **[Logo flash on theme toggle]** → Swapping `src` may cause a brief reload flicker. Mitigation: acceptable for manual theme toggle; both assets are small webp files already in `public/`.
- **[Spec conflict with unified-logo requirement]** → Current `site-branding` spec mandates one logo everywhere. Delta spec narrows the exception to header-only theme switching while hero/footer stay unified.
