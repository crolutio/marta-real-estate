## 1. Establish the failing baseline

- [ ] 1.1 Reproduce the hero video failure on a real iOS device in Safari and capture what the visitor sees (screen recording or screenshot)
- [ ] 1.2 Reproduce on macOS Safari and capture the same; note whether the failure differs between the two
- [ ] 1.3 Check Safari's console and network panel on the failing device for the media error code and whether `hero-horizontal-1.mp4` downloads fully before any frame appears
- [ ] 1.4 Record the baseline in the change notes, so the post-fix comparison is against observed behavior rather than assumption

## 2. Remux the defective hero clips

- [x] 2.1 Remux `public/videos/hero/hero-horizontal-1.mp4` with `ffmpeg -i in.mp4 -map 0:v:0 -map 0:a:0 -c copy -movflags +faststart out.mp4`
- [x] 2.2 Remux `public/videos/hero/hero-horizontal-2.mp4` the same way
- [x] 2.3 Verify each remuxed file has `moov` before `mdat` in top-level atom order
- [x] 2.4 Verify each remuxed file has exactly one audio stream and that it is AAC, with no AC-3 present
- [x] 2.5 Confirm duration, resolution and visual content are unchanged from the originals (no generation loss — `-c copy` should be bit-identical video)
- [x] 2.6 Re-probe clips 3–6 to confirm they are already compliant and need no change

## 3. Add the poster fallback

- [x] 3.1 Extract frame 0 of clip 1 and save it as a WebP poster under `public/`, sized for hero display rather than full 1920px
- [x] 3.2 Add an optional `poster` prop to `HeroVideoBackgroundProps` and thread it to all three variants
- [x] 3.3 Set `poster` on the `<video>` in `SingleClipHero`
- [x] 3.4 Set `poster` on both `<video>` layers in `CutSwitchHero`
- [x] 3.5 Set `poster` on both `<video>` layers in `CrossfadeHero`
- [x] 3.6 Add a `failed` state flag set by `onError`, and gate the spinner on it so a stall or waiting event from a dead element cannot re-show the indicator
- [x] 3.7 Pass the poster from `components/hero.tsx` for the homepage reel

## 4. Verify the video fix on Apple hardware

- [ ] 4.1 Re-test on the same iOS device used in 1.1 and confirm clip 1 plays
- [ ] 4.2 Re-test on the same Mac used in 1.2 and confirm clip 1 plays
- [ ] 4.3 Confirm the clip-to-clip hard cut still works across all six clips with no regression to the existing transition behavior
- [ ] 4.4 Confirm the spinner still appears on genuine buffering and no longer sticks after a failure
- [ ] 4.5 If the failure persists, stop and investigate the documented next suspects (1920x960 frame height, per-clip payload over cellular) before proceeding

## 5. Reshape the aboutPreview dictionary entry

- [x] 5.1 Change the `aboutPreview` block in the `Dictionary` type: replace `p1`/`p2` with `sections: { heading?: string; paragraphs: string[] }[]`
- [x] 5.2 Write the English copy into the `en` dictionary — `title` takes "Your Trusted Partner for Investing in Dubai", a leading heading-less section takes the two market paragraphs, then "Excellence in Real Estate" and "Personalised Advisory. Exceptional Results." as headed sections
- [x] 5.3 Change the `en` `aboutPreview.eyebrow` from "About Marta Duran" to a company-level label
- [x] 5.4 Author the Spanish translation into the `es` dictionary, matching the register of the surrounding `es` entries
- [x] 5.5 Author the German translation into the `de` dictionary, matching the register of the surrounding `de` entries
- [x] 5.6 Confirm `tsc --noEmit` passes — the shared type makes any un-migrated locale a hard error

## 6. Render the headed subsections

- [x] 6.1 Replace the two `<p>{a.p1}</p>` / `<p>{a.p2}</p>` elements in `components/about-preview.tsx` with a map over `a.sections`
- [x] 6.2 Render each section's `heading` as an `<h3>` when present, styled consistently with the page's existing subsection typography
- [x] 6.3 Render each section's paragraphs as `<p>` elements, preserving the existing `space-y-4 text-muted-foreground text-editorial` rhythm
- [x] 6.4 Verify no heading text is hardcoded in JSX — all copy comes from the dictionary

## 7. Move the portrait to Marta's Story

- [x] 7.1 Remove the portrait column, the `Image` import and the floating stats overlay from `components/about-preview.tsx`
- [x] 7.2 Collapse that component's two-column grid to a single `max-w-3xl` prose column, keeping the eyebrow, title, languages line and trust signals
- [x] 7.3 Add a two-column grid to the "Marta's Story" section in `app/about/about-content.tsx` using `lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]`, portrait left and top-aligned, story text right
- [x] 7.4 Move the portrait `Image` (with its `max-w-sm` constraint and `aspect-[3/4]` frame) into the story section's left column
- [x] 7.5 Move the compact floating stats overlay with it, keeping the "10+" and "+AED200M" values and their labels
- [x] 7.6 Decide where the `languages` line belongs now that both sections could host it, and ensure it renders exactly once on the page
- [ ] 7.7 Confirm the story section stacks portrait-above-text on narrow viewports with no horizontal overflow

## 8. Verify the copy and layout changes

- [x] 8.1 Run `tsc --noEmit` and `npm run build` and confirm both pass
- [x] 8.2 View `/about` in English and confirm the company copy renders with visible subsection headings and no portrait
- [x] 8.3 View `/about` in Spanish and German and confirm no English fallback or placeholder text appears
- [x] 8.4 Confirm Marta's biography and her portrait each appear exactly once, both in "Marta's Story"
- [ ] 8.5 Check `/about` at mobile, tablet and desktop widths for overflow, cramped heading spacing, or an awkwardly tall portrait column beside the long story text

## 9. Hand back the open questions

- [x] 9.1 Ask Marta to review the Spanish copy, which she reads natively
- [x] 9.2 Flag that the `/about` page is now noticeably taller and the company block visually outweighs the Marta section, in case she wants the supplied copy trimmed
