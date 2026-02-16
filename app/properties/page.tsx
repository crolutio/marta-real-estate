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

export default function PropertiesPage() {
  const [filters, setFilters] = React.useState<PropertyFiltersType>({
    search: "",
    type: "all",
    status: "all",
    minBeds: "any",
    priceRange: "all",
    sortBy: "newest",
  });

  // Filter and sort properties
  const filteredProperties = React.useMemo(() => {
    let result = [...properties];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.neighborhood?.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type !== "all") {
      result = result.filter((p) => p.type === filters.type);
    }

    // Status filter
    if (filters.status !== "all") {
      result = result.filter((p) => p.status === filters.status);
    }

    // Bedrooms filter (selected N: show if property offers N beds; 5+ means show if property has 5 or more)
    if (filters.minBeds !== "any") {
      const selected =
        typeof filters.minBeds === "number" ? filters.minBeds : 5;
      const is5Plus = selected === 5;
      result = result.filter((p) => {
        const { min, max } = getPropertyBedRange(p);
        if (is5Plus) return max >= 5;
        return selected >= min && selected <= max;
      });
    }

    // Price range filter
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map((v) => {
        if (v.endsWith("+")) return Infinity;
        return parseInt(v) || 0;
      });
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // Keep original order (newest first in our dummy data)
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Our Collection
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
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
      <section data-animate="reveal" className="animate-reveal section-padding">
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
            <div
              key={filteredProperties.map((p) => p.slug).join(",")}
              className="grid gap-8 md:grid-cols-2 stagger-children"
            >
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

          {/* Pagination Placeholder */}
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
