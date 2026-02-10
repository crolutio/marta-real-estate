// Property Types
export type PropertyStatus = "For Sale" | "For Rent" | "Off-Market";
export type PropertyType =
  | "Penthouse"
  | "Villa"
  | "Mansion"
  | "Apartment"
  | "Estate"
  | "Townhouse";
export type Currency = "USD" | "EUR" | "GBP" | "AED";

export interface Property {
  slug: string;
  title: string;
  location: string;
  neighborhood?: string;
  price: number;
  currency: Currency;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  type: PropertyType;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  status: PropertyStatus;
  featured?: boolean;
  new?: boolean;
  /** Optional video path (e.g. /properties/slug/video.mp4). When set, gallery can show video only. */
  video?: string;
  /** e.g. "Prices From" - shown instead of "Listed Price" when set */
  priceLabel?: string;
  /** e.g. "1 to 6 Bed Apartments | 2 to 4 Bed Marina Lofts" - shown in key facts when set */
  unitTypes?: string;
  /** e.g. "1,607 sq.ft to 14,364 sq.ft" - shown in key facts when set */
  unitSizes?: string;
  /** When set, the location/address on the property page becomes a link to this URL (e.g. Google Maps). */
  addressLink?: string;
  /** Optional separate link for the Location tab map (e.g. different Google Maps pin). When set, Location tab uses this for "View on Google Maps". */
  locationMapLink?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyInterest?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
}
