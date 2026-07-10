"use client";

import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Building2,
  ArrowLeft,
  Check,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PropertyGallery } from "@/components/property-gallery";
import { PropertyContactCard } from "@/components/property-contact-card";
import { PropertyCard } from "@/components/property-card";
import { formatPriceForDetail } from "@/lib/data/properties";
import { getPropertyListingCopy } from "@/lib/i18n/property-listings";
import { AGENCY } from "@/lib/constants";
import { Property } from "@/lib/types";
import { useTranslation } from "@/components/language-provider";

interface PropertyDetailContentProps {
  property: Property;
  similarProperties: Property[];
}

export function PropertyDetailContent({
  property,
  similarProperties,
}: PropertyDetailContentProps) {
  const { dict, locale } = useTranslation();
  const P = dict.properties;
  const d = P.detail;
  const listing = getPropertyListingCopy(property.slug, locale, {
    shortDescription: property.shortDescription,
    longDescription: property.longDescription,
    highlights: property.highlights,
  });

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div data-animate="reveal" className="animate-reveal bg-secondary/30 py-4">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/properties"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              {d.allProperties}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">
              {property.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section
        data-animate="reveal"
        className="animate-reveal section-padding pt-8 md:pt-12 lg:pt-16"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <PropertyGallery
                images={property.images}
                title={property.title}
                video={property.video}
              />

              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={property.status === "For Sale" ? "default" : "secondary"}
                  >
                    {P.statuses[property.status] ?? property.status}
                  </Badge>
                  <Badge variant="outline">
                    {P.types[property.type] ?? property.type}
                  </Badge>
                  {property.new && (
                    <Badge className="bg-accent text-accent-foreground">
                      {d.newListing}
                    </Badge>
                  )}
                </div>
                <h1 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                  {property.title}
                </h1>
                {property.addressLink ? (
                  <a
                    href={property.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                    {property.location}
                    {property.neighborhood && ` · ${property.neighborhood}`}
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-lg text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    {property.location}
                    {property.neighborhood && ` · ${property.neighborhood}`}
                  </p>
                )}
              </div>

              {/* Key Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary/30 rounded-lg">
                {property.unitTypes ? (
                  <>
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">
                        {(() => {
                          const m = property.unitTypes?.match(/^(\d+)\s+to\s+(\d+)\s*Bed/i);
                          return m
                            ? `${m[1]} ${P.card.to} ${m[2]}`
                            : property.unitTypes?.split("|")[0]?.trim() ?? "—";
                        })()}
                      </p>
                      <p className="text-sm text-muted-foreground">{d.bedrooms}</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.unitBathsRange ?? "—"}</p>
                      <p className="text-sm text-muted-foreground">{d.bathrooms}</p>
                    </div>
                    <div className="text-center">
                      <Square className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.unitSizes ?? "—"}</p>
                      <p className="text-sm text-muted-foreground">{d.livingArea}</p>
                    </div>
                    <div className="text-center">
                      <Building2 className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">
                        {P.types[property.type] ?? property.type}
                      </p>
                      <p className="text-sm text-muted-foreground">{d.typeLabel}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.bedrooms}</p>
                      <p className="text-sm text-muted-foreground">{d.bedrooms}</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.bathrooms}</p>
                      <p className="text-sm text-muted-foreground">{d.bathrooms}</p>
                    </div>
                    <div className="text-center">
                      <Square className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">
                        {property.areaSqFt.toLocaleString()} {d.sqFt}
                      </p>
                      <p className="text-sm text-muted-foreground">{d.livingArea}</p>
                    </div>
                    <div className="text-center">
                      <Building2 className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">
                        {P.types[property.type] ?? property.type}
                      </p>
                      <p className="text-sm text-muted-foreground">{d.typeLabel}</p>
                    </div>
                  </>
                )}
              </div>

              {property.salesOfferPdf && (
                <div className="rounded-xl border border-border bg-gradient-to-br from-secondary/50 via-background to-secondary/30 p-6 md:p-8 shadow-sm">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4 text-left">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <FileText className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-subtitle text-lg font-semibold mb-1">
                          {property.salesOfferPdfTitle ?? d.salesOffer}
                        </h3>
                        <p className="text-sm text-muted-foreground text-editorial max-w-md">
                          {d.brochure}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="shrink-0 bg-accent text-accent-foreground hover:bg-black hover:text-white w-full sm:w-auto"
                    >
                      <a
                        href={encodeURI(property.salesOfferPdf)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {d.viewPdf}
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {/* Mobile Price Card */}
              <div className="lg:hidden p-6 bg-card rounded-lg border shadow-sm">
                <p className="text-sm text-muted-foreground mb-1">
                  {property.priceLabel ?? d.listedPrice}
                </p>
                <p className="font-subtitle text-3xl font-semibold mb-4">
                  {formatPriceForDetail(property.price, property.currency, {
                    priceFromPlus: property.priceFromPlus,
                    priceMax: property.priceMax,
                  })}
                </p>
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a href={`mailto:${AGENCY.email}`}>{d.email}</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d.whatsapp}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    {d.tabs.overview}
                  </TabsTrigger>
                  <TabsTrigger
                    value="highlights"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    {d.tabs.highlights}
                  </TabsTrigger>
                  <TabsTrigger
                    value="location"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    {d.tabs.location}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {listing.shortDescription}
                    </p>
                    <Separator className="my-6" />
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {listing.longDescription}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="highlights" className="pt-6">
                  <ul className="space-y-3">
                    {listing.highlights.map((highlight: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="location" className="pt-6">
                  <div className="space-y-4">
                    <GoogleMapEmbed
                      query={
                        property.locationMapQuery ??
                        `${property.location}${
                          property.neighborhood ? `, ${property.neighborhood}` : ""
                        }${property.currency === "EUR" ? ", Spain" : ", Dubai, UAE"}`
                      }
                      title={`${property.title} location`}
                    />
                    {(property.locationMapLink ?? property.addressLink) && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={property.locationMapLink ?? property.addressLink ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          {d.viewOnMaps}
                        </a>
                      </Button>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Contact Card (Desktop) */}
            <div className="hidden lg:block">
              <PropertyContactCard property={property} />
            </div>
          </div>

          {/* Other properties */}
          {similarProperties.length > 0 && (
            <div data-animate="reveal" className="animate-reveal mt-20">
              <Separator className="mb-12" />
              <div className="space-y-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-2">
                      {d.otherProperties}
                    </p>
                    <h2 className="font-subtitle text-2xl md:text-3xl font-semibold">
                      {d.youMayAlsoLike}
                    </h2>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/properties">{d.viewAll}</Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {similarProperties.map((p) => (
                    <PropertyCard key={p.slug} property={p} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
