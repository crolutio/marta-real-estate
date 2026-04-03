"use client";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { MARSA_HERO_CLIP_PATHS } from "@/lib/marsa-hero-videos";

/** Placeholder hero — swap `MARSA_HERO_CLIP_PATHS` for Barcelona footage when ready. */
export function AboutBarcelonaHero() {
  return (
    <HeroVideoBackground
      videos={MARSA_HERO_CLIP_PATHS}
      minHeight="min-h-screen"
      className="pt-20"
    >
      <div className="container-wide w-full">
        <div className="max-w-2xl bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg">
          <div className="text-white">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Mediterranean living
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Discover Barcelona&apos;s property landscape
            </h1>
            <p className="text-lg text-white/90 text-editorial">
              Placeholder overview: from the Gothic Quarter to the waterfront,
              Barcelona blends culture, design, and lifestyle. Final copy and
              media will be added here.
            </p>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
