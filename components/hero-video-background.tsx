"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

interface HeroVideoBackgroundProps {
  videos: string[];
  children: React.ReactNode;
  className?: string;
  /** Min height e.g. min-h-screen or min-h-[70vh] */
  minHeight?: string;
}

export function HeroVideoBackground({
  videos,
  children,
  className = "",
  minHeight = "min-h-screen",
}: HeroVideoBackgroundProps) {
  const refs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [firstPlaying, setFirstPlaying] = React.useState(false);

  const playNext = React.useCallback(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    const next = refs.current[nextIndex];
    if (next) {
      next.currentTime = 0;
      next.play().catch(() => {});
    }
  }, [currentIndex, videos.length]);

  const handlePlaying = React.useCallback(
    (index: number) => {
      if (index === 0) setFirstPlaying(true);
      const next = refs.current[index + 1];
      if (next) next.load();
    },
    []
  );

  const handleEnded = React.useCallback(() => {
    playNext();
  }, [playNext]);

  React.useEffect(() => {
    const first = refs.current[0];
    if (first) first.play().catch(() => {});
  }, []);

  if (!videos.length) return null;

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      {/* Video stack - one visible at a time */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[index] = el;
          }}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop={false}
          playsInline
          preload={index === 0 ? "auto" : "none"}
          onPlaying={() => handlePlaying(index)}
          onEnded={handleEnded}
          style={{
            zIndex: index === currentIndex ? 0 : -1,
            opacity: index === currentIndex ? 1 : 0,
            pointerEvents: index === currentIndex ? "auto" : "none",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />

      {/* Loading spinner until first video is playing */}
      {!firstPlaying && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/30">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}

      {/* Content overlay - centered in viewport, scrollable if content overflows */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full px-4 py-6 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}
