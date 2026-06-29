## ADDED Requirements

### Requirement: Minimal homepage hero content

The homepage hero section SHALL display only: the agency logo, the headline "Invest in Dubai with confidence", the subheadline "We guide your journey", and a single primary CTA button linking to `/properties` labeled "View Properties".

#### Scenario: Hero shows required elements

- **WHEN** a visitor views the homepage hero
- **THEN** the logo, both headline lines, and a View Properties button are visible

#### Scenario: Hero excludes extra marketing copy

- **WHEN** a visitor views the homepage hero
- **THEN** the eyebrow "Spaces Curated for Exceptional Living" is not shown
- **AND** the paragraph beginning "We specialize in high-end homes" is not shown
- **AND** no additional CTA buttons beyond View Properties are shown in the hero panel

### Requirement: Left-aligned homepage hero panel

The homepage hero content SHALL be left-aligned on desktop (`md` breakpoint and up) within the page container, matching the placement pattern used on the About Dubai hero (content at the start of `container-wide`, not horizontally centered). On mobile (below `md`), the hero content — logo, eyebrow, headline, and CTA — SHALL be centered horizontally with centered text. The hero content SHALL NOT use a dark background overlay box, rounded panel, or opaque backdrop behind the logo, headlines, or CTA at any breakpoint.

#### Scenario: Hero is left-aligned on desktop

- **WHEN** a visitor views the homepage hero on a desktop viewport
- **THEN** the hero content (logo, headlines, CTA) is positioned toward the left side of the container
- **AND** the content is not horizontally centered on desktop

#### Scenario: Hero is centered on mobile

- **WHEN** a visitor views the homepage hero on a mobile viewport
- **THEN** the logo, eyebrow, headline, and CTA are centered horizontally
- **AND** the text is center-aligned

#### Scenario: Hero has no dark overlay box

- **WHEN** a visitor views the homepage hero on any viewport
- **THEN** the hero content is displayed directly over the video background without a semi-opaque black panel or rounded box behind the text

#### Scenario: Hero content remains unchanged

- **WHEN** a visitor views the homepage hero
- **THEN** the logo, headline "Invest in Dubai with confidence", subheadline "We guide your journey", and "View Properties" CTA are still visible
- **AND** no additional marketing copy is added to the hero

### Requirement: Tight logo-to-tagline spacing in homepage hero

The homepage hero SHALL present minimal vertical spacing between the agency logo and the "We guide your journey" tagline so they read as a single typographic stack. The logo SHALL NOT introduce excessive empty space below the visible mark before the tagline begins.

#### Scenario: Logo and tagline appear visually connected

- **WHEN** a visitor views the homepage hero on desktop or mobile
- **THEN** the vertical gap between the bottom of the visible logo and the "We guide your journey" text is tight (the logo uses a small bottom margin and top-left object alignment rather than a large margin below the logo image box)
- **AND** both the logo and tagline remain fully visible

#### Scenario: Hero content preserved

- **WHEN** a visitor views the homepage hero
- **THEN** the logo, tagline "We guide your journey", headline "Invest in Dubai with confidence", and "View Properties" CTA are still present
- **AND** no additional marketing copy is added

### Requirement: Prominent homepage hero logo

The homepage hero logo SHALL be displayed at a prominent size, approximately 50% larger than the prior sizing, while preserving aspect ratio and left/top alignment.

#### Scenario: Logo renders larger

- **WHEN** a visitor views the homepage hero
- **THEN** the logo is rendered at the enlarged size (`h-48` on mobile, `h-60` on desktop) with `w-auto` aspect preserved
- **AND** the logo, tagline, headline, and CTA all remain visible without overflow

### Requirement: Flash-free homepage hero video transitions

The homepage hero background SHALL transition from one clip to the next without a visible flash, blank frame, or brightness pop between clips.

#### Scenario: Clean transition between clips

- **WHEN** the homepage hero finishes playing one clip and advances to the next
- **THEN** the change presents the next clip's frame directly with no intermediate flash or blank frame

#### Scenario: Continuous playback

- **WHEN** the homepage hero has played through all of its clips
- **THEN** playback continues by looping back to the first clip without stopping
