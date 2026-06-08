## ADDED Requirements

### Requirement: About Marta Duran section on About Us

The `/about` page SHALL include an "About Marta Duran" section (moved from the former homepage preview) with Marta's portrait image, biographical summary, trust signals, and a link to learn more or equivalent CTA consistent with the former homepage block.

#### Scenario: About page shows About Marta section

- **WHEN** a visitor views `/about`
- **THEN** a section with heading context "About Marta Duran" (or "About {AGENCY.name}") is visible
- **AND** Marta's portrait image (`/marta.jpg` or equivalent) is displayed in that section

#### Scenario: CEO and owner stated

- **WHEN** a visitor reads the About Marta Duran section body copy
- **THEN** the text states that Marta Duran is the CEO and owner of the company

#### Scenario: Smaller portrait than former homepage

- **WHEN** the About Marta portrait is compared to the former homepage `AboutPreview` layout
- **THEN** the image container on `/about` uses a visibly smaller maximum width or height constraint (e.g. `max-w-sm` or equivalent)

### Requirement: Homepage excludes About Marta preview

The homepage SHALL NOT render the About Marta Duran preview section (`AboutPreview`).

#### Scenario: Homepage has no About Marta block

- **WHEN** a visitor views `/`
- **THEN** the About Marta Duran two-column section with portrait is not present
- **AND** `AboutPreview` is not imported or rendered on the homepage

## MODIFIED Requirements

### Requirement: Marta's Story without portrait image

The About page "Marta's Story" section SHALL remain text-only without a second portrait image. The biographical text and section heading MUST remain visible. The primary Marta portrait SHALL appear only in the separate "About Marta Duran" section above or beside the long-form story flow.

#### Scenario: No portrait in story section

- **WHEN** a visitor scrolls to the Marta's Story section on `/about`
- **THEN** no image of Marta is rendered in that section
- **AND** the story paragraphs remain visible

#### Scenario: Layout remains readable

- **WHEN** the story section is viewed
- **THEN** the story content uses a single-column layout with appropriate max-width and spacing consistent with other content sections on the page
