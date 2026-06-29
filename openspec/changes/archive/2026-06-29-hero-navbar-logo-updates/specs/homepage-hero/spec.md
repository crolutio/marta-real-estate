## MODIFIED Requirements

### Requirement: Left-aligned homepage hero panel

The homepage hero content SHALL be aligned to the left within the page container, matching the placement pattern used on the About Dubai hero (content at the start of `container-wide`, not horizontally centered). The hero content SHALL NOT use a dark background overlay box, rounded panel, or opaque backdrop behind the logo, headlines, or CTA.

#### Scenario: Hero panel is left-aligned

- **WHEN** a visitor views the homepage hero on a desktop viewport
- **THEN** the hero content (logo, headlines, CTA) is positioned toward the left side of the container
- **AND** the content is not horizontally centered with `mx-auto` or equivalent centering on the panel wrapper

#### Scenario: Hero has no dark overlay box

- **WHEN** a visitor views the homepage hero
- **THEN** the hero content is displayed directly over the video background without a semi-opaque black panel or rounded box behind the text

#### Scenario: Hero content remains unchanged

- **WHEN** a visitor views the homepage hero
- **THEN** the logo, headline "Invest in Dubai with confidence", subheadline "We guide your journey", and "View Properties" CTA are still visible
- **AND** no additional marketing copy is added to the hero

#### Scenario: CTA aligns with left panel

- **WHEN** a visitor views the homepage hero
- **THEN** the View Properties button is left-aligned within the hero content area (not centered in the panel)
