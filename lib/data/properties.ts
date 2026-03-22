// Property images from Unsplash - Dubai luxury real estate
// Sources: unsplash.com/s/photos/dubai, unsplash.com/s/photos/dubai-marina,
// unsplash.com/s/photos/luxury-apartment, unsplash.com/s/photos/luxury-villa
const propertyImages = {
  // Dubai exteriors & skyline
  dubaiMarina: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
  dubaiSkyline: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=800&fit=crop",
  palmJumeirah: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
  burjKhalifa: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=800&fit=crop",
  // Luxury interiors
  interior1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
  interior2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
  interior3: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop",
  interior4: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
  // Exteriors
  exterior1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
  exterior2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
  exterior3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
  // Amenities
  pool1: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop",
  pool2: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
  view1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
  view2: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
  // Villas & penthouses
  villa1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
  villa2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
  penthouse1: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
  penthouse2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
};

import { Property } from "@/lib/types";

export const properties: Property[] = [
  // Apartments
  {
    slug: "bulgari-residences-jumeirah-bay",
    title: "Bvlgari Residences",
    location: "Jumeira Bay Island, Jumeira 2",
    neighborhood: "Jumeira 2",
    price: 32500000,
    currency: "AED",
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 2630,
    type: "Apartment",
    shortDescription:
      "Exclusive Bvlgari residences featuring Italian luxury craftsmanship and unparalleled views of the Arabian Gulf.",
    longDescription:
      "Bvlgari Residences at Jumeira Bay Island represents the pinnacle of luxury living. These exclusive residences showcase Bvlgari's legendary Italian craftsmanship, featuring bespoke interiors with premium materials, custom millwork, and state-of-the-art technology. Each residence offers panoramic views of the Arabian Gulf through floor-to-ceiling windows. The residences include private elevators, concierge service, and access to world-class amenities including a private beach, spa, and fine dining.",
    highlights: [
      "Bvlgari signature craftsmanship",
      "Panoramic Arabian Gulf views",
      "Private beach access",
      "Concierge and butler service",
      "State-of-the-art technology integration",
    ],
    amenities: [
      "Private Elevator",
      "Smart Home System",
      "Private Beach Access",
      "Concierge Service",
      "Spa Access",
      "Fine Dining",
      "Valet Parking",
      "Storage Facilities",
    ],
    images: [
      "/properties/bulgari-residences-jumeirah-bay/bulgari-1.webp",
      "/properties/bulgari-residences-jumeirah-bay/bulgari-2.webp",
      "/properties/bulgari-residences-jumeirah-bay/bulgari-3.webp",
      "/properties/bulgari-residences-jumeirah-bay/bulgari-4.webp",
      "/properties/bulgari-residences-jumeirah-bay/bulgari-5.webp",
    ],
    video: "/properties/bulgari-residences-jumeirah-bay/Bvlgari_Residence.mp4",
    addressLink: "https://maps.app.goo.gl/51xXCfx5fYqL7V7U9",
    status: "For Sale",
    featured: true,
  },
  {
    slug: "marsa-al-arab-residences",
    title: "Jumeirah Residences Marsa Al Arab",
    location: "Jumeira St - Umm Suqeim Third - Umm Suqeim 3",
    neighborhood: "Umm Suqeim 3",
    price: 57500000,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 2009,
    type: "Apartment",
    shortDescription:
      "Prestigious residences at the iconic seven-star hotel with unparalleled luxury and service.",
    longDescription:
      "Jumeirah Residences Marsa Al Arab offers the opportunity to own a piece of Dubai's most iconic luxury hotel. These prestigious residences combine the legendary service of a seven-star hotel with the privacy of personal ownership. Each residence features bespoke interiors, private balconies with sea views, and access to the hotel's world-renowned amenities including private beach access, multiple swimming pools, spa facilities, and award-winning restaurants.",
    highlights: [
      "Seven-star hotel ownership",
      "Private beach and marina access",
      "24/7 concierge service",
      "Multiple swimming pools",
      "Award-winning restaurants",
    ],
    amenities: [
      "Beach Access",
      "Marina Access",
      "Concierge Service",
      "Multiple Pools",
      "Spa Facilities",
      "Fitness Center",
      "Restaurant Access",
      "Valet Parking",
    ],
    images: [
      "/properties/marsa-al-arab-residences/marsa-al-arab-1.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-2.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-3.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-4.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-5.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-6.webp",
      "/properties/marsa-al-arab-residences/marsa-al-arab-7.webp",
    ],
    video: "/properties/marsa-al-arab-residences/marsa-al-arab.mp4",
    addressLink: "https://www.google.com/maps/place/Jumeirah+Residences+Marsa+Al+Arab/@25.1442761,55.1879439,17z/data=!4m10!3m9!1s0x3e5f6b5624716593:0x2dd613f31e304f3d!5m3!1s2026-02-10!4m1!1i2!8m2!3d25.1434391!4d55.1917862!16s%2Fg%2F11vq49_mf1?entry=tts",
    locationMapLink: "https://www.google.com/maps/place/Jumeirah+Residences+Marsa+Al+Arab/@25.1442761,55.1879439,17z/data=!4m10!3m9!1s0x3e5f6b5624716593:0x2dd613f31e304f3d!5m3!1s2026-02-10!4m1!1i2!8m2!3d25.1434391!4d55.1917862!16s%2Fg%2F11vq49_mf1?entry=tts",
    locationMapQuery: "Jumeirah Residences Marsa Al Arab Dubai",
    status: "For Sale",
    featured: true,
  },
  {
    slug: "four-seasons-residences-jumeirah",
    title: "Four Seasons Private Residences at Jumeirah",
    location: "45th St - Jumeirah - Jumeirah 2 - Dubai",
    neighborhood: "Jumeirah 2",
    price: 35950000,
    currency: "AED",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 3243,
    type: "Apartment",
    shortDescription:
      "Exclusive Four Seasons-branded residences in Jumeirah with legendary hospitality and impeccable design.",
    longDescription:
      "Four Seasons Private Residences at Jumeirah offers the perfect blend of residential privacy and Four Seasons hotel luxury. These exclusive residences provide owners with access to Four Seasons' renowned hospitality services including concierge, housekeeping, and dining. Each residence features elegant design, premium materials, and expansive outdoor spaces with direct beach access. Located in Jumeirah 2, the development includes a private beach, multiple pools, spa facilities, and beachfront restaurants.",
    highlights: [
      "Four Seasons hospitality services",
      "Private beach access",
      "Concierge and housekeeping",
      "Premium materials and design",
      "Beachfront location",
    ],
    amenities: [
      "Beach Access",
      "Concierge Service",
      "Housekeeping",
      "Multiple Pools",
      "Spa Facilities",
      "Restaurant Access",
      "Valet Parking",
      "Fitness Center",
    ],
    images: [
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-1.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-2.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-3.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-4.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-5.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-6.jpg",
      "/properties/four-seasons-residences-jumeirah/four-seasons-private-residences-7.jpg",
    ],
    addressLink: "https://www.google.com/maps/place/Four+Seasons+Private+Residences+Dubai+at+Jumeirah/@25.1922448,55.2318669,5226m/data=!3m1!1e3!4m6!3m5!1s0x3e5f43105c4aebb7:0xddeb758ec0ca9449!8m2!3d25.1943556!4d55.2407499!16s%2Fg%2F11t6lg9gjt?entry=ttu",
    locationMapLink: "https://www.google.com/maps/place/Four+Seasons+Private+Residences+Dubai+at+Jumeirah/@25.1922448,55.2318669,5226m/data=!3m1!1e3!4m6!3m5!1s0x3e5f43105c4aebb7:0xddeb758ec0ca9449!8m2!3d25.1943556!4d55.2407499!16s%2Fg%2F11t6lg9gjt?entry=ttu",
    locationMapQuery: "Four Seasons Private Residences Dubai at Jumeirah",
    status: "For Sale",
    featured: false,
  },
  {
    slug: "one-palm-residences",
    title: "One at Palm Residences",
    location: "King Salman Bin Abdulaziz Al Saud St - The Palm Jumeirah",
    neighborhood: "Palm Jumeirah",
    price: 59500000,
    currency: "AED",
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 6252,
    type: "Apartment",
    shortDescription:
      "Luxurious waterfront residences on the iconic Palm Jumeirah with stunning marina views.",
    longDescription:
      "One Palm Residences offers luxurious waterfront living on Dubai's iconic Palm Jumeirah. These sophisticated residences feature contemporary design, premium finishes, and stunning views of the marina and Arabian Gulf. Each residence includes spacious living areas, private balconies, and access to comprehensive amenities including a private beach, swimming pools, fitness facilities, and concierge services. The development represents modern luxury with traditional Arabian architectural elements.",
    highlights: [
      "Waterfront marina views",
      "Contemporary design",
      "Private beach access",
      "Premium finishes",
      "Comprehensive amenities",
    ],
    amenities: [
      "Marina Views",
      "Beach Access",
      "Multiple Pools",
      "Fitness Center",
      "Concierge Service",
      "Valet Parking",
      "Restaurant Access",
      "Children's Facilities",
    ],
    images: [
      "/properties/one-palm-residences/one-at-palm-1.webp",
      "/properties/one-palm-residences/one-at-palm-2.webp",
      "/properties/one-palm-residences/one-at-palm-3.webp",
      "/properties/one-palm-residences/one-at-palm-4.webp",
      "/properties/one-palm-residences/one-at-palm-5.webp",
      "/properties/one-palm-residences/one-at-palm-6.webp",
      "/properties/one-palm-residences/one-at-palm-7.webp",
      "/properties/one-palm-residences/one-at-palm-8.webp",
    ],
    addressLink: "https://www.google.com/maps/search/One+at+Palm+Residences+Palm+Jumeirah+Dubai",
    locationMapLink: "https://www.google.com/maps/search/One+at+Palm+Residences+Palm+Jumeirah+Dubai",
    locationMapQuery: "One at Palm Residences Palm Jumeirah Dubai",
    status: "For Sale",
    featured: true,
  },
  {
    slug: "the-lana-residences",
    title: "The Lana Residences",
    location: "Marasi Dr - Business Bay",
    neighborhood: "Business Bay",
    price: 37000000,
    currency: "AED",
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 2455,
    type: "Apartment",
    shortDescription:
      "Sophisticated residences in Business Bay with premium amenities and lifestyle.",
    longDescription:
      "The Lana Residences combines sophistication with vibrant Business Bay living. Located on Marasi Drive, these residences offer premium amenities, contemporary design, and proximity to Dubai's premier dining and entertainment venues. Each residence features high-quality finishes, spacious layouts, and access to comprehensive facilities including swimming pools, fitness centers, children's play areas, and concierge services. The development offers the perfect balance of privacy and urban convenience.",
    highlights: [
      "Business Bay location",
      "Premium amenities",
      "Contemporary design",
      "Marasi Drive waterfront",
      "Urban convenience",
    ],
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "Children's Play Area",
      "Concierge Service",
      "Valet Parking",
      "Restaurant Access",
      "Waterfront Views",
      "BBQ Areas",
    ],
    images: [
      "/properties/the-lana-residences/the-lana-1.webp",
      "/properties/the-lana-residences/the-lana-2.webp",
      "/properties/the-lana-residences/the-lana-3.webp",
      "/properties/the-lana-residences/the-lana-4.webp",
      "/properties/the-lana-residences/the-lana-5.webp",
      "/properties/the-lana-residences/the-lana-6.webp",
      "/properties/the-lana-residences/the-lana-7.webp",
      "/properties/the-lana-residences/the-lana-8.webp",
      "/properties/the-lana-residences/the-lana-9.webp",
      "/properties/the-lana-residences/the-lana-10.webp",
    ],
    addressLink: "https://www.google.com/maps/search/The+Lana+Marasi+Drive+Business+Bay+Dubai",
    locationMapLink: "https://www.google.com/maps/search/The+Lana+Marasi+Drive+Business+Bay+Dubai",
    locationMapQuery: "The Lana Marasi Drive Business Bay Dubai",
    status: "For Sale",
    featured: false,
  },
  {
    slug: "peninsula-residences",
    title: "Peninsula Residences",
    location: "Signature Tower 1 - Business Bay",
    neighborhood: "Business Bay",
    price: 5500000,
    currency: "AED",
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 2000,
    type: "Apartment",
    shortDescription:
      "Elegant beachfront residences with premium amenities and resort-style living.",
    longDescription:
      "Peninsula Residences offers elegant beachfront living with resort-style amenities. These sophisticated residences feature premium finishes, spacious layouts, and direct access to Jumeirah Beach. The development includes comprehensive facilities such as swimming pools, fitness centers, children's play areas, and concierge services. Located in the prestigious Jumeirah Beach Residence area, residents enjoy proximity to Dubai's finest restaurants and shopping destinations.",
    highlights: [
      "Beachfront location",
      "Resort-style amenities",
      "Premium finishes",
      "Jumeirah Beach access",
      "Prestigious area",
    ],
    amenities: [
      "Beach Access",
      "Swimming Pool",
      "Fitness Center",
      "Children's Play Area",
      "Concierge Service",
      "Valet Parking",
      "Restaurant Proximity",
      "Shopping Access",
    ],
    images: [
      "/properties/peninsula-residences/peninsula-residences-1.webp",
      "/properties/peninsula-residences/peninsula-residences-2.webp",
      "/properties/peninsula-residences/peninsula-residences-3.webp",
      "/properties/peninsula-residences/peninsula-residences-4.webp",
      "/properties/peninsula-residences/peninsula-residences-5.webp",
      "/properties/peninsula-residences/peninsula-residences-6.webp",
      "/properties/peninsula-residences/peninsula-residences-7.webp",
    ],
    addressLink: "https://www.google.com/maps/search/Peninsula+Residences/@25.1851268,55.2679682,17z?entry=s",
    locationMapLink: "https://www.google.com/maps/search/Peninsula+Residences/@25.1851268,55.2679682,17z?entry=s",
    locationMapQuery: "Peninsula Residences Business Bay Dubai",
    status: "For Sale",
    featured: false,
  },
  {
    slug: "baccarat-residences",
    title: "Baccarat Residences",
    location: "Baccarat Residences",
    neighborhood: "Business Bay",
    price: 21250000,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 2867,
    type: "Apartment",
    shortDescription:
      "Ultra-luxury residences featuring Baccarat crystal craftsmanship and unparalleled elegance.",
    longDescription:
      "Baccarat Residences represents the ultimate in luxury living, featuring Baccarat crystal craftsmanship throughout. These ultra-luxury residences offer unparalleled elegance with bespoke interiors, premium materials, and world-class amenities. Located in Business Bay, the development provides residents with proximity to Dubai's financial district while offering resort-style facilities including private pools, spas, and fine dining. Each residence is a masterpiece of luxury design.",
    highlights: [
      "Baccarat crystal craftsmanship",
      "Ultra-luxury interiors",
      "World-class amenities",
      "Business Bay location",
      "Resort-style facilities",
    ],
    amenities: [
      "Private Pool",
      "Spa Facilities",
      "Fine Dining",
      "Concierge Service",
      "Valet Parking",
      "Fitness Center",
      "Business District Access",
      "Crystal Craftsmanship",
    ],
    images: [
      "/properties/baccarat-residences/baccarat-residences-1.png",
      "/properties/baccarat-residences/baccarat-residences-2.png",
      "/properties/baccarat-residences/baccarat-residences-3.png",
      "/properties/baccarat-residences/baccarat-residences-4.png",
      "/properties/baccarat-residences/baccarat-residences-5.png",
      "/properties/baccarat-residences/baccarat-residences-6.png",
      "/properties/baccarat-residences/baccarat-residences-7.png",
      "/properties/baccarat-residences/baccarat-residences-8.png",
      "/properties/baccarat-residences/baccarat-residences-9.png",
      "/properties/baccarat-residences/baccarat-residences-10.png",
      "/properties/baccarat-residences/baccarat-residences-11.png",
    ],
    addressLink: "https://www.google.com/maps/search/Baccarat+Residences+Business+Bay+Dubai",
    locationMapLink: "https://www.google.com/maps/search/Baccarat+Residences+Business+Bay+Dubai",
    status: "For Sale",
  },
  {
    slug: "dubai-harbour-residences",
    title: "Dubai Harbour Residences",
    location: "Dubai Harbour",
    neighborhood: "Dubai Harbour",
    price: 7000000,
    currency: "AED",
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 2100,
    type: "Apartment",
    shortDescription:
      "Modern waterfront residences in Dubai Harbour with premium amenities and lifestyle.",
    longDescription:
      "Dubai Harbour Residences offers modern waterfront living in the vibrant Dubai Harbour district. These contemporary residences feature sleek design, premium finishes, and access to comprehensive lifestyle amenities. Located in Dubai's newest waterfront destination, the development includes swimming pools, fitness centers, children's facilities, and proximity to retail and entertainment venues. The residences offer the perfect blend of modern luxury and urban convenience.",
    highlights: [
      "Waterfront location",
      "Modern design",
      "Premium amenities",
      "Dubai Harbour lifestyle",
      "Urban convenience",
    ],
    amenities: [
      "Waterfront Views",
      "Swimming Pool",
      "Fitness Center",
      "Children's Facilities",
      "Retail Access",
      "Entertainment Proximity",
      "Concierge Service",
      "Valet Parking",
    ],
    images: [
      "/properties/dubai-harbour-residences/dubai-harbour-1.png",
      "/properties/dubai-harbour-residences/dubai-harbour-2.png",
      "/properties/dubai-harbour-residences/dubai-harbour-3.png",
      "/properties/dubai-harbour-residences/dubai-harbour-4.png",
      "/properties/dubai-harbour-residences/dubai-harbour-5.png",
      "/properties/dubai-harbour-residences/dubai-harbour-6.png",
      "/properties/dubai-harbour-residences/dubai-harbour-7.png",
    ],
    addressLink: "https://www.google.com/maps/place/Dubai+Harbour+Residences/@25.0939584,55.1362445,889m/data=!3m1!1e3!4m10!1m2!2m1!1sDubai+Harbour+Residences!3m6!1s0x3e5f6b00714342d5:0xab01e3ed667a12ef!8m2!3d25.0939584!4d55.1410081!15sChhEdWJhaSBIYXJib3VyIFJlc2lkZW5jZXOSARNob3VzaW5nX2RldmVsb3BtZW50!16s%2Fg%2F11ldjqx3zn?entry=ttu",
    locationMapLink: "https://www.google.com/maps/place/Dubai+Harbour+Residences/@25.0939584,55.1362445,889m/data=!3m1!1e3!4m10!1m2!2m1!1sDubai+Harbour+Residences!3m6!1s0x3e5f6b00714342d5:0xab01e3ed667a12ef!8m2!3d25.0939584!4d55.1410081!15sChhEdWJhaSBIYXJib3VyIFJlc2lkZW5jZXOSARNob3VzaW5nX2RldmVsb3BtZW50!16s%2Fg%2F11ldjqx3zn?entry=ttu",
    status: "For Sale",
  },
];

// Helper functions
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertiesByStatus(status: Property["status"]): Property[] {
  return properties.filter((p) => p.status === status);
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);
}

/** Price string for listing card: from price with optional "+", never shows priceMax */
export function formatPriceForPreview(
  price: number,
  currency: string,
  priceFromPlus?: boolean
): string {
  const formatted = formatPrice(price, currency);
  return priceFromPlus ? `${formatted}+` : formatted;
}

/** Price string for property detail: from price with optional "+" and "up to priceMax" */
export function formatPriceForDetail(
  price: number,
  currency: string,
  options?: { priceFromPlus?: boolean; priceMax?: number }
): string {
  const formatted = formatPrice(price, currency);
  const fromStr = options?.priceFromPlus ? `${formatted}+` : formatted;
  if (options?.priceMax != null) {
    return `${fromStr} up to ${formatPrice(options.priceMax, currency)}`;
  }
  return fromStr;
}
