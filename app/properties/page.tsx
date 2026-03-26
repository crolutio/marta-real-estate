"use client";

import * as React from "react";
import { PropertyCard } from "@/components/property-card";
import {
  PropertyFilters,
  PropertyFilters as PropertyFiltersType,
} from "@/components/property-filters";
import { properties } from "@/lib/data/properties";
import { Property } from "@/lib/types";

function getPropertyBedRange(p: Property): { min: number; max: number } {
  const match = p.unitTypes?.match(/^(\d+)\s+to\s+(\d+)\s*Bed/i);
  if (match) {
    return { min: parseInt(match[1], 10), max: parseInt(match[2], 10) };
  }
  return { min: p.bedrooms, max: p.bedrooms };
}

const DEFAULT_FILTERS: PropertyFiltersType = {
  search: "",
  types: [],
  statuses: [],
  minBeds: [],
  priceRanges: [],
  sortBy: "newest",
};

export default function PropertiesPage() {
  const [filters, setFilters] = React.useState<PropertyFiltersType>(DEFAULT_FILTERS);

  const filteredProperties = React.useMemo(() => {
    let result = [...properties];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          (p.neighborhood?.toLowerCase().includes(q) ?? false)
      );
    }

    if (filters.types.length > 0) {
      result = result.filter((p) => filters.types.includes(p.type));
    }

    if (filters.statuses.length > 0) {
      result = result.filter((p) => filters.statuses.includes(p.status));
    }

    if (filters.minBeds.length > 0) {
      result = result.filter((p) => {
        const { min, max } = getPropertyBedRange(p);
        return filters.minBeds.some((n) =>
          n === 5 ? max >= 5 : n >= min && n <= max
        );
      });
    }

    if (filters.priceRanges.length > 0) {
      result = result.filter((p) =>
        filters.priceRanges.some((range) => {
          if (range.endsWith("+")) {
            return p.price >= (parseInt(range, 10) || 0);
          }
          const [lo, hi] = range.split("-").map(Number);
          return p.price >= lo && p.price <= hi;
        })
      );
    }

    if (filters.sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (filters.sortBy === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [filters]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Our Collection
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Exceptional Properties
            </h1>
            <p className="text-lg text-muted-foreground text-editorial">
              Explore our curated selection of luxury properties, from stunning
              penthouses to grand estates. Each property has been carefully
              selected to meet the highest standards of quality and exclusivity.
            </p>
            <p className="text-muted-foreground/80 text-sm mt-4 font-medium">
              We&apos;ll guide you through every detail to ensure you find the perfect property for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32">
        <div className="container-wide">
          {/* Filters */}
          <div className="mb-8">
            <PropertyFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {filteredProperties.length}
              </span>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No properties match your criteria.
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}

          {filteredProperties.length > 0 && (
            <div className="mt-12 flex justify-center">
              <p className="text-sm text-muted-foreground">
                Showing all {filteredProperties.length} properties
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
