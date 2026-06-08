## Context

The site uses a mix of `logo-big` and `logo` assets (`hero.tsx`, `site-footer.tsx` still reference `/logo-big.webp`). The homepage hero includes extra taglines beyond the approved minimal set. `AboutPreview` renders a large Marta portrait and bio on `/` while `/about` has a text-only "Marta's Story" per a prior change. The Invest page shows a minimum investment line and `InvestOpportunitiesCategories` ("Active investment opportunities in Dubai"). About Dubai FAQ answers wrap list labels in `<strong>`. Contact email is centralized in `lib/constants.ts` as `marta@martaduran.ae`.

## Goals / Non-Goals

**Goals:**

- Single logo asset: `/logo.webp` everywhere logos appear (no separate dark-mode logo file).
- Homepage hero shows only logo, two headlines, and View Properties CTA.
- "About Marta Duran" block lives on `/about` only, with smaller portrait and CEO/owner mention.
- Invest page drops AED minimum copy and the active-opportunities categories section.
- About Dubai FAQ answers use plain text (no bold in body/list items).
- `AGENCY.email` is `marta@duna-partners.com`; all mailto links inherit it.

**Non-Goals:**

- Redesigning header logo sizing (header already uses `/logo.webp`).
- Removing `InvestAnalysisForm` or other Invest sections beyond the specified cuts.
- Rewriting long-form About Us copy beyond CEO/owner addition and section move.
- Deleting unused `logo-big*` files from `public/` (optional cleanup, not required).

## Decisions

### 1. Logo paths

Use `/logo.webp` only in header, hero, and footer—remove dual light/dark `Image` pairs and any `logo-big*` or `logo-darkmode` paths. Size hero logo with existing utility classes (`h-40 md:h-52` or slightly reduced if the standard logo aspect differs). **Alternative:** Keep larger dimensions for hero only—rejected because user asked for one logo asset everywhere.

### 2. Homepage hero content

Remove from `components/hero.tsx`:
- Eyebrow "Spaces Curated for Exceptional Living"
- Paragraph "We specialize in high-end homes…"

Retain: logo `Image`, h1, subtitle line, View Properties button.

### 3. About Marta relocation

- Remove `<AboutPreview />` from `app/page.tsx`.
- Reuse `components/about-preview.tsx` on `app/about/page.tsx` (import and place after Stats Banner, before or replacing placement of short duplicate content)—**preferred** over duplicating markup.
- Edits to `AboutPreview`:
  - Add CEO/owner sentence near top of body copy (e.g. "Marta Duran is the CEO and owner of the company.").
  - Reduce image size: e.g. `max-w-xs` or `max-w-sm` container, lower aspect ratio or constrained width vs. current `aspect-[4/5]` full column; shrink floating stats card or hide on smaller breakpoints if cramped.
- Keep existing "Marta's Story" long-form section below as complementary depth (no second portrait).

**Alternative:** Merge AboutPreview into about page inline—rejected to minimize diff and keep component testable.

### 4. Invest page cuts

- Delete `<li>From AED 10,000,000</li>` and reword `metadata.description` without minimum investment.
- Remove `<InvestOpportunitiesCategories />` import and usage from `app/invest/page.tsx`. Leave component file in repo (unused) or delete if nothing else imports it—prefer delete if orphaned after change.

### 5. About Dubai FAQ

Replace `<strong>…</strong>` inside FAQ answer `<li>` elements with plain text. Question `<h3>` headings keep `font-semibold` styling.

### 6. Email

Single change in `lib/constants.ts` `AGENCY.email`. Grep for hardcoded `marta@martaduran.ae` to catch stragglers.

## Risks / Trade-offs

- **[Risk] Standard logo may look small in footer/hero** → Tune `className` height utilities after swap; logo.webp may need slightly larger `h-*` than logo-big at same visual weight.
- **[Risk] About page content overlap** → AboutPreview intro and Marta's Story share themes; acceptable short-term; optional future consolidation out of scope.
- **[Risk] Orphan `invest-opportunities-categories.tsx`** → Remove file if unused to avoid dead code.
- **[Risk] Prior spec forbade portrait on About Us** → Delta spec explicitly MODIFIES that requirement to allow portrait in the dedicated About Marta Duran section only.
