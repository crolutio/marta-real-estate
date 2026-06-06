"use client";

import * as React from "react";
import { PropertyCard } from "@/components/property-card";
import { getInvestPropertiesByCategory } from "@/lib/data/properties";
import type { InvestCategory } from "@/lib/types";

const CATEGORY_ORDER: Array<{ id: InvestCategory; label: string }> = [
  { id: "affordable-luxury", label: "Affordable luxury" },
  { id: "luxury", label: "Luxury" },
  { id: "ultra-luxury", label: "Ultra-luxury" },
];

const CATEGORY_SUBTITLES: Record<InvestCategory, string> = {
  "affordable-luxury":
    "Entry-point opportunities with strong tenant demand and high-quality amenities.",
  luxury:
    "Prime neighborhoods with resilient demand and strong medium-to-long-term upside.",
  "ultra-luxury":
    "Trophy assets in signature locations for high-net-worth portfolio positioning.",
};

export function InvestOpportunitiesCategories() {
  const [activeCategory, setActiveCategory] = React.useState<InvestCategory>(
    "affordable-luxury"
  );

  const categoryProperties = React.useMemo(
    () => getInvestPropertiesByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <section
      data-animate="reveal"
      className="animate-reveal section-padding bg-background border-t border-border overflow-visible"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-4">
            Active investment opportunities in Dubai
          </h2>
          <p className="text-muted-foreground text-lg text-editorial max-w-3xl mx-auto">
            Featured projects selected for location, demand and profitability potential
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CATEGORY_ORDER.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2.5 text-sm md:text-base font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-accent/20"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground text-editorial mb-10 max-w-3xl mx-auto">
          {CATEGORY_SUBTITLES[activeCategory]}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch overflow-visible py-2">
          {categoryProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
