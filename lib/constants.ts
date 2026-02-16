// Agency Information - Easy to update
export const AGENCY = {
  name: "Marta Duran",
  fullName: "Marta Duran Real Estate",
  tagline: "Exceptional Properties for Discerning Clients",
  description:
    "A boutique real estate agency specializing in luxury properties for high-net-worth individuals seeking exceptional investment opportunities.",
  email: "info@martaduran.ae",
  phone: "+971 55 754 1884",
  whatsapp: "+971557541884", // Format for wa.me link (no spaces, dashes, or special chars)
  address: {
    line1: "Court Tower 1606, D42",
    city: "Business Bay, Dubai",
    state: "UAE",
    zip: "",
    country: "United Arab Emirates",
  },
  hours: "Mon - Fri: 9:00 AM - 6:00 PM | Sat: By Appointment",
  social: {
    instagram: "https://instagram.com/martaduran",
    linkedin: "https://www.linkedin.com/in/marta-duran-camps-9ba795397/?originalSubdomain=ae",
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
  { label: "About Dubai", href: "/about-dubai" },
  { label: "Services", href: "/services" },
  { label: "Meet Marta", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  main: [
    { label: "Properties", href: "/properties" },
    { label: "About Dubai", href: "/about-dubai" },
    { label: "Services", href: "/services" },
    { label: "Meet Marta", href: "/about" },
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
    title: "Your interests first",
    description:
      "No pressure, no pushy sales. We only recommend properties that fit your goals—and we’re upfront when something doesn’t.",
    icon: "Shield",
  },
  {
    title: "Dubai & Barcelona roots",
    description:
      "Marta brings a decade in Dubai plus a strong track record from Barcelona. You get local knowledge and a global lens.",
    icon: "TrendingUp",
  },
  {
    title: "Discretion by default",
    description:
      "High-profile clients and off-market deals stay confidential. We handle everything with the same care we’d expect for ourselves.",
    icon: "Lock",
  },
  {
    title: "Access, not just listings",
    description:
      "Through long-standing developer and broker relationships, we surface opportunities that don’t appear on portals.",
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

// Dubai FAQ Items
export const DUBAI_FAQ_ITEMS = [
  {
    question: "What about property ownership in Dubai?",
    answer:
      "Dubai offers one of the most investor-friendly property ownership frameworks in the world. Since 2002, foreign nationals have been allowed to own 100% freehold property in designated areas across the city. These freehold areas give non-residents full ownership rights, with no time limits and the freedom to sell, lease, or pass the property on to heirs. The government has established clear, transparent regulations to protect foreign investors, ensuring a secure and well-regulated real estate market. This openness, combined with Dubai's strong legal framework and tax advantages, has made the city a global hub for international property investors seeking stability, growth, and long-term value.",
  },
  {
    question: "Does buying property give me residency?",
    answer:
      "Yes. Purchasing qualifying real estate can make you eligible for a UAE residency visa, subject to current regulations and minimum property value requirements. We'll guide you through the residency options that best suit your needs and ensure all requirements are met for a smooth process.",
  },
  {
    question: "Are there taxes on property purchases in Dubai?",
    answer:
      "Dubai is highly tax-efficient: No property tax, No capital gains tax, No inheritance tax, No income tax on rental income. Only a one-time transfer fee applies at purchase: 4% DLD fees to the Dubai Land Department.",
  },
  {
    question: "Is off-plan property a good investment?",
    answer:
      "Off-plan properties often offer: Lower entry prices compared to completed developments, Flexible payment plans during construction, Strong capital appreciation potential as the project completes. They are especially attractive for investors looking to maximize returns over the medium to long term. We carefully select developments from trusted developers to ensure project completion and quality standards.",
  },
  {
    question: "Why invest in Dubai real estate now?",
    answer:
      "Dubai combines: Strong economic growth driven by diversification, Global investor demand from around the world, Political and financial stability in the region, High rental yields compared to other global markets, Long-term capital appreciation potential. Current market conditions present excellent opportunities for discerning investors. We stay ahead of market trends to identify the best opportunities for our clients.",
  },
  {
    question: "Do I need to be a resident to buy real estate in Dubai?",
    answer:
      "No. You do not need to be a UAE resident to buy real estate in Dubai. Foreign nationals can purchase property in designated freehold areas with full ownership rights, whether they live in the UAE or abroad. This flexibility makes Dubai uniquely accessible for international investors.",
  },
  {
    question: "Do I need to open a bank account to buy off-plan in Dubai?",
    answer:
      "No, opening a UAE bank account is not mandatory to purchase off-plan property. Developers typically accept international transfers for payments. However, opening a local bank account can make future transactions—such as service charges, rental income, or resale—simpler and more efficient. We can assist with this process if desired.",
  },
] as const;
