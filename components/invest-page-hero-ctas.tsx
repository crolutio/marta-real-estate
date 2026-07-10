"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/components/language-provider";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function InvestPageHeroCtas() {
  const { dict } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
      <Button
        type="button"
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-black hover:text-white text-base px-8"
        onClick={() => scrollToSection("personalized-analysis")}
      >
        {dict.investPage.ctas.advice}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button
        type="button"
        size="lg"
        variant="outline"
        className="text-base px-8 border-foreground/20"
        onClick={() => scrollToSection("investment-opportunities")}
      >
        {dict.investPage.ctas.opportunities}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
