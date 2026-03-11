"use client";

import { HeroVideoBackground } from "@/components/hero-video-background";

const ABOUT_DUBAI_VIDEOS = [
  "/videos/marsa/hero/Hero001.mp4",
  "/videos/marsa/hero/Hero002.mp4",
  "/videos/marsa/hero/Hero003.mp4",
  "/videos/marsa/hero/Hero004.mp4",
];

export function AboutDubaiHero() {
  return (
    <HeroVideoBackground
      videos={ABOUT_DUBAI_VIDEOS}
      minHeight="min-h-screen"
      className="pt-20"
    >
      <div className="container-wide w-full">
        <div className="max-w-2xl bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg">
          <div className="text-white">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Investment Destination
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Discover Dubai&apos;s Luxury Real Estate Market
            </h1>
            <p className="text-lg text-white/90 text-editorial">
              Explore the world&apos;s most dynamic real estate market. From
              iconic developments to emerging opportunities, Dubai offers
              unparalleled potential for discerning investors.
            </p>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
