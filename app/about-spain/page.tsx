import { Metadata } from "next";
import {
  Building2,
  TrendingUp,
  MapPin,
  Award,
  Globe,
} from "lucide-react";
import { AboutSpainHero } from "@/components/about-spain-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Spain",
  description:
    "Luxury real estate in Spain: Barcelona markets, waterfront districts, market context, and how we advise international buyers.",
};

const developers = [
  {
    name: "Bonavista Developments",
    description:
      "Known for meticulous heritage restorations—most notably Casa Burés—Bonavista combines conservation of modernist detail with contemporary services such as rooftop pools, wellness, and concierge-led living in prime Eixample addresses.",
  },
  {
    name: "Intercon",
    description:
      "Behind AM Residences on Ausiàs March, Intercon delivered a full renovation of a late-19th-century building while preserving its façade and pairing the interiors with a serviced-residence operating model.",
  },
  {
    name: "Núñez i Navarro",
    description:
      "One of Barcelona's established residential developers, active across central districts with mid- and high-end product—useful context when comparing delivery standards and resale liquidity across neighborhoods.",
  },
];

const neighborhoods = [
  {
    name: "Eixample & Quadrat d'Or",
    description:
      "The iconic grid north of Plaça de Catalunya—wide avenues, modernist façades, and walkable access to Passeig de Gràcia. Strong demand for renovated apartments and penthouses; limited new supply keeps well-located stock competitive.",
    highlights: ["Modernist architecture", "Retail & dining", "Metro connectivity"],
    type: "City grid",
  },
  {
    name: "Barceloneta & waterfront",
    description:
      "Dense beachside quarter with marina access and steady short- and mid-term rental demand. Newer stock is mixed with older buildings—due diligence on building condition and community fees matters.",
    highlights: ["Sea & port proximity", "Tourism flow", "Active rental market"],
    type: "Waterfront",
  },
  {
    name: "Gràcia",
    description:
      "Village-like plazas and low-rise streets with a strong local identity. Popular with families and creatives; inventory skews toward smaller buildings and renovation opportunities rather than large new developments.",
    highlights: ["Neighborhood character", "Outdoor dining", "Limited high-rises"],
    type: "District",
  },
  {
    name: "Poblenou & 22@",
    description:
      "Former industrial corridors transformed into a tech and design hub—loft-style product, innovation tenants, and long-term infrastructure investment (including coastal parks and improved connectivity).",
    highlights: ["22@ district", "Conversion stock", "Long-term upside"],
    type: "Regeneration",
  },
];

const marketInsights = [
  {
    title: "What we track",
    description:
      "We monitor launch pricing in prime postcodes, time-on-market for resale stock, seasonal tourism patterns, and financing conditions for non-residents—so recommendations match your hold period and currency exposure.",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    title: "Why buyers choose Barcelona",
    description:
      "Lifestyle, EU connectivity, education options, and diversification alongside other global cities. Many clients pair a Dubai primary base with a European second home or long-let investment.",
    icon: Award,
    color: "text-accent",
  },
  {
    title: "Who is active",
    description:
      "A mix of domestic upgraders, EU second-home buyers, and non-EU investors—often focused on renovation quality, service level in boutique buildings, and clarity on taxes and closing costs up front.",
    icon: Globe,
    color: "text-accent",
  },
  {
    title: "Where attention is moving",
    description:
      "Beyond postcard names, we watch metro extensions, public realm upgrades, and micro-neighborhoods where architecture and light outperform the postcode average—especially for 3–7 year horizons.",
    icon: Building2,
    color: "text-accent",
  },
];

export default function AboutSpainPage() {
  return (
    <div>
      <AboutSpainHero />

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
              Examples of groups behind signature Barcelona stock—always verified on a per-project basis before you commit.
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

      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground dark:bg-muted dark:text-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-primary-foreground dark:text-accent font-semibold mb-4">
              Prime locations
            </p>
            <h2 className="font-subtitle text-4xl md:text-5xl font-semibold text-primary-foreground dark:text-foreground">
              Key neighborhoods &amp; areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Card
                key={neighborhood.name}
                className="bg-primary-foreground/5 border-primary-foreground/10 dark:bg-background/50 dark:border-border"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <CardTitle className="font-subtitle text-lg text-primary-foreground dark:text-foreground">
                      {neighborhood.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/80 dark:text-foreground/85 mb-4 text-editorial">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-foreground/90 dark:text-foreground/90">
                      Key highlights:
                    </p>
                    <ul className="space-y-1">
                      {neighborhood.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-primary-foreground/70 dark:text-foreground/75"
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
              General guidance only—your lawyer and tax adviser should confirm details for your situation.
            </p>
          </div>

          <div className="max-w-[80vw] mx-auto text-sm">
            <div className="grid gap-6 xl:grid-cols-2">
              <div
                data-animate="reveal"
                className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                  Can foreigners buy in Barcelona?
                </h3>
                <p className="text-muted-foreground text-editorial leading-relaxed">
                  Non-residents can acquire freehold property in Spain subject to NIE requirements, bank
                  rules, and anti–money laundering checks. New-build and resale transactions follow
                  different tax treatments—your notary and lawyer will structure the purchase correctly.
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
                  Budget for transfer tax (ITP) on resale or VAT plus stamp duty on new builds, notary and
                  land-registry fees, plus legal and mortgage costs. We provide a line-by-line estimate
                  before you reserve a unit.
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
                  Barcelona remains attractive for mid- and long-term rentals, with regulation evolving.
                  We help you understand licensing rules, community bylaws, and realistic yields by
                  micro-area.
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
                  We align schools, commute, building quality, and your investment horizon—then narrow to
                  a handful of streets and product types before you travel for viewings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
