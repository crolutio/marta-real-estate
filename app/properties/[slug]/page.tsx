import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  properties,
  getPropertyBySlug,
  formatPriceForDetail,
} from "@/lib/data/properties";
import { PropertyDetailContent } from "./property-detail-content";

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
      title: `${property.title} - ${formatPriceForDetail(property.price, property.currency, { priceFromPlus: property.priceFromPlus, priceMax: property.priceMax })}`,
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

  const similarProperties = properties
    .filter((p) => p.type === property.type && p.slug !== property.slug)
    .slice(0, 3);

  return (
    <PropertyDetailContent
      property={property}
      similarProperties={similarProperties}
    />
  );
}
