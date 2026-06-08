## ADDED Requirements

### Requirement: No minimum investment threshold on Invest page

The Invest page SHALL NOT display "From AED 10,000,000" in page body copy or in the page metadata description.

#### Scenario: Hero bullet list excludes minimum investment

- **WHEN** a visitor views the Invest page hero bullet list
- **THEN** no list item contains "From AED 10,000,000"

#### Scenario: Metadata excludes minimum investment

- **WHEN** the Invest page metadata description is inspected
- **THEN** it does not include "From AED 10,000,000"

### Requirement: No active investment opportunities categories section

The Invest page SHALL NOT render the "Active investment opportunities in Dubai" section or its category tabs and property cards.

#### Scenario: Categories section absent

- **WHEN** a visitor scrolls through the Invest page
- **THEN** the heading "Active investment opportunities in Dubai" is not present
- **AND** invest category tabs (Affordable luxury, Luxury, Ultra-luxury) are not present

#### Scenario: InvestAnalysisForm remains

- **WHEN** a visitor views the Invest page
- **THEN** the investment analysis / contact form section remains available below the remaining hero and opportunity content
