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

/**
 * Single visible <video> that swaps `src` on ended.
 * iOS Safari often fails to decode/play when multiple stacked videos use visibility:hidden;
 * a hard refresh left the first clip stuck on the loading spinner.
 */
export function HeroVideoBackground({
  videos,
  children,
  className = "",
  minHeight = "min-h-screen",
}: HeroVideoBackgroundProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [firstPlaying, setFirstPlaying] = React.useState(false);

  const src = videos[currentIndex] ?? "";

  const handleEnded = React.useCallback(() => {
    setCurrentIndex((i) => (i + 1) % videos.length);
  }, [videos.length]);

  React.useLayoutEffect(() => {
    if (!src) return;
    const v = videoRef.current;
    if (!v) return;

    const kickPlay = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.play().catch(() => {});
    };

    const tryPlay = () => {
      if (v.readyState >= 2) {
        kickPlay();
        return true;
      }
      return false;
    };

    if (tryPlay()) return;

    const onReady = () => kickPlay();
    v.addEventListener("loadeddata", onReady, { once: true });
    v.addEventListener("canplay", onReady, { once: true });
    const raf = requestAnimationFrame(() => {
      tryPlay();
    });

    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
    };
  }, [src]);

  if (!videos.length) return null;

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      <video
        key={src}
        ref={videoRef}
        src={src}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop={false}
        onPlaying={() => setFirstPlaying(true)}
        onEnded={handleEnded}
        onError={() => setFirstPlaying(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />

      {!firstPlaying && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/30">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full px-4 py-6 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}
