import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { getFeaturedProperties } from "@/lib/data/properties";

export function FeaturedProperties() {
  const featuredProperties = getFeaturedProperties().slice(0, 6);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
              Featured Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display max-w-xl">
              Exceptional Properties for Exceptional Clients
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
