## ADDED Requirements

### Requirement: Site language selection

The site SHALL support selecting the display language among English, Spanish, and German via a control in the desktop navigation bar. The selected language SHALL be persisted in `localStorage` and restored on subsequent visits, and the document `lang` attribute SHALL be updated to match.

#### Scenario: Desktop language switcher available

- **WHEN** a visitor views the site on a desktop viewport
- **THEN** a language switcher is present in the navbar offering English, Español, and Deutsch
- **AND** the currently active language is indicated

#### Scenario: Selecting a language updates the UI

- **WHEN** a visitor selects Spanish or German from the switcher
- **THEN** the translated site chrome (navigation labels, footer, homepage hero) updates to the selected language without a full page reload
- **AND** the `<html lang>` attribute reflects the selected language

#### Scenario: Language preference persists

- **WHEN** a visitor who previously selected a language returns to the site
- **THEN** the previously selected language is applied automatically

### Requirement: Translated persistent site chrome

The always-visible site chrome — primary navigation labels, footer (description, contact heading, copyright, legal link labels), and the homepage hero (eyebrow, headline, primary CTA) — SHALL render in the active language using accurate English, Spanish, and German translations. Strings without a translation for the active language SHALL fall back to English.

#### Scenario: Navigation labels translate

- **WHEN** the active language is Spanish or German
- **THEN** the navigation labels (Home, Properties, Invest, About Dubai, Services, About Spain, About Us, Contact) render in that language

#### Scenario: Footer and hero translate

- **WHEN** the active language is Spanish or German
- **THEN** the footer description, "Contact" heading, copyright/rights text, legal link labels, and the homepage hero eyebrow, headline, and CTA render in that language

#### Scenario: Missing translation falls back to English

- **WHEN** a string has no translation defined for the active language
- **THEN** the English text is shown instead of an empty value or the raw key
