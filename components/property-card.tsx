"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Property } from "@/lib/types";
import { formatPriceForPreview } from "@/lib/data/properties";
import { getPropertyListingCopy } from "@/lib/i18n/property-listings";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/components/language-provider";

function preloadPropertyMedia(property: Property) {
  property.images.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
  if (property.video) {
    const v = document.createElement("video");
    v.preload = "auto";
    v.src = property.video;
  }
}

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const { dict, locale } = useTranslation();
  const card = dict.properties.card;
  const listing = getPropertyListingCopy(property.slug, locale, {
    shortDescription: property.shortDescription,
    longDescription: property.longDescription,
    highlights: property.highlights,
  });
  const handleMouseEnter = React.useCallback(() => {
    preloadPropertyMedia(property);
  }, [property]);

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="block"
      onMouseEnter={handleMouseEnter}
    >
      <div
        className={cn(
          "overflow-hidden border-0 shadow-none bg-transparent p-4 h-full flex flex-col rounded-xl",
          featured && "bg-card shadow-lg"
        )}
      >
        {/* Image / Video Container: prefer first image when present (e.g. Bvlgari), else video, else placeholder */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          {property.images.length > 0 ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : property.video ? (
            <video
              ref={(el) => {
                if (el) el.muted = true;
              }}
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={property.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded-md bg-accent/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-accent-foreground text-lg sm:text-2xl font-semibold drop-shadow-lg">
              {formatPriceForPreview(property.price, property.currency, property.priceFromPlus)}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className={cn("px-0 pt-5 pb-0 flex-1 flex flex-col", featured && "p-6 pt-4")}>
          {/* Title & Location */}
          <div className="space-y-1 mb-3">
            <h3 className="font-subtitle text-xl font-semibold">
              {property.title}
            </h3>
            <p className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              {property.location}
              {property.neighborhood && ` · ${property.neighborhood}`}
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            {property.unitTypes ? (
              <>
                <span className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  {(() => {
                    const first = property.unitTypes.split("|")[0].trim();
                    const m = first.match(/^(\d+)\s+to\s+(\d+)\s*Bed/i);
                    return m ? `${m[1]} ${card.to} ${m[2]} ${card.beds}` : first;
                  })()}
                </span>
                {property.unitBathsRange && (
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" />
                    {property.unitBathsRange} {card.baths}
                  </span>
                )}
                {property.unitSizes && (
                  <span className="flex items-center gap-1.5">
                    <Square className="h-4 w-4" />
                    {property.unitSizes.replace(/\ssq\.ft\s+to\s+/i, " to ") || property.unitSizes}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4" />
                  {property.bedrooms} {card.beds}
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4" />
                  {property.bathrooms} {card.baths}
                </span>
                <span className="flex items-center gap-1.5">
                  <Square className="h-4 w-4" />
                  {property.areaSqFt.toLocaleString()} {card.sqft}
                </span>
              </>
            )}
          </div>

          {/* Short Description (only on featured) - min-height so all cards match and text is visible */}
          {featured && (
            <p className="mt-3 text-base md:text-lg text-muted-foreground line-clamp-3 min-h-[4rem] flex-1">
              {listing.shortDescription}
            </p>
          )}
        </CardContent>
      </div>
    </Link>
  );
}
