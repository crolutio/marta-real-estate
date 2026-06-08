## ADDED Requirements

### Requirement: FAQ answers without bold body text

On the About Dubai page FAQ section, answer body text and list items SHALL NOT use bold emphasis (`<strong>` or equivalent bold styling on answer content). FAQ question headings MAY retain their existing heading styles.

#### Scenario: Tax benefits answer has no bold list items

- **WHEN** a visitor reads the FAQ answer about tax benefits
- **THEN** list items such as "No property tax" are plain text without bold styling

#### Scenario: Off-plan and market outlook answers have no bold list items

- **WHEN** a visitor reads FAQ answers that previously used bold phrases (e.g. payment plans, rental yields)
- **THEN** those phrases appear as normal-weight text within list items or paragraphs
