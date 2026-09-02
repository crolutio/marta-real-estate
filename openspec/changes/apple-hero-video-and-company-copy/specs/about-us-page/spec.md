## MODIFIED Requirements

### Requirement: About Marta Duran section on About Us

The `/about` page SHALL include a company introduction section in the position formerly occupied by the homepage About Marta Duran preview. The section SHALL present company-level copy about Duna Partners Real Estate — not Marta's biography — organised as a titled block with headed subsections. It SHALL retain the trust signals from the former homepage block. It SHALL NOT contain Marta's portrait, her floating stats overlay, or her biographical summary; all three live in the "Marta's Story" section below.

#### Scenario: About page shows company introduction section

- **WHEN** a visitor views `/about`
- **THEN** a section introducing the company is visible in the position formerly held by the About Marta Duran preview
- **AND** the trust signals (top agent, client count, global network) remain visible

#### Scenario: Company block carries no portrait

- **WHEN** a visitor views the company introduction section
- **THEN** no portrait of Marta is rendered in that section
- **AND** no personal stats overlay is rendered in that section
- **AND** the copy occupies a single readable column rather than sitting beside an image

#### Scenario: Company copy replaces the personal biography

- **WHEN** a visitor reads the body copy of this section
- **THEN** the copy describes the company, the Dubai investment market, and the firm's advisory approach
- **AND** the copy does not state that Marta Duran is the CEO and owner of the company
- **AND** the copy does not restate her years of experience or her Master of Laws qualification

#### Scenario: Copy is organised under visible subsection headings

- **WHEN** a visitor views this section
- **THEN** the section carries a title covering the firm's role as an investment partner in Dubai
- **AND** at least two subsection headings are rendered within the body copy
- **AND** each subsection heading is followed by its own paragraphs

#### Scenario: Section eyebrow is company-level

- **WHEN** a visitor reads the eyebrow label above this section's title
- **THEN** the label refers to the company rather than to Marta personally
- **AND** the label "About Marta Duran" is not shown on this section

#### Scenario: Marta's biography is not duplicated on the page

- **WHEN** a visitor reads `/about` from top to bottom
- **THEN** Marta's biographical detail appears only once, in the "Marta's Story" section
- **AND** no paragraph of her biography appears in both sections

#### Scenario: Copy is available in every supported locale

- **WHEN** a visitor views `/about` with the site language set to English, Spanish, or German
- **THEN** the company copy, its title, and all its subsection headings render in that language
- **AND** no untranslated placeholder or English fallback string is shown

### Requirement: Marta's Story without portrait image

The About page "Marta's Story" section SHALL display Marta's portrait alongside her biographical text. The portrait is the only portrait of Marta on the page — the company introduction section above SHALL NOT carry one. The section SHALL use a two-column layout on `lg` and wider viewports with the portrait in the narrower left column and the story paragraphs in the wider right column, and SHALL stack readably on narrow viewports.

#### Scenario: Portrait appears in the story section

- **WHEN** a visitor scrolls to the Marta's Story section on `/about`
- **THEN** Marta's portrait image (`/marta.jpg` or equivalent) is rendered in that section
- **AND** the story paragraphs remain visible

#### Scenario: Only one portrait on the page

- **WHEN** a visitor views `/about` from top to bottom
- **THEN** Marta's portrait appears exactly once
- **AND** it appears in the Marta's Story section

#### Scenario: Two-column layout on desktop

- **WHEN** the story section is viewed at `lg` breakpoint or wider
- **THEN** the portrait occupies the narrower left column and the story text the wider right column
- **AND** the portrait is aligned to the top of its column rather than vertically centred against the long text

#### Scenario: Stacked layout on mobile

- **WHEN** the story section is viewed on a narrow viewport
- **THEN** the portrait and story text stack vertically without horizontal overflow
- **AND** the content remains readable with spacing consistent with other sections on the page

#### Scenario: Portrait size constraint retained

- **WHEN** the portrait is rendered in the story section
- **THEN** its container uses a maximum width constraint of `max-w-sm` or equivalent, matching the constraint it carried in its former location

### Requirement: Compact floating stats overlay

The floating stats card on Marta's portrait SHALL be rendered in the "Marta's Story" section, following the portrait to its new location. It SHALL display "Years Experience" and "In Transactions" values in a compact form with reduced padding, typography size, and overall footprint.

#### Scenario: Stats card accompanies the portrait

- **WHEN** a visitor views the Marta's Story section on `/about` at `md` breakpoint or wider
- **THEN** the floating stats overlay is rendered over Marta's portrait in that section
- **AND** it is not rendered in the company introduction section above

#### Scenario: Stats card is visually smaller

- **WHEN** a visitor views the floating stats overlay
- **THEN** it uses smaller padding and font sizes than the previous `p-4` / `text-2xl` styling
- **AND** the overlay max width is reduced relative to the previous `max-w-[220px]` constraint

#### Scenario: Stats values remain readable

- **WHEN** a visitor reads the floating stats overlay
- **THEN** the "10+" (or equivalent) Years Experience and "+AED200M" (or equivalent) In Transactions values and labels are still legible

## REMOVED Requirements

### Requirement: Tighter About Marta two-column spacing

**Reason**: This requirement governs the horizontal gap between Marta's portrait column and the copy column inside the About Marta Duran block. That block is now company introduction copy with no portrait and a single-column layout, so there is no portrait-to-copy gap left to constrain.

**Migration**: The portrait's layout relationship to its accompanying text is now specified by the `Marta's Story without portrait image` requirement, which defines the two-column grid and top alignment in the story section. No visitor-facing behavior is lost — the spacing concern moves with the portrait.
