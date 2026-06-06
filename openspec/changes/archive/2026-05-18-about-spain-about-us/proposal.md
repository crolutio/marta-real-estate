## Why

Site navigation and page framing still emphasize "About Barcelona" and "Meet Marta," which undersells the broader Spain market positioning and the agency-focused About page. Updating labels, routes, and the About story layout aligns the public site with current branding and a less personal-photo-led story section.

## What Changes

- Rename the **About Barcelona** experience to **About Spain** (nav labels, page metadata, hero copy where it still says Barcelona-only, route `/about-barcelona` → `/about-spain`).
- Rename **Meet Marta** to **About Us** in navigation and related references (route `/about` may stay or be aliased—see design).
- Remove Marta's portrait image from the **Marta's Story** section on the About page; keep text and layout readable without the two-column image column.
- **BREAKING**: `/about-barcelona` URL will redirect or move to `/about-spain`; update any internal links and sitemap references.

## Capabilities

### New Capabilities

- `about-spain-page`: Spain-focused market page (formerly About Barcelona)—routing, nav, metadata, hero, and on-page headings that reflect Spain rather than Barcelona-only framing where appropriate.
- `about-us-page`: Agency About page (formerly Meet Marta)—nav label "About Us," story section without Marta portrait image.

### Modified Capabilities

<!-- No existing openspec/specs baseline -->

## Impact

- `app/about-barcelona/` → `app/about-spain/` (or equivalent rename)
- `components/about-barcelona-hero.tsx` → Spain-named component
- `lib/constants.ts` nav and footer links
- `app/about/page.tsx` story section layout (remove `/marta.jpg` image block)
- `components/site-header.tsx` and any other consumers of nav constants
- SEO: metadata titles/descriptions, possible redirect from old Barcelona path
- No backend or database changes
