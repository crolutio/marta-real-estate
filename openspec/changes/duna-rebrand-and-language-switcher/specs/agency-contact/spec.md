## MODIFIED Requirements

### Requirement: Agency contact email

The agency's public contact email SHALL be `info@duna-partners.com`, defined once in `lib/constants.ts` (`AGENCY.email`) and referenced everywhere an email is displayed or linked (footer, contact page, property inquiry, invest form, legal pages).

#### Scenario: Footer shows the info email

- **WHEN** a visitor views the site footer contact block
- **THEN** the email displayed and its `mailto:` link resolve to `info@duna-partners.com`

#### Scenario: Contact and property links use the info email

- **WHEN** a visitor clicks any email link on the contact page, a property page, or the invest form
- **THEN** the `mailto:` target is `info@duna-partners.com`
