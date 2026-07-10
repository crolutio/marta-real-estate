"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoBackground } from "@/components/hero-video-background";
import { AGENCY } from "@/lib/constants";
import { HOME_PAGE_HERO_CLIP_PATHS } from "@/lib/hero-videos";
import { useTranslation } from "@/components/language-provider";

export function Hero() {
  const { t } = useTranslation();
  return (
    <HeroVideoBackground
      videos={HOME_PAGE_HERO_CLIP_PATHS}
      minHeight="min-h-screen"
      className="pt-20"
      crossfade={false}
    >
      <div className="container-wide w-full">
        <div
          data-animate="reveal"
          className="max-w-2xl animate-reveal mx-auto md:mx-0 text-center md:text-left"
        >
          <div className="text-white">
            <Image
              id="hero-logo"
              src="/logo.webp"
              alt={`${AGENCY.fullName} logo`}
              width={1260}
              height={360}
              className="h-48 md:h-60 w-auto object-contain object-center md:object-left object-top mb-2 md:mb-3 mx-auto md:mx-0"
              priority
            />

            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              {t("hero.headline")}
            </h1>

            <div className="flex justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-black hover:text-white text-base px-8"
              >
                <Link href="/properties">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
