"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Neighborhood/location to coordinates mapping for Dubai
const LOCATION_COORDINATES: Record<string, [number, number]> = {
  "Jumeirah Bay Island": [25.0978, 55.1489],
  "Jumeira Bay Island, Jumeira 2": [25.0978, 55.1489],
  "Jumeira 2": [25.0978, 55.1489],
  "Marsa Al Arab": [25.0782, 55.1318],
  "Jumeira St - Umm Suqeim Third - Umm Suqeim 3": [25.1234, 55.1987],
  "Umm Suqeim 3": [25.1234, 55.1987],
  "The Peninsula": [25.0782, 55.1318],
  "Jumeirah Bay": [25.0978, 55.1489],
  "Palm Jumeirah": [25.1124, 55.139],
  "Jumeirah Beach Residence": [25.0782, 55.1318],
  "Dubai Marina": [25.0806, 55.1394],
  "Za'abeel": [25.2145, 55.2967],
  "Business Bay": [25.1852, 55.2818],
  "Emirates Hills": [25.0982, 55.1818],
  "Dubai Hills Estate": [25.1152, 55.2438],
  "Dubai Harbour": [25.0634, 55.1256],
  "Jumeirah": [25.2, 55.24],
  "One Za'abeel": [25.2145, 55.2967],
  "Royal Atlantis": [25.1124, 55.139],
  "Four Seasons Residences": [25.0782, 55.1318],
  "One Palm": [25.1124, 55.139],
  "The Lana": [25.0806, 55.1394],
  "Baccarat Residences": [25.1852, 55.2818],
  "Eden Hills": [25.1152, 55.2438],
  "Downtown Dubai": [25.1972, 55.2742],
};

const DEFAULT_CENTER: [number, number] = [25.2048, 55.2708];

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

interface PropertyMapProps {
  title: string;
  location: string;
  neighborhood?: string;
}

export function PropertyMap({ title, location, neighborhood }: PropertyMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const coords =
    LOCATION_COORDINATES[neighborhood || location] ||
    LOCATION_COORDINATES[location] ||
    DEFAULT_CENTER;

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
        center={coords}
        zoom={14}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ minHeight: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} icon={markerIcon}>
          <Popup>
            <div className="min-w-[200px]">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{location}</p>
              {neighborhood && (
                <p className="text-xs text-muted-foreground">{neighborhood}</p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
