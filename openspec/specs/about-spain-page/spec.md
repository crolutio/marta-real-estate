## ADDED Requirements

### Requirement: About Spain navigation label

The site navigation and footer SHALL display the link label "About Spain" pointing to `/about-spain`.

#### Scenario: Header nav shows About Spain

- **WHEN** a visitor views any page with the site header
- **THEN** the navigation includes "About Spain" with href `/about-spain`
- **AND** the label "About Barcelona" is not shown

#### Scenario: Footer shows About Spain

- **WHEN** a visitor views the site footer
- **THEN** the footer links include "About Spain" with href `/about-spain`

### Requirement: About Spain page route and metadata

The application SHALL serve the Spain market page at `/about-spain` with page metadata title containing "About Spain" (not "About Barcelona").

#### Scenario: Page loads at new URL

- **WHEN** a visitor navigates to `/about-spain`
- **THEN** the About Spain page content is rendered successfully

#### Scenario: Old URL redirects

- **WHEN** a visitor navigates to `/about-barcelona`
- **THEN** the browser is redirected to `/about-spain` with a permanent redirect

### Requirement: About Spain hero presentation

The About Spain page hero SHALL use Spain-oriented primary heading copy (not "Barcelona luxury real estate" as the main H1) while retaining video hero behavior consistent with the current Barcelona hero component.

#### Scenario: Hero headline reflects Spain

- **WHEN** a visitor views `/about-spain`
- **THEN** the hero section primary heading references Spain (or Spanish luxury real estate), not Barcelona alone as the sole geographic title

### Requirement: Barcelona hero footage

The About Spain hero background SHALL play Barcelona footage from `public/videos/barcelona/`, using two ordered pairs: horizontal clips (`barcelona-horizontal-1.mp4` then `barcelona-horizontal-2.mp4`) and vertical clips (`Barcelona-Vertical-1.mp4` then `Barcelona-Vertical-2.mp4`). Numeric suffixes in filenames define playback order within each pair. The hero SHALL select the horizontal pair on wide (desktop) viewports and the vertical pair on narrow (mobile) viewports.

#### Scenario: Horizontal pair on wide viewports

- **WHEN** a visitor views `/about-spain` on a viewport at or above the medium breakpoint
- **THEN** the hero background plays the horizontal Barcelona clips in order

#### Scenario: Vertical pair on narrow viewports

- **WHEN** a visitor views `/about-spain` below the medium breakpoint
- **THEN** the hero background plays the vertical Barcelona clips in order

### Requirement: Progressive load and seamless clip handoff

For the active About Spain hero clip pair, the first clip SHALL begin loading immediately and SHALL be displayed (autoplay, muted, inline) as soon as it can play, with a loading indicator shown only until the first frame plays. The second clip SHALL buffer while the first plays. When the first clip ends, playback SHALL transition to the second clip without a visible loading gap, blank frame, or spinner between clips, and the pair SHALL loop.

#### Scenario: First clip displays promptly

- **WHEN** the About Spain hero mounts
- **THEN** the first clip in the active pair (suffix `-1`) loads with high priority
- **AND** playback starts muted with inline playback when the clip is ready

#### Scenario: Second clip buffers during first

- **WHEN** the first clip in the active pair is playing
- **THEN** the second clip (suffix `-2`) is buffered before the first clip ends

#### Scenario: Seamless switch to second clip

- **WHEN** the first clip in the active pair reaches its end
- **THEN** the second clip begins playing immediately with no intermediate blank frame or loading indicator between clips
- **AND** when the second clip ends, playback returns to the first clip

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
