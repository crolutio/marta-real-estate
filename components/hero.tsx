"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { AGENCY } from "@/lib/constants";

const HERO_VIDEOS = [
  "/videos/marsa/marsa1.mp4",
  "/videos/marsa/marsa2.mp4",
  "/videos/marsa/marsa3.mp4",
  "/videos/marsa/marsa4.mp4",
  "/videos/marsa/marsa5.mp4",
  "/videos/marsa/marsa6.mp4",
];

export function Hero() {
  return (
    <HeroVideoBackground videos={HERO_VIDEOS} minHeight="min-h-screen" className="pt-20">
      <div className="container-wide text-center text-white w-full">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 animate-fade-in">
          <Image
            src="/logo-big.webp"
            alt={`${AGENCY.fullName} logo`}
            width={1260}
            height={360}
            className="mx-auto h-40 md:h-52 w-auto object-contain"
            priority
          />

          <p className="font-title text-sm md:text-base tracking-[0.3em] uppercase text-white/80">
            Spaces Curated for Exceptional Living
          </p>

          <h1 className="font-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-display text-white">
            Invest in Dubai with confidence
          </h1>
          <p className="font-subtitle text-xl sm:text-2xl md:text-3xl font-semibold text-display text-white/95 tracking-wide">
            We guide your journey
          </p>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-editorial">
            We specialize in high-end homes for clients seeking modern luxury and comfort.
          </p>

          <div className="flex justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-black hover:text-white text-base px-8"
            >
              <Link href="/properties">
                View Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
