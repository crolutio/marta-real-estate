## Context

The site has two related but distinct pages:

- `/about-barcelona` — market/education page with `AboutBarcelonaHero` and Barcelona-centric copy.
- `/about` — agency page labeled "Meet Marta" in nav; includes a two-column "Marta's Story" block with `/marta.jpg`.

Navigation labels live in `lib/constants.ts` (`NAV_LINKS`, footer). No existing OpenSpec baseline specs; this is a front-end rename and layout adjustment in Next.js App Router.

## Goals / Non-Goals

**Goals:**

- User-facing labels: "About Spain" and "About Us."
- Stable new URL `/about-spain` with redirect from `/about-barcelona` for bookmarks/SEO.
- About page story section remains readable without the portrait column.
- Rename files/components for consistency (`about-spain-hero`, `AboutSpainPage`, etc.).

**Non-Goals:**

- Rewriting all Barcelona neighborhood content into multi-city Spain guides (copy can stay Barcelona-heavy initially if broader Spain rewrite is a separate effort).
- Removing or rewriting biographical text in Marta's Story.
- Changing `/about` path (keep `/about` to avoid breaking links; only change nav label to "About Us").

## Decisions

1. **Route migration**: Move `app/about-barcelona/` → `app/about-spain/`. Add `app/about-barcelona/page.tsx` (or `next.config` redirect) that permanent-redirects to `/about-spain`. Prefer Next.js `redirect()` in a minimal route file for clarity in App Router.

2. **Component rename**: Rename `about-barcelona-hero.tsx` → `about-spain-hero.tsx`, export `AboutSpainHero`. Update hero H1/subcopy from "Barcelona luxury real estate" to Spain-framed headline while preserving substantive Barcelona sections below unless product asks for full copy pass later.

3. **Nav constants only for Meet Marta → About Us**: Update `label` in `lib/constants.ts`; keep `href: "/about"`. Update page metadata title from generic "About" to "About Us" if not already.

4. **Remove Marta image**: Delete the left column (`Image` + decorative border) in the story section; use single-column max-width prose (`max-w-3xl mx-auto`) or full-width text block matching other sections. Remove unused `Image` import if no longer needed on that page.

5. **Internal links audit**: Grep for `/about-barcelona` and update to `/about-spain` across components, CTAs, and property pages.

**Alternatives considered:**

- Keep old route without redirect — rejected (broken bookmarks, duplicate content).
- Rename `/about` → `/about-us` — rejected (unnecessary breaking change; label change is sufficient).

## Risks / Trade-offs

- **[Risk] SEO loss on `/about-barcelona`** → Mitigation: 308/301 redirect to `/about-spain`.
- **[Risk] Hero still Barcelona-specific while page is "About Spain"** → Mitigation: adjust hero eyebrow/H1; defer deep copy rewrite to follow-up if needed.
- **[Risk] Story section feels empty without image** → Mitigation: centered typography, optional subtle background or divider consistent with `bg-secondary/30` sections elsewhere.

## Migration Plan

1. Implement new route and components.
2. Add redirect from old path.
3. Update constants and grep for stale strings.
4. Verify header/footer nav and manual check of About page layout.

## Open Questions

- None blocking; confirm with stakeholder later if Spain page should add Madrid/Marbella sections beyond Barcelona-focused body copy.
