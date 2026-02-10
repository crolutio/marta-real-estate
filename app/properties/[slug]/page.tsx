import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Building2,
  ArrowLeft,
  Check,
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
import {
  properties,
  getPropertyBySlug,
  formatPrice,
} from "@/lib/data/properties";
import { AGENCY, SEO } from "@/lib/constants";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} | ${property.location}`,
    description: property.shortDescription,
    openGraph: {
      title: `${property.title} - ${formatPrice(property.price, property.currency)}`,
      description: property.shortDescription,
      images: property.images.length > 0 ? [property.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  // Get similar properties (same type, excluding current)
  const similarProperties = properties
    .filter((p) => p.type === property.type && p.slug !== property.slug)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/properties"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              All Properties
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate">
              {property.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <PropertyGallery
                images={property.images}
                title={property.title}
                video={property.video}
              />

              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={
                      property.status === "For Sale" ? "default" : "secondary"
                    }
                  >
                    {property.status}
                  </Badge>
                  <Badge variant="outline">{property.type}</Badge>
                  {property.new && (
                    <Badge className="bg-accent text-accent-foreground">
                      New Listing
                    </Badge>
                  )}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                  {property.title}
                </h1>
                {property.addressLink ? (
                  <a
                    href={property.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
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
                  <div className="col-span-2 md:col-span-4 space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Unit Types</p>
                      <p className="font-semibold text-base leading-snug">
                        {property.unitTypes}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Unit Sizes</p>
                      <p className="font-semibold text-base leading-snug">
                        {property.unitSizes}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.bedrooms}</p>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.bathrooms}</p>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                    </div>
                    <div className="text-center">
                      <Square className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">
                        {property.areaSqFt.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Sq. Ft.</p>
                    </div>
                    <div className="text-center">
                      <Building2 className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="font-semibold text-lg">{property.type}</p>
                      <p className="text-sm text-muted-foreground">Type</p>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Price Card */}
              <div className="lg:hidden p-6 bg-card rounded-lg border shadow-sm">
                <p className="text-sm text-muted-foreground mb-1">
                  {property.priceLabel ?? "Listed Price"}
                </p>
                <p className="font-serif text-3xl font-semibold mb-4">
                  {formatPrice(property.price, property.currency)}
                </p>
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a href={`mailto:${AGENCY.email}`}>Email</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
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
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="highlights"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Highlights
                  </TabsTrigger>
                  <TabsTrigger
                    value="amenities"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Amenities
                  </TabsTrigger>
                  <TabsTrigger
                    value="location"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Location
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {property.shortDescription}
                    </p>
                    <Separator className="my-6" />
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {property.longDescription}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="highlights" className="pt-6">
                  <ul className="space-y-3">
                    {property.highlights.map((highlight: string, index: number) => (
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

                <TabsContent value="amenities" className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                      >
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="pt-6">
                  <div className="space-y-4">
                    <GoogleMapEmbed
                      query={`${property.location}${property.neighborhood ? `, ${property.neighborhood}` : ""}, Dubai, UAE`}
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
                          View on Google Maps
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

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <div className="mt-20">
              <Separator className="mb-12" />
              <div className="space-y-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-2">
                      Similar Properties
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                      You May Also Like
                    </h2>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/properties">View All</Link>
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
