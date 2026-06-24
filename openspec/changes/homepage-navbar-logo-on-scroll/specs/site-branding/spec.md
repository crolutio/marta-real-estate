## MODIFIED Requirements

### Requirement: Unified logo asset

The site SHALL use `/logo.webp` as the only wordmark logo everywhere logos are displayed (site header, homepage hero, site footer). No separate dark-mode logo file SHALL be used.

On the homepage only, the header logo MAY be visually hidden while the hero logo is visible in the viewport; when hidden, it MUST NOT be interactive. On all other routes, the header logo SHALL always be visible.

#### Scenario: Hero uses standard logo

- **WHEN** a visitor views the homepage hero
- **THEN** the logo image source is `/logo.webp`
- **AND** the source is not `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`

#### Scenario: Header and footer use single logo

- **WHEN** a visitor views the site header or footer on a non-homepage route, or on the homepage after scrolling past the hero logo
- **THEN** exactly one logo image is rendered in the header with source `/logo.webp`
- **AND** no alternate dark-mode logo image is rendered

#### Scenario: Homepage header defers to hero logo at top

- **WHEN** a visitor views the site header on `/` while the hero logo is visible
- **THEN** the header does not show a visible duplicate navbar logo
- **AND** the footer continues to use `/logo.webp` as normal

#### Scenario: No legacy logo references in components

- **WHEN** the codebase is searched for `logo-big` or `logo-darkmode`
- **THEN** no component or page references `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`
