import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { getFeaturedProperties } from "@/lib/data/properties";

export function FeaturedProperties() {
  const featuredProperties = getFeaturedProperties().slice(0, 6);

  return (
    <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold">
              Featured Collection
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display max-w-xl">
              Exceptional Properties for Exceptional Clients
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="self-start md:self-auto bg-accent text-accent-foreground hover:bg-black hover:text-white text-base px-8"
          >
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children items-stretch">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
