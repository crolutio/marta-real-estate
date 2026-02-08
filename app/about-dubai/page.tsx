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
            <p className="text-white/80 text-sm mt-4 font-medium">
              We&apos;ll guide you through the process. We specialize in offering tailored investment opportunities in Dubai&apos;s real estate market.
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

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
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

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Property Ownership */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  What about property ownership in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Dubai offers one of the most investor-friendly property ownership frameworks in the world. Since 2002, foreign nationals have been allowed to own 100% freehold property in designated areas across the city. These freehold areas give non-residents full ownership rights, with no time limits and the freedom to sell, lease, or pass the property on to heirs. The government has established clear, transparent regulations to protect foreign investors, ensuring a secure and well-regulated real estate market. This openness, combined with Dubai&apos;s strong legal framework and tax advantages, has made the city a global hub for international property investors seeking stability, growth, and long-term value.
                </p>
              </div>

              {/* Residency */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Does buying property give me residency?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  Yes. Purchasing qualifying real estate can make you eligible for a UAE residency visa, subject to current regulations and minimum property value requirements. We&apos;ll guide you through the residency options that best suit your needs and ensure all requirements are met for a smooth process.
                </p>
              </div>

              {/* Taxes */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
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
              <div className="bg-card p-8 rounded-lg shadow-sm">
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
              <div className="bg-card p-8 rounded-lg shadow-sm">
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
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent">
                  Do I need to be a resident to buy real estate in Dubai?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  No. You do not need to be a UAE resident to buy real estate in Dubai. Foreign nationals can purchase property in designated freehold areas with full ownership rights, whether they live in the UAE or abroad. This flexibility makes Dubai uniquely accessible for international investors.
                </p>
              </div>

              {/* Bank Account */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
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