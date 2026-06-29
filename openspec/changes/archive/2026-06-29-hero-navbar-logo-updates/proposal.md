## Why

The homepage hero content sits on a semi-opaque black panel (`bg-black/80`) that reads as a heavy square behind the text and logo, competing with the video background. Removing it lets the hero feel lighter and more cinematic. Separately, the navbar logo always uses `/logo.webp`, which lacks contrast on the light header background; a theme-aware logo (`logo-black.webp` in light mode, `logo.webp` in dark mode) improves legibility without changing hero or footer branding.

## What Changes

- **Homepage hero panel**: Remove the dark background overlay, padding box, and rounded corners from the hero content wrapper so logo, headlines, and CTA sit directly over the video (existing white text styling retained).
- **Navbar logo (theme-aware)**: In `SiteHeader`, render `/logo-black.webp` when the theme is light and `/logo.webp` when the theme is dark. Apply only to the visible navbar logo—not the hero logo or footer.
- **No other logo changes**: Homepage hero and site footer continue using `/logo.webp`.

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `homepage-hero`: Hero content panel no longer uses a dark overlay box; text remains left-aligned over the video.
- `site-branding`: Header logo asset selection becomes theme-dependent (light → `/logo-black.webp`, dark → `/logo.webp`); hero and footer remain on `/logo.webp`.

## Impact

- `components/hero.tsx` — remove `bg-black/80`, rounded panel, and related wrapper classes from the content container
- `components/site-header.tsx` — swap navbar `Image` `src` based on current theme state
- `public/logo-black.webp` — already present; no new assets required
- `openspec/specs/homepage-hero/spec.md` and `openspec/specs/site-branding/spec.md` — requirement updates via delta specs
