## ADDED Requirements

### Requirement: About Us navigation label

The site navigation and footer SHALL display the link label "About Us" for the agency page at `/about`.

#### Scenario: Header nav shows About Us

- **WHEN** a visitor views any page with the site header
- **THEN** the navigation includes "About Us" with href `/about`
- **AND** the label "Meet Marta" is not shown

#### Scenario: Footer shows About Us

- **WHEN** a visitor views the site footer
- **THEN** the footer links include "About Us" with href `/about`

### Requirement: About page metadata

The `/about` page metadata title SHALL be "About Us" (or equivalent including "About Us"), not framed as "Meet Marta."

#### Scenario: Browser title reflects About Us

- **WHEN** a visitor opens `/about`
- **THEN** the document title exposed via Next.js metadata includes "About Us"

### Requirement: Marta's Story without portrait image

The About page "Marta's Story" section SHALL NOT display Marta's portrait image (`/marta.jpg` or equivalent). The biographical text and section heading MUST remain visible.

#### Scenario: No portrait in story section

- **WHEN** a visitor scrolls to the Marta's Story section on `/about`
- **THEN** no image of Marta is rendered in that section
- **AND** the story paragraphs remain visible

#### Scenario: Layout remains readable

- **WHEN** the portrait column is removed
- **THEN** the story content uses a single-column layout with appropriate max-width and spacing consistent with other content sections on the page
