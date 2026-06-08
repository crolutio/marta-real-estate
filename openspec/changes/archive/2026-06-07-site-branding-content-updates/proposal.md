## Why

The site still uses legacy `logo-big` assets and scattered copy that no longer matches current branding (Duna Partners email, simplified hero, leaner Invest page). The homepage "About Marta Duran" block belongs on About Us, and several pages carry outdated thresholds, redundant sections, or distracting FAQ formatting.

## What Changes

- **Logo consolidation**: Replace all `logo-big` / `logo-big-darkmode` / `logo-darkmode` references with a single `/logo.webp` asset everywhere (header, hero, footer).
- **Homepage hero simplification**: Keep only the logo, "Invest in Dubai with confidence", "We guide your journey", and the View Properties button—remove tagline, supporting paragraph, and other extra copy.
- **About Marta section relocation**: Remove `AboutPreview` from the homepage; add equivalent content to `/about` with a smaller portrait image and copy stating Marta is CEO and owner of the company.
- **Invest page trim**: Remove "From AED 10,000,000" from hero copy and metadata; remove the entire "Active investment opportunities in Dubai" section (`InvestOpportunitiesCategories` and its import/usage).
- **About Dubai FAQ**: Remove bold (`<strong>`) styling from FAQ answer body text; question headings may remain styled.
- **Contact email**: Update canonical agency email from `marta@martaduran.ae` to `marta@duna-partners.com` everywhere (via `AGENCY.email` and any hardcoded references).

## Capabilities

### New Capabilities

- `site-branding`: Unified logo asset usage across header, hero, and footer.
- `homepage-hero`: Minimal homepage hero content (logo, two headlines, single CTA).
- `invest-page-content`: Invest page copy and section structure without minimum-investment line or active-opportunities categories block.
- `about-dubai-faq`: FAQ answer body text without bold emphasis on About Dubai.
- `agency-contact`: Canonical contact email for the agency across the site.

### Modified Capabilities

- `about-us-page`: Add homepage-style "About Marta Duran" section with smaller portrait; state CEO/owner role; homepage no longer shows this block.

## Impact

- `components/hero.tsx`, `components/site-footer.tsx`, `components/site-header.tsx` (if applicable)
- `app/page.tsx` — remove `AboutPreview`
- `app/about/page.tsx` — add Marta section with image and CEO/owner copy
- `components/about-preview.tsx` — remove from homepage or delete/repurpose
- `app/invest/page.tsx`, `components/invest-opportunities-categories.tsx`
- `app/about-dubai/page.tsx` — FAQ list items
- `lib/constants.ts` — `AGENCY.email`
- `public/` — confirm `/logo.webp` is the sole logo asset in use (no dark-mode variant)
