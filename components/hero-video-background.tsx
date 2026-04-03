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

  // Stable ref callbacks — inline refs change identity every render and React re-invokes them
  // with null then the node, which drops `canplay` listeners and breaks playback on refresh.
  const videoRefCallbacks = React.useMemo(
    () =>
      videos.map(
        (_, index) => (el: HTMLVideoElement | null) => {
          refs.current[index] = el;
          if (el) {
            el.muted = true;
            el.defaultMuted = true;
          }
        }
      ),
    [videos]
  );

  const playNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % videos.length;
      // Defer play until after React applies z-index/opacity for the active clip (iOS Safari).
      queueMicrotask(() => {
        const next = refs.current[nextIndex];
        if (next) {
          next.muted = true;
          next.currentTime = 0;
          next.play().catch(() => {});
        }
      });
      return nextIndex;
    });
  }, [videos.length]);

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

  React.useLayoutEffect(() => {
    const first = refs.current[0];
    if (!first) return;

    const kickPlay = () => {
      first.muted = true;
      first.defaultMuted = true;
      first.play().catch(() => {});
    };

    // Cached assets may already be playable before listeners attach.
    const tryPlay = () => {
      if (first.readyState >= 2) {
        kickPlay();
        return true;
      }
      return false;
    };

    if (tryPlay()) return;

    const onReady = () => {
      kickPlay();
    };
    first.addEventListener("loadeddata", onReady, { once: true });
    first.addEventListener("canplay", onReady, { once: true });

    // After paint, catch late cache hits
    const raf = requestAnimationFrame(() => {
      tryPlay();
    });

    return () => {
      cancelAnimationFrame(raf);
      first.removeEventListener("loadeddata", onReady);
      first.removeEventListener("canplay", onReady);
    };
  }, [videos]);

  if (!videos.length) return null;

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      {/* Video stack - one visible at a time */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={videoRefCallbacks[index]}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop={false}
          playsInline
          preload={index === 0 ? "auto" : "none"}
          onPlaying={() => handlePlaying(index)}
          onEnded={handleEnded}
          onError={() => {
            if (index === 0) setFirstPlaying(true);
          }}
          style={{
            // iOS Safari often will not decode or play clips stacked with z-index < 0.
            zIndex: index === currentIndex ? 2 : 1,
            opacity: index === currentIndex ? 1 : 0,
            visibility: index === currentIndex ? "visible" : "hidden",
            pointerEvents: index === currentIndex ? "auto" : "none",
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
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
