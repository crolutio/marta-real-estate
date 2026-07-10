## 1. Contact email

- [x] 1.1 Change `AGENCY.email` in `lib/constants.ts` to `info@duna-partners.com`

## 2. i18n foundation

- [x] 2.1 Create `lib/i18n/dictionaries.ts` with `Locale`, `LANGUAGES`, and `dictionaries` (en/es/de) covering nav, header, footer, hero
- [x] 2.2 Create `components/language-provider.tsx` with `LanguageProvider` + `useTranslation()` (locale state, localStorage persistence, `<html lang>` sync, `t()` with English fallback)
- [x] 2.3 Create `components/language-switcher.tsx` (desktop dropdown: English/Español/Deutsch, active indicator)
- [x] 2.4 Wrap the app in `<LanguageProvider>` in `app/layout.tsx`

## 3. Header

- [x] 3.1 Render nav labels via `t("nav.<key>")` keyed by href in `components/site-header.tsx`
- [x] 3.2 Add the language switcher to the desktop CTA cluster
- [x] 3.3 Replace the mobile `SheetTitle` text with the theme-aware logo image and keep an `sr-only` accessible title

## 4. Footer

- [x] 4.1 Make `components/site-footer.tsx` a client component and translate description, "Contact", and legal link labels via `t()`
- [x] 4.2 Render copyright as `© {year} Duna Partners Real Estate. {rights reserved}` via `t()`

## 5. Homepage hero

- [x] 5.1 Translate the hero eyebrow, headline, and CTA via `t()` in `components/hero.tsx`

## 6. Prime Locations

- [x] 6.1 In `app/about-dubai/page.tsx`, remove the "Key Neighborhoods & Areas" subtitle and promote "Prime Locations" to the large heading
- [x] 6.2 In `app/about-spain/page.tsx`, remove the "Key neighborhoods & areas" subtitle and promote "Prime Locations" to the large heading

## 7. Verification

- [x] 7.1 Typecheck (`npx tsc --noEmit`) and lint pass
- [x] 7.2 Switcher changes nav/footer/hero language, persists across reloads, and updates `<html lang>`
