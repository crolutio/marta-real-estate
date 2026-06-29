## ADDED Requirements

### Requirement: About Dubai hero presentation styling

On mobile (below the `md` breakpoint) the About Dubai hero content (eyebrow, headline, and any visible body) SHALL sit directly over the video with no dark background panel or rounded backdrop box, SHALL be pinned to the top of the hero section, and SHALL be centered horizontally with centered text. On desktop (`md` and up) the hero content SHALL sit within a dark background panel (semi-opaque `bg-black/80`, rounded box), SHALL remain left-aligned, and SHALL be vertically centered in the viewport.

#### Scenario: No panel and top-aligned on mobile

- **WHEN** a visitor views the About Dubai hero on a mobile viewport
- **THEN** the hero text sits directly over the video with no `bg-black` panel or rounded backdrop box
- **AND** the eyebrow, headline, and visible content are pinned to the top of the hero section
- **AND** they are centered horizontally with center-aligned text

#### Scenario: Black panel, left-aligned, vertically centered on desktop

- **WHEN** a visitor views the About Dubai hero on a desktop viewport
- **THEN** the hero content sits within a semi-opaque dark rounded panel behind the text
- **AND** the content remains left-aligned and vertically centered in the viewport

### Requirement: Orientation-aware About Dubai hero video

The About Dubai hero SHALL play orientation-appropriate footage: on mobile (below the `md` breakpoint) it SHALL play the vertical clip `/videos/about-dubai/about-dubai-vertical.mp4`, and on desktop (`md` and up) it SHALL play the horizontal clips (`/videos/about-dubai/about-dubai-horizontal-1.mp4` … `-4.mp4`). Only the active orientation's asset SHALL be loaded.

#### Scenario: Vertical video on mobile

- **WHEN** a visitor views the About Dubai hero on a mobile viewport
- **THEN** the hero background plays `/videos/about-dubai/about-dubai-vertical.mp4`
- **AND** the horizontal clips are not loaded

#### Scenario: Horizontal videos on desktop

- **WHEN** a visitor views the About Dubai hero on a desktop viewport
- **THEN** the hero background plays the horizontal About Dubai clips
- **AND** the vertical clip is not loaded

#### Scenario: Mobile vertical clip loops

- **WHEN** the About Dubai hero plays the vertical clip on mobile and the clip ends
- **THEN** playback loops the vertical clip continuously
