"use client";

import * as React from "react";

const GALLERY_VIDEOS = [
  "/videos/hero/hero-horizontal-1.mp4",
  "/videos/hero/hero-horizontal-2.mp4",
  "/videos/hero/hero-horizontal-3.mp4",
  "/videos/hero/hero-horizontal-4.mp4",
  "/videos/hero/hero-horizontal-5.mp4",
  "/videos/hero/hero-horizontal-6.mp4",
];

export function AboutDubaiVideos() {
  const refs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlaying = React.useCallback((index: number) => {
    const next = refs.current[index + 1];
    if (next) next.load();
  }, []);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
            Experience Dubai
          </p>
          <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
            Discover the city
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {GALLERY_VIDEOS.map((src, index) => (
            <div
              key={src}
              className="relative w-full rounded-lg overflow-hidden bg-black shadow-lg"
            >
              <video
                ref={(el) => {
                  refs.current[index] = el;
                  if (el && index === 0) {
                    el.muted = true;
                    el.defaultMuted = true;
                  }
                }}
                className="w-full aspect-video object-contain"
                controls
                playsInline
                preload={index === 0 ? "auto" : "none"}
                muted={index === 0}
                autoPlay={index === 0}
                onPlaying={() => handlePlaying(index)}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
