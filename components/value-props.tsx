"use client";

import { Shield, TrendingUp, Lock, Compass } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/components/language-provider";

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  Lock: Lock,
  Compass: Compass,
};

export function ValueProps() {
  const { dict } = useTranslation();
  const { eyebrow, title, items } = dict.home.valueProps;

  return (
    <section data-animate="reveal" className="animate-reveal section-padding bg-muted/40">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
            {title}
          </h2>
        </div>

        {/* Values Grid - same style as About Dubai "Intelligence that informs your move" */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap];
            const copy = items[i] ?? { title: prop.title, description: prop.description };
            return (
              <Card key={prop.icon} className="text-center bg-card shadow-md dark:bg-black dark:border-white/10">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4 mx-auto dark:bg-accent/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-subtitle text-xl font-semibold mb-2">
                    {copy.title}
                  </h3>
                  <p className="text-muted-foreground text-editorial">
                    {copy.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
