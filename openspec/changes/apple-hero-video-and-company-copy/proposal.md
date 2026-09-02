## Why

Two problems, both on high-traffic pages.

The homepage hero video does not play on some Apple devices, so a share of visitors land on a blank or spinner-locked hero — the first thing they see of the brand. Probing `public/videos/hero/` found two concrete defects, and both sit on the same two files:

1. **No faststart.** Clips 1 and 2 have their `moov` atom *after* `mdat` (`ftyp, free, mdat, moov`). Safari cannot begin playback until it has the `moov` index, so a non-faststart file must download in full before the first frame appears — and on iOS it frequently just fails. Clips 3–6 are correctly ordered (`ftyp, moov, ...`).
2. **An undecodable audio track.** Clips 1 and 2 each carry **two** audio tracks, AAC plus **AC-3**. Safari cannot decode AC-3, and an undecodable track can fail the whole media element rather than being skipped. Clips 3–6 are AAC only.

Clip 1 is the first clip in the reel — the one that must play on page load — so a defect there presents as "the homepage video doesn't work." The video streams themselves are fine: H.264 (High/Main, `yuv420p`) at 1920x960, which Safari handles. There is also no `poster` and no fallback path, so any failure shows nothing at all.

Separately, the `/about` page opens its first prose block with Marta's personal bio ("Marta Duran is the CEO and owner…"), then repeats the same biography at greater length in the "Marta's Story" section directly below. The page says the same thing twice and never introduces the company. Marta asked for that first block to become general company copy instead, with her own bio left to the section below.

## What Changes

**Hero video playback on Apple devices**

- Remux the hero clips to a Safari-safe profile: `moov` before `mdat` (`+faststart`) so playback can begin before the full file arrives, and exactly one AAC audio track with no AC-3 or other secondary tracks.
- Add a `poster` image to the hero video layers so a still frame shows instead of black while the first clip loads, and remains if decoding fails outright.
- Make decode failure visible rather than silent: on `error`, stop the spinner and fall back to the poster frame instead of leaving an empty section. **BREAKING** for nothing user-facing; this only changes the failure path.
- Verify on real Apple hardware (Safari on iOS and macOS), not a desktop emulator — device-specific codec support is exactly what a resized Chrome window cannot tell us.

**About page company copy**

- Replace the `aboutPreview` `p1`/`p2` personal-bio paragraphs with company-level copy in four headed subsections: "Your Trusted Partner for Investing in Dubai", "Excellence in Real Estate", "Personalised Advisory. Exceptional Results.", plus the opening market framing.
- The copy names **Duna Partners Real Estate** and cites Dubai's population growing from ~3.5M to 7M by 2040.
- Marta's biography stays on the page — unchanged — in the "Marta's Story" section below, which is what makes removing it from the block above a de-duplication rather than a deletion.
- Move Marta's portrait and its floating stats overlay down into "Marta's Story" to follow her biography, so the company block is not fronted by a photo of one person with personal figures on it. The two sections swap layouts: the story section becomes two-column, the company block becomes single-column prose.
- Author matching Spanish and German translations; the dictionary carries `en`/`es`/`de` and the type is shared, so a copy change in one locale is a change in all three.

## Capabilities

### New Capabilities

None. Both halves modify behavior already covered by existing specs.

### Modified Capabilities

- `hero-video-background`: adds a requirement that hero media be encoded for Apple/Safari compatibility (single AAC audio track, no undecodable secondary tracks) and that a poster frame back the video layers so a decode failure degrades to a still image rather than an empty hero.
- `about-us-page`: modifies the "About Marta Duran section on About Us" requirement — the section becomes company-level copy with headed subsections, and the scenario asserting it states Marta is CEO and owner is replaced, since that biography now lives solely in "Marta's Story". Also inverts "Marta's Story without portrait image" (the portrait moves *into* that section), relocates "Compact floating stats overlay" with it, and removes "Tighter About Marta two-column spacing", whose subject no longer exists.

## Impact

**Code**

- `components/hero-video-background.tsx` — poster support on all three player variants (`SingleClipHero`, `CutSwitchHero`, `CrossfadeHero`); error path shows poster instead of clearing to empty.
- `components/about-preview.tsx` — renders headed subsections instead of two bare paragraphs; loses the portrait column and becomes single-column prose.
- `app/about/about-content.tsx` — the "Marta's Story" section gains the portrait, the stats overlay and a two-column grid.
- `lib/i18n/dictionaries.ts` — `aboutPreview` shape changes from `p1`/`p2` to a subsection structure, across `en`, `es`, and `de`, plus the shared `Dictionary` type.

**Assets**

- `public/videos/hero/hero-horizontal-{1,2}.mp4` — remuxed (both defects live here). Clips 3–6 are already faststart with a single AAC track and need no change.
- New poster still for the hero, extracted from the first frame of clip 1.

**Risk**

- Both defects are confirmed present in the files, but neither is confirmed as *the* cause — the failure has not been reproduced on an Apple device, only inferred from container inspection. If the remux does not fix it, the next suspects are the 1920x960 non-standard frame height and the ~3–5.5MB per-clip payload over mobile data. Reproducing on real hardware before and after is therefore part of the work, not a nice-to-have.
- No dependency, API, or route changes. `/about-spain` and all other routes are untouched.
