"use client";

import Image from "next/image";
import { Building2, TrendingUp, MapPin, Award, Globe } from "lucide-react";
import { AboutDubaiHero } from "@/components/about-dubai-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/language-provider";

const developerMeta = [
  { name: "Emaar Properties", logo: "/developers/emaar.png", logoClassName: "scale-90" },
  { name: "Dubai Holding", logo: "/developers/dubai-holding.png", logoClassName: "scale-125" },
  { name: "Meraas", logo: "/developers/meraas.png" },
  { name: "Omniyat", logo: "/developers/omniyat.png", logoClassName: "scale-90" },
  { name: "H&H Development", logo: "/developers/handh.png", logoClassName: "scale-90" },
  { name: "AHS Properties", logo: "/developers/ahs.png", logoClassName: "scale-90" },
  { name: "Ellington Properties", logo: "/developers/ellington.png", logoClassName: "scale-[1.75]" },
];

const neighborhoodNames = [
  "Palm Jumeirah",
  "Dubai International Financial Centre",
  "Emirates Hills",
  "Dubai Hills Estate",
  "Dubai Harbour",
  "Downtown Dubai",
  "Dubai Creek Harbour",
  "Sheikh Zayed Road",
  "Dubai Islands",
  "City Walk",
  "Dubai Canal",
];

const insightIcons = [TrendingUp, Award, Globe, Building2];

export function AboutDubaiContent() {
  const { dict } = useTranslation();
  const p = dict.aboutDubaiPage;

  return (
    <div>
      {/* Hero Section */}
      <AboutDubaiHero />

      {/* Market Insights */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {p.marketInsights.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              {p.marketInsights.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.marketInsights.items.map((insight, i) => {
              const Icon = insightIcons[i] ?? TrendingUp;
              return (
                <Card key={insight.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 text-accent">
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

      {/* Premier Developers */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {p.developers.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              {p.developers.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerMeta.map((developer, i) => (
              <Card key={developer.name} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <div className="relative h-16 w-40 rounded-md p-1.5 dark:rounded-lg dark:bg-white dark:ring-1 dark:ring-black/10 dark:shadow-sm">
                      <div className="absolute inset-x-0 top-1/2 mx-auto h-12 w-36 -translate-y-1/2">
                        <Image
                          src={developer.logo}
                          alt={`${developer.name} logo`}
                          fill
                          className={cn("object-contain", developer.logoClassName)}
                          sizes="144px"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-editorial">
                    {p.developers.descriptions[i]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground dark:bg-muted dark:text-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-subtitle text-5xl md:text-6xl font-semibold text-primary-foreground dark:text-foreground">
              {p.neighborhoods.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoodNames.map((name, i) => {
              const item = p.neighborhoods.items[i];
              return (
                <Card key={name} className="bg-primary-foreground/5 border-primary-foreground/10 dark:bg-background/50 dark:border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <CardTitle className="font-subtitle text-lg text-primary-foreground dark:text-foreground">
                        {name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-foreground/80 dark:text-foreground/85 mb-4 text-editorial">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary-foreground/90 dark:text-foreground/90">
                        {p.neighborhoods.keyHighlights}
                      </p>
                      <ul className="space-y-1">
                        {item.highlights.map((highlight) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {p.faq.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              {p.faq.title}
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto mt-4">
              {p.faq.intro}
            </p>
          </div>

          <div className="max-w-[80vw] mx-auto text-sm">
            <div className="grid gap-6 xl:grid-cols-2">
              {p.faq.items.map((item) => (
                <div
                  key={item.question}
                  data-animate="reveal"
                  className="animate-reveal border-l-4 border-accent bg-card p-8 rounded-lg shadow-sm"
                >
                  <h3 className="font-subtitle text-lg font-semibold mb-4 text-accent">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-editorial leading-relaxed">
                    {item.lead}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className="text-muted-foreground text-editorial space-y-2 mt-3 ml-6">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  )}
                  {item.outro && (
                    <p className="text-muted-foreground text-editorial mt-4">
                      {item.outro}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
