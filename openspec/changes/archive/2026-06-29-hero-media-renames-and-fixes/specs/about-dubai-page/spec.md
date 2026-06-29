## ADDED Requirements

### Requirement: Looping About Dubai hero video

The About Dubai page hero background SHALL play its clips continuously, looping back to the first clip after the last clip ends rather than stopping or freezing on the final frame.

#### Scenario: Hero loops after final clip

- **WHEN** the About Dubai hero finishes playing its last clip
- **THEN** playback resumes from the first clip
- **AND** the hero does not freeze on a static frame

#### Scenario: Seamless clip advancement

- **WHEN** any About Dubai hero clip ends
- **THEN** the next clip begins playing without a permanent stall or stuck loading state

### Requirement: About Dubai hero video source

The About Dubai hero SHALL source its clips from `public/videos/about-dubai/`, using ordered files named `about-dubai-horizontal-1.mp4` through `about-dubai-horizontal-4.mp4`.

#### Scenario: Hero uses renamed About Dubai assets

- **WHEN** the About Dubai hero loads its video clips
- **THEN** the clip sources resolve to `/videos/about-dubai/about-dubai-horizontal-1.mp4` … `/videos/about-dubai/about-dubai-horizontal-4.mp4`
- **AND** no references to the old `/videos/hero/Hero00*.mp4` paths remain
