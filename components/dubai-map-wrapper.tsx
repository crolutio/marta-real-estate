"use client";

import dynamic from "next/dynamic";

const DubaiMap = dynamic(
  () => import("@/components/dubai-map").then((m) => m.DubaiMap),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[16/9] bg-secondary/50 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    ),
  }
);

export function DubaiMapWrapper() {
  return <DubaiMap />;
}
