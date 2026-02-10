"use client";

import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("@/components/property-map").then((m) => m.PropertyMap),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg animate-pulse" />
    ),
  }
);

interface PropertyMapWrapperProps {
  title: string;
  location: string;
  neighborhood?: string;
}

export function PropertyMapWrapper({
  title,
  location,
  neighborhood,
}: PropertyMapWrapperProps) {
  return (
    <PropertyMap
      title={title}
      location={location}
      neighborhood={neighborhood}
    />
  );
}
