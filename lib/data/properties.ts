import { Property } from "@/lib/types";

// Placeholder images from Unsplash (luxury architecture/interiors)
const placeholderImages = {
  exterior1:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
  exterior2:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
  exterior3:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
  interior1:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
  interior2:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
  interior3:
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop",
  pool1:
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop",
  view1:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
  penthouse1:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
  penthouse2:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
  villa1:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
  villa2:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
};

export const properties: Property[] = [
  {
    slug: "azure-penthouse-marina-district",
    title: "Azure Penthouse",
    location: "Marina District",
    neighborhood: "Waterfront",
    price: 15500000,
    currency: "USD",
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 8500,
    type: "Penthouse",
    shortDescription:
      "Breathtaking full-floor penthouse with panoramic marina views and private rooftop terrace.",
    longDescription:
      "This exceptional full-floor penthouse represents the pinnacle of waterfront living. Spanning 8,500 square feet across a single level, the residence offers unobstructed 360-degree views of the marina and city skyline. The open-plan living areas feature floor-to-ceiling windows, custom millwork, and museum-quality finishes throughout. A private elevator opens directly into the foyer, ensuring complete privacy. The chef's kitchen boasts top-tier appliances and a temperature-controlled wine room. The primary suite includes a spa-inspired bathroom, dual walk-in closets, and a private terrace. Additional features include a media room, home office, and staff quarters.",
    highlights: [
      "Full-floor residence with 360° views",
      "Private rooftop terrace with infinity pool",
      "Custom Italian kitchen with wine cellar",
      "Smart home automation throughout",
      "24/7 concierge and security",
    ],
    amenities: [
      "Private Elevator",
      "Rooftop Pool",
      "Wine Cellar",
      "Home Theater",
      "Gym",
      "Staff Quarters",
      "3 Parking Spaces",
      "Storage Unit",
    ],
    images: [
      placeholderImages.penthouse1,
      placeholderImages.interior1,
      placeholderImages.interior2,
      placeholderImages.view1,
      placeholderImages.pool1,
    ],
    status: "For Sale",
    featured: true,
    new: true,
  },
  {
    slug: "villa-serena-coastal-heights",
    title: "Villa Serena",
    location: "Coastal Heights",
    neighborhood: "Oceanfront",
    price: 28000000,
    currency: "USD",
    bedrooms: 7,
    bathrooms: 9,
    areaSqFt: 15000,
    type: "Villa",
    shortDescription:
      "Mediterranean-inspired oceanfront estate with private beach access and guest pavilion.",
    longDescription:
      "Villa Serena is a masterpiece of Mediterranean architecture set on two acres of meticulously landscaped oceanfront grounds. The main residence features seven bedroom suites, each with its own terrace and en-suite bathroom. Grand living spaces include a formal living room with coffered ceilings, an intimate library, and a chef's kitchen that opens to the garden. The grounds feature a 60-foot infinity pool, outdoor kitchen, tennis court, and a private pathway to the beach. A separate guest pavilion offers complete independence for visitors. The estate includes a four-car garage with additional collector's parking.",
    highlights: [
      "2 acres of oceanfront grounds",
      "Private beach access",
      "Separate guest pavilion",
      "60-foot infinity pool",
      "Tennis court",
    ],
    amenities: [
      "Beach Access",
      "Infinity Pool",
      "Tennis Court",
      "Guest House",
      "Outdoor Kitchen",
      "Wine Cellar",
      "Home Gym",
      "6-Car Garage",
    ],
    images: [
      placeholderImages.villa1,
      placeholderImages.exterior1,
      placeholderImages.pool1,
      placeholderImages.interior1,
      placeholderImages.interior3,
    ],
    status: "For Sale",
    featured: true,
  },
  {
    slug: "the-observatory-downtown",
    title: "The Observatory",
    location: "Downtown Financial District",
    neighborhood: "City Center",
    price: 9800000,
    currency: "USD",
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 5200,
    type: "Penthouse",
    shortDescription:
      "Architectural masterpiece in the city's tallest tower with unrivaled skyline views.",
    longDescription:
      "Perched atop the city's most prestigious address, The Observatory redefines urban luxury. This architectural tour de force features a dramatic double-height living room with 20-foot ceilings and floor-to-ceiling glass walls. The residence showcases museum-quality contemporary design with custom lighting installations, polished concrete floors, and an open floor plan that maximizes the extraordinary views. The gourmet kitchen features a floating island and integrated dining area. The primary suite spans the entire east wing, offering sunrise views and a spa bathroom with freestanding soaking tub.",
    highlights: [
      "Double-height ceilings (20 ft)",
      "Floor-to-ceiling windows on all sides",
      "Custom lighting installations",
      "Sunrise and sunset views",
      "Building amenities include helipad",
    ],
    amenities: [
      "Concierge",
      "Building Pool",
      "Fitness Center",
      "Spa",
      "Private Dining Room",
      "Helipad Access",
      "2 Parking Spaces",
      "Climate-Controlled Storage",
    ],
    images: [
      placeholderImages.penthouse2,
      placeholderImages.interior2,
      placeholderImages.view1,
      placeholderImages.interior1,
    ],
    status: "For Sale",
    featured: true,
  },
  {
    slug: "chateau-blanc-old-town",
    title: "Château Blanc",
    location: "Old Town Historic District",
    neighborhood: "Heritage Quarter",
    price: 35000000,
    currency: "USD",
    bedrooms: 8,
    bathrooms: 10,
    areaSqFt: 18000,
    type: "Mansion",
    shortDescription:
      "Meticulously restored 19th-century mansion with modern amenities and private gardens.",
    longDescription:
      "Château Blanc stands as a testament to timeless elegance, combining 19th-century grandeur with contemporary luxury. This landmark property has been painstakingly restored over five years, preserving original details including hand-painted ceilings, marble fireplaces, and period moldings, while integrating state-of-the-art systems. The mansion features eight bedroom suites, formal reception rooms, a ballroom that seats 100, and a commercial-grade kitchen. The private gardens span half an acre and include a heated pool, outdoor entertaining pavilion, and centuries-old trees. A carriage house provides additional guest accommodation or staff housing.",
    highlights: [
      "Landmark 19th-century mansion",
      "Half-acre private gardens",
      "Ballroom seats 100 guests",
      "Original architectural details preserved",
      "Carriage house included",
    ],
    amenities: [
      "Private Gardens",
      "Heated Pool",
      "Ballroom",
      "Carriage House",
      "Wine Cellar",
      "Library",
      "Multiple Fireplaces",
      "4-Car Garage",
    ],
    images: [
      placeholderImages.exterior2,
      placeholderImages.interior3,
      placeholderImages.interior1,
      placeholderImages.pool1,
      placeholderImages.exterior3,
    ],
    status: "For Sale",
  },
  {
    slug: "skyline-residence-central-park",
    title: "Skyline Residence",
    location: "Central Park West",
    neighborhood: "Parkside",
    price: 22000000,
    currency: "USD",
    bedrooms: 5,
    bathrooms: 5,
    areaSqFt: 6800,
    type: "Apartment",
    shortDescription:
      "Corner residence in pre-war cooperative with direct park views and gracious proportions.",
    longDescription:
      "This magnificent corner residence in one of the city's most coveted pre-war cooperatives offers an extraordinary combination of location, views, and scale. With direct Central Park views from every room, the apartment features 11-foot beamed ceilings, herringbone floors, and oversized windows that flood the space with natural light. The gracious layout includes a formal entry gallery, 40-foot living room, separate dining room, library, eat-in kitchen, and five bedroom suites. Building amenities include white-glove service, private garden, and fitness center.",
    highlights: [
      "Direct Central Park views",
      "Pre-war architectural details",
      "11-foot beamed ceilings",
      "40-foot living room",
      "White-glove building",
    ],
    amenities: [
      "Doorman",
      "Concierge",
      "Private Garden",
      "Fitness Center",
      "Storage",
      "Bike Room",
      "Laundry",
      "Parking Available",
    ],
    images: [
      placeholderImages.interior2,
      placeholderImages.view1,
      placeholderImages.interior1,
      placeholderImages.interior3,
    ],
    status: "For Sale",
  },
  {
    slug: "palm-estate-island-shores",
    title: "Palm Estate",
    location: "Island Shores",
    neighborhood: "Private Island",
    price: 45000000,
    currency: "USD",
    bedrooms: 9,
    bathrooms: 12,
    areaSqFt: 22000,
    type: "Estate",
    shortDescription:
      "Gated waterfront compound on 3 acres with private dock and guest houses.",
    longDescription:
      "Palm Estate represents the ultimate in private waterfront living. This gated compound on three manicured acres features a 22,000-square-foot main residence, two guest cottages, staff quarters, and a boat house with private 150-foot dock. The main house showcases British Colonial architecture with modern interiors, including a two-story great room, formal and informal living spaces, and a professional chef's kitchen. The grounds feature a resort-style pool, spa, outdoor kitchen, and tropical gardens. Additional amenities include a full-sized tennis court, basketball court, and putting green.",
    highlights: [
      "3-acre gated waterfront compound",
      "150-foot private dock",
      "Two guest cottages",
      "Resort-style pool and spa",
      "Tennis and basketball courts",
    ],
    amenities: [
      "Private Dock",
      "Guest Houses",
      "Staff Quarters",
      "Pool & Spa",
      "Tennis Court",
      "Basketball Court",
      "Putting Green",
      "8-Car Garage",
    ],
    images: [
      placeholderImages.villa2,
      placeholderImages.pool1,
      placeholderImages.exterior1,
      placeholderImages.interior1,
      placeholderImages.interior2,
    ],
    status: "For Sale",
    featured: true,
  },
  {
    slug: "the-residences-tower-one",
    title: "The Residences at Tower One",
    location: "Harbor Point",
    neighborhood: "Waterfront",
    price: 7500000,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 3800,
    type: "Apartment",
    shortDescription:
      "Designer-finished residence in iconic waterfront tower with world-class amenities.",
    longDescription:
      "This impeccably designed residence showcases the finest in contemporary waterfront living. Located in the city's most iconic tower, the apartment features interiors by a renowned design firm, with custom finishes throughout including wide-plank oak floors, Venetian plaster walls, and a chef's kitchen with marble countertops and integrated appliances. Floor-to-ceiling windows frame spectacular harbor views from every room. The building offers exceptional amenities including an infinity pool, spa, private cinema, golf simulator, and renowned in-house restaurant.",
    highlights: [
      "Designer interiors throughout",
      "Spectacular harbor views",
      "World-class building amenities",
      "In-house restaurant",
      "Infinity pool and spa",
    ],
    amenities: [
      "24/7 Concierge",
      "Infinity Pool",
      "Spa & Fitness",
      "Private Cinema",
      "Golf Simulator",
      "Restaurant",
      "Valet Parking",
      "Wine Storage",
    ],
    images: [
      placeholderImages.interior1,
      placeholderImages.view1,
      placeholderImages.penthouse1,
      placeholderImages.pool1,
    ],
    status: "For Sale",
    new: true,
  },
  {
    slug: "heritage-townhouse-beacon-hill",
    title: "Heritage Townhouse",
    location: "Beacon Hill",
    neighborhood: "Historic District",
    price: 12500000,
    currency: "USD",
    bedrooms: 6,
    bathrooms: 6,
    areaSqFt: 7200,
    type: "Townhouse",
    shortDescription:
      "Landmark Federal-style townhouse with private garden and carriage house.",
    longDescription:
      "This exceptional Federal-style townhouse, dating to 1820, has been thoughtfully updated while preserving its extraordinary architectural heritage. The five-story residence features original details including nine fireplaces, curved staircase, and floor-to-ceiling windows with original shutters. Modern updates include a state-of-the-art kitchen, central air, and smart home systems. The private garden is a rare urban oasis, and the attached carriage house offers flexible space for guests, office, or staff. Located on one of the city's most prestigious streets.",
    highlights: [
      "Circa 1820 landmark property",
      "Nine original fireplaces",
      "Private garden",
      "Attached carriage house",
      "Five stories with elevator",
    ],
    amenities: [
      "Private Garden",
      "Carriage House",
      "Elevator",
      "Multiple Fireplaces",
      "Wine Cellar",
      "Roof Deck",
      "Garage Parking",
      "Central Air",
    ],
    images: [
      placeholderImages.exterior3,
      placeholderImages.interior3,
      placeholderImages.interior2,
      placeholderImages.interior1,
    ],
    status: "For Sale",
  },
  {
    slug: "sunset-villa-riviera",
    title: "Sunset Villa",
    location: "The Riviera",
    neighborhood: "Coastal",
    price: 18750000,
    currency: "USD",
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 11000,
    type: "Villa",
    shortDescription:
      "Contemporary masterpiece with infinity pool overlooking the Mediterranean.",
    longDescription:
      "Sunset Villa is a stunning contemporary residence that captures the essence of Riviera living. Designed by an acclaimed architect, the property maximizes its clifftop setting with walls of glass that blur the boundary between interior and exterior. The open-plan living areas flow seamlessly to expansive terraces and the show-stopping infinity pool that appears to merge with the sea below. Interiors feature natural materials including limestone floors, oak millwork, and custom bronze fixtures. The lower level includes a spa, home cinema, and direct access to a private cove.",
    highlights: [
      "Clifftop setting with sea views",
      "Infinity pool overlooking Mediterranean",
      "Direct access to private cove",
      "Lower-level spa and cinema",
      "Award-winning architecture",
    ],
    amenities: [
      "Infinity Pool",
      "Private Cove Access",
      "Spa",
      "Home Cinema",
      "Summer Kitchen",
      "Wine Cellar",
      "4-Car Garage",
      "Staff Apartment",
    ],
    images: [
      placeholderImages.villa1,
      placeholderImages.pool1,
      placeholderImages.interior1,
      placeholderImages.view1,
      placeholderImages.exterior1,
    ],
    status: "For Sale",
  },
  {
    slug: "penthouse-lumiere-arts-district",
    title: "Penthouse Lumière",
    location: "Arts District",
    neighborhood: "Cultural Quarter",
    price: 8200000,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 4500,
    type: "Penthouse",
    shortDescription:
      "Gallery-like penthouse with private rooftop and views of the cultural district.",
    longDescription:
      "Penthouse Lumière offers a unique opportunity for collectors and art enthusiasts. The residence features gallery-quality walls, museum lighting systems, and soaring 14-foot ceilings that create the perfect backdrop for an important collection. The open loft-style layout includes a dramatic double-height living room, chef's kitchen with breakfast bar, and three bedroom suites. The private rooftop terrace spans 1,500 square feet with built-in seating, outdoor kitchen, and panoramic views of the city's cultural institutions. Located steps from world-class galleries, theaters, and restaurants.",
    highlights: [
      "Gallery-quality walls and lighting",
      "14-foot ceilings",
      "1,500 sq ft rooftop terrace",
      "Cultural district location",
      "Loft-style open plan",
    ],
    amenities: [
      "Rooftop Terrace",
      "Gallery Lighting",
      "Climate Control",
      "Concierge",
      "Fitness Center",
      "Bike Storage",
      "2 Parking Spaces",
      "Storage Unit",
    ],
    images: [
      placeholderImages.penthouse2,
      placeholderImages.interior2,
      placeholderImages.interior1,
      placeholderImages.view1,
    ],
    status: "For Sale",
  },
  {
    slug: "oceanview-estate-pacific-palisades",
    title: "Oceanview Estate",
    location: "Pacific Palisades",
    neighborhood: "Blufftop",
    price: 32000000,
    currency: "USD",
    bedrooms: 7,
    bathrooms: 9,
    areaSqFt: 14500,
    type: "Estate",
    shortDescription:
      "Blufftop estate with 180-degree ocean views, vineyard, and entertainment pavilion.",
    longDescription:
      "This extraordinary blufftop estate commands 180-degree views of the Pacific Ocean from nearly every room. Set on 2.5 acres, the property includes a main residence, entertainment pavilion, and a working vineyard. The main house features a dramatic great room with retractable glass walls, formal dining room, dual primary suites, and a chef's kitchen with butler's pantry. The entertainment pavilion houses a professional screening room, wine tasting room, gym, and spa. Outdoor amenities include an infinity pool, sports court, and terraced gardens leading to a private bluff-top viewing platform.",
    highlights: [
      "180-degree ocean views",
      "2.5-acre blufftop setting",
      "Working vineyard",
      "Entertainment pavilion",
      "Private viewing platform",
    ],
    amenities: [
      "Infinity Pool",
      "Vineyard",
      "Screening Room",
      "Wine Tasting Room",
      "Spa & Gym",
      "Sports Court",
      "Guest House",
      "6-Car Garage",
    ],
    images: [
      placeholderImages.exterior1,
      placeholderImages.pool1,
      placeholderImages.view1,
      placeholderImages.interior1,
      placeholderImages.interior2,
    ],
    status: "For Sale",
    featured: true,
  },
  {
    slug: "executive-suite-embassy-row",
    title: "Executive Suite",
    location: "Embassy Row",
    neighborhood: "Diplomatic Quarter",
    price: 4500000,
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 2400,
    type: "Apartment",
    shortDescription:
      "Elegant pied-à-terre in prestigious embassy district with exceptional security.",
    longDescription:
      "This sophisticated pied-à-terre in the heart of Embassy Row offers the perfect combination of elegance, convenience, and security. The residence features a gracious layout with formal entry, living room with fireplace, dining area, and two bedroom suites. High-end finishes include hardwood floors, crown moldings, and custom built-ins. The building offers exceptional security measures, making it ideal for diplomats, executives, and those who value privacy. Walking distance to world-class dining, cultural institutions, and international embassies.",
    highlights: [
      "Embassy Row location",
      "Exceptional building security",
      "Fireplace in living room",
      "Walking distance to cultural institutions",
      "Ideal pied-à-terre",
    ],
    amenities: [
      "24/7 Security",
      "Concierge",
      "Fitness Center",
      "Resident Lounge",
      "Garage Parking",
      "Storage",
      "Bike Room",
      "Package Room",
    ],
    images: [
      placeholderImages.interior3,
      placeholderImages.interior1,
      placeholderImages.interior2,
    ],
    status: "For Rent",
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
