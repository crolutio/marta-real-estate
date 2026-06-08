## ADDED Requirements

### Requirement: Unified logo asset

The site SHALL use `/logo.webp` as the only wordmark logo everywhere logos are displayed (site header, homepage hero, site footer). No separate dark-mode logo file SHALL be used.

#### Scenario: Hero uses standard logo

- **WHEN** a visitor views the homepage hero
- **THEN** the logo image source is `/logo.webp`
- **AND** the source is not `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`

#### Scenario: Header and footer use single logo

- **WHEN** a visitor views the site header or footer in any theme
- **THEN** exactly one logo image is rendered with source `/logo.webp`
- **AND** no alternate dark-mode logo image is rendered

#### Scenario: No legacy logo references in components

- **WHEN** the codebase is searched for `logo-big` or `logo-darkmode`
- **THEN** no component or page references `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`
