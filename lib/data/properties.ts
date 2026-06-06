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

import { InvestCategory, Property } from "@/lib/types";

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
    investCategory: "ultra-luxury",
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
    investCategory: "ultra-luxury",
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
    investCategory: "ultra-luxury",
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

  // Invest page — affordable luxury
  {
    slug: "golf-vale-emaar-south",
    title: "Golf Vale",
    location: "Emaar South, Dubai",
    neighborhood: "Emaar South",
    price: 850000,
    currency: "AED",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1200,
    type: "Apartment",
    unitTypes: "1 to 3 Bed Apartments | 3 Bed Townhouses",
    shortDescription:
      "Luxury golf-side living by Emaar in Emaar South—apartments and townhouses around a championship course with resort-style amenities.",
    longDescription:
      "Golf Vale is a luxury residential project by Emaar in Emaar South, Dubai, set around a championship golf course and designed for a refined, resort-style lifestyle. It offers 1, 2 and 3-bedroom apartments plus 3-bedroom townhouses, with premium amenities including an infinity pool, golf course, gym, yoga areas, padel court, and kids’ facilities. Ideal for buyers seeking green views, space, and strong community infrastructure in south Dubai.",
    highlights: [
      "Championship golf setting",
      "1–3 bedroom apartments and 3-bed townhouses",
      "Infinity pool, gym, yoga & padel",
      "Family-friendly amenities",
      "Emaar master-planned community",
    ],
    amenities: [
      "Infinity pool",
      "Championship golf course",
      "Gym",
      "Yoga areas",
      "Padel court",
      "Kids’ facilities",
      "Landscaped grounds",
    ],
    images: [],
    status: "For Sale",
    new: true,
    investCategory: "affordable-luxury",
    salesOfferPdf: "/Golf Vale Emaar Sales Offer.pdf",
    salesOfferPdfTitle: "Golf Vale sales offer",
    addressLink:
      "https://www.google.com/maps/search/Emaar+South+Golf+Vale+Dubai",
    locationMapQuery: "Golf Vale Emaar South Dubai",
  },
  {
    slug: "fior-1-rashid-yachts-marina",
    title: "Fior 1",
    location: "Rashid Yachts & Marina, Dubai",
    neighborhood: "Mina Rashid",
    price: 1350000,
    currency: "AED",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1100,
    type: "Apartment",
    unitTypes: "1 to 3 Bed Apartments",
    shortDescription:
      "Premium waterfront living by Emaar at Rashid Yachts & Marina with marina views and a full lifestyle offering.",
    longDescription:
      "Fior 1 is a premium waterfront residential development by Emaar located in Rashid Yachts & Marina, Dubai. Designed to deliver a sophisticated marina lifestyle, the project blends contemporary architecture with scenic views of the Arabian Gulf and a vibrant yachting community. It offers elegantly designed 1, 2, and 3-bedroom apartments, complemented by high-end amenities including an infinity pool, marina promenade, fitness center, landscaped gardens, retail outlets, and direct access to the yacht marina.",
    highlights: [
      "Marina & sea views",
      "1–3 bedroom apartments",
      "Infinity pool & promenade",
      "Retail and dining nearby",
      "Direct yacht marina access",
    ],
    amenities: [
      "Infinity pool",
      "Marina promenade",
      "Fitness center",
      "Landscaped gardens",
      "Retail outlets",
      "Yacht marina access",
    ],
    images: [],
    status: "For Sale",
    new: true,
    investCategory: "affordable-luxury",
    addressLink:
      "https://www.google.com/maps/search/Fior+1+Rashid+Yachts+Marina+Dubai",
    locationMapQuery: "Fior 1 Rashid Yachts Marina Dubai",
  },

  // Invest page — luxury
  {
    slug: "edition-hh-dubai-beach",
    title: "Edition Residences",
    location: "Dubai Beach, Dubai",
    neighborhood: "Jumeirah coastline",
    price: 2500000,
    currency: "AED",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1400,
    type: "Apartment",
    unitTypes: "1 to 3 Bed Residences",
    shortDescription:
      "Ultra-luxury branded beachfront residences by H&H with hospitality-inspired service and resort amenities.",
    longDescription:
      "Edition is an ultra-luxury branded residential development by H&H, located along Dubai’s prestigious beachfront. Designed to reflect a refined, hospitality-driven lifestyle, the project combines contemporary architecture with curated interiors and premium finishes. It offers exclusive 1, 2, and 3-bedroom residences, complemented by world-class amenities including a beachfront infinity pool, private beach access, signature dining, wellness spa, fitness center, concierge services, and beautifully landscaped leisure areas, delivering a seamless blend of luxury living and resort-style comfort.",
    highlights: [
      "Branded beachfront living",
      "1–3 bedroom residences",
      "Private beach & infinity pool",
      "Spa, dining & concierge",
      "H&H development quality",
    ],
    amenities: [
      "Beachfront infinity pool",
      "Private beach access",
      "Signature dining",
      "Wellness spa",
      "Fitness center",
      "Concierge",
      "Landscaped leisure areas",
    ],
    images: [],
    status: "For Sale",
    new: true,
    investCategory: "luxury",
    addressLink:
      "https://www.google.com/maps/search/Edition+Residences+Dubai+Beach",
    locationMapQuery: "Edition Residences Dubai Beach",
  },
  {
    slug: "bella-by-passo-dubai",
    title: "Bella by Passo",
    location: "Dubai",
    neighborhood: "Dubai",
    price: 650000,
    currency: "AED",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 1,
    bathrooms: 1,
    areaSqFt: 650,
    type: "Apartment",
    unitTypes: "Studio | 1 & 2 Bed Apartments",
    shortDescription:
      "Contemporary apartments with pool, gym, and retail—strong choice for end-users and investors.",
    longDescription:
      "Bella by Passo is a contemporary residential development designed to offer a stylish and comfortable urban lifestyle in Dubai. The project features modern architecture with thoughtfully designed interiors, catering to both end-users and investors. It offers a selection of well-crafted studio, 1, and 2-bedroom apartments, complemented by premium amenities including a swimming pool, fully equipped gym, landscaped outdoor spaces, retail outlets, and dedicated leisure areas, creating a balanced living environment with everyday convenience.",
    highlights: [
      "Studios to 2-bedroom layouts",
      "Pool, gym & retail",
      "Landscaped outdoor spaces",
      "Investor-friendly entry pricing",
      "Modern architecture",
    ],
    amenities: [
      "Swimming pool",
      "Gym",
      "Landscaped outdoor spaces",
      "Retail outlets",
      "Leisure areas",
    ],
    images: [],
    status: "For Sale",
    new: true,
    investCategory: "luxury",
    addressLink: "https://www.google.com/maps/search/Bella+by+Passo+Dubai",
    locationMapQuery: "Bella by Passo Dubai",
  },

  // Barcelona (main properties catalogue)
  {
    slug: "casa-bures-barcelona",
    title: "Casa Burés",
    location: "Eixample, Barcelona",
    neighborhood: "Eixample",
    price: 2200000,
    currency: "EUR",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1800,
    type: "Apartment",
    shortDescription:
      "Landmark modernist building restored into boutique residences in central Eixample—heritage detail meets contemporary comfort.",
    longDescription:
      "Casa Burés is one of Barcelona’s most celebrated modernist buildings, originally completed in the early 1900s in the Eixample grid near Passeig de Gràcia. Following a meticulous restoration led by specialist teams, the project delivers a limited collection of luxury apartments, lofts, and penthouses with rooftop pool, spa, wine cellar, and concierge-style services—pairing Gaudí-era craftsmanship with today’s expectations for privacy and finish quality.",
    highlights: [
      "Heritage modernist architecture",
      "Eixample / Quadrat d’Or location",
      "Rooftop pool & wellness",
      "Boutique inventory",
      "Strong international buyer interest",
    ],
    amenities: [
      "Rooftop pool",
      "Spa & wellness",
      "Wine cellar",
      "Concierge services",
      "Landscaped terraces",
    ],
    images: [],
    status: "For Sale",
    new: true,
    addressLink:
      "https://www.google.com/maps/search/Casa+Bur%C3%A9s+Barcelona",
    locationMapQuery: "Casa Burés Barcelona",
  },
  {
    slug: "am-residences-barcelona",
    title: "AM Residences",
    location: "Ausiàs March 41, Eixample, Barcelona",
    neighborhood: "Quadrat d’Or",
    price: 2800000,
    currency: "EUR",
    priceFromPlus: true,
    priceLabel: "Prices from",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1500,
    type: "Apartment",
    shortDescription:
      "Serviced luxury apartments in the Quadrat d’Or with 24/7 support, spa, pool, and concierge.",
    longDescription:
      "AM Residences sits on Ausiàs March in Barcelona’s Quadrat d’Or—an enclave known for modernist façades and world-class dining. The building pairs a restored historic exterior with fully renovated interiors and a serviced-residence concept: concierge, security, restaurant, gym, spa with pool, and home automation—designed for owners who want hotel-grade service with the privacy of a private home.",
    highlights: [
      "Quadrat d’Or address",
      "Serviced-residence model",
      "Spa, gym & pool",
      "Restaurant on site",
      "Concierge & security",
    ],
    amenities: [
      "24/7 concierge",
      "Gym & spa",
      "Heated pool",
      "Restaurant",
      "Home automation",
      "Bicycle & chauffeur services",
    ],
    images: [],
    status: "For Sale",
    new: true,
    addressLink:
      "https://www.google.com/maps/search/Ausi%C3%A0s+March+41+Barcelona",
    locationMapQuery: "Ausiàs March 41 Barcelona",
  },
];

// Helper functions
export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getInvestPropertiesByCategory(
  category: InvestCategory
): Property[] {
  return properties.filter((p) => p.investCategory === category);
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
