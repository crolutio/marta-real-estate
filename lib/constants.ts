// Agency Information - Easy to update
export const AGENCY = {
  name: "Marta Duran",
  fullName: "Marta Duran Real Estate",
  tagline: "Exceptional Properties for Discerning Clients",
  description:
    "A boutique real estate agency specializing in luxury properties for high-net-worth individuals seeking exceptional investment opportunities.",
  email: "contact@martaduran.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+15551234567", // Format for wa.me link (no spaces, dashes, or special chars)
  address: {
    line1: "123 Luxury Avenue, Suite 500",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  hours: "Mon - Fri: 9:00 AM - 6:00 PM | Sat: By Appointment",
  social: {
    instagram: "https://instagram.com/martaduran",
    linkedin: "https://ae.linkedin.com/in/marta-duran-camps-9ba795397",
    facebook: "https://facebook.com/martaduranrealestate",
  },
} as const;

// SEO Defaults
export const SEO = {
  siteName: "Marta Duran Real Estate",
  defaultTitle: "Marta Duran Real Estate | Luxury Properties & Investment",
  defaultDescription:
    "Discover exceptional luxury properties with Marta Duran Real Estate. Specializing in premium real estate investments for discerning clients worldwide.",
  defaultKeywords: [
    "luxury real estate",
    "premium properties",
    "real estate investment",
    "high-end homes",
    "exclusive properties",
  ],
  ogImage: "/og-image.jpg", // Placeholder
  twitterHandle: "@martaduran",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  main: [
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

// Value Propositions
export const VALUE_PROPS = [
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty, ensuring your interests are always our priority.",
    icon: "Shield",
  },
  {
    title: "Market Expertise",
    description:
      "Deep knowledge of luxury real estate markets, trends, and investment opportunities worldwide.",
    icon: "TrendingUp",
  },
  {
    title: "Discreet Service",
    description:
      "Confidential handling of all transactions with the utmost professionalism and privacy.",
    icon: "Lock",
  },
  {
    title: "Investment Guidance",
    description:
      "Strategic advice to maximize returns and build a portfolio of exceptional properties.",
    icon: "Compass",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with Marta was an absolute pleasure. Her understanding of the luxury market and attention to detail made finding our dream property effortless.",
    author: "Alexandra Chen",
    title: "Private Investor",
    location: "Singapore",
  },
  {
    id: 2,
    quote:
      "The level of discretion and professionalism exceeded our expectations. Marta's network and market insight are truly unparalleled.",
    author: "James Worthington",
    title: "Family Office Director",
    location: "London",
  },
  {
    id: 3,
    quote:
      "From our first consultation to closing, the experience was seamless. We've since acquired three more properties through Marta's guidance.",
    author: "Sofia Ramirez",
    title: "Entrepreneur",
    location: "Miami",
  },
] as const;

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: "How does the consultation process work?",
    answer:
      "Our consultation begins with an in-depth discussion of your investment goals, preferences, and timeline. We then curate a selection of properties that align with your criteria and provide comprehensive market analysis for each opportunity.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we specialize in serving high-net-worth individuals globally. Our team is experienced in navigating international transactions, including legal, tax, and currency considerations.",
  },
  {
    question: "What types of properties do you specialize in?",
    answer:
      "We focus exclusively on premium and ultra-luxury properties, including penthouses, waterfront estates, historic mansions, and exclusive development opportunities.",
  },
  {
    question: "Is my inquiry confidential?",
    answer:
      "Absolutely. Discretion is fundamental to our service. All client information and transactions are handled with the strictest confidentiality.",
  },
] as const;
