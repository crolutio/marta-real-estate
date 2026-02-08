import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  MapPin,
  ArrowRight,
  Award,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ConsultationCta } from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "About Dubai",
  description: "Discover Dubai's luxury real estate market, premier developers, property insights, and key neighborhoods. Expert guidance for investors and residents.",
};

const developers = [
  {
    name: "Emaar Properties",
    description: "Dubai's largest developer, known for iconic projects like Burj Khalifa and Dubai Mall.",
    projects: ["Burj Khalifa", "Dubai Mall", "Dubai Marina", "Business Bay"],
    logo: "🏗️",
  },
  {
    name: "Dubai Holding",
    description: "State-owned developer focusing on luxury residential and commercial developments.",
    projects: ["Jumeirah Bay Island", "Dubai Festival City", "Business Bay"],
    logo: "🏛️",
  },
  {
    name: "Meraas",
    description: "Leading developer of luxury residential communities and hospitality projects.",
    projects: ["Dubai Marina", "Jumeirah Beach Residence", "Dubai Investment Park"],
    logo: "🏢",
  },
  {
    name: "Omniyat",
    description: "Specializes in master-planned communities and sustainable developments.",
    projects: ["Dubai Studio City", "Dubai South", "Dubai Industrial City"],
    logo: "🏙️",
  },
  {
    name: "H&H Properties",
    description: "Known for high-end residential developments and hospitality projects.",
    projects: ["Four Seasons DIFC", "H Hotel", "Palm Jumeirah"],
    logo: "🏨",
  },
  {
    name: "AHS United",
    description: "Focuses on affordable housing and community development projects.",
    projects: ["Dubai South", "Dubai Industrial City", "Various residential communities"],
    logo: "🏘️",
  },
  {
    name: "Ellington Properties",
    description: "International developer with luxury residential and commercial projects.",
    projects: ["Dubai Hills Estate", "Dubai Creek Harbour", "Business Bay"],
    logo: "🌟",
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
];

const marketInsights = [
  {
    title: "Market Growth",
    description: "Dubai's real estate market has shown consistent growth, with luxury properties appreciating at 5-8% annually.",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Investment Appeal",
    description: "No capital gains tax, flexible ownership laws, and strong rental yields make Dubai attractive for investors.",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "Global Demand",
    description: "Increasing international interest from Europe, North America, and Asia drives market diversity.",
    icon: Globe,
    color: "text-purple-600",
  },
  {
    title: "Infrastructure",
    description: "Major developments like Dubai Creek Harbour and Dubai South promise continued growth.",
    icon: Building2,
    color: "text-orange-600",
  },
];

export default function AboutDubaiPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
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
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
              Market Intelligence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
              Property Insights & Updates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight) => (
              <Card key={insight.title} className="text-center">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 ${insight.color}`}>
                    <insight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground text-editorial">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Developers */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
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
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{developer.logo}</div>
                    <div>
                      <CardTitle className="font-serif text-lg">
                        {developer.name}
                      </CardTitle>
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
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
              Prime Locations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
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
                      <CardTitle className="font-serif text-lg">
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

      {/* Interactive Map Placeholder */}
      <section className="section-padding">
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

          {/* Map Placeholder */}
          <div className="aspect-[16/9] bg-secondary/50 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm">
                Dubai property map with neighborhood highlights and development details
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need help finding the perfect location? Let&apos;s discuss your
              preferences and explore options together.
            </p>
            <ConsultationCta size="lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-4">
            Ready to Invest in Dubai?
          </h2>
          <p className="text-muted-foreground text-editorial mb-8 max-w-xl mx-auto">
            With deep market knowledge and extensive developer relationships,
            we provide unparalleled access to Dubai&apos;s luxury real estate
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/properties">
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <ConsultationCta size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}