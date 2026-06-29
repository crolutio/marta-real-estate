## MODIFIED Requirements

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
