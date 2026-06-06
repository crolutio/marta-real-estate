## 1. About Spain route and components

- [x] 1.1 Rename `app/about-barcelona/` to `app/about-spain/` and update page component name, metadata title/description to "About Spain"
- [x] 1.2 Rename `components/about-barcelona-hero.tsx` to `about-spain-hero.tsx`, export `AboutSpainHero`, and update hero H1/eyebrow to Spain-oriented copy
- [x] 1.3 Add `app/about-barcelona/page.tsx` with permanent `redirect("/about-spain")`
- [x] 1.4 Grep and replace internal links `/about-barcelona` → `/about-spain` across the codebase

## 2. Navigation and labels

- [x] 2.1 Update `lib/constants.ts`: "About Barcelona" → "About Spain" (`/about-spain`), "Meet Marta" → "About Us" (`/about`)
- [x] 2.2 Verify `components/site-header.tsx` and footer consume updated constants (no hardcoded old labels)

## 3. About Us page (Meet Marta → About Us)

- [x] 3.1 Set `/about` metadata title to "About Us"
- [x] 3.2 Remove Marta portrait column from Marta's Story section; use single-column prose layout
- [x] 3.3 Remove unused `Image` import from `app/about/page.tsx` if no longer needed

## 4. Verification

- [x] 4.1 Manually verify header/footer nav labels and hrefs
- [x] 4.2 Confirm `/about-barcelona` redirects to `/about-spain`
- [x] 4.3 Confirm `/about` story section has no `/marta.jpg` and text remains readable
