"use client";

import * as React from "react";

const MARSA_VIDEOS = [
  "/videos/marsa/marsa1.mp4",
  "/videos/marsa/marsa2.mp4",
  "/videos/marsa/marsa3.mp4",
  "/videos/marsa/marsa4.mp4",
  "/videos/marsa/marsa5.mp4",
  "/videos/marsa/marsa6.mp4",
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
          {MARSA_VIDEOS.map((src, index) => (
            <div
              key={src}
              className="relative w-full rounded-lg overflow-hidden bg-black shadow-lg"
            >
              <video
                ref={(el) => {
                  refs.current[index] = el;
                }}
                src={src}
                className="w-full aspect-video object-contain"
                controls
                playsInline
                preload={index === 0 ? "auto" : "none"}
                muted={index === 0}
                autoPlay={index === 0}
                onPlaying={() => handlePlaying(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
