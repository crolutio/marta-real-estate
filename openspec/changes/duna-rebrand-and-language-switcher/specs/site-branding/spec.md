## ADDED Requirements

### Requirement: Footer copyright reflects Duna Partners brand

The footer bottom bar SHALL display the copyright brand name "Duna Partners Real Estate" (e.g. "© {year} Duna Partners Real Estate. All rights reserved."). The brand name and "All rights reserved" text SHALL be translatable with the active site language.

#### Scenario: Footer copyright shows Duna Partners

- **WHEN** a visitor views the footer
- **THEN** the copyright line reads "© {current year} Duna Partners Real Estate" followed by the localized "All rights reserved" text

### Requirement: Mobile menu displays the brand logo

When the mobile side menu (drawer) is opened, its header SHALL display the same theme-aware brand logo used in the desktop navbar (`/logo.webp` in dark mode, `/logo-black.webp` in light mode) instead of a plain text title. An accessible title SHALL remain available to assistive technology.

#### Scenario: Logo appears at top of mobile menu

- **WHEN** a visitor opens the mobile side menu
- **THEN** the brand logo image is shown at the top of the drawer
- **AND** the logo variant matches the current theme (light/dark)
- **AND** an accessible name for the dialog is still exposed to screen readers
