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
