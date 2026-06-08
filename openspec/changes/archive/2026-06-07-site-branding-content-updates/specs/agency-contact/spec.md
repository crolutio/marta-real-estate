## ADDED Requirements

### Requirement: Canonical agency email

The agency contact email SHALL be `marta@duna-partners.com`, defined in `AGENCY.email` and used for all sitewide mailto links and displayed contact email addresses.

#### Scenario: Constants define new email

- **WHEN** `lib/constants.ts` is inspected
- **THEN** `AGENCY.email` equals `marta@duna-partners.com`

#### Scenario: Footer shows new email

- **WHEN** a visitor views the site footer contact block
- **THEN** the displayed email is `marta@duna-partners.com`
- **AND** the mailto link targets `marta@duna-partners.com`

#### Scenario: Contact page shows new email

- **WHEN** a visitor views `/contact`
- **THEN** the displayed agency email is `marta@duna-partners.com`
