# Design

## Decision 1: Contact email as a single source of truth

`AGENCY.email` in `lib/constants.ts` is already the single source consumed by the footer, contact page, property cards, and legal pages. Changing it to `info@duna-partners.com` updates every reference. No other edits required for the email.

## Decision 2: Footer copyright brand name

The footer bottom bar currently renders `© {currentYear} {AGENCY.fullName}`. `AGENCY.fullName` ("Marta Duran Real Estate") is also used for the desktop/footer logo `alt` and the WhatsApp message, so it should not be globally renamed as part of this scoped change.

Instead, the footer will render the copyright brand from a translatable string (`t("footer.copyrightName")` → "Duna Partners Real Estate"), keeping the change localized to the footer and making the brand name translatable alongside the rest of the footer.

## Decision 3: Mobile menu logo

Radix Dialog (used by shadcn `Sheet`) requires an accessible title. The mobile `SheetHeader` will render the theme-aware logo `<Image>` (same `src` logic as the desktop navbar: `/logo.webp` in dark, `/logo-black.webp` in light) and keep an accessible name via a visually-hidden `SheetTitle` (`sr-only`) plus the image `alt`. This shows the brand logo at the top of the drawer without breaking screen-reader semantics.

## Decision 4: Prime Locations heading

On both About pages, the eyebrow `<p>` "Prime Locations" is promoted to the primary heading size (`font-subtitle text-4xl md:text-5xl font-semibold`) and the `<h2>` "Key Neighborhoods & Areas" is removed. To keep a single semantic heading, "Prime Locations" becomes the `<h2>`. The surrounding section styling (colors, spacing) is unchanged.

## Decision 5: Internationalization architecture

The app has no i18n today, uses the App Router, and manages theme manually on the client via `localStorage`. To match that pattern with the least disruption and no route restructuring, use a **client-side locale context**:

- `lib/i18n/dictionaries.ts`
  - `Locale = "en" | "es" | "de"`.
  - `LANGUAGES`: ordered list `[{ code, label }]` with native labels: English, Español, Deutsch.
  - `dictionaries`: `Record<Locale, Dict>` with nested keys for `nav`, `header`, `footer`, `hero`.
- `components/language-provider.tsx` (client)
  - `LanguageProvider` holds `locale` state (default `"en"`), reads `localStorage["locale"]` in an effect (mirrors the existing theme flash-then-correct approach to avoid hydration mismatch), writes it back on change, and sets `document.documentElement.lang`.
  - `useTranslation()` returns `{ locale, setLocale, t }` where `t(key)` resolves a dot-path against the active dictionary, falling back to English then to the key itself.
- `components/language-switcher.tsx` (client)
  - Desktop-only control using the existing `DropdownMenu` primitive: a Globe trigger showing the active language's native label, and menu items for each language with a check on the active one.
- Wiring
  - `app/layout.tsx` wraps the app content in `<LanguageProvider>`. `<html lang>` stays `"en"` for the initial SSR render and is updated client-side by the provider.
  - `site-header.tsx`: nav labels rendered via `t("nav.<key>")` keyed by href; language switcher added to the desktop CTA cluster. Nav labels translate on all viewports; the switcher control itself is desktop-only per the requirement.
  - `site-footer.tsx`: becomes a client component; description, "Contact", copyright name + "All rights reserved", and legal link labels rendered via `t()`.
  - `hero.tsx`: eyebrow, headline, CTA via `t()`.

### Why client-side (not next-intl / locale routing)

Locale-prefixed routing would require moving every route under `app/[locale]/` and refactoring metadata — large and risky for a change that primarily needs a visible switcher over the site chrome. The client-context approach delivers a working switcher immediately and can later be upgraded without throwing away the dictionaries.

## Decision 6: Translation coverage and quality

Translate the persistent chrome and homepage hero now, with hand-checked ES/DE strings (not machine-literal). Keys are structured so additional pages can adopt `t()` incrementally. `ConsultationCta` button copy and deep-page content are intentionally deferred.
