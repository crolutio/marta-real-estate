## Why

On mobile the hero sections read awkwardly: content is left-aligned and the About Dubai/About Spain heroes sit on a heavy `bg-black/80` panel that competes with the video. The shared hero video player also shows its loading spinner when nothing is actually buffering, and the About Dubai hero stutters at a clip transition — both make the experience feel unpolished.

## What Changes

- **Mobile-centered hero content**: On mobile, all three video hero sections (homepage, About Dubai, About Spain) SHALL center their text and elements (logo, eyebrow, headline, CTA). On desktop (`md+`) they keep the current left alignment.
- **Remove black hero panels**: Remove the `bg-black/80` rounded panel/backdrop from the About Dubai and About Spain heroes so content sits directly over the video (matching the homepage hero, which already has no panel).
- **Loading spinner only when genuinely buffering**: The hero video loading spinner SHALL appear only while a video is actually loading/buffering (e.g. waiting/stalled before it can play), and SHALL be hidden during normal playback and transitions — on every hero.
- **Fix About Dubai hero stutter**: Ensure the hard-cut handoff only switches to the incoming clip once it has enough buffered data, eliminating the visible stutter at the transition point.
- **About Dubai mobile vertical video**: On mobile, the About Dubai hero SHALL play the vertical clip `public/videos/about-dubai/about-dubai-vertical.mp4` instead of the horizontal clips. On desktop it keeps the horizontal clips (`about-dubai-horizontal-1..4.mp4`). This mirrors the orientation-aware behavior already used by the About Spain hero.

## Capabilities

### New Capabilities

- `hero-video-background`: Shared hero video player behavior — loading indicator visibility tied to genuine buffering, and stutter-free clip handoff (incoming clip ready before cut).

### Modified Capabilities

- `homepage-hero`: Hero content is centered on mobile and left-aligned on desktop.
- `about-spain-page`: About Spain hero removes the black panel and centers content on mobile.
- `about-dubai-page`: About Dubai hero removes the black panel and centers content on mobile.

## Impact

- `components/hero-video-background.tsx` — replace `firstPlaying`-only spinner gate with buffering-driven visibility (`waiting`/`stalled` → show, `playing`/`canplay`/progress → hide) across Single/CutSwitch/Crossfade variants; gate hard-cut commit on incoming `readyState`
- `components/hero.tsx` — center content on mobile (logo, text, CTA), left on desktop
- `components/about-dubai-hero.tsx` — remove `bg-black/80` panel; center on mobile; orientation-aware video source (vertical on mobile, horizontal on desktop)
- `components/about-spain-hero.tsx` — remove `bg-black/80` panel; center on mobile
- `lib/hero-videos.ts` — add the About Dubai vertical clip path constant
- `public/videos/about-dubai/about-dubai-vertical.mp4` — existing asset, newly wired in for mobile
- No route changes
