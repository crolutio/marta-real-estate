# Proposal: Duna Partners rebrand touch-ups, mobile menu logo, Prime Locations cleanup, and language switcher

## Why

The agency is transitioning to the **Duna Partners** brand and needs several small, high-visibility corrections plus a new multilingual capability:

- The public contact email should be the generic `info@duna-partners.com`, not a personal inbox.
- The footer copyright still reads "Marta Duran Real Estate" and should reflect the Duna Partners brand.
- The mobile side menu shows only a text title; it should show the same logo used in the desktop navbar for brand consistency.
- The "Prime Locations" sections on About Dubai and About Spain carry a redundant "Key Neighborhoods & Areas" subtitle; the section reads better with a single, larger "Prime Locations" heading.
- International buyers visit the site; a language switcher (English, Spanish, German) in the desktop navbar makes the experience accessible to more of them.

## What Changes

- **Contact email**: Change `AGENCY.email` to `info@duna-partners.com`. All mailto links and displayed emails update automatically since they reference the constant.
- **Footer copyright**: Render `© {year} Duna Partners Real Estate. {rights reserved}` in the footer bottom bar.
- **Mobile menu logo**: Replace the text-only mobile `SheetTitle` with the theme-aware logo image used in the desktop navbar, preserving an accessible title for screen readers.
- **Prime Locations**: On both About Dubai and About Spain, remove the "Key Neighborhoods & Areas" subtitle and promote "Prime Locations" to a larger heading.
- **Language switcher (English / Spanish / German)**: Introduce a lightweight client-side internationalization layer (locale context + dictionaries + `t()` helper) with a desktop navbar switcher. Persist the choice in `localStorage` and update `<html lang>`. Translate the always-visible site chrome first: navigation labels, footer, and the homepage hero, with accurate ES/DE translations.

## Scope / Non-goals

- This change wires translations into the persistent chrome (header nav, footer) and the homepage hero. Deep-page copy (About pages body, Services, Invest, Contact form, legal pages, property data) remains English for now and can be translated in follow-up changes using the same infrastructure.
- No locale-based URL routing (e.g. `/es/...`); language is a client-side preference.
- No change to the theme system, the desktop navbar logo behavior, or the mobile theme toggle.

## Impact

- Affected specs: `agency-contact`, `site-branding`, `homepage-header`, `about-dubai-page`, `about-spain-page`, `site-i18n` (new).
- Affected code: `lib/constants.ts`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/hero.tsx`, `app/about-dubai/page.tsx`, `app/about-spain/page.tsx`, `app/layout.tsx`, and new `lib/i18n/*` + `components/language-switcher.tsx` + `components/language-provider.tsx`.
