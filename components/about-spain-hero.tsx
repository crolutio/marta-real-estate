"use client";

import * as React from "react";
import { HeroVideoBackground } from "@/components/hero-video-background";
import {
  BARCELONA_HORIZONTAL_CLIPS,
  BARCELONA_VERTICAL_CLIPS,
} from "@/lib/barcelona-videos";
import { useTranslation } from "@/components/language-provider";

export function AboutSpainHero() {
  const { dict } = useTranslation();
  const [orientation, setOrientation] = React.useState<"horizontal" | "vertical">(
    "horizontal"
  );

  React.useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setOrientation(mq.matches ? "horizontal" : "vertical");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const videos =
    orientation === "horizontal"
      ? [...BARCELONA_HORIZONTAL_CLIPS]
      : [...BARCELONA_VERTICAL_CLIPS];

  return (
    <HeroVideoBackground
      key={orientation}
      videos={videos}
      minHeight="min-h-screen"
      className="pt-20"
      crossfade={false}
      contentAlign="top-mobile"
    >
      <div className="container-wide w-full">
        <div
          data-animate="reveal"
          className="max-w-2xl animate-reveal mx-auto md:mx-0 text-center md:text-left md:bg-black/80 md:p-8 md:rounded-lg"
        >
          <div className="text-white">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-white font-semibold mb-4">
              {dict.aboutSpainHero.eyebrow}
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              {dict.aboutSpainHero.title}
            </h1>
            <p className="hidden md:block text-lg text-white/90 text-editorial">
              {dict.aboutSpainHero.body}
            </p>
          </div>
        </div>
      </div>
    </HeroVideoBackground>
  );
}
