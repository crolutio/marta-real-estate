## MODIFIED Requirements

### Requirement: Unified logo asset

The site SHALL use `/logo.webp` as the wordmark logo in the homepage hero and site footer. The site header navbar logo SHALL use `/logo-black.webp` when the active theme is light and `/logo.webp` when the active theme is dark. No other logo asset files SHALL be used for these placements.

#### Scenario: Hero uses standard logo

- **WHEN** a visitor views the homepage hero
- **THEN** the logo image source is `/logo.webp`
- **AND** the source is not `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`

#### Scenario: Header logo is theme-aware

- **WHEN** a visitor views the site header with the light theme active
- **THEN** the navbar logo image source is `/logo-black.webp`

#### Scenario: Header logo in dark theme

- **WHEN** a visitor views the site header with the dark theme active
- **THEN** the navbar logo image source is `/logo.webp`

#### Scenario: Footer uses standard logo

- **WHEN** a visitor views the site footer in any theme
- **THEN** the footer logo image source is `/logo.webp`

#### Scenario: No legacy logo references in components

- **WHEN** the codebase is searched for `logo-big` or `logo-darkmode`
- **THEN** no component or page references `/logo-big.webp`, `/logo-big-darkmode.webp`, or `/logo-darkmode.webp`
