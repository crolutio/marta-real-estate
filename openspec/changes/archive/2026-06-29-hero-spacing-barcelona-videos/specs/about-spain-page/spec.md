## ADDED Requirements

### Requirement: Barcelona video showcase on About Spain

The About Spain page SHALL include a video section showcasing Barcelona footage from `public/videos/barcelona/`, using two ordered pairs: horizontal clips (`barcelona-horizontal-1.mp4` then `barcelona-horizontal-2.mp4`) and vertical clips (`Barcelona-Vertical-1.mp4` then `Barcelona-Vertical-2.mp4`). Numeric suffixes in filenames define playback order within each pair.

#### Scenario: Horizontal pair on wide viewports

- **WHEN** a visitor views `/about-spain` on a viewport at or above the medium breakpoint
- **THEN** the horizontal video pair is shown with a widescreen aspect ratio
- **AND** the vertical pair player is not loaded or displayed

#### Scenario: Vertical pair on narrow viewports

- **WHEN** a visitor views `/about-spain` on a viewport below the medium breakpoint
- **THEN** the vertical video pair is shown with a portrait-appropriate aspect ratio
- **AND** the horizontal pair player is not loaded or displayed

### Requirement: Progressive load and seamless clip handoff

For each active video pair on About Spain, the first clip SHALL begin loading immediately and SHALL be displayed as soon as it can play. While the first clip plays, the second clip SHALL preload in the background. When the first clip ends, playback SHALL transition to the second clip without a visible loading gap, flash, or spinner between clips.

#### Scenario: First clip displays promptly

- **WHEN** the About Spain video section enters the page
- **THEN** the first clip in the active pair (suffix `-1`) loads with high priority
- **AND** playback starts muted with inline playback when the clip is ready

#### Scenario: Second clip preloads during first

- **WHEN** the first clip in the active pair begins playing
- **THEN** the second clip (suffix `-2`) begins preloading before the first clip ends

#### Scenario: Seamless switch to second clip

- **WHEN** the first clip in the active pair reaches its end
- **THEN** the second clip begins playing immediately with no intermediate blank frame or loading indicator between clips
