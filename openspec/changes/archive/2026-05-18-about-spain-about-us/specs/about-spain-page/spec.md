## ADDED Requirements

### Requirement: About Spain navigation label

The site navigation and footer SHALL display the link label "About Spain" pointing to `/about-spain`.

#### Scenario: Header nav shows About Spain

- **WHEN** a visitor views any page with the site header
- **THEN** the navigation includes "About Spain" with href `/about-spain`
- **AND** the label "About Barcelona" is not shown

#### Scenario: Footer shows About Spain

- **WHEN** a visitor views the site footer
- **THEN** the footer links include "About Spain" with href `/about-spain`

### Requirement: About Spain page route and metadata

The application SHALL serve the Spain market page at `/about-spain` with page metadata title containing "About Spain" (not "About Barcelona").

#### Scenario: Page loads at new URL

- **WHEN** a visitor navigates to `/about-spain`
- **THEN** the About Spain page content is rendered successfully

#### Scenario: Old URL redirects

- **WHEN** a visitor navigates to `/about-barcelona`
- **THEN** the browser is redirected to `/about-spain` with a permanent redirect

### Requirement: About Spain hero presentation

The About Spain page hero SHALL use Spain-oriented primary heading copy (not "Barcelona luxury real estate" as the main H1) while retaining video hero behavior consistent with the current Barcelona hero component.

#### Scenario: Hero headline reflects Spain

- **WHEN** a visitor views `/about-spain`
- **THEN** the hero section primary heading references Spain (or Spanish luxury real estate), not Barcelona alone as the sole geographic title
