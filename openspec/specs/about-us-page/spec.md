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

### Requirement: Marta's Story without portrait image

The About page "Marta's Story" section SHALL remain text-only without a second portrait image. The biographical text and section heading MUST remain visible. The primary Marta portrait SHALL appear only in the separate "About Marta Duran" section above or beside the long-form story flow.

#### Scenario: No portrait in story section

- **WHEN** a visitor scrolls to the Marta's Story section on `/about`
- **THEN** no image of Marta is rendered in that section
- **AND** the story paragraphs remain visible

#### Scenario: Layout remains readable

- **WHEN** the story section is viewed
- **THEN** the story content uses a single-column layout with appropriate max-width and spacing consistent with other content sections on the page

### Requirement: Tighter About Marta two-column spacing

The About Marta Duran section on `/about` SHALL use reduced horizontal spacing between the portrait column and the text column compared to the current `gap-12 lg:gap-20` layout, so the image sits visibly closer to the copy.

#### Scenario: Portrait sits closer to copy on desktop

- **WHEN** a visitor views the About Marta Duran section on `/about` at `lg` breakpoint or wider
- **THEN** the gap between the portrait and the text column is smaller than the previous `lg:gap-20` spacing
- **AND** the portrait remains in the left column with text in the right column

#### Scenario: Mobile layout unchanged

- **WHEN** a visitor views the About Marta Duran section on a narrow viewport
- **THEN** the section remains readable with stacked or responsive layout (no horizontal overflow)

### Requirement: Compact floating stats overlay

The floating stats card on Marta's portrait in the About Marta Duran section SHALL display "Years Experience" and "In Transactions" values in a more compact form with reduced padding, typography size, and overall footprint.

#### Scenario: Stats card is visually smaller

- **WHEN** a visitor views the About Marta Duran section on `/about` at `md` breakpoint or wider
- **THEN** the floating stats overlay showing experience and transaction figures uses smaller padding and font sizes than the previous `p-4` / `text-2xl` styling
- **AND** the overlay max width is reduced relative to the previous `max-w-[220px]` constraint

#### Scenario: Stats values remain readable

- **WHEN** a visitor reads the floating stats overlay
- **THEN** the "10+" (or equivalent) Years Experience and "$2B+" (or equivalent) In Transactions values and labels are still legible
