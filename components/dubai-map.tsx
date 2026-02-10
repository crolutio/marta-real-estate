"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Fix for default marker icons in Next.js
const createCustomIcon = () =>
  new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

export interface MapLocation {
  name: string;
  description: string;
  coordinates: [number, number];
  highlights?: string[];
  price?: string;
  type?: string;
  link?: string;
}

const DUBAI_LOCATIONS: MapLocation[] = [
  {
    name: "Palm Jumeirah",
    description:
      "Iconic man-made island featuring luxury beachfront residences and world-class amenities.",
    coordinates: [25.1124, 55.139],
    highlights: ["Beachfront living", "Marina access", "High-end developments"],
    price: "Premium",
    type: "Island",
  },
  {
    name: "Dubai Marina",
    description:
      "Vibrant waterfront district with modern skyscrapers, marina, and cosmopolitan lifestyle.",
    coordinates: [25.0806, 55.1394],
    highlights: ["Waterfront promenade", "Dining & entertainment"],
    price: "Mid to Premium",
    type: "Waterfront",
  },
  {
    name: "Jumeirah Beach Residence",
    description:
      "Prestigious beachfront community with white-sand beaches and luxury residences.",
    coordinates: [25.0782, 55.1318],
    highlights: ["Private beaches", "Family-friendly"],
    price: "Premium",
    type: "Beachfront",
  },
  {
    name: "Business Bay",
    description:
      "Dubai's central business district with modern architecture and waterfront views.",
    coordinates: [25.1852, 55.2818],
    highlights: ["Business hub", "Modern skyscrapers"],
    price: "Premium",
    type: "Business District",
  },
  {
    name: "Dubai International Financial Centre",
    description:
      "Free zone offering tax advantages and proximity to business and leisure amenities.",
    coordinates: [25.2118, 55.2818],
    highlights: ["Tax advantages", "Luxury residences"],
    price: "Premium",
    type: "Financial District",
  },
  {
    name: "Emirates Hills",
    description:
      "Exclusive golf community with championship courses and equestrian facilities.",
    coordinates: [25.0982, 55.1818],
    highlights: ["Golf courses", "Equestrian facilities"],
    price: "Ultra-Premium",
    type: "Golf Community",
  },
  {
    name: "Dubai Hills Estate",
    description:
      "Master-planned community with nature trails, parks, and resort-style amenities.",
    coordinates: [25.1152, 55.2438],
    highlights: ["Nature trails", "Resort amenities"],
    price: "Premium",
    type: "Estate Community",
  },
  {
    name: "Dubai Harbour",
    description:
      "New waterfront destination with modern developments and marina lifestyle.",
    coordinates: [25.0634, 55.1256],
    highlights: ["Modern architecture", "Marina lifestyle"],
    price: "Mid to Premium",
    type: "Waterfront",
  },
  {
    name: "Downtown Dubai",
    description:
      "Dubai's vibrant city center featuring Burj Khalifa, Dubai Mall, and world-class dining.",
    coordinates: [25.1972, 55.2742],
    highlights: ["Burj Khalifa views", "Premium shopping"],
    price: "Premium",
    type: "City Center",
  },
  {
    name: "Dubai Creek Harbour",
    description:
      "Luxurious waterfront development with iconic towers, parks, and marina facilities.",
    coordinates: [25.0912, 55.3556],
    highlights: ["Creek views", "Modern lifestyle"],
    price: "Premium",
    type: "Waterfront",
  },
  {
    name: "Za'abeel",
    description:
      "Prestigious district with premium residences and world-class facilities.",
    coordinates: [25.2145, 55.2967],
    highlights: ["Prime location", "Modern developments"],
    price: "Premium",
    type: "Residential",
  },
  {
    name: "Jumeirah Bay Island",
    description:
      "Exclusive island development with Bulgari Resort and ultra-luxury residences.",
    coordinates: [25.0978, 55.1489],
    highlights: ["Bulgari Resort", "Private marina"],
    price: "Ultra-Premium",
    type: "Island",
  },
];

function MapContent() {
  const map = useMap();

  useEffect(() => {
    // Fit bounds to show all Dubai locations
    const bounds = L.latLngBounds(
      DUBAI_LOCATIONS.map((loc) => loc.coordinates)
    );
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
  }, [map]);

  return null;
}

export function DubaiMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    );
  }

  const markerIcon = createCustomIcon();

  return (
    <div className="aspect-[16/9] rounded-lg overflow-hidden border border-border">
      <MapContainer
        center={[25.2048, 55.2708]}
        zoom={11}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ minHeight: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent />
        {DUBAI_LOCATIONS.map((location) => (
          <Marker
            key={location.name}
            position={location.coordinates}
            icon={markerIcon}
          >
            <Popup>
              <div className="min-w-[220px] p-1">
                <h3 className="font-semibold text-base mb-2">{location.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {location.description}
                </p>
                {location.highlights && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {location.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-secondary px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                {location.price && (
                  <p className="text-xs text-accent font-medium mb-2">
                    {location.price}
                  </p>
                )}
                <Link
                  href="/properties"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View properties
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
