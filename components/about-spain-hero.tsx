"use client";

import { HeroVideoBackground } from "@/components/hero-video-background";
import { MARSA_HERO_CLIP_PATHS } from "@/lib/marsa-hero-videos";

/** Swap `MARSA_HERO_CLIP_PATHS` for Spain-specific footage when ready. */
export function AboutSpainHero() {
  return (
    <HeroVideoBackground
      videos={MARSA_HERO_CLIP_PATHS}
      minHeight="min-h-screen"
      className="pt-20"
      crossfade={false}
    >
      <div className="container-wide w-full">
        <div
          data-animate="reveal"
          className="max-w-2xl bg-black/80 p-5 sm:p-6 md:p-8 rounded-lg animate-reveal"
        >
          <div className="text-white">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Mediterranean living
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Spain luxury real estate
            </h1>
            <p className="text-lg text-white/90 text-editorial">
              From Barcelona&apos;s Eixample grid to the sea, Spain pairs world-class architecture with an
              outdoor, design-led lifestyle. The country attracts global buyers seeking EU connectivity,
              culture, and carefully restored residences in walkable neighborhoods—with clear upside
              when architecture, light, and service levels align.
            </p>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
