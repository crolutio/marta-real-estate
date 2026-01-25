import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/lib/types";
import { formatPrice } from "@/lib/data/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <Card
        className={cn(
          "overflow-hidden border-0 shadow-none bg-transparent hover-lift",
          featured && "bg-card shadow-lg"
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg img-zoom">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Status Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge
              variant={property.status === "For Sale" ? "default" : "secondary"}
              className="bg-primary/90 text-primary-foreground"
            >
              {property.status}
            </Badge>
            {property.new && (
              <Badge className="bg-accent text-accent-foreground">New</Badge>
            )}
          </div>
          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4">
            <span className="text-white text-2xl font-semibold drop-shadow-lg">
              {formatPrice(property.price, property.currency)}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className={cn("p-0 pt-4", featured && "p-6 pt-4")}>
          {/* Title & Location */}
          <div className="space-y-1 mb-3">
            <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
              {property.title}
            </h3>
            <p className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              {property.location}
              {property.neighborhood && ` · ${property.neighborhood}`}
            </p>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Bed className="h-4 w-4" />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Square className="h-4 w-4" />
              {property.areaSqFt.toLocaleString()} sqft
            </span>
          </div>

          {/* Short Description (only on featured) */}
          {featured && (
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {property.shortDescription}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
