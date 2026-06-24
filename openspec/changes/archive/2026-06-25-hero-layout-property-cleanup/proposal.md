## Why

The homepage hero is centered while other destination pages (About Dubai, About Spain) use a left-aligned panel that reads more editorial and lets the video background breathe. The About Us "About Marta Duran" block has excessive spacing between the portrait and copy, and the floating stats overlay feels oversized. Six property listings are no longer active and should be removed from the catalog.

## What Changes

- **Homepage hero layout**: Align the hero content panel to the left (matching About Dubai's hero pattern) instead of centered. Keep existing content: logo, headlines, and View Properties CTA.
- **About Marta Duran section spacing**: Reduce the gap between the portrait (left column) and the text column so the layout feels tighter and more balanced.
- **Floating stats card compaction**: Make the "10+ Years Experience" and "$2B+ In Transactions" overlay on Marta's portrait smaller and more compact (reduced padding, typography, and footprint).
- **Property catalog cleanup**: Remove these listings from `lib/data/properties.ts` and anywhere they surface (properties page, featured properties, detail routes):
  - Golf Vale
  - Fior 1
  - Edition Residences
  - Bella by Passo
  - Casa Burés
  - AM Residences

## Capabilities

### New Capabilities

- `property-catalog`: Curated property listings shown on `/properties`, featured sections, and detail pages—excluding retired listings.

### Modified Capabilities

- `homepage-hero`: Hero panel SHALL be left-aligned within the container (matching About Dubai hero placement), not centered.
- `about-us-page`: About Marta Duran section SHALL use tighter image-to-copy spacing and a more compact floating stats overlay.

## Impact

- `components/hero.tsx` — layout classes (remove center alignment, adopt left-aligned panel like `about-dubai-hero.tsx`)
- `components/hero-video-background.tsx` — may need a prop or child wrapper adjustment if vertical/horizontal alignment is controlled at the shell level
- `components/about-preview.tsx` — grid gap, image column width/positioning, floating stats card sizing
- `lib/data/properties.ts` — remove six property entries (and any orphaned PDF/asset references if applicable)
- `components/featured-properties.tsx` — verify featured list does not reference removed properties
- Property detail routes under `app/properties/` — removed slugs should 404 or redirect (verify behavior after deletion)
