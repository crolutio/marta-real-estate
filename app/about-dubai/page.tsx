import { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  TrendingUp,
  MapPin,
  Award,
  Globe,
} from "lucide-react";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Dubai",
  description: "Discover Dubai's luxury real estate market, premier developers, property insights, and key neighborhoods. Expert guidance for investors and residents.",
};

const developers = [
  {
    name: "Emaar Properties",
    description: "Dubai's largest developer, known for iconic projects like Burj Khalifa and Dubai Mall.",
    projects: [
      "Burj Khalifa",
      "The Dubai Mall",
      "Dubai Marina and Downtown Dubai (master developer)",
    ],
    logo: "/developers/emaar.png",
    logoClassName: "scale-90",
  },
  {
    name: "Dubai Holding",
    description: "State-owned developer focusing on luxury residential and commercial developments.",
    projects: [
      "Dubai Festival City",
      "Madinat Jumeirah Living",
      "City Walk",
      "Bluewaters Island",
      "La Mer",
    ],
    logo: "/developers/dubai-holding.png",
    logoClassName: "scale-125",
  },
  {
    name: "Meraas",
    description: "Leading developer of luxury residential communities and hospitality projects.",
    projects: [
      "City Walk",
      "Bluewaters Island",
      "La Mer",
      "Port de La Mer",
      "Jumeirah Bay Island",
    ],
    logo: "/developers/meraas.png",
  },
  {
    name: "Omniyat",
    description: "Specializes in master-planned communities and sustainable developments.",
    projects: [
      "One at Palm Jumeirah",
      "The Opus (by Zaha Hadid)",
      "ELA Residences",
      "Vela",
      "The Sterling",
    ],
    logo: "/developers/omniyat.png",
    logoClassName: "scale-90",
  },
  {
    name: "H&H Development",
    description: "Known for high-end residential developments and hospitality projects.",
    projects: [
      "Four Seasons Resort Dubai at Jumeirah Beach",
      "Four Seasons Hotel DIFC",
      "Eden House The Canal",
    ],
    logo: "/developers/handh.png",
    logoClassName: "scale-90",
  },
  {
    name: "AHS Properties",
    description: "Focuses on affordable housing and community development projects.",
    projects: [
      "One Canal",
      "Casa Canal",
      "One Crescent (Palm Jumeirah)",
      "Serenity Mansions",
    ],
    logo: "/developers/ahs.png",
    logoClassName: "scale-90",
  },
  {
    name: "Ellington Properties",
    description: "International developer with luxury residential and commercial projects.",
    projects: [
      "Belgravia (I, II, III, Square)",
      "Wilton Park Residences",
      "DT1 (Downtown Dubai)",
      "One River Point",
      "The Quayside",
    ],
    logo: "/developers/ellington.png",
    logoClassName: "scale-[1.75]",
  },
];

const neighborhoods = [
  {
    name: "Palm Jumeirah",
    description: "Iconic man-made island featuring luxury beachfront residences and world-class amenities.",
    highlights: ["Beachfront living", "Marina access", "High-end developments"],
    price: "Premium",
    type: "Island",
  },
  {
    name: "Dubai Marina",
    description: "Vibrant waterfront district with modern skyscrapers, marina, and cosmopolitan lifestyle.",
    highlights: ["Waterfront promenade", "Dining & entertainment", "Modern architecture"],
    price: "Mid to Premium",
    type: "Waterfront",
  },
  {
    name: "Jumeirah Beach Residence",
    description: "Prestigious beachfront community with white-sand beaches and luxury residences.",
    highlights: ["Private beaches", "Walking distance to malls", "Family-friendly"],
    price: "Premium",
    type: "Beachfront",
  },
  {
    name: "Business Bay",
    description: "Dubai's central business district with modern architecture and waterfront views.",
    highlights: ["Business hub", "Modern skyscrapers", "Waterfront location"],
    price: "Premium",
    type: "Business District",
  },
  {
    name: "Dubai International Financial Centre",
    description: "Free zone offering tax advantages and proximity to business and leisure amenities.",
    highlights: ["Tax advantages", "Business facilities", "Luxury residences"],
    price: "Premium",
    type: "Financial District",
  },
  {
    name: "Emirates Hills",
    description: "Exclusive golf community with championship courses and equestrian facilities.",
    highlights: ["Golf courses", "Equestrian facilities", "Exclusive community"],
    price: "Ultra-Premium",
    type: "Golf Community",
  },
  {
    name: "Dubai Hills Estate",
    description: "Master-planned community with nature trails, parks, and resort-style amenities.",
    highlights: ["Nature trails", "Resort amenities", "Family-oriented"],
    price: "Premium",
    type: "Estate Community",
  },
  {
    name: "Dubai Harbour",
    description: "New waterfront destination with modern developments and marina lifestyle.",
    highlights: ["Modern architecture", "Marina lifestyle", "Upcoming area"],
    price: "Mid to Premium",
    type: "Waterfront",
  },
  {
    name: "Downtown Dubai",
    description: "Dubai's vibrant city center featuring Burj Khalifa, Dubai Mall, and world-class dining.",
    highlights: ["Burj Khalifa views", "Premium shopping", "Entertainment district"],
    price: "Premium",
    type: "City Center",
  },
  {
    name: "Dubai Creek Harbour",
    description: "Luxurious waterfront development with iconic towers, parks, and marina facilities.",
    highlights: ["Creek views", "Mixed-use development", "Modern lifestyle"],
    price: "Premium",
    type: "Waterfront",
  },
  {
    name: "Sheikh Zayed Road",
    description: "Dubai's main thoroughfare lined with prestigious skyscrapers and business headquarters.",
    highlights: ["Business district", "Iconic architecture", "Central location"],
    price: "Premium",
    type: "Business Corridor",
  },
  {
    name: "Mohammed Bin Rashid City",
    description: "Master-planned smart city with integrated communities, parks, and modern amenities.",
    highlights: ["Smart city features", "Green spaces", "Modern infrastructure"],
    price: "Mid to Premium",
    type: "Smart City",
  },
  {
    name: "Dubai Islands",
    description: "Exclusive archipelago development with private islands and luxury residences.",
    highlights: ["Private islands", "Exclusive access", "Waterfront lifestyle"],
    price: "Ultra-Premium",
    type: "Island Development",
  },
  {
    name: "Pearl Jumeirah",
    description: "Man-made island inspired by traditional Arabian pearls, offering luxury living.",
    highlights: ["Island living", "Cultural design", "Premium amenities"],
    price: "Premium",
    type: "Island",
  },
  {
    name: "City Walk",
    description: "Pedestrian-friendly district with boutique shopping, dining, and entertainment.",
    highlights: ["Walkable district", "Boutique shopping", "Lifestyle destination"],
    price: "Premium",
    type: "Lifestyle District",
  },
  {
    name: "Dubai Canal",
    description: "Scenic waterfront corridor connecting Dubai Creek to the Arabian Gulf.",
    highlights: ["Water views", "Recreational activities", "Modern developments"],
    price: "Mid to Premium",
    type: "Waterfront",
  },
  {
    name: "Jumeirah 1",
    description: "Historic district in Jumeirah offering traditional Arabian architecture and modern luxury.",
    highlights: ["Heritage charm", "Beach proximity", "Residential community"],
    price: "Premium",
    type: "Heritage District",
  },
  {
    name: "Jumeirah 3",
    description: "Up-and-coming area with modern developments and proximity to Dubai Marina.",
    highlights: ["Marina proximity", "Growing community", "Modern residences"],
    price: "Mid to Premium",
    type: "Residential District",
  },
];

const marketInsights = [
  {
    title: "What we track",
    description: "We monitor off-plan launches, handover timelines, and secondary-market moves so you can act when it matters—not when a listing appears.",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    title: "Why Dubai still pays",
    description: "No capital gains or income tax on rental income, 100% freehold in designated areas, and visa pathways linked to property. The framework is built for international buyers.",
    icon: Award,
    color: "text-accent",
  },
  {
    title: "Who’s buying",
    description: "European, UK, and Asian buyers are driving a large share of demand. We see where interest is focused and where value is still under the radar.",
    icon: Globe,
    color: "text-accent",
  },
  {
    title: "Where growth is heading",
    description: "Beyond the usual names, we keep an eye on delivery schedules and infrastructure (metro, roads, amenities) that will shift an area’s appeal in the next 3–5 years.",
    icon: Building2,
    color: "text-accent",
  },
];

export default function AboutDubaiPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative container-wide">
          <div className="max-w-2xl text-white">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Investment Destination
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Discover Dubai&apos;s Luxury Real Estate Market
            </h1>
            <p className="text-lg text-white/90 text-editorial">
              Explore the world&apos;s most dynamic real estate market. From
              iconic developments to emerging opportunities, Dubai offers
              unparalleled potential for discerning investors.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              How we see the market
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
              Intelligence that informs your move
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight) => {
              const Icon = insight.icon;
              return (
              <Card key={insight.title} className="text-center">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 ${insight.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground text-editorial">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </div>
      </section>

      {/* Premier Developers */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Leading Developers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
              Premier Development Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <Card key={developer.name} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <div className="relative h-12 w-36 rounded-md bg-white p-2">
                      <Image
                        src={developer.logo}
                        alt={`${developer.name} logo`}
                        fill
                        className={cn("object-contain", developer.logoClassName)}
                        sizes="144px"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-editorial">
                    {developer.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Notable Projects:</p>
                    <div className="flex flex-wrap gap-2">
                      {developer.projects.map((project) => (
                        <Badge key={project} variant="secondary" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Prime Locations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
              Key Neighborhoods & Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="bg-primary-foreground/5 border-primary-foreground/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <CardTitle className="font-serif text-lg text-white">
                        {neighborhood.name}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        neighborhood.price === "Ultra-Premium"
                          ? "bg-accent text-accent-foreground"
                          : neighborhood.price === "Premium"
                          ? "bg-secondary"
                          : "bg-muted"
                      }`}
                    >
                      {neighborhood.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80 text-sm mb-4 text-editorial">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-foreground/90">Key Highlights:</p>
                    <ul className="space-y-1">
                      {neighborhood.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-primary-foreground/70"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-primary-foreground/60 mt-3">
                    Type: {neighborhood.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Your Questions Answered
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto mt-4">
              We understand that investing in Dubai real estate can raise many questions.
              Here are answers to the most common inquiries from our clients.
            </p>
          </div>

          <div className="max-w-[80vw] mx-auto">
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Property Ownership */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  What about property ownership in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Dubai offers one of the most investor-friendly property ownership frameworks in the world. Since 2002, foreign nationals have been allowed to own 100% freehold property in designated areas across the city. These freehold areas give non-residents full ownership rights, with no time limits and the freedom to sell, lease, or pass the property on to heirs. The government has established clear, transparent regulations to protect foreign investors, ensuring a secure and well-regulated real estate market. This openness, combined with Dubai&apos;s strong legal framework and tax advantages, has made the city a global hub for international property investors seeking stability, growth, and long-term value.
                </p>
              </div>

              {/* Residency */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Does buying property give me residency?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  Yes. Purchasing qualifying real estate can make you eligible for a UAE residency visa, subject to current regulations and minimum property value requirements. We&apos;ll guide you through the residency options that best suit your needs and ensure all requirements are met for a smooth process.
                </p>
              </div>

              {/* Taxes */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Are there taxes on property purchases in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Dubai is highly tax-efficient:
                </p>
                <ul className="text-muted-foreground text-editorial space-y-2 mt-3 ml-6">
                  <li>• <strong>No property tax</strong></li>
                  <li>• <strong>No capital gains tax</strong></li>
                  <li>• <strong>No inheritance tax</strong></li>
                  <li>• <strong>No income tax on rental income</strong></li>
                  <li>• Only a one-time transfer fee applies at purchase: 4% DLD fees to the Dubai Land Department</li>
                </ul>
                <p className="text-muted-foreground text-editorial mt-4">
                  This tax-efficient environment makes Dubai particularly attractive for international investors seeking to maximize their returns.
                </p>
              </div>

              {/* Off-plan Investment */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Is off-plan property a good investment?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Off-plan properties often offer:
                </p>
                <ul className="text-muted-foreground text-editorial space-y-2 mt-3 ml-6">
                  <li>• <strong>Lower entry prices</strong> compared to completed developments</li>
                  <li>• <strong>Flexible payment plans</strong> during construction</li>
                  <li>• <strong>Strong capital appreciation potential</strong> as the project completes</li>
                </ul>
                <p className="text-muted-foreground text-editorial mt-4">
                  They are especially attractive for investors looking to maximize returns over the medium to long term. We carefully select developments from trusted developers to ensure project completion and quality standards.
                </p>
              </div>

              {/* Why Invest Now */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Why invest in Dubai real estate now?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Dubai combines:
                </p>
                <ul className="text-muted-foreground text-editorial space-y-2 mt-3 ml-6">
                  <li>• <strong>Strong economic growth</strong> driven by diversification</li>
                  <li>• <strong>Global investor demand</strong> from around the world</li>
                  <li>• <strong>Political and financial stability</strong> in the region</li>
                  <li>• <strong>High rental yields</strong> compared to other global markets</li>
                  <li>• <strong>Long-term capital appreciation</strong> potential</li>
                </ul>
                <p className="text-muted-foreground text-editorial mt-4">
                  Current market conditions present excellent opportunities for discerning investors. We stay ahead of market trends to identify the best opportunities for our clients.
                </p>
              </div>

              {/* Residency Requirements */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Do I need to be a resident to buy real estate in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  No. You do not need to be a UAE resident to buy real estate in Dubai. Foreign nationals can purchase property in designated freehold areas with full ownership rights, whether they live in the UAE or abroad. This flexibility makes Dubai uniquely accessible for international investors.
                </p>
              </div>

              {/* Bank Account */}
              <div data-animate="reveal" className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Do I need to open a bank account to buy off-plan in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  No, opening a UAE bank account is not mandatory to purchase off-plan property. Developers typically accept international transfers for payments. However, opening a local bank account can make future transactions—such as service charges, rental income, or resale—simpler and more efficient. We can assist with this process if desired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-4">
              Dubai Property Map
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto">
              Explore Dubai&apos;s neighborhoods and developments through our
              interactive map. Click on areas to learn more about specific
              locations and available properties.
            </p>
          </div>

          {/* Google Map */}
          <div className="mb-8">
            <GoogleMapEmbed
              query="Dubai, UAE"
              title="Dubai property map"
            />
          </div>

        </div>
      </section>

    </div>
  );
}