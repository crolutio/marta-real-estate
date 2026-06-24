## Context

The site uses a shared `HeroVideoBackground` shell for homepage and About Dubai/Spain pages. About Dubai's hero (`components/about-dubai-hero.tsx`) places a `max-w-2xl` dark panel at the start (left) of `container-wide`, with left-aligned typography. The homepage hero (`components/hero.tsx`) centers the panel via `text-center`, `mx-auto`, and a centered CTA row.

The About Us page renders `AboutPreview` for the "About Marta Duran" block. It uses a two-column grid with `gap-12 lg:gap-20`, a portrait capped at `max-w-xs sm:max-w-sm`, and a floating stats card (`10+` / `$2B+`) positioned at `-bottom-4 -right-4` with `p-4`, `text-2xl`, and `max-w-[220px]`.

Property data lives in a single array at `lib/data/properties.ts`. Listings are keyed by `slug` and consumed by `/properties`, featured sections, and dynamic detail routes.

## Goals / Non-Goals

**Goals:**

- Left-align the homepage hero panel to match About Dubai's visual pattern while preserving existing hero content (logo, headlines, View Properties CTA).
- Tighten the About Marta Duran two-column layout so the portrait sits closer to the copy column.
- Reduce the visual footprint of the floating stats overlay on Marta's portrait.
- Remove six retired property entries from the catalog so they no longer appear anywhere on the site.

**Non-Goals:**

- Changing homepage hero copy, video reel, or CTA destination.
- Redesigning the full About Us page or relocating the About Marta section.
- Deleting PDF files from `public/` (orphaned assets are acceptable; can be cleaned up separately).
- Adding redirects for removed property slugs (standard Next.js 404 on missing slug is sufficient unless SEO concerns arise).

## Decisions

### 1. Homepage hero alignment via component classes only

**Decision:** Update `components/hero.tsx` to mirror About Dubai's structure: remove `text-center` and `mx-auto` from the panel, use `max-w-2xl` (or `max-w-4xl` without centering if logo needs more width), left-align text and CTA, and optionally bump overlay opacity to `bg-black/80` for parity.

**Alternatives considered:**
- Adding a `contentAlign="left"` prop to `HeroVideoBackground` — rejected; About Dubai already achieves left alignment without shell changes because `container-wide w-full` fills the flex child. No shell change needed unless visual QA shows vertical centering issues.

**Rationale:** Minimal diff, consistent with existing About Dubai pattern.

### 2. About Marta spacing via grid gap reduction

**Decision:** Reduce column gap in `about-preview.tsx` from `gap-12 lg:gap-20` to approximately `gap-8 lg:gap-10` (or `lg:gap-12`). Optionally nudge the image column toward the text side with `lg:justify-self-end` on the image wrapper if gap alone is insufficient.

**Alternatives considered:**
- Single-column mobile-first stack — rejected; user wants tighter side-by-side spacing, not layout restructure.

### 3. Compact stats card via typography and padding scale-down

**Decision:** Reduce stats card padding (`p-4` → `p-3`), value font size (`text-2xl` → `text-xl`), label size (`text-xs` → `text-[10px]` or keep `text-xs`), internal grid gap (`gap-3` → `gap-2`), and max width (`max-w-[220px]` → `max-w-[180px]`).

**Rationale:** User explicitly asked for a more compact overlay without removing the stats.

### 4. Property removal by deleting array entries

**Decision:** Remove the six property objects from `properties` in `lib/data/properties.ts` by slug. Grep the codebase for slug/title references afterward.

**Slugs to remove:**
- `golf-vale-emaar-south`
- `fior-1-rashid-yachts-marina`
- (Edition Residences — verify slug)
- (Bella by Passo — verify slug)
- (Casa Burés — verify slug)
- (AM Residences — verify slug)

**Alternatives considered:**
- Soft-delete with `published: false` flag — rejected; no such flag exists in current schema; hard delete is simpler.

## Risks / Trade-offs

- **[Risk] Featured properties may reference removed listings** → Grep for slugs/titles in `featured-properties.tsx` and homepage after removal; update any hardcoded featured list.
- **[Risk] Bookmarked property URLs return 404** → Acceptable for retired inventory; document in release notes if needed.
- **[Risk] Homepage logo looks awkward left-aligned at large sizes** → Keep logo left-aligned within panel; reduce logo height slightly if needed during QA.
- **[Risk] Tighter About Marta grid may feel cramped on tablet** → Test at `md`/`lg` breakpoints; retain responsive single-column stack on small screens.

## Migration Plan

1. Update `components/hero.tsx` layout classes.
2. Update `components/about-preview.tsx` grid gap and stats card sizing.
3. Remove six entries from `lib/data/properties.ts`.
4. Verify `/`, `/about`, `/properties`, and any removed slug URLs locally.
5. No database or env changes; deploy as a standard frontend update.

## Open Questions

- None blocking implementation. Logo width within the left panel may need minor tuning during visual QA.
