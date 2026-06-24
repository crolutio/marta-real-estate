## ADDED Requirements

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
