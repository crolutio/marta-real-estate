# Property data â€“ where to get real values

Use this guide to look up **real prices, addresses, unit types, and links** for each development, then update `lib/data/properties.ts`.

---

## Where to find real data

| Source | Use for |
|--------|--------|
| **Official developer / project site** | Prices from, unit types, sizes, handover, official description |
| **Bayut** (bayut.com) | Listings in AED, addresses, map links, current availability |
| **Property Finder** (propertyfinder.ae) | Same as Bayut; cross-check prices |
| **Google Maps** | Exact address, â€œShareâ€ â†’ copy link for `addressLink` / `locationMapLink` |
| **Dubai Land Department** (dubailand.gov.ae) | Official project info and sometimes pricing |

---

## Fields to fill (per property)

| Field | What to put |
|-------|-------------|
| **price** | Number in AED (e.g. 14500000 for 14.5M). Use â€œfromâ€ or starting price if itâ€™s a range. |
| **priceLabel** | `"Prices From"` if itâ€™s a starting price, or `"Listed Price"` for a single unit. |
| **location** | Full street/area (e.g. "Jumeira Bay Island, Jumeira 2"). |
| **neighborhood** | Area name (e.g. "Jumeira 2", "Palm Jumeirah"). |
| **addressLink** | Google Maps share link (from â€œShareâ€ â†’ â€œCopy linkâ€). |
| **locationMapLink** | Same or a different pin if the Location tab should open a specific place. |
| **locationMapQuery** | Only if the embedded map shows the wrong place; use a search string that finds the project (e.g. "Jumeirah Residences Marsa Al Arab Dubai"). |
| **unitTypes** | If development has multiple types, e.g. `"1 to 6 Bed Apartments \| 2 to 4 Bed Marina Lofts"`. |
| **unitSizes** | e.g. `"1,607 to 14,364 ftÂ²"`. |
| **unitBathsRange** | If you have a range, e.g. `"2 to 6"`. |
| **bedrooms, bathrooms, areaSqFt** | Use one representative unit if you donâ€™t use ranges (unitTypes/unitSizes). |

---

## Properties checklist (current list)

8 properties (Eden Hills Villas removed).

| # | Title (current) | Slug | Suggested search / source |
|---|------------------|------|---------------------------|
| 1 | Bvlgari Residences | bulgari-residences-jumeirah-bay | bvlgariresidence.ae, â€œBvlgari Residences Jumeirah Bayâ€ â€“ prices from, unit types/sizes already in line with official (e.g. 1â€“6 bed, 1,607â€“14,364 ftÂ²). Verify **price** (e.g. â€œfrom AED 14.5Mâ€) and **addressLink**. |
| 2 | Jumeirah Residences Marsa Al Arab | marsa-al-arab-residences | â€œJumeirah Residences Marsa Al Arabâ€ â€“ Jumeirah / developer site, Bayut. Verify **price**, **location**, **addressLink** / **locationMapLink**. |
| 3 | Four Seasons Private Residences at Jumeirah | four-seasons-residences-jumeirah | â€œFour Seasons Private Residences Dubai Jumeirahâ€ â€“ official FS or partner site, Bayut. Get **price**, **address**, **unit types/sizes** if available. |
| 4 | One at Palm Residences | one-palm-residences | â€œOne at Palm Dubaiâ€, â€œOne Palm Residencesâ€ â€“ Omniyat/developer, Bayut. Get **price**, **location**, **addressLink**. |
| 5 | The Lana Residences | the-lana-residences | â€œThe Lana Dubaiâ€, â€œLana Residencesâ€ â€“ Dorchester Collection / developer, Bayut. Get **price**, **address**, map link. |
| 6 | Peninsula Residences | peninsula-residences | â€œPeninsula Residences Dubaiâ€ â€“ developer, Bayut. Get **price**, **location**, **addressLink**. |
| 7 | Baccarat Residences | baccarat-residences | â€œBaccarat Residences Dubaiâ€ â€“ developer, Bayut. Get **price**, **location**, **addressLink**. |
| 8 | Dubai Harbour Residences | dubai-harbour-residences | â€œDubai Harbourâ€ + â€œresidencesâ€ â€“ Emaar/developer, Bayut. Get **price**, **location**, **addressLink**. |

---

## Quick links (official / portals)

- **Bvlgari Residences:** https://bvlgariresidence.ae/bvlgari-residences/
- **Bayut (Dubai for sale):** https://www.bayut.com/for-sale/property/dubai/
- **Property Finder:** https://www.propertyfinder.ae/en/buy/dubai
- **Google Maps:** Search project name â†’ Share â†’ Copy link for `addressLink` / `locationMapLink`

---

## After you have the values

1. Open `lib/data/properties.ts`.
2. Find the object for that property (by `slug` or `title`).
3. Update `price`, `priceLabel`, `location`, `neighborhood`, `addressLink`, `locationMapLink`, and if needed `unitTypes`, `unitSizes`, `unitBathsRange`, and descriptions.
4. Save; the site will use the new values.

If you paste one propertyâ€™s real values here (e.g. price, address, map link), the code in `lib/data/properties.ts` can be updated to match.
