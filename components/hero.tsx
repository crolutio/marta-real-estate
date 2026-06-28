"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { AGENCY } from "@/lib/constants";
import { HOME_PAGE_HERO_CLIP_PATHS } from "@/lib/marsa-hero-videos";

export function Hero() {
  return (
    <HeroVideoBackground
      videos={HOME_PAGE_HERO_CLIP_PATHS}
      minHeight="min-h-screen"
      className="pt-20"
    >
      <div className="container-wide w-full">
        <div
          data-animate="reveal"
          className="max-w-2xl animate-reveal"
        >
          <div className="text-white">
            <Image
              id="hero-logo"
              src="/logo.webp"
              alt={`${AGENCY.fullName} logo`}
              width={1260}
              height={360}
              className="h-32 md:h-40 w-auto object-contain mb-6 md:mb-8"
              priority
            />

            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              We guide your journey
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Invest in Dubai with confidence
            </h1>

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
