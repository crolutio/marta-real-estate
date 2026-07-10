"use client";

import { Building2, TrendingUp, MapPin, Award, Globe } from "lucide-react";
import { AboutSpainHero } from "@/components/about-spain-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/components/language-provider";

const developerNames = ["Bonavista Developments", "Intercon", "Núñez i Navarro"];

const neighborhoodNames = [
  "Eixample & Quadrat d'Or",
  "Barceloneta & waterfront",
  "Gràcia",
  "Poblenou & 22@",
];

const insightIcons = [TrendingUp, Award, Globe, Building2];

export function AboutSpainContent() {
  const { dict } = useTranslation();
  const p = dict.aboutSpainPage;

  return (
    <div>
      <AboutSpainHero />

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

      {/* Developers */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {p.developers.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
              {p.developers.title}
            </h2>
            <p className="text-muted-foreground text-editorial max-w-2xl mx-auto mt-4">
              {p.developers.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerNames.map((name, i) => (
              <Card key={name} className="h-full">
                <CardHeader>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Building2 className="h-8 w-8" aria-hidden />
                    </div>
                    <CardTitle className="font-subtitle text-lg text-center">
                      {name}
                    </CardTitle>
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
                <Card
                  key={name}
                  className="bg-primary-foreground/5 border-primary-foreground/10 dark:bg-background/50 dark:border-border"
                >
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

      {/* FAQ */}
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
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
