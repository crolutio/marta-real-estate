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
