## ADDED Requirements

### Requirement: Left-aligned homepage hero panel

The homepage hero content panel SHALL be aligned to the left within the page container, matching the placement pattern used on the About Dubai hero (dark overlay panel at the start of `container-wide`, not horizontally centered).

#### Scenario: Hero panel is left-aligned

- **WHEN** a visitor views the homepage hero on a desktop viewport
- **THEN** the hero content panel (logo, headlines, CTA) is positioned toward the left side of the container
- **AND** the panel is not horizontally centered with `mx-auto` or equivalent centering on the panel wrapper

#### Scenario: Hero content remains unchanged

- **WHEN** a visitor views the homepage hero
- **THEN** the logo, headline "Invest in Dubai with confidence", subheadline "We guide your journey", and "View Properties" CTA are still visible
- **AND** no additional marketing copy is added to the hero

#### Scenario: CTA aligns with left panel

- **WHEN** a visitor views the homepage hero
- **THEN** the View Properties button is left-aligned within the hero panel (not centered in the panel)
