import type { Locale } from "@/lib/i18n/dictionaries";

export type PropertyListingCopy = {
  shortDescription: string;
  longDescription: string;
  highlights: string[];
};

const en: Record<string, PropertyListingCopy> = {
  "bulgari-residences-jumeirah-bay": {
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
  },
  "marsa-al-arab-residences": {
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
  },
  "four-seasons-residences-jumeirah": {
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
  },
  "one-palm-residences": {
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
  },
  "the-lana-residences": {
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
  },
  "peninsula-residences": {
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
  },
  "baccarat-residences": {
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
  },
  "dubai-harbour-residences": {
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
  },
  "villa-tresor-al-barari": {
    shortDescription:
      "A custom-built trophy villa on one of the largest plots in The Collection, Al Barari — Dubai's green heart.",
    longDescription:
      "Villa Tresor is one of Al Barari's finest custom-built residences, occupying a rare large plot within the prestigious enclave of The Collection. Designed and finished to an exceptional standard, it brings together timeless architecture, premium materials and thoughtfully curated living spaces, with the privacy and scale of a true trophy residence. Expansive landscaped gardens, elegant reception rooms and generous indoor and outdoor entertaining areas create a refined setting for both family life and hosting. The villa offers 14,551 sq. ft. of built-up area on a 21,076 sq. ft. plot, six bedrooms and seven bathrooms, and is vacant on transfer. Al Barari is known as the \"Green Heart of Dubai\", home to botanical gardens, The Farm restaurant and the Heart & Soul Spa, about 20 minutes from Downtown Dubai and DXB Airport.",
    highlights: [
      "Custom-built on one of the largest plots in The Collection",
      "14,551 sq. ft. built-up on a 21,076 sq. ft. plot",
      "Resort-style pool and landscaped gardens",
      "Temperature-controlled wine cellar",
      "Private study, library and staff accommodation",
      "Vacant on transfer",
    ],
  },
  "ahs-tower-office": {
    shortDescription:
      "The highest half floor in AHS Tower — Grade A+ office space moments from DIFC, ready Q1 2027.",
    longDescription:
      "AHS Tower is an iconic new 69-storey commercial landmark positioned moments from Dubai International Financial Centre, in the heart of Dubai's financial district, and the first Grade A+ office space brought to market in Dubai. This is the tower's highest half floor: 3,379 sq. ft. with floor-to-ceiling glazing, premium specifications and an open, intelligent layout. Occupants benefit from an award-winning spa and state-of-the-art gym, a rooftop viewing lounge, curated restaurants and bars, and dedicated valet service. Ready Q1 2027, it is a rare opportunity to secure a next-generation headquarters in one of Dubai's most prestigious business addresses.",
    highlights: [
      "Highest half floor in the tower",
      "Grade A+ office space",
      "Iconic 69-storey tower moments from DIFC",
      "Ready Q1 2027",
      "Rooftop lounge, spa, gym and restaurants",
      "Easy access to Sheikh Zayed Road and the Metro",
    ],
  },
};

const es: Record<string, PropertyListingCopy> = {
  "bulgari-residences-jumeirah-bay": {
    shortDescription:
      "Exclusivas residencias Bvlgari con artesanía italiana de lujo y vistas incomparables del Golfo Arábigo.",
    longDescription:
      "Bvlgari Residences en Jumeira Bay Island representa la cúspide de la vida de lujo. Estas exclusivas residencias muestran la legendaria artesanía italiana de Bvlgari, con interiores a medida, materiales premium, carpintería personalizada y tecnología de última generación. Cada residencia ofrece vistas panorámicas del Golfo Arábigo a través de ventanales de suelo a techo. Las residencias incluyen ascensores privados, servicio de conserjería y acceso a servicios de primer nivel como playa privada, spa y alta gastronomía.",
    highlights: [
      "Artesanía distintiva de Bvlgari",
      "Vistas panorámicas al Golfo Arábigo",
      "Acceso a playa privada",
      "Servicio de conserjería y mayordomía",
      "Integración tecnológica de última generación",
    ],
  },
  "marsa-al-arab-residences": {
    shortDescription:
      "Prestigiosas residencias en el icónico hotel de siete estrellas, con un lujo y un servicio incomparables.",
    longDescription:
      "Jumeirah Residences Marsa Al Arab ofrece la oportunidad de poseer una parte del hotel de lujo más emblemático de Dubái. Estas prestigiosas residencias combinan el legendario servicio de un hotel de siete estrellas con la privacidad de la propiedad personal. Cada residencia cuenta con interiores a medida, balcones privados con vistas al mar y acceso a los servicios de renombre mundial del hotel, incluidos playa privada, varias piscinas, instalaciones de spa y restaurantes galardonados.",
    highlights: [
      "Propiedad en hotel de siete estrellas",
      "Acceso a playa privada y marina",
      "Servicio de conserjería 24/7",
      "Varias piscinas",
      "Restaurantes galardonados",
    ],
  },
  "four-seasons-residences-jumeirah": {
    shortDescription:
      "Exclusivas residencias con marca Four Seasons en Jumeirah, con hospitalidad legendaria y diseño impecable.",
    longDescription:
      "Four Seasons Private Residences en Jumeirah ofrece la combinación perfecta entre privacidad residencial y el lujo hotelero de Four Seasons. Estas exclusivas residencias brindan a sus propietarios acceso a los reconocidos servicios de hospitalidad de Four Seasons, incluidos conserjería, limpieza y restauración. Cada residencia presenta un diseño elegante, materiales premium y amplios espacios exteriores con acceso directo a la playa. Ubicado en Jumeirah 2, el desarrollo incluye playa privada, varias piscinas, instalaciones de spa y restaurantes frente al mar.",
    highlights: [
      "Servicios de hospitalidad Four Seasons",
      "Acceso a playa privada",
      "Conserjería y limpieza",
      "Materiales premium y diseño refinado",
      "Ubicación frente al mar",
    ],
  },
  "one-palm-residences": {
    shortDescription:
      "Lujosas residencias frente al mar en la icónica Palm Jumeirah, con impresionantes vistas a la marina.",
    longDescription:
      "One Palm Residences ofrece una vida de lujo frente al mar en la icónica Palm Jumeirah de Dubái. Estas sofisticadas residencias presentan diseño contemporáneo, acabados premium e impresionantes vistas de la marina y del Golfo Arábigo. Cada residencia incluye amplias zonas de estar, balcones privados y acceso a servicios completos como playa privada, piscinas, gimnasio y conserjería. El desarrollo representa el lujo moderno con elementos arquitectónicos árabes tradicionales.",
    highlights: [
      "Vistas a la marina frente al mar",
      "Diseño contemporáneo",
      "Acceso a playa privada",
      "Acabados premium",
      "Servicios integrales",
    ],
  },
  "the-lana-residences": {
    shortDescription:
      "Residencias sofisticadas en Business Bay con servicios premium y un estilo de vida refinado.",
    longDescription:
      "The Lana Residences combina sofisticación con la vibrante vida de Business Bay. Ubicadas en Marasi Drive, estas residencias ofrecen servicios premium, diseño contemporáneo y proximidad a los mejores restaurantes y locales de ocio de Dubái. Cada residencia cuenta con acabados de alta calidad, distribuciones amplias y acceso a instalaciones completas como piscinas, gimnasios, zonas infantiles y conserjería. El desarrollo ofrece el equilibrio perfecto entre privacidad y comodidad urbana.",
    highlights: [
      "Ubicación en Business Bay",
      "Servicios premium",
      "Diseño contemporáneo",
      "Frente marítimo de Marasi Drive",
      "Comodidad urbana",
    ],
  },
  "peninsula-residences": {
    shortDescription:
      "Elegantes residencias frente al mar con servicios premium y un estilo de vida tipo resort.",
    longDescription:
      "Peninsula Residences ofrece una elegante vida frente al mar con servicios al estilo resort. Estas sofisticadas residencias cuentan con acabados premium, distribuciones amplias y acceso directo a Jumeirah Beach. El desarrollo incluye instalaciones completas como piscinas, gimnasios, zonas infantiles y conserjería. Situado en la prestigiosa zona de Jumeirah Beach Residence, los residentes disfrutan de proximidad a los mejores restaurantes y destinos comerciales de Dubái.",
    highlights: [
      "Ubicación frente al mar",
      "Servicios tipo resort",
      "Acabados premium",
      "Acceso a Jumeirah Beach",
      "Zona prestigiosa",
    ],
  },
  "baccarat-residences": {
    shortDescription:
      "Residencias de ultra lujo con artesanía en cristal Baccarat y una elegancia incomparable.",
    longDescription:
      "Baccarat Residences representa la máxima expresión de la vida de lujo, con artesanía en cristal Baccarat en todo el proyecto. Estas residencias de ultra lujo ofrecen una elegancia incomparable con interiores a medida, materiales premium y servicios de clase mundial. Ubicado en Business Bay, el desarrollo sitúa a los residentes cerca del distrito financiero de Dubái mientras ofrece instalaciones tipo resort como piscinas privadas, spas y alta gastronomía. Cada residencia es una obra maestra del diseño de lujo.",
    highlights: [
      "Artesanía en cristal Baccarat",
      "Interiores de ultra lujo",
      "Servicios de clase mundial",
      "Ubicación en Business Bay",
      "Instalaciones tipo resort",
    ],
  },
  "dubai-harbour-residences": {
    shortDescription:
      "Modernas residencias frente al mar en Dubai Harbour con servicios premium y un estilo de vida contemporáneo.",
    longDescription:
      "Dubai Harbour Residences ofrece una vida moderna frente al mar en el vibrante distrito de Dubai Harbour. Estas residencias contemporáneas presentan un diseño elegante, acabados premium y acceso a servicios integrales de estilo de vida. Ubicado en el nuevo destino costero de Dubái, el desarrollo incluye piscinas, gimnasios, instalaciones infantiles y proximidad a comercio y ocio. Las residencias combinan lujo moderno y comodidad urbana.",
    highlights: [
      "Ubicación frente al mar",
      "Diseño moderno",
      "Servicios premium",
      "Estilo de vida Dubai Harbour",
      "Comodidad urbana",
    ],
  },
  "villa-tresor-al-barari": {
    shortDescription:
      "Una villa excepcional construida a medida en una de las parcelas más grandes de The Collection, Al Barari, el corazón verde de Dubái.",
    longDescription:
      "Villa Tresor es una de las mejores residencias construidas a medida de Al Barari y ocupa una parcela excepcionalmente grande dentro del prestigioso enclave de The Collection. Diseñada y terminada con un estándar excepcional, combina arquitectura atemporal, materiales de primera calidad y espacios cuidadosamente concebidos, con la privacidad y la escala de una auténtica residencia de prestigio. Amplios jardines paisajísticos, elegantes salones de recepción y generosas zonas de ocio interiores y exteriores crean un entorno refinado tanto para la vida familiar como para recibir invitados. La villa ofrece 14.551 pies² construidos sobre una parcela de 21.076 pies², seis dormitorios y siete baños, y se entrega vacía en la transferencia. Al Barari, conocido como el «corazón verde de Dubái», alberga jardines botánicos, el restaurante The Farm y el Heart & Soul Spa, a unos 20 minutos de Downtown Dubai y del aeropuerto DXB.",
    highlights: [
      "Construida a medida en una de las parcelas más grandes de The Collection",
      "14.551 pies² construidos sobre una parcela de 21.076 pies²",
      "Piscina de estilo resort y jardines paisajísticos",
      "Bodega con control de temperatura",
      "Despacho, biblioteca y alojamiento para el personal",
      "Se entrega vacía en la transferencia",
    ],
  },
  "ahs-tower-office": {
    shortDescription:
      "La media planta más alta de AHS Tower: oficinas de categoría A+ a pocos minutos del DIFC, entrega en el primer trimestre de 2027.",
    longDescription:
      "AHS Tower es un nuevo e icónico rascacielos comercial de 69 plantas, situado a pocos minutos del Dubai International Financial Centre, en el corazón del distrito financiero de Dubái, y el primer espacio de oficinas de categoría A+ que sale al mercado en la ciudad. Se trata de la media planta más alta de la torre: 3.379 pies² con ventanales de suelo a techo, especificaciones premium y una distribución abierta e inteligente. Los ocupantes disfrutan de un spa galardonado y un gimnasio de última generación, un mirador en la azotea, restaurantes y bares seleccionados y servicio de aparcacoches. Con entrega en el primer trimestre de 2027, es una oportunidad única para asegurar una sede de nueva generación en una de las direcciones de negocios más prestigiosas de Dubái.",
    highlights: [
      "La media planta más alta de la torre",
      "Oficinas de categoría A+",
      "Icónica torre de 69 plantas junto al DIFC",
      "Entrega en el primer trimestre de 2027",
      "Lounge en la azotea, spa, gimnasio y restaurantes",
      "Acceso directo a Sheikh Zayed Road y al metro",
    ],
  },
};

const de: Record<string, PropertyListingCopy> = {
  "bulgari-residences-jumeirah-bay": {
    shortDescription:
      "Exklusive Bvlgari-Residenzen mit italienischer Luxushandwerkskunst und unvergleichlichem Blick auf den Arabischen Golf.",
    longDescription:
      "Bvlgari Residences auf Jumeira Bay Island stehen für höchsten Luxus. Diese exklusiven Residenzen zeigen Bvlgaris legendäre italienische Handwerkskunst mit maßgeschneiderten Interieurs, Premium-Materialien, individueller Schreinerarbeit und modernster Technologie. Jede Residenz bietet Panoramablicke auf den Arabischen Golf durch bodentiefe Fenster. Dazu gehören private Aufzüge, Concierge-Service und Zugang zu erstklassigen Annehmlichkeiten wie privatem Strand, Spa und Fine Dining.",
    highlights: [
      "Bvlgari-Signatur-Handwerkskunst",
      "Panoramablick auf den Arabischen Golf",
      "Zugang zum privaten Strand",
      "Concierge- und Butler-Service",
      "Modernste Technologieintegration",
    ],
  },
  "marsa-al-arab-residences": {
    shortDescription:
      "Prestigeträchtige Residenzen im ikonischen Sieben-Sterne-Hotel mit unvergleichlichem Luxus und Service.",
    longDescription:
      "Jumeirah Residences Marsa Al Arab bietet die Möglichkeit, einen Teil des berühmtesten Luxushotels Dubais zu besitzen. Diese prestigeträchtigen Residenzen verbinden den legendären Service eines Sieben-Sterne-Hotels mit der Privatsphäre des Eigentums. Jede Residenz verfügt über maßgeschneiderte Interieurs, private Balkone mit Meerblick und Zugang zu weltbekannten Hotel-Annehmlichkeiten wie privatem Strand, mehreren Pools, Spa-Einrichtungen und preisgekrönten Restaurants.",
    highlights: [
      "Eigentum in einem Sieben-Sterne-Hotel",
      "Zugang zu privatem Strand und Marina",
      "Concierge-Service rund um die Uhr",
      "Mehrere Swimmingpools",
      "Preisgekrönte Restaurants",
    ],
  },
  "four-seasons-residences-jumeirah": {
    shortDescription:
      "Exklusive Four-Seasons-Residenzen in Jumeirah mit legendärer Gastfreundschaft und makellosem Design.",
    longDescription:
      "Four Seasons Private Residences in Jumeirah vereinen Wohnprivatsphäre mit dem Luxus eines Four-Seasons-Hotels. Diese exklusiven Residenzen gewähren Eigentümern Zugang zu den renommierten Hospitality-Services von Four Seasons, einschließlich Concierge, Housekeeping und Gastronomie. Jede Residenz besticht durch elegantes Design, Premium-Materialien und großzügige Außenbereiche mit direktem Strandzugang. In Jumeirah 2 gelegen, bietet die Anlage einen privaten Strand, mehrere Pools, Spa-Einrichtungen und Restaurants direkt am Meer.",
    highlights: [
      "Four-Seasons-Hospitality-Services",
      "Zugang zum privaten Strand",
      "Concierge und Housekeeping",
      "Premium-Materialien und Design",
      "Lage direkt am Strand",
    ],
  },
  "one-palm-residences": {
    shortDescription:
      "Luxuriöse Wasserfront-Residenzen auf der ikonischen Palm Jumeirah mit beeindruckendem Marinablick.",
    longDescription:
      "One Palm Residences bietet luxuriöses Wohnen am Wasser auf Dubais ikonischer Palm Jumeirah. Diese anspruchsvollen Residenzen überzeugen mit zeitgenössischem Design, Premium-Ausstattung und beeindruckenden Blicken auf Marina und Arabischen Golf. Jede Residenz umfasst großzügige Wohnbereiche, private Balkone und Zugang zu umfassenden Annehmlichkeiten wie privatem Strand, Pools, Fitnessbereichen und Concierge-Services. Die Anlage verbindet modernen Luxus mit traditionellen arabischen Architekturelementen.",
    highlights: [
      "Wasserfront-Blick auf die Marina",
      "Zeitgenössisches Design",
      "Zugang zum privaten Strand",
      "Premium-Ausstattung",
      "Umfassende Annehmlichkeiten",
    ],
  },
  "the-lana-residences": {
    shortDescription:
      "Anspruchsvolle Residenzen in Business Bay mit Premium-Annehmlichkeiten und einem exklusiven Lebensstil.",
    longDescription:
      "The Lana Residences verbinden Eleganz mit dem lebendigen Business Bay. An der Marasi Drive gelegen, bieten diese Residenzen Premium-Annehmlichkeiten, zeitgenössisches Design und Nähe zu Dubais besten Restaurants und Entertainment-Adressen. Jede Residenz verfügt über hochwertige Ausstattung, großzügige Grundrisse und Zugang zu umfassenden Einrichtungen wie Pools, Fitnesscentern, Spielbereichen für Kinder und Concierge-Services. Die Anlage bietet die perfekte Balance zwischen Privatsphäre und urbanem Komfort.",
    highlights: [
      "Lage in Business Bay",
      "Premium-Annehmlichkeiten",
      "Zeitgenössisches Design",
      "Wasserfront an der Marasi Drive",
      "Urbaner Komfort",
    ],
  },
  "peninsula-residences": {
    shortDescription:
      "Elegante Strandresidenzen mit Premium-Annehmlichkeiten und Resort-Charakter.",
    longDescription:
      "Peninsula Residences bietet elegantes Wohnen am Strand mit Annehmlichkeiten im Resort-Stil. Diese anspruchsvollen Residenzen verfügen über Premium-Ausstattung, großzügige Grundrisse und direkten Zugang zum Jumeirah Beach. Die Anlage umfasst umfassende Einrichtungen wie Pools, Fitnesscenter, Spielbereiche für Kinder und Concierge-Services. In der prestigeträchtigen Gegend Jumeirah Beach Residence gelegen, profitieren Bewohner von der Nähe zu Dubais besten Restaurants und Einkaufsadressen.",
    highlights: [
      "Strandlage",
      "Annehmlichkeiten im Resort-Stil",
      "Premium-Ausstattung",
      "Zugang zum Jumeirah Beach",
      "Prestigeträchtige Lage",
    ],
  },
  "baccarat-residences": {
    shortDescription:
      "Ultra-luxuriöse Residenzen mit Baccarat-Kristallhandwerk und unvergleichlicher Eleganz.",
    longDescription:
      "Baccarat Residences stehen für ultimativen Luxus mit Baccarat-Kristallhandwerk im gesamten Projekt. Diese ultra-luxuriösen Residenzen bieten unvergleichliche Eleganz mit maßgeschneiderten Interieurs, Premium-Materialien und erstklassigen Annehmlichkeiten. In Business Bay gelegen, verbinden sie Nähe zum Finanzdistrikt Dubais mit Resort-Einrichtungen wie privaten Pools, Spas und Fine Dining. Jede Residenz ist ein Meisterwerk luxuriösen Designs.",
    highlights: [
      "Baccarat-Kristallhandwerk",
      "Ultra-luxuriöse Interieurs",
      "Erstklassige Annehmlichkeiten",
      "Lage in Business Bay",
      "Einrichtungen im Resort-Stil",
    ],
  },
  "dubai-harbour-residences": {
    shortDescription:
      "Moderne Wasserfront-Residenzen in Dubai Harbour mit Premium-Annehmlichkeiten und zeitgemäßem Lebensstil.",
    longDescription:
      "Dubai Harbour Residences bietet modernes Wohnen am Wasser im lebendigen Dubai Harbour. Diese zeitgenössischen Residenzen überzeugen mit klarem Design, Premium-Ausstattung und Zugang zu umfassenden Lifestyle-Annehmlichkeiten. In Dubais neuestem Wasserfront-Ziel gelegen, umfasst die Anlage Pools, Fitnesscenter, Einrichtungen für Kinder sowie Nähe zu Einzelhandel und Entertainment. Die Residenzen verbinden modernen Luxus mit urbanem Komfort.",
    highlights: [
      "Wasserfront-Lage",
      "Modernes Design",
      "Premium-Annehmlichkeiten",
      "Dubai-Harbour-Lifestyle",
      "Urbaner Komfort",
    ],
  },
  "villa-tresor-al-barari": {
    shortDescription:
      "Eine maßgeschneiderte Trophäen-Villa auf einem der größten Grundstücke von The Collection, Al Barari – dem grünen Herzen Dubais.",
    longDescription:
      "Villa Tresor ist eine der schönsten individuell gebauten Residenzen in Al Barari und liegt auf einem seltenen, besonders großen Grundstück in der prestigeträchtigen Enklave The Collection. Mit außergewöhnlichem Anspruch entworfen und ausgestattet, verbindet sie zeitlose Architektur, hochwertige Materialien und durchdacht gestaltete Wohnräume mit der Privatsphäre und Großzügigkeit einer echten Trophäen-Residenz. Weitläufige, angelegte Gärten, elegante Empfangsräume und großzügige Bereiche zum Entertainen drinnen und draußen schaffen einen eleganten Rahmen für Familienleben und Gastgeber gleichermaßen. Die Villa bietet 14.551 ft² Wohnfläche auf einem 21.076 ft² großen Grundstück, sechs Schlafzimmer und sieben Bäder und wird bei Übertragung frei übergeben. Al Barari gilt als „grünes Herz Dubais“ mit botanischen Gärten, dem Restaurant The Farm und dem Heart & Soul Spa, rund 20 Minuten von Downtown Dubai und dem Flughafen DXB entfernt.",
    highlights: [
      "Individuell gebaut auf einem der größten Grundstücke in The Collection",
      "14.551 ft² Wohnfläche auf 21.076 ft² Grundstück",
      "Pool im Resort-Stil und angelegte Gärten",
      "Temperierter Weinkeller",
      "Arbeitszimmer, Bibliothek und Personalunterkunft",
      "Bei Übertragung frei",
    ],
  },
  "ahs-tower-office": {
    shortDescription:
      "Die höchste halbe Etage im AHS Tower – Grade-A+-Büroflächen wenige Minuten vom DIFC, Fertigstellung Q1 2027.",
    longDescription:
      "Der AHS Tower ist ein neues, ikonisches Geschäftshochhaus mit 69 Stockwerken, nur wenige Minuten vom Dubai International Financial Centre entfernt im Herzen von Dubais Finanzviertel – und die erste Grade-A+-Bürofläche, die in Dubai auf den Markt kommt. Angeboten wird die höchste halbe Etage des Turms: 3.379 ft² mit raumhohen Fenstern, Premium-Ausstattung und einem offenen, durchdachten Grundriss. Nutzer profitieren von einem preisgekrönten Spa, einem hochmodernen Fitnessstudio, einer Aussichtslounge auf dem Dach, ausgewählten Restaurants und Bars sowie einem Valet-Service. Mit Fertigstellung im ersten Quartal 2027 ist dies eine seltene Gelegenheit, sich einen Firmensitz der nächsten Generation an einer der renommiertesten Geschäftsadressen Dubais zu sichern.",
    highlights: [
      "Höchste halbe Etage des Turms",
      "Grade-A+-Büroflächen",
      "Ikonischer 69-geschossiger Turm nahe dem DIFC",
      "Fertigstellung Q1 2027",
      "Dachlounge, Spa, Fitnessstudio und Restaurants",
      "Schnelle Anbindung an die Sheikh Zayed Road und die Metro",
    ],
  },
};

export const propertyListings: Record<Locale, Record<string, PropertyListingCopy>> = {
  en,
  es,
  de,
};

export function getPropertyListingCopy(
  slug: string,
  locale: Locale,
  fallback: PropertyListingCopy
): PropertyListingCopy {
  return propertyListings[locale][slug] ?? propertyListings.en[slug] ?? fallback;
}
