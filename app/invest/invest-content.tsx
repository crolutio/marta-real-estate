"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvestPageHeroCtas } from "@/components/invest-page-hero-ctas";
import { InvestAnalysisForm } from "@/components/invest-analysis-form";
import { useTranslation } from "@/components/language-provider";

export function InvestContent() {
  const { dict } = useTranslation();
  const p = dict.investPage;

  return (
    <div className="pt-20">
      <section
        data-animate="reveal"
        className="animate-reveal section-padding bg-secondary border-b border-border/70"
      >
        <div className="container-wide max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-5">
            <span className="h-px w-8 sm:w-12 md:w-16 bg-accent shrink-0" aria-hidden />
            <p className="font-title text-sm md:text-base tracking-[0.2em] uppercase text-accent font-semibold">
              {p.hero.eyebrow}
            </p>
            <span className="h-px w-8 sm:w-12 md:w-16 bg-accent shrink-0" aria-hidden />
          </div>
          <h1 className="font-subtitle text-4xl sm:text-5xl md:text-6xl font-semibold text-display mb-4 md:mb-5">
            {p.hero.title}
          </h1>
          <p className="font-subtitle text-xl sm:text-2xl md:text-3xl font-semibold text-display tracking-wide text-foreground mb-10 md:mb-12">
            {p.hero.subtitle}
          </p>

          <ul className="text-left sm:text-center space-y-4 md:space-y-5 text-lg md:text-xl text-muted-foreground text-editorial max-w-xl sm:mx-auto mb-12 md:mb-14">
            <li>{p.hero.returns}</li>
            <li>{p.hero.support}</li>
          </ul>

          <InvestPageHeroCtas />
        </div>
      </section>

      <section
        id="investment-opportunities"
        data-animate="reveal"
        className="animate-reveal scroll-mt-24 section-padding bg-secondary/40 border-t border-border"
      >
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-6">
            {p.opportunities.title}
          </h2>
          <p className="text-muted-foreground text-lg text-editorial mb-10 max-w-2xl mx-auto">
            {p.opportunities.body}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-black hover:text-white"
          >
            <Link href="/properties">
              {p.opportunities.browse}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <InvestAnalysisForm />
    </div>
  );
}
