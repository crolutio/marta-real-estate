## Context

The homepage hero (`components/hero.tsx`) renders a wide logo (`/logo.webp`, intrinsic 1260×360) with `h-32 md:h-40 object-contain mb-6 md:mb-8` above the "We guide your journey" tagline. `object-contain` preserves aspect ratio inside a fixed height box, which can leave transparent or empty bands within the image box; combined with generous bottom margin, the gap to the tagline reads as excessive.

The About Spain page (`app/about-spain/page.tsx`) currently has no inline video section. Four Barcelona clips live at `public/videos/barcelona/`:

| File | Role |
|------|------|
| `barcelona-horizontal-1.mp4` | First horizontal clip |
| `barcelona-horizontal-2.mp4` | Second horizontal clip |
| `Barcelona-Vertical-1.mp4` | First vertical clip |
| `Barcelona-Vertical-2.mp4` | Second vertical clip |

The site already implements dual-layer video handoff in `components/hero-video-background.tsx` (`CutSwitchHero` / `CrossfadeHero`): two stacked `<video>` elements, front clip plays, back clip preloads, instant or crossfade switch on `ended`. About Dubai uses a simpler stacked list in `about-dubai-videos.tsx` with sequential `load()` on `onPlaying` — not seamless for hero-style playback.

## Goals / Non-Goals

**Goals:**

- Reduce perceived vertical gap between homepage hero logo and "We guide your journey" without altering copy or removing the logo.
- Add an About Spain video block that autoplays muted Barcelona footage, shows clip 1 immediately when ready, preloads clip 2 during clip 1, and switches seamlessly at end-of-clip.
- Respect filename order (`-1` before `-2`) for both horizontal and vertical pairs.
- Use horizontal pair on wide viewports and vertical pair on narrow viewports with correct aspect ratios.

**Non-Goals:**

- Replacing About Spain hero background videos (still uses `MARSA_HERO_CLIP_PATHS` via `AboutSpainHero`).
- User-facing video controls (no controls bar; ambient autoplay like hero).
- Looping indefinitely through more than two clips or adding Dubai-style six-clip gallery.
- Re-encoding or optimizing the MP4 assets.

## Decisions

### 1. Hero spacing: margin + logo alignment

**Decision:** Reduce logo bottom margin (`mb-6 md:mb-8` → `mb-2 md:mb-3` or similar) and add `object-left object-top` (or `self-start`) so the logo image box hugs the visible mark rather than centering whitespace vertically.

**Rationale:** Margin is the primary spacing control; alignment prevents `object-contain` from vertically centering a wide logo inside a tall box.

**Alternative considered:** Crop with fixed aspect wrapper — rejected as it may clip the logo on some breakpoints.

### 2. Shared dual-clip player component

**Decision:** Extract or reuse the two-layer cut-switch pattern from `HeroVideoBackground` into a focused component (e.g. `SeamlessVideoPair`) accepting `videos: [string, string]`, `aspectClass`, and `className`. Use hard cut (`crossfade={false}` behavior) for in-section clips to match About Dubai/Spain hero preference and avoid blend artifacts.

**Rationale:** Avoid duplicating `CutSwitchHero` logic; keep preload/handoff behavior identical to proven hero implementation.

**Alternative considered:** Inline two videos in page — rejected; harder to test and maintain.

### 3. Preload strategy

**Decision:**

- Layer 0 (first clip): `preload="auto"`, autoplay muted on `canplay` / `loadeddata` (same kick pattern as hero).
- Layer 1 (second clip): mount with `src` set but defer heavy buffer until first clip fires `onPlaying`, then call `load()` on the hidden element (or set `preload="auto"` on back layer once front is playing).

**Rationale:** Matches user request — first visible ASAP, second loads while first plays, seamless switch on `ended` via `requestVideoFrameCallback` before z-index swap (existing `CutSwitchHero` pattern).

### 4. Responsive orientation

**Decision:** Single section with two players wrapped in responsive containers:

- `hidden md:block` — horizontal pair, `aspect-video object-cover`
- `md:hidden` — vertical pair, `aspect-[9/16] max-h-[70vh] mx-auto object-cover`

Only one pair active at a time to save bandwidth.

**Alternative considered:** CSS `orientation` media query — less aligned with layout breakpoints used elsewhere.

### 5. Clip path constants

**Decision:** Add ordered pairs to `lib/` (e.g. `lib/barcelona-videos.ts`) with exact public paths matching filesystem casing:

```ts
export const BARCELONA_HORIZONTAL_CLIPS = [
  "/videos/barcelona/barcelona-horizontal-1.mp4",
  "/videos/barcelona/barcelona-horizontal-2.mp4",
] as const;

export const BARCELONA_VERTICAL_CLIPS = [
  "/videos/barcelona/Barcelona-Vertical-1.mp4",
  "/videos/barcelona/Barcelona-Vertical-2.mp4",
] as const;
```

**Rationale:** Centralizes order; avoids magic strings in JSX.

### 6. Section placement on About Spain

**Decision:** Insert video section after market insights (first content block after hero), mirroring About Dubai's placement of `AboutDubaiVideos` mid-page. Section heading optional — match Dubai pattern ("Experience Dubai" / "Discover the city") with Spain/Barcelona framing.

## Risks / Trade-offs

- **[Risk] Large MP4s on mobile** → Mitigation: vertical pair only loads on `md:hidden`; horizontal pair not mounted on small screens.
- **[Risk] Autoplay blocked** → Mitigation: muted + `playsInline`; show poster or static fallback if `play()` rejects (same as hero).
- **[Risk] Filename casing on Linux deploy** → Mitigation: paths match exact filenames in `public/videos/barcelona/`.
- **[Risk] Logo still has internal transparent padding in asset** → Mitigation: if margin tweak insufficient, follow-up can trim asset or use smaller display height.

## Migration Plan

1. Ship CSS/spacing change in `hero.tsx` — no migration.
2. Add component + constants; wire into `about-spain/page.tsx`.
3. Verify videos exist in deploy artifact (already under `public/`).
4. Rollback: remove section import and revert hero classes.

## Open Questions

- Final section title/copy for the Barcelona block (default: Spain/Barcelona discovery framing consistent with About Dubai videos section).
- Whether clips should loop the pair (1 → 2 → 1 → …) or play once through — **default: loop the pair** using existing dual-layer recycle logic from hero.
