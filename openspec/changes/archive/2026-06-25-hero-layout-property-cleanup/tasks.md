## 1. Homepage hero layout

- [x] 1.1 Update `components/hero.tsx`: remove `text-center` and `mx-auto` from the hero panel wrapper
- [x] 1.2 Align hero panel to the left using the same `container-wide w-full` + `max-w-2xl` pattern as `components/about-dubai-hero.tsx`
- [x] 1.3 Left-align logo, headlines, and View Properties CTA within the panel (replace `justify-center` / `mx-auto` on logo and button)
- [x] 1.4 Optionally match About Dubai overlay opacity (`bg-black/80`) if visual QA shows inconsistency
- [x] 1.5 Verify homepage hero still shows logo, both headline lines, and View Properties CTA only

## 2. About Marta Duran section

- [x] 2.1 Reduce grid gap in `components/about-preview.tsx` from `gap-12 lg:gap-20` to a tighter value (e.g. `gap-8 lg:gap-10`)
- [x] 2.2 If needed, nudge the portrait column toward the text column with `lg:justify-self-end` on the image wrapper
- [x] 2.3 Compact the floating stats card: reduce padding, value/label font sizes, internal gap, and max width
- [x] 2.4 Spot-check `/about` at mobile and desktop breakpoints for readable layout without overflow

## 3. Property catalog cleanup

- [x] 3.1 Remove these entries from `lib/data/properties.ts`:
  - `golf-vale-emaar-south` (Golf Vale)
  - `fior-1-rashid-yachts-marina` (Fior 1)
  - `edition-hh-dubai-beach` (Edition Residences)
  - `bella-by-passo-dubai` (Bella by Passo)
  - `casa-bures-barcelona` (Casa Burés)
  - `am-residences-barcelona` (AM Residences)
- [x] 3.2 Grep codebase for removed slugs and titles; fix any hardcoded references in featured or invest components
- [x] 3.3 Confirm removed property detail URLs return not-found behavior

## 4. Verification

- [x] 4.1 Run `npm run build` and fix any type or lint errors
- [x] 4.2 Spot-check `/` (left hero), `/about` (tighter About Marta layout), and `/properties` (six listings gone)
