## ADDED Requirements

### Requirement: About Spain hero presentation styling

On mobile (below the `md` breakpoint) the About Spain hero content (eyebrow, headline, and any visible body) SHALL sit directly over the video with no dark background panel or rounded backdrop box, SHALL be pinned to the top of the hero section, and SHALL be centered horizontally with centered text. On desktop (`md` and up) the hero content SHALL sit within a dark background panel (semi-opaque `bg-black/80`, rounded box), SHALL remain left-aligned, and SHALL be vertically centered in the viewport.

#### Scenario: No panel and top-aligned on mobile

- **WHEN** a visitor views the About Spain hero on a mobile viewport
- **THEN** the hero text sits directly over the video with no `bg-black` panel or rounded backdrop box
- **AND** the eyebrow, headline, and visible content are pinned to the top of the hero section
- **AND** they are centered horizontally with center-aligned text

#### Scenario: Black panel, left-aligned, vertically centered on desktop

- **WHEN** a visitor views the About Spain hero on a desktop viewport
- **THEN** the hero content sits within a semi-opaque dark rounded panel behind the text
- **AND** the content remains left-aligned and vertically centered in the viewport
