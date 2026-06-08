## 1. Branding and contact

- [x] 1.1 Update `lib/constants.ts`: set `AGENCY.email` to `marta@duna-partners.com`
- [x] 1.2 Grep for `marta@martaduran.ae` and remove any hardcoded stragglers
- [x] 1.3 Replace `/logo-big.webp` with `/logo.webp` in `components/hero.tsx`
- [x] 1.4 Replace dual logo images with single `/logo.webp` in `components/site-footer.tsx`
- [x] 1.5 Replace dual logo images with single `/logo.webp` in `components/site-header.tsx`
- [x] 1.6 Confirm no remaining `logo-big` or `logo-darkmode` references in the codebase

## 2. Homepage hero

- [x] 2.1 Remove eyebrow and supporting paragraph from `components/hero.tsx`
- [x] 2.2 Verify hero retains logo, "Invest in Dubai with confidence", "We guide your journey", and View Properties CTA only

## 3. About Marta section move

- [x] 3.1 Remove `AboutPreview` import and usage from `app/page.tsx`
- [x] 3.2 Add `AboutPreview` to `app/about/page.tsx` (after Stats Banner, before Marta's Story)
- [x] 3.3 Update `components/about-preview.tsx`: add CEO/owner sentence in body copy
- [x] 3.4 Reduce portrait size in `about-preview.tsx` (e.g. `max-w-sm`, smaller aspect or height utilities)
- [x] 3.5 Confirm Marta's Story section on `/about` remains text-only (no second portrait)

## 4. Invest page

- [x] 4.1 Remove "From AED 10,000,000" list item from `app/invest/page.tsx`
- [x] 4.2 Update Invest page `metadata.description` to drop minimum investment wording
- [x] 4.3 Remove `InvestOpportunitiesCategories` import and JSX from `app/invest/page.tsx`
- [x] 4.4 Delete `components/invest-opportunities-categories.tsx` if no longer imported anywhere

## 5. About Dubai FAQ

- [x] 5.1 Remove `<strong>` tags from FAQ answer list items in `app/about-dubai/page.tsx`
- [x] 5.2 Verify FAQ question headings still render; answer text is normal weight

## 6. Verification

- [x] 6.1 Run `npm run build` and fix any type or lint errors
- [x] 6.2 Spot-check `/`, `/about`, `/invest`, `/about-dubai`, `/contact`, and footer for email, logos, and removed sections
