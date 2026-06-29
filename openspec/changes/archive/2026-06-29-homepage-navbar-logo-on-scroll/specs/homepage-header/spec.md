## ADDED Requirements

### Requirement: Homepage header logo hidden while hero logo is visible

On the homepage (`/`), the site header SHALL NOT display the navbar logo while the hero logo is visible within the viewport. The navbar logo SHALL appear once the hero logo is no longer visible due to scrolling.

#### Scenario: Navbar logo hidden at top of homepage

- **WHEN** a visitor loads `/` and the hero logo is visible in the viewport
- **THEN** the site header does not show the navbar logo (or shows it in a non-visible, non-interactive state)
- **AND** the hero logo remains visible in the hero section

#### Scenario: Navbar logo appears after scrolling past hero logo

- **WHEN** a visitor on `/` scrolls until the hero logo is no longer visible in the viewport
- **THEN** the site header displays the navbar logo with source `/logo.webp`
- **AND** the navbar logo link navigates to `/` (or scrolls to top when already on home)

#### Scenario: Navbar logo hides again when scrolling back to hero

- **WHEN** a visitor on `/` scrolls back until the hero logo is visible again
- **THEN** the navbar logo is hidden again

#### Scenario: Non-home pages always show navbar logo

- **WHEN** a visitor views any page other than `/`
- **THEN** the site header always displays the navbar logo regardless of scroll position

#### Scenario: Smooth visibility transition

- **WHEN** the navbar logo visibility changes on `/` due to scroll
- **THEN** the change uses a CSS transition (opacity and/or width) rather than an abrupt pop-in
