## ADDED Requirements

### Requirement: Curated active property listings

The property catalog SHALL include only active listings maintained in `lib/data/properties.ts`. Retired listings MUST NOT appear on `/properties`, featured property sections, or property detail pages.

#### Scenario: Removed properties absent from listings page

- **WHEN** a visitor views `/properties`
- **THEN** the following properties are not shown: Golf Vale, Fior 1, Edition Residences, Bella by Passo, Casa Burés, AM Residences

#### Scenario: Removed property detail URLs unavailable

- **WHEN** a visitor navigates to a detail URL for a removed property slug
- **THEN** the page does not render that property listing (404 or not-found behavior)

#### Scenario: Featured sections exclude removed properties

- **WHEN** a visitor views homepage featured properties or any other property carousel fed from the catalog
- **THEN** none of the six removed properties appear
