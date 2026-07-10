export type Locale = "en" | "es" | "de";

export const DEFAULT_LOCALE: Locale = "en";

export const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export interface Dictionary {
  nav: {
    home: string;
    properties: string;
    invest: string;
    aboutDubai: string;
    services: string;
    aboutSpain: string;
    aboutUs: string;
    contact: string;
  };
  header: {
    theme: string;
    changeLanguage: string;
  };
  footer: {
    description: string;
    contact: string;
    copyrightName: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    cta: string;
  };
  home: {
    featured: { eyebrow: string; title: string; viewAll: string };
    valueProps: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
    testimonials: {
      eyebrow: string;
      title: string;
      items: { quote: string; role: string }[];
    };
    contactTeaser: { title: string; body: string; contactPage: string };
  };
  consultation: {
    button: string;
    title: string;
    description: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    note: string;
  };
  whatsapp: {
    /** Uses the {agency} token, replaced with the agency name at runtime. */
    message: string;
    aria: string;
  };
  aboutPreview: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    languages: string;
    yearsExperience: string;
    inTransactions: string;
    topAgent: string;
    clients: string;
    globalNetwork: string;
  };
  about: {
    hero: { eyebrow: string; title: string; body: string };
    stats: {
      yearsExperience: string;
      inTransactions: string;
      clientsServed: string;
    };
    story: { eyebrow: string; title: string; paragraphs: string[] };
    languages: string;
    values: { eyebrow: string; title: string };
    investors: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      bullets: string[];
    };
  };
  aboutDubaiHero: { eyebrow: string; title: string; body: string };
  aboutSpainHero: { eyebrow: string; title: string; body: string };
  aboutDubaiVideos: { eyebrow: string; title: string };
  aboutDubaiPage: {
    marketInsights: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
    developers: { eyebrow: string; title: string; descriptions: string[] };
    neighborhoods: {
      title: string;
      keyHighlights: string;
      items: { description: string; highlights: string[] }[];
    };
    faq: {
      eyebrow: string;
      title: string;
      intro: string;
      items: {
        question: string;
        lead: string;
        bullets: string[];
        outro: string;
      }[];
    };
  };
  aboutSpainPage: {
    marketInsights: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
    developers: {
      eyebrow: string;
      title: string;
      intro: string;
      descriptions: string[];
    };
    neighborhoods: {
      title: string;
      keyHighlights: string;
      items: { description: string; highlights: string[] }[];
    };
    faq: {
      eyebrow: string;
      title: string;
      intro: string;
      items: { question: string; answer: string }[];
    };
  };
  servicesPage: {
    hero: { eyebrow: string; title: string; body: string; note: string };
    services: { title: string; description: string; features: string[] }[];
    process: {
      title: string;
      intro: string;
      steps: { title: string; description: string }[];
    };
    cta: { title: string; body: string; contactUs: string };
  };
  investPage: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      returns: string;
      support: string;
    };
    ctas: { advice: string; opportunities: string };
    opportunities: { title: string; body: string; browse: string };
  };
  investForm: {
    heading: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    capital: string;
    capitalPlaceholder: string;
    submit: string;
    errorNameEmail: string;
    openingEmail: string;
  };
  contactPage: {
    hero: { eyebrow: string; title: string; body1: string; body2: string };
    form: {
      heading: string;
      name: string;
      namePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sendEmail: string;
      sendWhatsApp: string;
      openingEmail: string;
      openingWhatsApp: string;
      defaultSubject: string;
    };
    details: {
      heading: string;
      phone: string;
      email: string;
      whatsapp: string;
      whatsappCta: string;
      office: string;
      hours: string;
    };
  };
  properties: {
    hero: { eyebrow: string; title: string; body: string; note: string };
    searchPlaceholder: string;
    clearAll: string;
    sort: { newest: string; priceDesc: string; priceAsc: string };
    filterType: string;
    filterStatus: string;
    filterBedrooms: string;
    filterPrice: string;
    activeFilters: string;
    bedsSuffix: string;
    bedsPlus: string;
    priceRanges: {
      anyPrice: string;
      under5: string;
      r5_10: string;
      r10_20: string;
      r20_50: string;
      over50: string;
    };
    types: Record<string, string>;
    statuses: Record<string, string>;
    card: { beds: string; baths: string; sqft: string; to: string };
    results: {
      showing: string;
      propertySingular: string;
      propertyPlural: string;
      showingAll: string;
      noResults: string;
      noResultsHint: string;
    };
    detail: {
      allProperties: string;
      newListing: string;
      bedrooms: string;
      bathrooms: string;
      livingArea: string;
      typeLabel: string;
      sqFt: string;
      salesOffer: string;
      brochure: string;
      viewPdf: string;
      listedPrice: string;
      email: string;
      whatsapp: string;
      tabs: { overview: string; highlights: string; location: string };
      viewOnMaps: string;
      otherProperties: string;
      youMayAlsoLike: string;
      viewAll: string;
    };
    contactCard: {
      call: string;
      whatsapp: string;
      requestDetails: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      sendEmail: string;
      sendWhatsApp: string;
      openingEmail: string;
      openingWhatsApp: string;
    };
  };
  notFound: {
    title: string;
    body: string;
    backHome: string;
    browse: string;
  };
}

const en: Dictionary = {
  nav: {
    home: "Home",
    properties: "Properties",
    invest: "Invest",
    aboutDubai: "About Dubai",
    services: "Services",
    aboutSpain: "About Spain",
    aboutUs: "About Us",
    contact: "Contact",
  },
  header: {
    theme: "Theme",
    changeLanguage: "Change language",
  },
  footer: {
    description:
      "A boutique real estate agency specializing in luxury properties for high-net-worth individuals seeking exceptional investment opportunities.",
    contact: "Contact",
    copyrightName: "Duna Partners Real Estate",
    rightsReserved: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  hero: {
    eyebrow: "We guide your journey",
    headline: "Invest in Dubai with confidence",
    cta: "View Properties",
  },
  home: {
    featured: {
      eyebrow: "Featured Collection",
      title: "Exceptional Properties for Exceptional Clients",
      viewAll: "View All Properties",
    },
    valueProps: {
      eyebrow: "Why work with us",
      title: "How we work",
      items: [
        {
          title: "Your interests first",
          description:
            "No pressure, no pushy sales. We only recommend properties that fit your goals—and we’re upfront when something doesn’t.",
        },
        {
          title: "Dubai roots",
          description:
            "A decade of Dubai expertise - local market intelligence combined with an international perspective. Marta knows the market inside out and brings a refined, strategic approach to every investment.",
        },
        {
          title: "Discretion by default",
          description:
            "High-profile clients and off-market deals stay confidential. We handle everything with the same care we’d expect for ourselves.",
        },
        {
          title: "Access, not just listings",
          description:
            "Through long-standing developer and network, we surface opportunities that don’t appear on portals.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client Stories",
      title: "Trusted by Discerning Clients Worldwide",
      items: [
        {
          quote:
            "Working with Marta was an absolute pleasure. Her understanding of the luxury market and attention to detail made finding our dream property effortless.",
          role: "Private Investor",
        },
        {
          quote:
            "The level of discretion and professionalism exceeded our expectations. Marta's network and market insight are truly unparalleled.",
          role: "Family Office Director",
        },
        {
          quote:
            "From our first consultation to closing, the experience was seamless. We've since acquired three more properties through Marta's guidance.",
          role: "Entrepreneur",
        },
      ],
    },
    contactTeaser: {
      title: "Ready to Find Your Dream Property?",
      body: "Let’s discuss your real estate goals. Whether you’re buying, selling, or investing, I’m here to guide you every step of the way.",
      contactPage: "Contact Page",
    },
  },
  consultation: {
    button: "Book a call",
    title: "Book a call",
    description:
      "Share your details and we’ll arrange a call to discuss your real estate goals.",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone",
    phonePlaceholder: "+1 (555) 000-0000",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message (optional)",
    messagePlaceholder: "Tell us about your real estate interests...",
    note: "Calendar booking coming soon. We’ll reach out at your email to schedule your call.",
  },
  whatsapp: {
    message: "Hi, I'd like to know more about {agency}.",
    aria: "Chat on WhatsApp",
  },
  aboutPreview: {
    eyebrow: "About Marta Duran",
    title: "A Trusted Partner in Luxury Real Estate",
    p1: "Marta Duran is the CEO and owner of the company. With over a decade of experience in Dubai’s real estate market, she has established herself as a trusted advisor to investors seeking strategic, high-value opportunities. She combines her real estate expertise with a Master of Laws (LL.M.) qualification to provide comprehensive guidance as your Dubai expert.",
    p2: "Whether you’re seeking a primary residence, vacation retreat, or investment opportunity, Marta offers exclusive access to Dubai’s most coveted properties with a refined, strategic approach to real estate investment. You’ll feel completely supported throughout your entire journey.",
    languages: "Speaks Spanish, English, and German",
    yearsExperience: "Years Experience",
    inTransactions: "In Transactions",
    topAgent: "Top 1% Agent",
    clients: "200+ Clients",
    globalNetwork: "Global Network",
  },
  about: {
    hero: {
      eyebrow: "About Marta Duran",
      title: "A Legacy of Excellence in Luxury Real Estate",
      body: "For over 10 years, I’ve helped clients navigate the world’s most prestigious real estate markets with discretion, expertise, and unwavering commitment to their success.",
    },
    stats: {
      yearsExperience: "Years Experience",
      inTransactions: "In Transactions",
      clientsServed: "Clients Served",
    },
    story: {
      eyebrow: "Marta’s Story",
      title: "Passion Meets Expertise",
      paragraphs: [
        "With over a decade of experience in Dubai’s real estate market, Marta Duran has established herself as a trusted advisor to investors seeking strategic, high-value opportunities. She has worked with the region’s most renowned developers and leading real estate firms, gaining invaluable expertise in luxury properties and off-market investments.",
        "In addition to her real estate background, Marta is a qualified lawyer with a Master of Laws (LL.M.), bringing a rigorous, detail-driven perspective to every transaction. This legal foundation strengthens her ability to protect clients’ interests, assess risk with precision, and structure acquisitions with clarity and confidence - particularly in complex, high-stakes deals.",
        "Throughout her career, Marta has built a reputation for market intelligence, discretion, and a meticulous approach to portfolio curation. Her ability to navigate market cycles with precision has enabled her clients to optimize returns and build enduring wealth.",
        "Driven by a vision to elevate the real estate experience, she founded Marta Duran Realty - a firm that reflects her commitment to personalized service, integrity, and a results-driven mindset. Under her leadership, Marta Duran Realty stands as a trusted partner for discerning investors, offering exclusive access to Dubai’s most coveted properties and delivering a refined, highly strategic approach to real estate investment.",
      ],
    },
    languages: "Speaks Spanish, English, and German",
    values: {
      eyebrow: "Marta’s Approach",
      title: "Principles That Guide Every Transaction",
    },
    investors: {
      eyebrow: "For Investors",
      title: "Strategic Real Estate Investment Guidance",
      paragraphs: [
        "For high-net-worth individuals and family offices seeking to build or optimize their real estate portfolios, I offer comprehensive investment guidance backed by deep market knowledge and global connections.",
        "My approach goes beyond finding properties. I analyze market trends, evaluate risk factors, assess potential returns, and provide strategic recommendations aligned with your overall wealth objectives.",
      ],
      bullets: [
        "Portfolio diversification strategies",
        "Market timing and opportunity identification",
        "Due diligence and risk assessment",
        "Access to off-market opportunities",
        "Coordination with legal and tax advisors",
      ],
    },
  },
  aboutDubaiHero: {
    eyebrow: "Investment Destination",
    title: "Discover Dubai's Luxury Real Estate Market",
    body: "Explore the world's most dynamic real estate market. From iconic developments to emerging opportunities, Dubai offers unparalleled potential for discerning investors.",
  },
  aboutSpainHero: {
    eyebrow: "Mediterranean living",
    title: "Spain luxury real estate",
    body: "From Barcelona's Eixample grid to the sea, Spain pairs world-class architecture with an outdoor, design-led lifestyle. The country attracts global buyers seeking EU connectivity, culture, and carefully restored residences in walkable neighborhoods—with clear upside when architecture, light, and service levels align.",
  },
  aboutDubaiVideos: {
    eyebrow: "Experience Dubai",
    title: "Discover the city",
  },
  aboutDubaiPage: {
    marketInsights: {
      eyebrow: "How we see the market",
      title: "Intelligence that informs your move",
      items: [
        {
          title: "What we track",
          description:
            "We monitor investment opportunities, off-plan launches, and secondary-market moves so you can act when it matters, not when a listing appears.",
        },
        {
          title: "Why Dubai still pays",
          description:
            "No capital gains or income tax on rental income, 100% freehold in designated areas, and visa pathways linked to property. The framework is built for international buyers.",
        },
        {
          title: "Who’s buying",
          description:
            "European, UK, and Asian buyers are driving a large share of demand. We see where interest is focused and where value is still under the radar.",
        },
        {
          title: "Where growth is heading",
          description:
            "Beyond the usual names, we keep an eye on delivery schedules and infrastructure (metro, roads, masterplans) that will shift an area’s appeal in the next 3–5 years.",
        },
      ],
    },
    developers: {
      eyebrow: "Leading Developers",
      title: "Premier Development Partners",
      descriptions: [
        "Dubai's largest developer, known for iconic projects like Burj Khalifa and Dubai Mall.",
        "State-owned developer focusing on luxury residential and commercial developments.",
        "Leading developer of luxury residential communities and hospitality projects.",
        "Specializes in master-planned communities and sustainable developments.",
        "Known for high-end residential developments and hospitality projects.",
        "Focuses on affordable housing and community development projects.",
        "International developer with luxury residential and commercial projects.",
      ],
    },
    neighborhoods: {
      title: "Prime Locations",
      keyHighlights: "Key Highlights:",
      items: [
        {
          description:
            "Iconic man-made island featuring luxury beachfront residences and world-class amenities.",
          highlights: ["Beachfront living", "Marina access", "High-end developments"],
        },
        {
          description:
            "Dubai's financial free zone with its own common law courts, global business hub, and luxury offices and residences.",
          highlights: ["Common law courts", "Business facilities", "Luxury residences"],
        },
        {
          description:
            "Exclusive golf community with championship courses and equestrian facilities.",
          highlights: ["Golf courses", "Equestrian facilities", "Exclusive community"],
        },
        {
          description:
            "Master-planned community with nature trails, parks, and resort-style amenities.",
          highlights: ["Nature trails", "Resort amenities", "Family-oriented"],
        },
        {
          description:
            "New waterfront destination with modern developments and marina lifestyle.",
          highlights: ["Modern architecture", "Marina lifestyle", "Upcoming area"],
        },
        {
          description:
            "Dubai's vibrant city center featuring Burj Khalifa, Dubai Mall, and world-class dining.",
          highlights: ["Burj Khalifa views", "Premium shopping", "Entertainment district"],
        },
        {
          description:
            "Luxurious waterfront development with iconic towers, parks, and marina facilities.",
          highlights: ["Creek views", "Mixed-use development", "Modern lifestyle"],
        },
        {
          description:
            "Dubai's main thoroughfare lined with prestigious skyscrapers and business headquarters.",
          highlights: ["Business district", "Iconic architecture", "Central location"],
        },
        {
          description:
            "Exclusive archipelago development with private islands and luxury residences.",
          highlights: ["Private islands", "Exclusive access", "Waterfront lifestyle"],
        },
        {
          description:
            "Pedestrian-friendly district with boutique shopping, dining, and entertainment.",
          highlights: ["Walkable district", "Boutique shopping", "Lifestyle destination"],
        },
        {
          description:
            "Scenic waterfront corridor connecting Dubai Creek to the Arabian Gulf.",
          highlights: ["Water views", "Recreational activities", "Modern developments"],
        },
      ],
    },
    faq: {
      eyebrow: "Your Questions Answered",
      title: "Frequently Asked Questions",
      intro:
        "We understand that investing in Dubai real estate can raise many questions. Here are answers to the most common inquiries from our clients.",
      items: [
        {
          question: "What about property ownership in Dubai?",
          lead: "Dubai offers one of the most investor-friendly property ownership frameworks in the world. Since 2002, foreign nationals have been allowed to own 100% freehold property in designated areas across the city. These freehold areas give non-residents full ownership rights, with no time limits and the freedom to sell, lease, or pass the property on to heirs. The government has established clear, transparent regulations to protect foreign investors, ensuring a secure and well-regulated real estate market. This openness, combined with Dubai's strong legal framework and tax advantages, has made the city a global hub for international property investors seeking stability, growth, and long-term value.",
          bullets: [],
          outro: "",
        },
        {
          question: "Does buying property give me residency?",
          lead: "Yes. Purchasing qualifying real estate can make you eligible for a UAE residency visa, subject to current regulations and minimum property value requirements. We'll guide you through the residency options that best suit your needs and ensure all requirements are met for a smooth process.",
          bullets: [],
          outro: "",
        },
        {
          question: "Are there taxes on property purchases in Dubai?",
          lead: "Dubai is highly tax-efficient:",
          bullets: [
            "No property tax",
            "No capital gains tax",
            "No inheritance tax",
            "No income tax on rental income",
            "Only a one-time transfer fee applies at purchase: 4% DLD fees to the Dubai Land Department",
          ],
          outro:
            "This tax-efficient environment makes Dubai particularly attractive for international investors seeking to maximize their returns.",
        },
        {
          question: "Is off-plan property a good investment?",
          lead: "Off-plan properties often offer:",
          bullets: [
            "Lower entry prices compared to completed developments",
            "Flexible payment plans during construction",
            "Strong capital appreciation potential as the project completes",
          ],
          outro:
            "They are especially attractive for investors looking to maximize returns over the medium to long term. We carefully select developments from trusted developers to ensure project completion and quality standards.",
        },
        {
          question: "Why invest in Dubai real estate now?",
          lead: "Dubai combines:",
          bullets: [
            "Strong economic growth driven by diversification",
            "Global investor demand from around the world",
            "Political and financial stability in the region",
            "High rental yields compared to other global markets",
            "Long-term capital appreciation potential",
          ],
          outro:
            "Current market conditions present excellent opportunities for discerning investors. We stay ahead of market trends to identify the best opportunities for our clients.",
        },
        {
          question: "Do I need to be a resident to buy real estate in Dubai?",
          lead: "No. You do not need to be a UAE resident to buy real estate in Dubai. Foreign nationals can purchase property in designated freehold areas with full ownership rights, whether they live in the UAE or abroad. This flexibility makes Dubai uniquely accessible for international investors.",
          bullets: [],
          outro: "",
        },
        {
          question: "Do I need to open a bank account to buy off-plan in Dubai?",
          lead: "No, opening a UAE bank account is not mandatory to purchase off-plan property. Developers typically accept international transfers for payments. However, opening a local bank account can make future transactions—such as service charges, rental income, or resale—simpler and more efficient. We can assist with this process if desired.",
          bullets: [],
          outro: "",
        },
      ],
    },
  },
  aboutSpainPage: {
    marketInsights: {
      eyebrow: "How we see the market",
      title: "Intelligence that informs your move",
      items: [
        {
          title: "What we track",
          description:
            "We monitor launch pricing in prime postcodes, time-on-market for resale stock, seasonal tourism patterns, and financing conditions for non-residents—so recommendations match your hold period and currency exposure.",
        },
        {
          title: "Why buyers choose Barcelona",
          description:
            "Lifestyle, EU connectivity, education options, and diversification alongside other global cities. Many clients pair a Dubai primary base with a European second home or long-let investment.",
        },
        {
          title: "Who is active",
          description:
            "A mix of domestic upgraders, EU second-home buyers, and non-EU investors—often focused on renovation quality, service level in boutique buildings, and clarity on taxes and closing costs up front.",
        },
        {
          title: "Where attention is moving",
          description:
            "Beyond postcard names, we watch metro extensions, public realm upgrades, and micro-neighborhoods where architecture and light outperform the postcode average—especially for 3–7 year horizons.",
        },
      ],
    },
    developers: {
      eyebrow: "Leading developers",
      title: "Premier development partners",
      intro:
        "Examples of groups behind signature Barcelona stock—always verified on a per-project basis before you commit.",
      descriptions: [
        "Known for meticulous heritage restorations—most notably Casa Burés—Bonavista combines conservation of modernist detail with contemporary services such as rooftop pools, wellness, and concierge-led living in prime Eixample addresses.",
        "Behind AM Residences on Ausiàs March, Intercon delivered a full renovation of a late-19th-century building while preserving its façade and pairing the interiors with a serviced-residence operating model.",
        "One of Barcelona's established residential developers, active across central districts with mid- and high-end product—useful context when comparing delivery standards and resale liquidity across neighborhoods.",
      ],
    },
    neighborhoods: {
      title: "Prime Locations",
      keyHighlights: "Key highlights:",
      items: [
        {
          description:
            "The iconic grid north of Plaça de Catalunya—wide avenues, modernist façades, and walkable access to Passeig de Gràcia. Strong demand for renovated apartments and penthouses; limited new supply keeps well-located stock competitive.",
          highlights: ["Modernist architecture", "Retail & dining", "Metro connectivity"],
        },
        {
          description:
            "Dense beachside quarter with marina access and steady short- and mid-term rental demand. Newer stock is mixed with older buildings—due diligence on building condition and community fees matters.",
          highlights: ["Sea & port proximity", "Tourism flow", "Active rental market"],
        },
        {
          description:
            "Village-like plazas and low-rise streets with a strong local identity. Popular with families and creatives; inventory skews toward smaller buildings and renovation opportunities rather than large new developments.",
          highlights: ["Neighborhood character", "Outdoor dining", "Limited high-rises"],
        },
        {
          description:
            "Former industrial corridors transformed into a tech and design hub—loft-style product, innovation tenants, and long-term infrastructure investment (including coastal parks and improved connectivity).",
          highlights: ["22@ district", "Conversion stock", "Long-term upside"],
        },
      ],
    },
    faq: {
      eyebrow: "Your questions answered",
      title: "Frequently asked questions",
      intro:
        "General guidance only—your lawyer and tax adviser should confirm details for your situation.",
      items: [
        {
          question: "Can foreigners buy in Barcelona?",
          answer:
            "Non-residents can acquire freehold property in Spain subject to NIE requirements, bank rules, and anti–money laundering checks. New-build and resale transactions follow different tax treatments—your notary and lawyer will structure the purchase correctly.",
        },
        {
          question: "What costs should buyers expect?",
          answer:
            "Budget for transfer tax (ITP) on resale or VAT plus stamp duty on new builds, notary and land-registry fees, plus legal and mortgage costs. We provide a line-by-line estimate before you reserve a unit.",
        },
        {
          question: "Is the rental market active?",
          answer:
            "Barcelona remains attractive for mid- and long-term rentals, with regulation evolving. We help you understand licensing rules, community bylaws, and realistic yields by micro-area.",
        },
        {
          question: "How do we shortlist the right area?",
          answer:
            "We align schools, commute, building quality, and your investment horizon—then narrow to a handful of streets and product types before you travel for viewings.",
        },
      ],
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Professional Services",
      title: "Comprehensive Support for Dubai Investors",
      body: "Beyond luxury real estate, we provide end-to-end business and residency services to ensure your complete transition to Dubai is seamless, efficient, and successful.",
      note: "We'll guide you through every step of your Dubai journey, ensuring you feel supported and confident throughout the process.",
    },
    services: [
      {
        title: "Company Set Up in Dubai",
        description:
          "Complete assistance with establishing your business presence in Dubai's free zones and mainland. From license selection to office setup, we guide you through every step of incorporating your company in the UAE.",
        features: [
          "Free zone and mainland company setup",
          "License selection and application",
          "Office space procurement",
          "Business banking account setup",
          "Legal and compliance support",
        ],
      },
      {
        title: "Opening a Local Bank Account in Dubai",
        description:
          "Expert guidance through Dubai's banking system. We help you open corporate and personal bank accounts with leading UAE banks, ensuring smooth financial operations for your business or residence.",
        features: [
          "Corporate bank account setup",
          "Personal banking assistance",
          "Relationship management with UAE banks",
          "Account documentation support",
          "Online banking setup",
          "Multi-currency account options",
        ],
      },
      {
        title: "Golden Visa / Residency Visa",
        description:
          "Navigate Dubai's residency options with confidence. Our team provides comprehensive support for Golden Visa applications, family visas, and other residency solutions tailored to your needs.",
        features: [
          "Golden Visa application assistance",
          "Family residency visas",
          "Investment-based residency",
          "Document preparation and submission",
          "Application tracking and follow-up",
        ],
      },
      {
        title: "Fiscal Advice",
        description:
          "Professional tax and financial planning services for individuals and businesses in Dubai. We provide strategic advice on UAE tax obligations, offshore structures, and wealth management solutions.",
        features: [
          "UAE tax compliance and planning",
          "Offshore company structures",
          "Wealth management strategies",
          "Inheritance and succession planning",
          "Financial reporting requirements",
          "Tax optimization solutions",
        ],
      },
    ],
    process: {
      title: "Our Process",
      intro:
        "We follow a structured, transparent process to ensure your Dubai journey is smooth and successful from start to finish.",
      steps: [
        {
          title: "Initial Consultation",
          description: "Free consultation to understand your goals and requirements",
        },
        {
          title: "Strategy Development",
          description: "Customized plan tailored to your specific needs and timeline",
        },
        {
          title: "Implementation",
          description: "Step-by-step execution with regular progress updates",
        },
        {
          title: "Ongoing Support",
          description: "Continued assistance and guidance as your Dubai presence grows",
        },
      ],
    },
    cta: {
      title: "Ready to Start Your Dubai Journey?",
      body: "Whether you need real estate services or comprehensive business setup support, our team is here to guide you every step of the way.",
      contactUs: "Contact Us",
    },
  },
  investPage: {
    hero: {
      eyebrow: "An exclusive selection of real estate projects for investors.",
      title: "Invest in Dubai with real returns",
      subtitle: "Access carefully selected real estate projects for investors.",
      returns: "Estimated returns: 8–10%",
      support:
        "German, Spanish and English-speaking support, with a team based in Dubai",
    },
    ctas: {
      advice: "Get personalized advice",
      opportunities: "View investment opportunities",
    },
    opportunities: {
      title: "Investment opportunities",
      body: "Explore curated luxury residences and new developments across Dubai—from waterfront icons to Business Bay and beyond. We match opportunities to your capital, timeline, and goals.",
      browse: "Browse properties",
    },
  },
  investForm: {
    heading: "Ready to analyze your investment in Dubai?",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone",
    phonePlaceholder: "Your phone",
    email: "Email",
    emailPlaceholder: "Your email",
    capital: "Estimated capital",
    capitalPlaceholder: "Your estimated capital",
    submit: "Request personalized analysis",
    errorNameEmail: "Please add your name and email.",
    openingEmail: "Opening your email client…",
  },
  contactPage: {
    hero: {
      eyebrow: "Get in Touch",
      title: "Let's Start a Conversation",
      body1:
        "Whether you're looking to buy, sell, or invest in luxury real estate, we're here to provide personalized guidance and expert insight. Reach out to begin your journey.",
      body2:
        "You're in expert hands. We'll take care of every detail to ensure a smooth, successful experience.",
    },
    form: {
      heading: "Send a Message",
      name: "Name",
      namePlaceholder: "Your name",
      subject: "Subject",
      subjectPlaceholder: "What is this regarding?",
      message: "Message",
      messagePlaceholder: "How can I help you?",
      sendEmail: "Send via Email",
      sendWhatsApp: "Send via WhatsApp",
      openingEmail: "Opening your email client...",
      openingWhatsApp: "Opening WhatsApp...",
      defaultSubject: "Inquiry from Website",
    },
    details: {
      heading: "Contact Details",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      whatsappCta: "Message on WhatsApp",
      office: "Office",
      hours: "Hours",
    },
  },
  properties: {
    hero: {
      eyebrow: "Our Collection",
      title: "Exceptional Properties",
      body: "Explore our curated selection of luxury properties, from stunning penthouses to grand estates. Each property has been carefully selected to meet the highest standards of quality and exclusivity.",
      note: "We'll guide you through every detail to ensure you find the perfect property for your needs.",
    },
    searchPlaceholder: "Search by name or location...",
    clearAll: "Clear all",
    sort: {
      newest: "Newest First",
      priceDesc: "Price: High to Low",
      priceAsc: "Price: Low to High",
    },
    filterType: "Property Type",
    filterStatus: "Status",
    filterBedrooms: "Bedrooms",
    filterPrice: "Price Range",
    activeFilters: "Active filters:",
    bedsSuffix: "Beds",
    bedsPlus: "5+ Beds",
    priceRanges: {
      anyPrice: "Any Price",
      under5: "Under AED 5M",
      r5_10: "AED 5M - 10M",
      r10_20: "AED 10M - 20M",
      r20_50: "AED 20M - 50M",
      over50: "AED 50M+",
    },
    types: {
      Penthouse: "Penthouse",
      Villa: "Villa",
      Mansion: "Mansion",
      Apartment: "Apartment",
      Estate: "Estate",
      Townhouse: "Townhouse",
    },
    statuses: {
      "For Sale": "For Sale",
      "For Rent": "For Rent",
      "Off-Market": "Off-Market",
    },
    card: { beds: "Beds", baths: "Baths", sqft: "sqft", to: "to" },
    results: {
      showing: "Showing",
      propertySingular: "property",
      propertyPlural: "properties",
      showingAll: "Showing all {count} properties",
      noResults: "No properties match your criteria.",
      noResultsHint: "Try adjusting your filters to see more results.",
    },
    detail: {
      allProperties: "All Properties",
      newListing: "New Listing",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      livingArea: "Living area",
      typeLabel: "Type",
      sqFt: "sq ft",
      salesOffer: "Sales offer",
      brochure: "Official brochure with pricing guidance, layouts, and payment information.",
      viewPdf: "View PDF",
      listedPrice: "Listed Price",
      email: "Email",
      whatsapp: "WhatsApp",
      tabs: { overview: "Overview", highlights: "Highlights", location: "Location" },
      viewOnMaps: "View on Google Maps",
      otherProperties: "Other Properties",
      youMayAlsoLike: "You May Also Like",
      viewAll: "View All",
    },
    contactCard: {
      call: "Call",
      whatsapp: "WhatsApp",
      requestDetails: "Request Details",
      namePlaceholder: "Your name *",
      emailPlaceholder: "Email address *",
      phonePlaceholder: "Phone (optional)",
      sendEmail: "Send via Email",
      sendWhatsApp: "Send via WhatsApp",
      openingEmail: "Opening your email client...",
      openingWhatsApp: "Opening WhatsApp...",
    },
  },
  notFound: {
    title: "Page Not Found",
    body: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    backHome: "Back to Home",
    browse: "Browse Properties",
  },
};

const es: Dictionary = {
  nav: {
    home: "Inicio",
    properties: "Propiedades",
    invest: "Invertir",
    aboutDubai: "Sobre Dubái",
    services: "Servicios",
    aboutSpain: "Sobre España",
    aboutUs: "Sobre nosotros",
    contact: "Contacto",
  },
  header: {
    theme: "Tema",
    changeLanguage: "Cambiar idioma",
  },
  footer: {
    description:
      "Una agencia inmobiliaria boutique especializada en propiedades de lujo para grandes patrimonios que buscan oportunidades de inversión excepcionales.",
    contact: "Contacto",
    copyrightName: "Duna Partners Real Estate",
    rightsReserved: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
  },
  hero: {
    eyebrow: "Guiamos tu camino",
    headline: "Invierte en Dubái con confianza",
    cta: "Ver propiedades",
  },
  home: {
    featured: {
      eyebrow: "Colección destacada",
      title: "Propiedades excepcionales para clientes excepcionales",
      viewAll: "Ver todas las propiedades",
    },
    valueProps: {
      eyebrow: "Por qué trabajar con nosotros",
      title: "Cómo trabajamos",
      items: [
        {
          title: "Tus intereses primero",
          description:
            "Sin presiones ni ventas agresivas. Solo recomendamos propiedades que encajan con tus objetivos, y te lo decimos con claridad cuando algo no es adecuado.",
        },
        {
          title: "Raíces en Dubái",
          description:
            "Una década de experiencia en Dubái: inteligencia de mercado local combinada con una perspectiva internacional. Marta conoce el mercado a fondo y aporta un enfoque refinado y estratégico a cada inversión.",
        },
        {
          title: "Discreción por defecto",
          description:
            "Los clientes de alto perfil y las operaciones fuera de mercado se mantienen confidenciales. Lo gestionamos todo con el mismo cuidado que esperaríamos para nosotros mismos.",
        },
        {
          title: "Acceso, no solo anuncios",
          description:
            "Gracias a nuestra red y a relaciones consolidadas con promotores, encontramos oportunidades que no aparecen en los portales.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Historias de clientes",
      title: "La confianza de clientes exigentes en todo el mundo",
      items: [
        {
          quote:
            "Trabajar con Marta fue un auténtico placer. Su conocimiento del mercado de lujo y su atención al detalle hicieron que encontrar la propiedad de nuestros sueños fuera muy fácil.",
          role: "Inversor privado",
        },
        {
          quote:
            "El nivel de discreción y profesionalidad superó nuestras expectativas. La red y la visión de mercado de Marta son realmente incomparables.",
          role: "Director de family office",
        },
        {
          quote:
            "Desde la primera consulta hasta el cierre, la experiencia fue impecable. Desde entonces hemos adquirido tres propiedades más con la asesoría de Marta.",
          role: "Empresaria",
        },
      ],
    },
    contactTeaser: {
      title: "¿List@ para encontrar la propiedad de tus sueños?",
      body: "Hablemos de tus objetivos inmobiliarios. Ya sea comprar, vender o invertir, estoy aquí para guiarte en cada paso.",
      contactPage: "Página de contacto",
    },
  },
  consultation: {
    button: "Reservar una llamada",
    title: "Reservar una llamada",
    description:
      "Comparte tus datos y organizaremos una llamada para hablar de tus objetivos inmobiliarios.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    phone: "Teléfono",
    phonePlaceholder: "+34 600 000 000",
    email: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje (opcional)",
    messagePlaceholder: "Cuéntanos qué tipo de propiedad te interesa...",
    note: "La reserva por calendario estará disponible pronto. Te contactaremos por correo para agendar tu llamada.",
  },
  whatsapp: {
    message: "Hola, me gustaría saber más sobre {agency}.",
    aria: "Chatear por WhatsApp",
  },
  aboutPreview: {
    eyebrow: "Sobre Marta Duran",
    title: "Un socio de confianza en el sector inmobiliario de lujo",
    p1: "Marta Duran es la CEO y propietaria de la empresa. Con más de una década de experiencia en el mercado inmobiliario de Dubái, se ha consolidado como asesora de confianza para inversores que buscan oportunidades estratégicas y de alto valor. Combina su experiencia inmobiliaria con un Máster en Derecho (LL.M.) para ofrecer un asesoramiento integral como tu experta en Dubái.",
    p2: "Ya busques una residencia principal, un refugio vacacional o una oportunidad de inversión, Marta ofrece acceso exclusivo a las propiedades más codiciadas de Dubái con un enfoque refinado y estratégico de la inversión inmobiliaria. Te sentirás totalmente acompañad@ durante todo el proceso.",
    languages: "Habla español, inglés y alemán",
    yearsExperience: "Años de experiencia",
    inTransactions: "En transacciones",
    topAgent: "Agente del 1% superior",
    clients: "Más de 200 clientes",
    globalNetwork: "Red global",
  },
  about: {
    hero: {
      eyebrow: "Sobre Marta Duran",
      title: "Un legado de excelencia en el sector inmobiliario de lujo",
      body: "Durante más de 10 años he ayudado a mis clientes a moverse por los mercados inmobiliarios más prestigiosos del mundo con discreción, experiencia y un compromiso inquebrantable con su éxito.",
    },
    stats: {
      yearsExperience: "Años de experiencia",
      inTransactions: "En transacciones",
      clientsServed: "Clientes atendidos",
    },
    story: {
      eyebrow: "La historia de Marta",
      title: "La pasión se une a la experiencia",
      paragraphs: [
        "Con más de una década de experiencia en el mercado inmobiliario de Dubái, Marta Duran se ha consolidado como asesora de confianza para inversores que buscan oportunidades estratégicas y de alto valor. Ha trabajado con los promotores más reconocidos de la región y con las principales firmas inmobiliarias, adquiriendo una experiencia inestimable en propiedades de lujo e inversiones fuera de mercado.",
        "Además de su trayectoria inmobiliaria, Marta es abogada cualificada con un Máster en Derecho (LL.M.), lo que aporta una perspectiva rigurosa y detallada a cada operación. Esta base jurídica refuerza su capacidad para proteger los intereses de sus clientes, evaluar el riesgo con precisión y estructurar adquisiciones con claridad y confianza, especialmente en operaciones complejas y de gran importancia.",
        "A lo largo de su carrera, Marta se ha ganado una reputación por su inteligencia de mercado, su discreción y su enfoque meticuloso en la selección de carteras. Su capacidad para navegar los ciclos del mercado con precisión ha permitido a sus clientes optimizar la rentabilidad y construir un patrimonio duradero.",
        "Impulsada por la visión de elevar la experiencia inmobiliaria, fundó Marta Duran Realty, una firma que refleja su compromiso con el servicio personalizado, la integridad y una mentalidad orientada a resultados. Bajo su liderazgo, Marta Duran Realty es un socio de confianza para inversores exigentes, ofreciendo acceso exclusivo a las propiedades más codiciadas de Dubái y un enfoque refinado y altamente estratégico de la inversión inmobiliaria.",
      ],
    },
    languages: "Habla español, inglés y alemán",
    values: {
      eyebrow: "El enfoque de Marta",
      title: "Principios que guían cada operación",
    },
    investors: {
      eyebrow: "Para inversores",
      title: "Asesoramiento estratégico en inversión inmobiliaria",
      paragraphs: [
        "Para grandes patrimonios y family offices que buscan construir u optimizar sus carteras inmobiliarias, ofrezco un asesoramiento de inversión integral respaldado por un profundo conocimiento del mercado y conexiones globales.",
        "Mi enfoque va más allá de encontrar propiedades. Analizo las tendencias del mercado, evalúo los factores de riesgo, valoro la rentabilidad potencial y ofrezco recomendaciones estratégicas alineadas con tus objetivos patrimoniales globales.",
      ],
      bullets: [
        "Estrategias de diversificación de cartera",
        "Momento de mercado e identificación de oportunidades",
        "Diligencia debida y evaluación de riesgos",
        "Acceso a oportunidades fuera de mercado",
        "Coordinación con asesores legales y fiscales",
      ],
    },
  },
  aboutDubaiHero: {
    eyebrow: "Destino de inversión",
    title: "Descubre el mercado inmobiliario de lujo de Dubái",
    body: "Explora el mercado inmobiliario más dinámico del mundo. Desde desarrollos icónicos hasta oportunidades emergentes, Dubái ofrece un potencial incomparable para inversores exigentes.",
  },
  aboutSpainHero: {
    eyebrow: "Vida mediterránea",
    title: "Inmobiliario de lujo en España",
    body: "Desde el ensanche del Eixample de Barcelona hasta el mar, España combina una arquitectura de primer nivel con un estilo de vida al aire libre y orientado al diseño. El país atrae a compradores de todo el mundo que buscan conectividad con la UE, cultura y residencias cuidadosamente restauradas en barrios caminables, con un claro potencial cuando la arquitectura, la luz y el nivel de servicio se alinean.",
  },
  aboutDubaiVideos: {
    eyebrow: "Vive Dubái",
    title: "Descubre la ciudad",
  },
  aboutDubaiPage: {
    marketInsights: {
      eyebrow: "Cómo vemos el mercado",
      title: "Inteligencia que orienta tu decisión",
      items: [
        {
          title: "Qué seguimos",
          description:
            "Supervisamos oportunidades de inversión, lanzamientos sobre plano y movimientos del mercado secundario para que puedas actuar cuando importa, no cuando aparece un anuncio.",
        },
        {
          title: "Por qué Dubái sigue siendo rentable",
          description:
            "Sin impuesto sobre plusvalías ni sobre la renta por alquiler, propiedad 100% en pleno dominio en zonas designadas y vías de visado vinculadas a la propiedad. El marco está pensado para compradores internacionales.",
        },
        {
          title: "Quién compra",
          description:
            "Los compradores europeos, británicos y asiáticos impulsan gran parte de la demanda. Vemos dónde se concentra el interés y dónde el valor aún pasa desapercibido.",
        },
        {
          title: "Hacia dónde va el crecimiento",
          description:
            "Más allá de los nombres habituales, seguimos de cerca los plazos de entrega y la infraestructura (metro, carreteras, planes maestros) que cambiarán el atractivo de una zona en los próximos 3–5 años.",
        },
      ],
    },
    developers: {
      eyebrow: "Promotores líderes",
      title: "Socios de desarrollo de primer nivel",
      descriptions: [
        "El mayor promotor de Dubái, conocido por proyectos icónicos como el Burj Khalifa y el Dubai Mall.",
        "Promotor de titularidad estatal centrado en desarrollos residenciales y comerciales de lujo.",
        "Promotor líder de comunidades residenciales de lujo y proyectos de hostelería.",
        "Especializado en comunidades planificadas y desarrollos sostenibles.",
        "Reconocido por sus desarrollos residenciales de alta gama y proyectos de hostelería.",
        "Centrado en viviendas asequibles y proyectos de desarrollo comunitario.",
        "Promotor internacional con proyectos residenciales y comerciales de lujo.",
      ],
    },
    neighborhoods: {
      title: "Ubicaciones privilegiadas",
      keyHighlights: "Aspectos destacados:",
      items: [
        {
          description:
            "Icónica isla artificial con residencias de lujo frente al mar y servicios de primer nivel.",
          highlights: ["Vida frente al mar", "Acceso a marina", "Desarrollos de alta gama"],
        },
        {
          description:
            "La zona franca financiera de Dubái, con sus propios tribunales de common law, un centro de negocios global y oficinas y residencias de lujo.",
          highlights: ["Tribunales de common law", "Instalaciones empresariales", "Residencias de lujo"],
        },
        {
          description:
            "Exclusiva comunidad de golf con campos de campeonato e instalaciones ecuestres.",
          highlights: ["Campos de golf", "Instalaciones ecuestres", "Comunidad exclusiva"],
        },
        {
          description:
            "Comunidad planificada con senderos naturales, parques y servicios estilo resort.",
          highlights: ["Senderos naturales", "Servicios tipo resort", "Orientada a familias"],
        },
        {
          description:
            "Nuevo destino frente al mar con desarrollos modernos y estilo de vida de marina.",
          highlights: ["Arquitectura moderna", "Estilo de vida de marina", "Zona emergente"],
        },
        {
          description:
            "El vibrante centro de Dubái, con el Burj Khalifa, el Dubai Mall y una gastronomía de primer nivel.",
          highlights: ["Vistas al Burj Khalifa", "Compras premium", "Distrito de ocio"],
        },
        {
          description:
            "Lujoso desarrollo frente al agua con torres icónicas, parques e instalaciones de marina.",
          highlights: ["Vistas al Creek", "Desarrollo de uso mixto", "Estilo de vida moderno"],
        },
        {
          description:
            "La principal arteria de Dubái, flanqueada por prestigiosos rascacielos y sedes empresariales.",
          highlights: ["Distrito de negocios", "Arquitectura icónica", "Ubicación céntrica"],
        },
        {
          description:
            "Exclusivo desarrollo de archipiélago con islas privadas y residencias de lujo.",
          highlights: ["Islas privadas", "Acceso exclusivo", "Estilo de vida frente al agua"],
        },
        {
          description:
            "Distrito peatonal con tiendas boutique, restaurantes y ocio.",
          highlights: ["Distrito caminable", "Tiendas boutique", "Destino de estilo de vida"],
        },
        {
          description:
            "Pintoresco corredor frente al agua que conecta el Dubai Creek con el Golfo Arábigo.",
          highlights: ["Vistas al agua", "Actividades recreativas", "Desarrollos modernos"],
        },
      ],
    },
    faq: {
      eyebrow: "Resolvemos tus dudas",
      title: "Preguntas frecuentes",
      intro:
        "Entendemos que invertir en el sector inmobiliario de Dubái puede generar muchas preguntas. Aquí tienes las respuestas a las consultas más habituales de nuestros clientes.",
      items: [
        {
          question: "¿Cómo funciona la propiedad inmobiliaria en Dubái?",
          lead: "Dubái ofrece uno de los marcos de propiedad más favorables para el inversor del mundo. Desde 2002, los extranjeros pueden poseer propiedades en pleno dominio (100%) en zonas designadas de toda la ciudad. Estas zonas de pleno dominio otorgan a los no residentes plenos derechos de propiedad, sin límites de tiempo y con libertad para vender, alquilar o transmitir la propiedad a sus herederos. El gobierno ha establecido una normativa clara y transparente para proteger a los inversores extranjeros, garantizando un mercado inmobiliario seguro y bien regulado. Esta apertura, combinada con el sólido marco jurídico y las ventajas fiscales de Dubái, ha convertido la ciudad en un centro global para inversores inmobiliarios internacionales que buscan estabilidad, crecimiento y valor a largo plazo.",
          bullets: [],
          outro: "",
        },
        {
          question: "¿Comprar una propiedad me da residencia?",
          lead: "Sí. La compra de inmuebles que cumplan los requisitos puede hacerte elegible para un visado de residencia de los EAU, sujeto a la normativa vigente y a los requisitos de valor mínimo de la propiedad. Te guiaremos por las opciones de residencia que mejor se adapten a tus necesidades y nos aseguraremos de cumplir todos los requisitos para un proceso sin complicaciones.",
          bullets: [],
          outro: "",
        },
        {
          question: "¿Hay impuestos en la compra de propiedades en Dubái?",
          lead: "Dubái es muy eficiente desde el punto de vista fiscal:",
          bullets: [
            "Sin impuesto sobre bienes inmuebles",
            "Sin impuesto sobre plusvalías",
            "Sin impuesto de sucesiones",
            "Sin impuesto sobre la renta por ingresos de alquiler",
            "Solo se aplica una tasa de transferencia única en la compra: un 4% de tasas DLD al Departamento de Tierras de Dubái",
          ],
          outro:
            "Este entorno fiscalmente eficiente hace que Dubái resulte especialmente atractivo para los inversores internacionales que buscan maximizar su rentabilidad.",
        },
        {
          question: "¿Es una buena inversión la propiedad sobre plano?",
          lead: "Las propiedades sobre plano suelen ofrecer:",
          bullets: [
            "Precios de entrada más bajos que los desarrollos ya terminados",
            "Planes de pago flexibles durante la construcción",
            "Un fuerte potencial de revalorización a medida que se completa el proyecto",
          ],
          outro:
            "Resultan especialmente atractivas para los inversores que buscan maximizar la rentabilidad a medio y largo plazo. Seleccionamos cuidadosamente desarrollos de promotores de confianza para garantizar la finalización del proyecto y los estándares de calidad.",
        },
        {
          question: "¿Por qué invertir ahora en el sector inmobiliario de Dubái?",
          lead: "Dubái combina:",
          bullets: [
            "Un fuerte crecimiento económico impulsado por la diversificación",
            "Demanda de inversores de todo el mundo",
            "Estabilidad política y financiera en la región",
            "Altas rentabilidades por alquiler en comparación con otros mercados globales",
            "Potencial de revalorización a largo plazo",
          ],
          outro:
            "Las condiciones actuales del mercado presentan excelentes oportunidades para los inversores exigentes. Nos anticipamos a las tendencias del mercado para identificar las mejores oportunidades para nuestros clientes.",
        },
        {
          question: "¿Necesito ser residente para comprar propiedades en Dubái?",
          lead: "No. No es necesario ser residente de los EAU para comprar propiedades en Dubái. Los extranjeros pueden adquirir propiedades en zonas designadas de pleno dominio con plenos derechos de propiedad, ya vivan en los EAU o en el extranjero. Esta flexibilidad hace que Dubái sea excepcionalmente accesible para los inversores internacionales.",
          bullets: [],
          outro: "",
        },
        {
          question: "¿Necesito abrir una cuenta bancaria para comprar sobre plano en Dubái?",
          lead: "No, abrir una cuenta bancaria en los EAU no es obligatorio para comprar una propiedad sobre plano. Los promotores suelen aceptar transferencias internacionales para los pagos. No obstante, abrir una cuenta bancaria local puede hacer que las transacciones futuras —como gastos de servicio, ingresos por alquiler o reventa— sean más sencillas y eficientes. Podemos ayudarte con este proceso si lo deseas.",
          bullets: [],
          outro: "",
        },
      ],
    },
  },
  aboutSpainPage: {
    marketInsights: {
      eyebrow: "Cómo vemos el mercado",
      title: "Inteligencia que orienta tu decisión",
      items: [
        {
          title: "Qué seguimos",
          description:
            "Supervisamos los precios de lanzamiento en las zonas más exclusivas, el tiempo en el mercado del producto de reventa, los patrones estacionales del turismo y las condiciones de financiación para no residentes, para que las recomendaciones se ajusten a tu horizonte de inversión y tu exposición a divisas.",
        },
        {
          title: "Por qué los compradores eligen Barcelona",
          description:
            "Estilo de vida, conectividad con la UE, opciones educativas y diversificación junto a otras ciudades globales. Muchos clientes combinan una residencia principal en Dubái con una segunda vivienda europea o una inversión en alquiler de larga duración.",
        },
        {
          title: "Quién está activo",
          description:
            "Una mezcla de compradores locales que mejoran de vivienda, compradores de segunda residencia de la UE e inversores de fuera de la UE, a menudo centrados en la calidad de la reforma, el nivel de servicio en edificios boutique y la claridad por adelantado sobre impuestos y gastos de cierre.",
        },
        {
          title: "Hacia dónde se mueve la atención",
          description:
            "Más allá de los nombres de postal, seguimos las ampliaciones de metro, las mejoras del espacio público y los microbarrios donde la arquitectura y la luz superan la media de la zona, especialmente en horizontes de 3 a 7 años.",
        },
      ],
    },
    developers: {
      eyebrow: "Promotores líderes",
      title: "Socios de desarrollo de primer nivel",
      intro:
        "Ejemplos de grupos detrás de propiedades emblemáticas de Barcelona, siempre verificados proyecto por proyecto antes de que te comprometas.",
      descriptions: [
        "Conocida por sus meticulosas restauraciones de patrimonio —sobre todo la Casa Burés—, Bonavista combina la conservación del detalle modernista con servicios contemporáneos como piscinas en la azotea, wellness y una vida con conserjería en direcciones prime del Eixample.",
        "Responsable de AM Residences en Ausiàs March, Intercon llevó a cabo una reforma integral de un edificio de finales del siglo XIX conservando su fachada y combinando los interiores con un modelo operativo de residencia con servicios.",
        "Uno de los promotores residenciales consolidados de Barcelona, activo en distritos centrales con producto de gama media y alta; un contexto útil al comparar estándares de entrega y liquidez de reventa entre barrios.",
      ],
    },
    neighborhoods: {
      title: "Ubicaciones privilegiadas",
      keyHighlights: "Aspectos destacados:",
      items: [
        {
          description:
            "La icónica retícula al norte de la Plaça de Catalunya: avenidas amplias, fachadas modernistas y acceso a pie al Passeig de Gràcia. Fuerte demanda de pisos reformados y áticos; la escasa oferta nueva mantiene competitivo el producto bien ubicado.",
          highlights: ["Arquitectura modernista", "Comercio y restauración", "Conexión de metro"],
        },
        {
          description:
            "Denso barrio junto a la playa con acceso a marina y una demanda estable de alquiler a corto y medio plazo. El producto más nuevo se mezcla con edificios antiguos: es importante la diligencia debida sobre el estado del edificio y los gastos de comunidad.",
          highlights: ["Cercanía al mar y al puerto", "Flujo turístico", "Mercado de alquiler activo"],
        },
        {
          description:
            "Plazas con aire de pueblo y calles de baja altura con una fuerte identidad local. Popular entre familias y creativos; el inventario tiende a edificios más pequeños y oportunidades de reforma más que a grandes obras nuevas.",
          highlights: ["Carácter de barrio", "Terrazas al aire libre", "Pocas torres altas"],
        },
        {
          description:
            "Antiguos corredores industriales transformados en un polo tecnológico y de diseño: producto tipo loft, inquilinos del sector de la innovación e inversión en infraestructura a largo plazo (incluidos parques costeros y mejor conectividad).",
          highlights: ["Distrito 22@", "Producto de conversión", "Potencial a largo plazo"],
        },
      ],
    },
    faq: {
      eyebrow: "Resolvemos tus dudas",
      title: "Preguntas frecuentes",
      intro:
        "Solo orientación general; tu abogado y tu asesor fiscal deben confirmar los detalles según tu situación.",
      items: [
        {
          question: "¿Pueden comprar los extranjeros en Barcelona?",
          answer:
            "Los no residentes pueden adquirir propiedades en pleno dominio en España, sujeto a los requisitos del NIE, las normas bancarias y los controles contra el blanqueo de capitales. Las operaciones de obra nueva y de reventa siguen tratamientos fiscales distintos; tu notario y tu abogado estructurarán correctamente la compra.",
        },
        {
          question: "¿Qué costes deben prever los compradores?",
          answer:
            "Prevé el impuesto de transmisiones (ITP) en la reventa o el IVA más el impuesto de actos jurídicos documentados en la obra nueva, los honorarios de notaría y registro de la propiedad, además de los costes legales y de hipoteca. Ofrecemos una estimación detallada, partida por partida, antes de que reserves una unidad.",
        },
        {
          question: "¿Está activo el mercado de alquiler?",
          answer:
            "Barcelona sigue siendo atractiva para el alquiler a medio y largo plazo, con una regulación en evolución. Te ayudamos a entender las normas de licencias, los estatutos de la comunidad y las rentabilidades realistas por microzona.",
        },
        {
          question: "¿Cómo seleccionamos la zona adecuada?",
          answer:
            "Alineamos colegios, desplazamientos, calidad del edificio y tu horizonte de inversión, y después reducimos la búsqueda a un puñado de calles y tipos de producto antes de que viajes para las visitas.",
        },
      ],
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Servicios profesionales",
      title: "Apoyo integral para inversores en Dubái",
      body: "Más allá del sector inmobiliario de lujo, ofrecemos servicios integrales de negocio y residencia para que tu traslado completo a Dubái sea fluido, eficiente y exitoso.",
      note: "Te guiaremos en cada paso de tu camino en Dubái, para que te sientas acompañad@ y con confianza durante todo el proceso.",
    },
    services: [
      {
        title: "Constitución de empresa en Dubái",
        description:
          "Asistencia completa para establecer tu presencia empresarial en las zonas francas y el territorio continental de Dubái. Desde la elección de la licencia hasta la puesta en marcha de la oficina, te guiamos en cada paso de la constitución de tu empresa en los EAU.",
        features: [
          "Constitución de empresa en zona franca y continental",
          "Elección y solicitud de licencia",
          "Obtención de espacio de oficinas",
          "Apertura de cuenta bancaria empresarial",
          "Apoyo legal y de cumplimiento",
        ],
      },
      {
        title: "Apertura de una cuenta bancaria local en Dubái",
        description:
          "Orientación experta a través del sistema bancario de Dubái. Te ayudamos a abrir cuentas bancarias corporativas y personales con los principales bancos de los EAU, garantizando unas operaciones financieras fluidas para tu empresa o residencia.",
        features: [
          "Apertura de cuenta bancaria corporativa",
          "Asistencia en banca personal",
          "Gestión de la relación con bancos de los EAU",
          "Apoyo con la documentación de la cuenta",
          "Configuración de banca online",
          "Opciones de cuenta multidivisa",
        ],
      },
      {
        title: "Golden Visa / Visado de residencia",
        description:
          "Navega con confianza por las opciones de residencia de Dubái. Nuestro equipo ofrece un apoyo integral para las solicitudes de Golden Visa, visados familiares y otras soluciones de residencia adaptadas a tus necesidades.",
        features: [
          "Asistencia en la solicitud de la Golden Visa",
          "Visados de residencia familiar",
          "Residencia por inversión",
          "Preparación y presentación de documentos",
          "Seguimiento de la solicitud",
        ],
      },
      {
        title: "Asesoramiento fiscal",
        description:
          "Servicios profesionales de planificación fiscal y financiera para particulares y empresas en Dubái. Ofrecemos asesoramiento estratégico sobre las obligaciones fiscales en los EAU, las estructuras offshore y las soluciones de gestión patrimonial.",
        features: [
          "Cumplimiento y planificación fiscal en los EAU",
          "Estructuras de empresas offshore",
          "Estrategias de gestión patrimonial",
          "Planificación de herencias y sucesiones",
          "Requisitos de información financiera",
          "Soluciones de optimización fiscal",
        ],
      },
    ],
    process: {
      title: "Nuestro proceso",
      intro:
        "Seguimos un proceso estructurado y transparente para que tu camino en Dubái sea fluido y exitoso de principio a fin.",
      steps: [
        {
          title: "Consulta inicial",
          description: "Consulta gratuita para entender tus objetivos y necesidades",
        },
        {
          title: "Desarrollo de la estrategia",
          description: "Plan personalizado adaptado a tus necesidades y plazos concretos",
        },
        {
          title: "Implementación",
          description: "Ejecución paso a paso con actualizaciones periódicas del progreso",
        },
        {
          title: "Apoyo continuo",
          description: "Asistencia y orientación continuas a medida que crece tu presencia en Dubái",
        },
      ],
    },
    cta: {
      title: "¿List@ para empezar tu camino en Dubái?",
      body: "Ya necesites servicios inmobiliarios o un apoyo integral para la constitución de tu empresa, nuestro equipo está aquí para guiarte en cada paso.",
      contactUs: "Contáctanos",
    },
  },
  investPage: {
    hero: {
      eyebrow: "Una selección exclusiva de proyectos inmobiliarios para inversores.",
      title: "Invierte en Dubái con rentabilidades reales",
      subtitle: "Accede a proyectos inmobiliarios cuidadosamente seleccionados para inversores.",
      returns: "Rentabilidad estimada: 8–10%",
      support:
        "Atención en alemán, español e inglés, con un equipo con base en Dubái",
    },
    ctas: {
      advice: "Recibe asesoramiento personalizado",
      opportunities: "Ver oportunidades de inversión",
    },
    opportunities: {
      title: "Oportunidades de inversión",
      body: "Explora residencias de lujo y nuevos desarrollos seleccionados por todo Dubái, desde iconos frente al mar hasta Business Bay y más allá. Adaptamos las oportunidades a tu capital, tus plazos y tus objetivos.",
      browse: "Ver propiedades",
    },
  },
  investForm: {
    heading: "¿List@ para analizar tu inversión en Dubái?",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    phone: "Teléfono",
    phonePlaceholder: "Tu teléfono",
    email: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    capital: "Capital estimado",
    capitalPlaceholder: "Tu capital estimado",
    submit: "Solicitar análisis personalizado",
    errorNameEmail: "Añade tu nombre y tu correo electrónico.",
    openingEmail: "Abriendo tu cliente de correo…",
  },
  contactPage: {
    hero: {
      eyebrow: "Ponte en contacto",
      title: "Empecemos una conversación",
      body1:
        "Ya quieras comprar, vender o invertir en inmuebles de lujo, estamos aquí para ofrecerte una orientación personalizada y una visión experta. Escríbenos para comenzar tu camino.",
      body2:
        "Estás en manos expertas. Nos ocuparemos de cada detalle para garantizar una experiencia fluida y exitosa.",
    },
    form: {
      heading: "Envía un mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      subject: "Asunto",
      subjectPlaceholder: "¿Sobre qué tema es?",
      message: "Mensaje",
      messagePlaceholder: "¿Cómo puedo ayudarte?",
      sendEmail: "Enviar por correo",
      sendWhatsApp: "Enviar por WhatsApp",
      openingEmail: "Abriendo tu cliente de correo...",
      openingWhatsApp: "Abriendo WhatsApp...",
      defaultSubject: "Consulta desde la web",
    },
    details: {
      heading: "Datos de contacto",
      phone: "Teléfono",
      email: "Correo electrónico",
      whatsapp: "WhatsApp",
      whatsappCta: "Escribir por WhatsApp",
      office: "Oficina",
      hours: "Horario",
    },
  },
  properties: {
    hero: {
      eyebrow: "Nuestra colección",
      title: "Propiedades excepcionales",
      body: "Explora nuestra selección de propiedades de lujo, desde impresionantes áticos hasta grandes fincas. Cada propiedad se ha elegido cuidadosamente para cumplir los más altos estándares de calidad y exclusividad.",
      note: "Te guiaremos en cada detalle para asegurarnos de que encuentres la propiedad perfecta para tus necesidades.",
    },
    searchPlaceholder: "Buscar por nombre o ubicación...",
    clearAll: "Borrar todo",
    sort: {
      newest: "Más recientes primero",
      priceDesc: "Precio: de mayor a menor",
      priceAsc: "Precio: de menor a mayor",
    },
    filterType: "Tipo de propiedad",
    filterStatus: "Estado",
    filterBedrooms: "Dormitorios",
    filterPrice: "Rango de precio",
    activeFilters: "Filtros activos:",
    bedsSuffix: "Dorm.",
    bedsPlus: "5+ Dorm.",
    priceRanges: {
      anyPrice: "Cualquier precio",
      under5: "Menos de AED 5M",
      r5_10: "AED 5M - 10M",
      r10_20: "AED 10M - 20M",
      r20_50: "AED 20M - 50M",
      over50: "AED 50M+",
    },
    types: {
      Penthouse: "Ático",
      Villa: "Villa",
      Mansion: "Mansión",
      Apartment: "Apartamento",
      Estate: "Finca",
      Townhouse: "Casa adosada",
    },
    statuses: {
      "For Sale": "En venta",
      "For Rent": "En alquiler",
      "Off-Market": "Fuera de mercado",
    },
    card: { beds: "Dorm.", baths: "Baños", sqft: "pies²", to: "a" },
    results: {
      showing: "Mostrando",
      propertySingular: "propiedad",
      propertyPlural: "propiedades",
      showingAll: "Mostrando las {count} propiedades",
      noResults: "Ninguna propiedad coincide con tus criterios.",
      noResultsHint: "Prueba a ajustar los filtros para ver más resultados.",
    },
    detail: {
      allProperties: "Todas las propiedades",
      newListing: "Nueva",
      bedrooms: "Dormitorios",
      bathrooms: "Baños",
      livingArea: "Superficie habitable",
      typeLabel: "Tipo",
      sqFt: "pies²",
      salesOffer: "Oferta de venta",
      brochure: "Folleto oficial con orientación de precios, distribuciones e información de pago.",
      viewPdf: "Ver PDF",
      listedPrice: "Precio de venta",
      email: "Correo",
      whatsapp: "WhatsApp",
      tabs: { overview: "Resumen", highlights: "Aspectos destacados", location: "Ubicación" },
      viewOnMaps: "Ver en Google Maps",
      otherProperties: "Otras propiedades",
      youMayAlsoLike: "También te puede interesar",
      viewAll: "Ver todas",
    },
    contactCard: {
      call: "Llamar",
      whatsapp: "WhatsApp",
      requestDetails: "Solicitar información",
      namePlaceholder: "Tu nombre *",
      emailPlaceholder: "Correo electrónico *",
      phonePlaceholder: "Teléfono (opcional)",
      sendEmail: "Enviar por correo",
      sendWhatsApp: "Enviar por WhatsApp",
      openingEmail: "Abriendo tu cliente de correo...",
      openingWhatsApp: "Abriendo WhatsApp...",
    },
  },
  notFound: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o se ha movido. Vamos a ayudarte a retomar el camino.",
    backHome: "Volver al inicio",
    browse: "Ver propiedades",
  },
};

const de: Dictionary = {
  nav: {
    home: "Startseite",
    properties: "Immobilien",
    invest: "Investieren",
    aboutDubai: "Über Dubai",
    services: "Leistungen",
    aboutSpain: "Über Spanien",
    aboutUs: "Über uns",
    contact: "Kontakt",
  },
  header: {
    theme: "Erscheinungsbild",
    changeLanguage: "Sprache ändern",
  },
  footer: {
    description:
      "Eine Boutique-Immobilienagentur, spezialisiert auf Luxusimmobilien für vermögende Privatpersonen, die außergewöhnliche Investitionsmöglichkeiten suchen.",
    contact: "Kontakt",
    copyrightName: "Duna Partners Real Estate",
    rightsReserved: "Alle Rechte vorbehalten.",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
  },
  hero: {
    eyebrow: "Wir begleiten Ihren Weg",
    headline: "Investieren Sie mit Vertrauen in Dubai",
    cta: "Immobilien ansehen",
  },
  home: {
    featured: {
      eyebrow: "Ausgewählte Kollektion",
      title: "Außergewöhnliche Immobilien für außergewöhnliche Kunden",
      viewAll: "Alle Immobilien ansehen",
    },
    valueProps: {
      eyebrow: "Warum mit uns arbeiten",
      title: "Wie wir arbeiten",
      items: [
        {
          title: "Ihre Interessen zuerst",
          description:
            "Kein Druck, keine aufdringlichen Verkaufsgespräche. Wir empfehlen nur Immobilien, die zu Ihren Zielen passen – und sagen offen, wenn etwas nicht passt.",
        },
        {
          title: "In Dubai verwurzelt",
          description:
            "Ein Jahrzehnt Dubai-Expertise – lokales Marktwissen verbunden mit internationaler Perspektive. Marta kennt den Markt bis ins Detail und verfolgt bei jeder Investition einen fundierten, strategischen Ansatz.",
        },
        {
          title: "Diskretion als Standard",
          description:
            "Prominente Kunden und Off-Market-Geschäfte bleiben vertraulich. Wir behandeln alles mit derselben Sorgfalt, die wir für uns selbst erwarten würden.",
        },
        {
          title: "Zugang, nicht nur Angebote",
          description:
            "Dank langjähriger Beziehungen zu Bauträgern und unserem Netzwerk erschließen wir Gelegenheiten, die auf Portalen nicht erscheinen.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Das Vertrauen anspruchsvoller Kunden weltweit",
      items: [
        {
          quote:
            "Die Zusammenarbeit mit Marta war ein wahres Vergnügen. Ihr Verständnis des Luxusmarktes und ihre Liebe zum Detail machten die Suche nach unserer Traumimmobilie mühelos.",
          role: "Privatinvestor",
        },
        {
          quote:
            "Das Maß an Diskretion und Professionalität übertraf unsere Erwartungen. Martas Netzwerk und Marktkenntnis sind wirklich unübertroffen.",
          role: "Family-Office-Direktor",
        },
        {
          quote:
            "Von der ersten Beratung bis zum Abschluss verlief alles reibungslos. Seitdem haben wir mit Martas Unterstützung drei weitere Immobilien erworben.",
          role: "Unternehmerin",
        },
      ],
    },
    contactTeaser: {
      title: "Bereit, Ihre Traumimmobilie zu finden?",
      body: "Sprechen wir über Ihre Immobilienziele. Ob Kauf, Verkauf oder Investition – ich begleite Sie bei jedem Schritt.",
      contactPage: "Kontaktseite",
    },
  },
  consultation: {
    button: "Anruf vereinbaren",
    title: "Anruf vereinbaren",
    description:
      "Teilen Sie uns Ihre Daten mit und wir vereinbaren einen Anruf, um Ihre Immobilienziele zu besprechen.",
    name: "Name",
    namePlaceholder: "Ihr Name",
    phone: "Telefon",
    phonePlaceholder: "+49 151 00000000",
    email: "E-Mail",
    emailPlaceholder: "ihre@email.com",
    message: "Nachricht (optional)",
    messagePlaceholder: "Erzählen Sie uns von Ihren Immobilieninteressen...",
    note: "Die Kalenderbuchung ist bald verfügbar. Wir melden uns per E-Mail, um Ihren Anruf zu vereinbaren.",
  },
  whatsapp: {
    message: "Hallo, ich möchte mehr über {agency} erfahren.",
    aria: "Auf WhatsApp chatten",
  },
  aboutPreview: {
    eyebrow: "Über Marta Duran",
    title: "Ein vertrauensvoller Partner für Luxusimmobilien",
    p1: "Marta Duran ist CEO und Inhaberin des Unternehmens. Mit über einem Jahrzehnt Erfahrung auf dem Dubaier Immobilienmarkt hat sie sich als vertrauenswürdige Beraterin für Investoren etabliert, die strategische, hochwertige Gelegenheiten suchen. Sie verbindet ihre Immobilienexpertise mit einem Master of Laws (LL.M.) und bietet als Ihre Dubai-Expertin eine umfassende Beratung.",
    p2: "Ob Erstwohnsitz, Feriendomizil oder Investitionsmöglichkeit – Marta bietet exklusiven Zugang zu den begehrtesten Immobilien Dubais mit einem fundierten, strategischen Ansatz für Immobilieninvestitionen. Sie werden während des gesamten Prozesses umfassend begleitet.",
    languages: "Spricht Spanisch, Englisch und Deutsch",
    yearsExperience: "Jahre Erfahrung",
    inTransactions: "An Transaktionen",
    topAgent: "Top-1%-Maklerin",
    clients: "Über 200 Kunden",
    globalNetwork: "Globales Netzwerk",
  },
  about: {
    hero: {
      eyebrow: "Über Marta Duran",
      title: "Ein Vermächtnis der Exzellenz in Luxusimmobilien",
      body: "Seit über 10 Jahren unterstütze ich meine Kunden dabei, sich auf den renommiertesten Immobilienmärkten der Welt zurechtzufinden – mit Diskretion, Fachwissen und unerschütterlichem Engagement für ihren Erfolg.",
    },
    stats: {
      yearsExperience: "Jahre Erfahrung",
      inTransactions: "An Transaktionen",
      clientsServed: "Betreute Kunden",
    },
    story: {
      eyebrow: "Martas Geschichte",
      title: "Leidenschaft trifft auf Kompetenz",
      paragraphs: [
        "Mit über einem Jahrzehnt Erfahrung auf dem Dubaier Immobilienmarkt hat sich Marta Duran als vertrauenswürdige Beraterin für Investoren etabliert, die strategische, hochwertige Gelegenheiten suchen. Sie hat mit den renommiertesten Bauträgern der Region und führenden Immobilienunternehmen zusammengearbeitet und dabei wertvolle Expertise in Luxusimmobilien und Off-Market-Investitionen erworben.",
        "Neben ihrem immobilienwirtschaftlichen Hintergrund ist Marta qualifizierte Juristin mit einem Master of Laws (LL.M.) und bringt eine gründliche, detailorientierte Perspektive in jede Transaktion ein. Diese juristische Grundlage stärkt ihre Fähigkeit, die Interessen ihrer Kunden zu schützen, Risiken präzise einzuschätzen und Akquisitionen klar und sicher zu strukturieren – insbesondere bei komplexen Geschäften mit hohem Einsatz.",
        "Im Laufe ihrer Karriere hat sich Marta einen Ruf für Marktkenntnis, Diskretion und einen sorgfältigen Ansatz bei der Portfoliozusammenstellung erarbeitet. Ihre Fähigkeit, Marktzyklen präzise zu navigieren, hat es ihren Kunden ermöglicht, Renditen zu optimieren und dauerhaftes Vermögen aufzubauen.",
        "Angetrieben von der Vision, das Immobilienerlebnis zu verbessern, gründete sie Marta Duran Realty – ein Unternehmen, das ihr Engagement für persönlichen Service, Integrität und eine ergebnisorientierte Denkweise widerspiegelt. Unter ihrer Leitung ist Marta Duran Realty ein vertrauenswürdiger Partner für anspruchsvolle Investoren und bietet exklusiven Zugang zu den begehrtesten Immobilien Dubais sowie einen fundierten, hochstrategischen Ansatz für Immobilieninvestitionen.",
      ],
    },
    languages: "Spricht Spanisch, Englisch und Deutsch",
    values: {
      eyebrow: "Martas Ansatz",
      title: "Grundsätze, die jede Transaktion leiten",
    },
    investors: {
      eyebrow: "Für Investoren",
      title: "Strategische Beratung für Immobilieninvestitionen",
      paragraphs: [
        "Für vermögende Privatpersonen und Family Offices, die ihr Immobilienportfolio aufbauen oder optimieren möchten, biete ich eine umfassende Investitionsberatung, gestützt auf fundiertes Marktwissen und globale Verbindungen.",
        "Mein Ansatz geht über das Finden von Immobilien hinaus. Ich analysiere Markttrends, bewerte Risikofaktoren, schätze potenzielle Renditen ein und gebe strategische Empfehlungen, die auf Ihre gesamten Vermögensziele abgestimmt sind.",
      ],
      bullets: [
        "Strategien zur Portfoliodiversifizierung",
        "Markt-Timing und Identifizierung von Gelegenheiten",
        "Due Diligence und Risikobewertung",
        "Zugang zu Off-Market-Gelegenheiten",
        "Koordination mit Rechts- und Steuerberatern",
      ],
    },
  },
  aboutDubaiHero: {
    eyebrow: "Investitionsstandort",
    title: "Entdecken Sie Dubais Markt für Luxusimmobilien",
    body: "Entdecken Sie den dynamischsten Immobilienmarkt der Welt. Von ikonischen Projekten bis zu aufstrebenden Gelegenheiten bietet Dubai ein einzigartiges Potenzial für anspruchsvolle Investoren.",
  },
  aboutSpainHero: {
    eyebrow: "Mediterranes Leben",
    title: "Luxusimmobilien in Spanien",
    body: "Vom Eixample-Raster Barcelonas bis zum Meer verbindet Spanien Weltklasse-Architektur mit einem designorientierten Lebensstil im Freien. Das Land zieht Käufer aus aller Welt an, die EU-Anbindung, Kultur und sorgfältig restaurierte Residenzen in fußläufigen Vierteln suchen – mit klarem Potenzial, wenn Architektur, Licht und Serviceniveau zusammenpassen.",
  },
  aboutDubaiVideos: {
    eyebrow: "Dubai erleben",
    title: "Entdecken Sie die Stadt",
  },
  aboutDubaiPage: {
    marketInsights: {
      eyebrow: "Wie wir den Markt sehen",
      title: "Wissen, das Ihre Entscheidung leitet",
      items: [
        {
          title: "Was wir beobachten",
          description:
            "Wir verfolgen Investitionsmöglichkeiten, Off-Plan-Launches und Bewegungen im Zweitmarkt, damit Sie handeln können, wenn es darauf ankommt – und nicht erst, wenn ein Angebot erscheint.",
        },
        {
          title: "Warum sich Dubai weiterhin lohnt",
          description:
            "Keine Kapitalertrags- oder Einkommensteuer auf Mieteinnahmen, 100% Eigentum in ausgewiesenen Gebieten und an Immobilien geknüpfte Visa-Wege. Der Rahmen ist für internationale Käufer geschaffen.",
        },
        {
          title: "Wer kauft",
          description:
            "Käufer aus Europa, Großbritannien und Asien treiben einen großen Teil der Nachfrage. Wir erkennen, worauf sich das Interesse konzentriert und wo der Wert noch unentdeckt ist.",
        },
        {
          title: "Wohin sich das Wachstum bewegt",
          description:
            "Über die üblichen Namen hinaus behalten wir Fertigstellungstermine und Infrastruktur (Metro, Straßen, Masterpläne) im Blick, die die Attraktivität eines Gebiets in den nächsten 3–5 Jahren verändern werden.",
        },
      ],
    },
    developers: {
      eyebrow: "Führende Bauträger",
      title: "Erstklassige Entwicklungspartner",
      descriptions: [
        "Dubais größter Bauträger, bekannt für ikonische Projekte wie den Burj Khalifa und die Dubai Mall.",
        "Staatlicher Bauträger mit Fokus auf luxuriöse Wohn- und Gewerbeprojekte.",
        "Führender Entwickler luxuriöser Wohnanlagen und Hotelprojekte.",
        "Spezialisiert auf geplante Gemeinschaften und nachhaltige Entwicklungen.",
        "Bekannt für hochwertige Wohnprojekte und Hotelvorhaben.",
        "Fokussiert auf bezahlbaren Wohnraum und Projekte zur Gemeindeentwicklung.",
        "Internationaler Bauträger mit luxuriösen Wohn- und Gewerbeprojekten.",
      ],
    },
    neighborhoods: {
      title: "Erstklassige Lagen",
      keyHighlights: "Wichtige Highlights:",
      items: [
        {
          description:
            "Ikonische künstliche Insel mit luxuriösen Strandresidenzen und Weltklasse-Annehmlichkeiten.",
          highlights: ["Wohnen am Strand", "Marina-Zugang", "Hochwertige Projekte"],
        },
        {
          description:
            "Dubais finanzielle Freizone mit eigenen Common-Law-Gerichten, einem globalen Geschäftszentrum sowie luxuriösen Büros und Residenzen.",
          highlights: ["Common-Law-Gerichte", "Geschäftseinrichtungen", "Luxusresidenzen"],
        },
        {
          description:
            "Exklusive Golf-Community mit Championship-Plätzen und Reitanlagen.",
          highlights: ["Golfplätze", "Reitanlagen", "Exklusive Community"],
        },
        {
          description:
            "Geplante Community mit Naturpfaden, Parks und Annehmlichkeiten im Resort-Stil.",
          highlights: ["Naturpfade", "Resort-Annehmlichkeiten", "Familienfreundlich"],
        },
        {
          description:
            "Neues Wasserfront-Ziel mit modernen Projekten und Marina-Lebensstil.",
          highlights: ["Moderne Architektur", "Marina-Lebensstil", "Aufstrebendes Gebiet"],
        },
        {
          description:
            "Dubais lebendiges Stadtzentrum mit Burj Khalifa, Dubai Mall und Weltklasse-Gastronomie.",
          highlights: ["Blick auf den Burj Khalifa", "Premium-Shopping", "Unterhaltungsviertel"],
        },
        {
          description:
            "Luxuriöse Wasserfront-Entwicklung mit ikonischen Türmen, Parks und Marina-Anlagen.",
          highlights: ["Blick auf den Creek", "Mischnutzung", "Moderner Lebensstil"],
        },
        {
          description:
            "Dubais Hauptverkehrsader, gesäumt von prestigeträchtigen Wolkenkratzern und Unternehmenszentralen.",
          highlights: ["Geschäftsviertel", "Ikonische Architektur", "Zentrale Lage"],
        },
        {
          description:
            "Exklusive Archipel-Entwicklung mit privaten Inseln und Luxusresidenzen.",
          highlights: ["Private Inseln", "Exklusiver Zugang", "Leben am Wasser"],
        },
        {
          description:
            "Fußgängerfreundliches Viertel mit Boutique-Shopping, Gastronomie und Unterhaltung.",
          highlights: ["Fußläufiges Viertel", "Boutique-Shopping", "Lifestyle-Ziel"],
        },
        {
          description:
            "Malerischer Wasserfront-Korridor, der den Dubai Creek mit dem Arabischen Golf verbindet.",
          highlights: ["Blick aufs Wasser", "Freizeitaktivitäten", "Moderne Projekte"],
        },
      ],
    },
    faq: {
      eyebrow: "Ihre Fragen beantwortet",
      title: "Häufig gestellte Fragen",
      intro:
        "Wir wissen, dass Investitionen in Dubaier Immobilien viele Fragen aufwerfen können. Hier finden Sie Antworten auf die häufigsten Anliegen unserer Kunden.",
      items: [
        {
          question: "Wie ist das mit dem Immobilieneigentum in Dubai?",
          lead: "Dubai bietet einen der investorenfreundlichsten Rahmen für Immobilieneigentum weltweit. Seit 2002 dürfen ausländische Staatsangehörige in ausgewiesenen Gebieten der Stadt Immobilien zu 100% als Volleigentum (Freehold) besitzen. Diese Freehold-Gebiete gewähren Nichtansässigen volle Eigentumsrechte, ohne zeitliche Begrenzung und mit der Freiheit, die Immobilie zu verkaufen, zu vermieten oder an Erben weiterzugeben. Die Regierung hat klare, transparente Vorschriften zum Schutz ausländischer Investoren erlassen und sorgt so für einen sicheren und gut regulierten Immobilienmarkt. Diese Offenheit hat Dubai in Verbindung mit seinem starken Rechtsrahmen und den steuerlichen Vorteilen zu einem globalen Zentrum für internationale Immobilieninvestoren gemacht, die Stabilität, Wachstum und langfristigen Wert suchen.",
          bullets: [],
          outro: "",
        },
        {
          question: "Erhalte ich durch den Immobilienkauf eine Aufenthaltsgenehmigung?",
          lead: "Ja. Der Kauf qualifizierter Immobilien kann Sie für ein Aufenthaltsvisum der VAE qualifizieren, vorbehaltlich der aktuellen Vorschriften und der Anforderungen an den Mindestwert der Immobilie. Wir führen Sie durch die Aufenthaltsoptionen, die am besten zu Ihren Bedürfnissen passen, und stellen sicher, dass alle Anforderungen für einen reibungslosen Ablauf erfüllt werden.",
          bullets: [],
          outro: "",
        },
        {
          question: "Fallen beim Immobilienkauf in Dubai Steuern an?",
          lead: "Dubai ist äußerst steuereffizient:",
          bullets: [
            "Keine Grundsteuer",
            "Keine Kapitalertragsteuer",
            "Keine Erbschaftsteuer",
            "Keine Einkommensteuer auf Mieteinnahmen",
            "Beim Kauf fällt nur eine einmalige Übertragungsgebühr an: 4% DLD-Gebühren an das Dubai Land Department",
          ],
          outro:
            "Dieses steuereffiziente Umfeld macht Dubai besonders attraktiv für internationale Investoren, die ihre Rendite maximieren möchten.",
        },
        {
          question: "Ist eine Off-Plan-Immobilie eine gute Investition?",
          lead: "Off-Plan-Immobilien bieten häufig:",
          bullets: [
            "Niedrigere Einstiegspreise im Vergleich zu fertiggestellten Projekten",
            "Flexible Zahlungspläne während der Bauphase",
            "Starkes Wertsteigerungspotenzial mit Fertigstellung des Projekts",
          ],
          outro:
            "Sie sind besonders für Investoren attraktiv, die ihre Rendite mittel- bis langfristig maximieren möchten. Wir wählen sorgfältig Projekte von vertrauenswürdigen Bauträgern aus, um Fertigstellung und Qualitätsstandards sicherzustellen.",
        },
        {
          question: "Warum jetzt in Dubaier Immobilien investieren?",
          lead: "Dubai vereint:",
          bullets: [
            "Starkes Wirtschaftswachstum durch Diversifizierung",
            "Nachfrage von Investoren aus aller Welt",
            "Politische und finanzielle Stabilität in der Region",
            "Hohe Mietrenditen im Vergleich zu anderen globalen Märkten",
            "Langfristiges Wertsteigerungspotenzial",
          ],
          outro:
            "Die aktuellen Marktbedingungen bieten hervorragende Chancen für anspruchsvolle Investoren. Wir sind den Markttrends voraus, um die besten Gelegenheiten für unsere Kunden zu identifizieren.",
        },
        {
          question: "Muss ich Einwohner sein, um in Dubai Immobilien zu kaufen?",
          lead: "Nein. Sie müssen kein Einwohner der VAE sein, um in Dubai Immobilien zu kaufen. Ausländische Staatsangehörige können in ausgewiesenen Freehold-Gebieten Immobilien mit vollen Eigentumsrechten erwerben, unabhängig davon, ob sie in den VAE oder im Ausland leben. Diese Flexibilität macht Dubai für internationale Investoren einzigartig zugänglich.",
          bullets: [],
          outro: "",
        },
        {
          question: "Muss ich ein Bankkonto eröffnen, um in Dubai Off-Plan zu kaufen?",
          lead: "Nein, die Eröffnung eines Bankkontos in den VAE ist für den Kauf einer Off-Plan-Immobilie nicht zwingend erforderlich. Bauträger akzeptieren für Zahlungen in der Regel internationale Überweisungen. Ein lokales Bankkonto kann jedoch künftige Transaktionen – wie Servicegebühren, Mieteinnahmen oder Wiederverkauf – einfacher und effizienter machen. Auf Wunsch unterstützen wir Sie bei diesem Vorgang.",
          bullets: [],
          outro: "",
        },
      ],
    },
  },
  aboutSpainPage: {
    marketInsights: {
      eyebrow: "Wie wir den Markt sehen",
      title: "Wissen, das Ihre Entscheidung leitet",
      items: [
        {
          title: "Was wir beobachten",
          description:
            "Wir beobachten die Einführungspreise in erstklassigen Lagen, die Vermarktungsdauer von Bestandsimmobilien, saisonale Tourismusmuster und die Finanzierungsbedingungen für Nichtansässige – damit unsere Empfehlungen zu Ihrer Haltedauer und Ihrem Währungsrisiko passen.",
        },
        {
          title: "Warum Käufer Barcelona wählen",
          description:
            "Lebensstil, EU-Anbindung, Bildungsangebote und Diversifizierung neben anderen Weltstädten. Viele Kunden verbinden einen Erstwohnsitz in Dubai mit einer europäischen Zweitimmobilie oder einer Langzeitvermietung.",
        },
        {
          title: "Wer aktiv ist",
          description:
            "Eine Mischung aus einheimischen Umsteigern, EU-Zweitwohnsitzkäufern und Investoren von außerhalb der EU – oft mit Fokus auf Renovierungsqualität, Serviceniveau in Boutique-Gebäuden und Klarheit über Steuern und Abschlusskosten von Anfang an.",
        },
        {
          title: "Wohin sich die Aufmerksamkeit bewegt",
          description:
            "Über die bekannten Namen hinaus beobachten wir Metro-Erweiterungen, Aufwertungen des öffentlichen Raums und Mikroviertel, in denen Architektur und Licht den Durchschnitt der Lage übertreffen – besonders für Horizonte von 3 bis 7 Jahren.",
        },
      ],
    },
    developers: {
      eyebrow: "Führende Bauträger",
      title: "Erstklassige Entwicklungspartner",
      intro:
        "Beispiele für Gruppen hinter markanten Barcelona-Objekten – vor Ihrer Verpflichtung stets projektbezogen geprüft.",
      descriptions: [
        "Bekannt für sorgfältige Restaurierungen von Baudenkmälern – allen voran die Casa Burés – verbindet Bonavista den Erhalt modernistischer Details mit zeitgemäßen Services wie Dachpools, Wellness und Concierge-Wohnen in erstklassigen Eixample-Lagen.",
        "Verantwortlich für AM Residences an der Ausiàs March hat Intercon ein Gebäude aus dem späten 19. Jahrhundert vollständig saniert, dabei die Fassade erhalten und die Innenräume mit einem Serviced-Residence-Betriebsmodell kombiniert.",
        "Einer der etablierten Wohnbauträger Barcelonas, in zentralen Bezirken mit Produkten der mittleren und oberen Klasse aktiv – nützlicher Kontext beim Vergleich von Fertigstellungsstandards und Wiederverkaufsliquidität zwischen den Vierteln.",
      ],
    },
    neighborhoods: {
      title: "Erstklassige Lagen",
      keyHighlights: "Wichtige Highlights:",
      items: [
        {
          description:
            "Das ikonische Raster nördlich der Plaça de Catalunya – breite Alleen, modernistische Fassaden und fußläufiger Zugang zum Passeig de Gràcia. Starke Nachfrage nach sanierten Wohnungen und Penthäusern; das begrenzte Neubauangebot hält gut gelegene Objekte wettbewerbsfähig.",
          highlights: ["Modernistische Architektur", "Einzelhandel & Gastronomie", "Metro-Anbindung"],
        },
        {
          description:
            "Dichtes Viertel am Strand mit Marina-Zugang und stabiler Nachfrage nach kurz- und mittelfristigen Vermietungen. Neuere Objekte mischen sich mit älteren Gebäuden – die Due Diligence zu Gebäudezustand und Gemeinschaftskosten ist wichtig.",
          highlights: ["Nähe zu Meer & Hafen", "Touristenströme", "Aktiver Mietmarkt"],
        },
        {
          description:
            "Dorfähnliche Plätze und niedrige Straßenzüge mit starker lokaler Identität. Beliebt bei Familien und Kreativen; das Angebot tendiert eher zu kleineren Gebäuden und Renovierungsmöglichkeiten als zu großen Neubauten.",
          highlights: ["Viertelcharakter", "Gastronomie im Freien", "Wenige Hochhäuser"],
        },
        {
          description:
            "Ehemalige Industriekorridore, die zu einem Technologie- und Design-Hub umgewandelt wurden – Loft-Produkte, Innovationsmieter und langfristige Infrastrukturinvestitionen (einschließlich Küstenparks und besserer Anbindung).",
          highlights: ["22@-Distrikt", "Umbau-Bestand", "Langfristiges Potenzial"],
        },
      ],
    },
    faq: {
      eyebrow: "Ihre Fragen beantwortet",
      title: "Häufig gestellte Fragen",
      intro:
        "Nur allgemeine Hinweise – Ihr Anwalt und Ihr Steuerberater sollten die Details für Ihre Situation bestätigen.",
      items: [
        {
          question: "Können Ausländer in Barcelona kaufen?",
          answer:
            "Nichtansässige können in Spanien Volleigentum erwerben, vorbehaltlich der NIE-Anforderungen, der Bankvorschriften und der Prüfungen zur Geldwäschebekämpfung. Neubau- und Wiederverkaufstransaktionen unterliegen unterschiedlichen steuerlichen Behandlungen – Ihr Notar und Ihr Anwalt strukturieren den Kauf korrekt.",
        },
        {
          question: "Mit welchen Kosten sollten Käufer rechnen?",
          answer:
            "Kalkulieren Sie die Grunderwerbsteuer (ITP) beim Wiederverkauf oder die Mehrwertsteuer zuzüglich Stempelsteuer beim Neubau, Notar- und Grundbuchgebühren sowie Rechts- und Hypothekenkosten ein. Wir stellen vor der Reservierung einer Einheit eine detaillierte Aufstellung Posten für Posten bereit.",
        },
        {
          question: "Ist der Mietmarkt aktiv?",
          answer:
            "Barcelona bleibt für mittel- und langfristige Vermietungen attraktiv, wobei sich die Regulierung weiterentwickelt. Wir helfen Ihnen, die Lizenzregeln, die Gemeinschaftssatzungen und realistische Renditen je Mikrolage zu verstehen.",
        },
        {
          question: "Wie erstellen wir die Auswahl der richtigen Lage?",
          answer:
            "Wir stimmen Schulen, Arbeitsweg, Gebäudequalität und Ihren Anlagehorizont ab – und grenzen dann auf eine Handvoll Straßen und Produkttypen ein, bevor Sie für Besichtigungen anreisen.",
        },
      ],
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Professionelle Leistungen",
      title: "Umfassende Unterstützung für Investoren in Dubai",
      body: "Über Luxusimmobilien hinaus bieten wir umfassende Geschäfts- und Aufenthaltsdienstleistungen, damit Ihr vollständiger Umzug nach Dubai reibungslos, effizient und erfolgreich verläuft.",
      note: "Wir begleiten Sie bei jedem Schritt Ihres Weges in Dubai, damit Sie sich während des gesamten Prozesses gut aufgehoben und sicher fühlen.",
    },
    services: [
      {
        title: "Firmengründung in Dubai",
        description:
          "Umfassende Unterstützung beim Aufbau Ihrer geschäftlichen Präsenz in den Freizonen und auf dem Festland von Dubai. Von der Lizenzauswahl bis zur Büroeinrichtung begleiten wir Sie bei jedem Schritt der Gründung Ihres Unternehmens in den VAE.",
        features: [
          "Firmengründung in Freizone und auf dem Festland",
          "Auswahl und Beantragung der Lizenz",
          "Beschaffung von Büroflächen",
          "Einrichtung eines Geschäftskontos",
          "Rechts- und Compliance-Unterstützung",
        ],
      },
      {
        title: "Eröffnung eines lokalen Bankkontos in Dubai",
        description:
          "Fachkundige Begleitung durch das Bankensystem Dubais. Wir helfen Ihnen, Geschäfts- und Privatkonten bei führenden Banken der VAE zu eröffnen, für reibungslose Finanzabläufe für Ihr Unternehmen oder Ihren Wohnsitz.",
        features: [
          "Einrichtung eines Geschäftskontos",
          "Unterstützung im Privatkundengeschäft",
          "Beziehungsmanagement mit VAE-Banken",
          "Unterstützung bei der Kontodokumentation",
          "Einrichtung des Online-Bankings",
          "Optionen für Mehrwährungskonten",
        ],
      },
      {
        title: "Golden Visa / Aufenthaltsvisum",
        description:
          "Navigieren Sie mit Zuversicht durch Dubais Aufenthaltsoptionen. Unser Team bietet umfassende Unterstützung bei Anträgen für das Golden Visa, Familienvisa und anderen auf Ihre Bedürfnisse zugeschnittenen Aufenthaltslösungen.",
        features: [
          "Unterstützung beim Antrag auf das Golden Visa",
          "Aufenthaltsvisa für die Familie",
          "Aufenthalt auf Investitionsbasis",
          "Vorbereitung und Einreichung von Dokumenten",
          "Verfolgung und Nachverfolgung des Antrags",
        ],
      },
      {
        title: "Steuerberatung",
        description:
          "Professionelle Steuer- und Finanzplanungsdienstleistungen für Privatpersonen und Unternehmen in Dubai. Wir bieten strategische Beratung zu Steuerpflichten in den VAE, Offshore-Strukturen und Lösungen für die Vermögensverwaltung.",
        features: [
          "Steuer-Compliance und -Planung in den VAE",
          "Offshore-Unternehmensstrukturen",
          "Strategien zur Vermögensverwaltung",
          "Erb- und Nachfolgeplanung",
          "Anforderungen an die Finanzberichterstattung",
          "Lösungen zur Steueroptimierung",
        ],
      },
    ],
    process: {
      title: "Unser Vorgehen",
      intro:
        "Wir folgen einem strukturierten, transparenten Prozess, damit Ihr Weg in Dubai von Anfang bis Ende reibungslos und erfolgreich verläuft.",
      steps: [
        {
          title: "Erstberatung",
          description: "Kostenlose Beratung, um Ihre Ziele und Anforderungen zu verstehen",
        },
        {
          title: "Strategieentwicklung",
          description: "Maßgeschneiderter Plan, abgestimmt auf Ihre spezifischen Bedürfnisse und Ihren Zeitrahmen",
        },
        {
          title: "Umsetzung",
          description: "Schrittweise Umsetzung mit regelmäßigen Fortschrittsupdates",
        },
        {
          title: "Laufende Unterstützung",
          description: "Fortlaufende Unterstützung und Beratung, während Ihre Präsenz in Dubai wächst",
        },
      ],
    },
    cta: {
      title: "Bereit, Ihren Weg in Dubai zu beginnen?",
      body: "Ob Sie Immobiliendienstleistungen oder umfassende Unterstützung bei der Unternehmensgründung benötigen – unser Team begleitet Sie bei jedem Schritt.",
      contactUs: "Kontaktieren Sie uns",
    },
  },
  investPage: {
    hero: {
      eyebrow: "Eine exklusive Auswahl an Immobilienprojekten für Investoren.",
      title: "Investieren Sie in Dubai mit echten Renditen",
      subtitle: "Erhalten Sie Zugang zu sorgfältig ausgewählten Immobilienprojekten für Investoren.",
      returns: "Geschätzte Rendite: 8–10%",
      support:
        "Betreuung auf Deutsch, Spanisch und Englisch, mit einem Team in Dubai",
    },
    ctas: {
      advice: "Persönliche Beratung erhalten",
      opportunities: "Investitionsmöglichkeiten ansehen",
    },
    opportunities: {
      title: "Investitionsmöglichkeiten",
      body: "Entdecken Sie kuratierte Luxusresidenzen und Neubauprojekte in ganz Dubai – von Wasserfront-Ikonen bis Business Bay und darüber hinaus. Wir stimmen die Gelegenheiten auf Ihr Kapital, Ihren Zeitrahmen und Ihre Ziele ab.",
      browse: "Immobilien durchsuchen",
    },
  },
  investForm: {
    heading: "Bereit, Ihre Investition in Dubai zu analysieren?",
    name: "Name",
    namePlaceholder: "Ihr Name",
    phone: "Telefon",
    phonePlaceholder: "Ihre Telefonnummer",
    email: "E-Mail",
    emailPlaceholder: "Ihre E-Mail",
    capital: "Geschätztes Kapital",
    capitalPlaceholder: "Ihr geschätztes Kapital",
    submit: "Persönliche Analyse anfordern",
    errorNameEmail: "Bitte geben Sie Ihren Namen und Ihre E-Mail an.",
    openingEmail: "Ihr E-Mail-Programm wird geöffnet…",
  },
  contactPage: {
    hero: {
      eyebrow: "Kontakt aufnehmen",
      title: "Beginnen wir ein Gespräch",
      body1:
        "Ob Sie Luxusimmobilien kaufen, verkaufen oder in sie investieren möchten – wir bieten Ihnen persönliche Beratung und fachkundige Einblicke. Melden Sie sich, um Ihren Weg zu beginnen.",
      body2:
        "Sie sind in fachkundigen Händen. Wir kümmern uns um jedes Detail, um ein reibungsloses und erfolgreiches Erlebnis zu gewährleisten.",
    },
    form: {
      heading: "Nachricht senden",
      name: "Name",
      namePlaceholder: "Ihr Name",
      subject: "Betreff",
      subjectPlaceholder: "Worum geht es?",
      message: "Nachricht",
      messagePlaceholder: "Wie kann ich Ihnen helfen?",
      sendEmail: "Per E-Mail senden",
      sendWhatsApp: "Per WhatsApp senden",
      openingEmail: "Ihr E-Mail-Programm wird geöffnet...",
      openingWhatsApp: "WhatsApp wird geöffnet...",
      defaultSubject: "Anfrage über die Website",
    },
    details: {
      heading: "Kontaktdaten",
      phone: "Telefon",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      whatsappCta: "Auf WhatsApp schreiben",
      office: "Büro",
      hours: "Öffnungszeiten",
    },
  },
  properties: {
    hero: {
      eyebrow: "Unsere Kollektion",
      title: "Außergewöhnliche Immobilien",
      body: "Entdecken Sie unsere kuratierte Auswahl an Luxusimmobilien, von atemberaubenden Penthäusern bis zu großzügigen Anwesen. Jede Immobilie wurde sorgfältig ausgewählt, um höchsten Ansprüchen an Qualität und Exklusivität zu genügen.",
      note: "Wir begleiten Sie bei jedem Detail, damit Sie die perfekte Immobilie für Ihre Bedürfnisse finden.",
    },
    searchPlaceholder: "Nach Name oder Lage suchen...",
    clearAll: "Alle löschen",
    sort: {
      newest: "Neueste zuerst",
      priceDesc: "Preis: hoch nach niedrig",
      priceAsc: "Preis: niedrig nach hoch",
    },
    filterType: "Immobilientyp",
    filterStatus: "Status",
    filterBedrooms: "Schlafzimmer",
    filterPrice: "Preisspanne",
    activeFilters: "Aktive Filter:",
    bedsSuffix: "Schlafz.",
    bedsPlus: "5+ Schlafz.",
    priceRanges: {
      anyPrice: "Beliebiger Preis",
      under5: "Unter AED 5M",
      r5_10: "AED 5M - 10M",
      r10_20: "AED 10M - 20M",
      r20_50: "AED 20M - 50M",
      over50: "AED 50M+",
    },
    types: {
      Penthouse: "Penthouse",
      Villa: "Villa",
      Mansion: "Villa (Mansion)",
      Apartment: "Wohnung",
      Estate: "Anwesen",
      Townhouse: "Reihenhaus",
    },
    statuses: {
      "For Sale": "Zu verkaufen",
      "For Rent": "Zu vermieten",
      "Off-Market": "Off-Market",
    },
    card: { beds: "Schlafz.", baths: "Bäder", sqft: "sq ft", to: "bis" },
    results: {
      showing: "Es werden",
      propertySingular: "Immobilie angezeigt",
      propertyPlural: "Immobilien angezeigt",
      showingAll: "Alle {count} Immobilien werden angezeigt",
      noResults: "Keine Immobilien entsprechen Ihren Kriterien.",
      noResultsHint: "Passen Sie Ihre Filter an, um mehr Ergebnisse zu sehen.",
    },
    detail: {
      allProperties: "Alle Immobilien",
      newListing: "Neu",
      bedrooms: "Schlafzimmer",
      bathrooms: "Badezimmer",
      livingArea: "Wohnfläche",
      typeLabel: "Typ",
      sqFt: "sq ft",
      salesOffer: "Verkaufsangebot",
      brochure: "Offizielle Broschüre mit Preisorientierung, Grundrissen und Zahlungsinformationen.",
      viewPdf: "PDF ansehen",
      listedPrice: "Angebotspreis",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      tabs: { overview: "Überblick", highlights: "Highlights", location: "Lage" },
      viewOnMaps: "Auf Google Maps ansehen",
      otherProperties: "Weitere Immobilien",
      youMayAlsoLike: "Das könnte Ihnen auch gefallen",
      viewAll: "Alle ansehen",
    },
    contactCard: {
      call: "Anrufen",
      whatsapp: "WhatsApp",
      requestDetails: "Details anfragen",
      namePlaceholder: "Ihr Name *",
      emailPlaceholder: "E-Mail-Adresse *",
      phonePlaceholder: "Telefon (optional)",
      sendEmail: "Per E-Mail senden",
      sendWhatsApp: "Per WhatsApp senden",
      openingEmail: "Ihr E-Mail-Programm wird geöffnet...",
      openingWhatsApp: "WhatsApp wird geöffnet...",
    },
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben. Wir bringen Sie zurück auf den richtigen Weg.",
    backHome: "Zurück zur Startseite",
    browse: "Immobilien ansehen",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es, de };

/** Resolve a dot-path (e.g. "nav.home") to a string leaf. Returns undefined if missing or non-string. */
export function resolvePath(dict: Dictionary, path: string): string | undefined {
  const value = path
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);
  return typeof value === "string" ? value : undefined;
}
