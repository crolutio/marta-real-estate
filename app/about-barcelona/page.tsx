import { Metadata } from "next";
import {
  Building2,
  TrendingUp,
  MapPin,
  Award,
  Globe,
} from "lucide-react";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { AboutBarcelonaHero } from "@/components/about-barcelona-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Barcelona",
  description:
    "Placeholder page for Barcelona luxury real estate context, neighborhoods, and market notes. Content to be finalized.",
};

const developers = [
  {
    name: "Placeholder Developer One",
    description:
      "Dummy entry: boutique residential projects in central districts. Replace with real partners and logos.",
  },
  {
    name: "Placeholder Developer Two",
    description:
      "Dummy entry: mixed-use and waterfront schemes. Replace with verified developer profiles.",
  },
  {
    name: "Placeholder Developer Three",
    description:
      "Dummy entry: renovation and heritage conversions. Replace when Barcelona pipeline is confirmed.",
  },
];

const neighborhoods = [
  {
    name: "Eixample",
    description:
      "Placeholder: grid of modernist architecture, wide avenues, and strong apartment stock.",
    highlights: ["Modernist icons", "Central connectivity", "Retail and dining"],
    type: "City grid",
  },
  {
    name: "Barceloneta & waterfront",
    description:
      "Placeholder: beach adjacency, marina lifestyle, and high visibility for second homes.",
    highlights: ["Sea access", "Tourism flow", "Newer stock mix"],
    type: "Waterfront",
  },
  {
    name: "Gràcia",
    description:
      "Placeholder: village-like squares, creative scene, and low-rise character.",
    highlights: ["Neighborhood feel", "Strong rentals", "Limited new supply"],
    type: "District",
  },
  {
    name: "Poblenou",
    description:
      "Placeholder: tech and design-led renewal, 22@ district, loft conversions.",
    highlights: ["Innovation hub", "Conversion plays", "Long-term story"],
    type: "Regeneration",
  },
];

const marketInsights = [
  {
    title: "What we track (placeholder)",
    description:
      "Dummy text: launch velocity, resale liquidity, and seasonal demand from key buyer corridors.",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    title: "Why buyers look here",
    description:
      "Dummy text: lifestyle, EU access, education, and diversified portfolios alongside other hubs.",
    icon: Award,
    color: "text-accent",
  },
  {
    title: "Who is active",
    description:
      "Dummy text: domestic upgraders, EU second-home buyers, and global HNWIs—replace with your data.",
    icon: Globe,
    color: "text-accent",
  },
  {
    title: "Where attention is moving",
    description:
      "Dummy text: infrastructure, zoning, and micro-neighborhoods that will matter in 3–5 years.",
    icon: Building2,
    color: "text-accent",
  },
];

export default function AboutBarcelonaPage() {
  return (
    <div>
      <AboutBarcelonaHero />

      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              How we see the market
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              Intelligence that informs your move
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight) => {
              const Icon = insight.icon;
              return (
                <Card key={insight.title} className="text-center">
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 ${insight.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{insight.title}</h3>
                    <p className="text-muted-foreground text-editorial">
                      {insight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Leading developers
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              Premier development partners
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto mt-4">
              Placeholder section — swap in real developer logos and descriptions when ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <Card key={developer.name} className="h-full">
                <CardHeader>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Building2 className="h-8 w-8" aria-hidden />
                    </div>
                    <CardTitle className="font-subtitle text-lg text-center">
                      {developer.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-editorial">
                    {developer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground dark:[&_*]:text-black">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Prime locations
            </p>
            <h2 className="font-subtitle text-4xl md:text-5xl font-semibold text-white">
              Key neighborhoods &amp; areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card
                key={neighborhood.name}
                className="bg-primary-foreground/5 border-primary-foreground/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <CardTitle className="font-subtitle text-lg text-white">
                      {neighborhood.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80 mb-4 text-editorial">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-foreground/90">
                      Key highlights:
                    </p>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Your questions answered
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto mt-4">
              Placeholder FAQs for Barcelona — replace with accurate legal and tax guidance for your audience.
            </p>
          </div>

          <div className="max-w-[80vw] mx-auto text-sm">
            <div className="grid gap-6 xl:grid-cols-2">
              <div
                data-animate="reveal"
                className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                  Can foreigners buy property in Barcelona?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Placeholder answer: many non-residents purchase in Spain subject to rules, taxes, and
                  financing conditions. Replace with counsel-approved wording and current regulations.
                </p>
              </div>
              <div
                data-animate="reveal"
                className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                  What costs should buyers expect?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Placeholder answer: transfer taxes, notary, registry, and professional fees vary by
                  region and transaction type. Replace with a clear, itemized overview.
                </p>
              </div>
              <div
                data-animate="reveal"
                className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                  Is the rental market active?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  Placeholder answer: demand drivers include tourism, students, and corporate mobility.
                  Replace with your market stats and yield commentary.
                </p>
              </div>
              <div
                data-animate="reveal"
                className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                  How do we shortlist the right area?
                </h3>
                <p className="text-muted-foreground text-editorial">
                  Placeholder answer: we match lifestyle, commute, schools, and investment horizon to
                  neighborhoods. Replace with your advisory process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-4">
              Barcelona map
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto">
              Placeholder map — use to orient clients to districts and your focus zones.
            </p>
          </div>

          <div className="mb-8">
            <GoogleMapEmbed query="Barcelona, Spain" title="Barcelona property map" />
          </div>
        </div>
      </section>
    </div>
  );
}
