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

const CROSSFADE_MS = 750;

/**
 * Two stacked videos: next clip preloads on the hidden layer, then crossfades in.
 * Avoids flashing from swapping `src` on one element or remounting with `key`.
 */
export function HeroVideoBackground({
  videos,
  children,
  className = "",
  minHeight = "min-h-screen",
}: HeroVideoBackgroundProps) {
  const n = videos.length;
  const [firstPlaying, setFirstPlaying] = React.useState(false);

  if (!n) return null;

  if (n === 1) {
    return (
      <SingleClipHero
        src={videos[0]}
        minHeight={minHeight}
        className={className}
        onFirstPlaying={() => setFirstPlaying(true)}
        firstPlaying={firstPlaying}
      >
        {children}
      </SingleClipHero>
    );
  }

  return (
    <CrossfadeHero
      videos={videos}
      minHeight={minHeight}
      className={className}
      onFirstPlaying={() => setFirstPlaying(true)}
      firstPlaying={firstPlaying}
    >
      {children}
    </CrossfadeHero>
  );
}

function SingleClipHero({
  src,
  minHeight,
  className,
  children,
  onFirstPlaying,
  firstPlaying,
}: {
  src: string;
  minHeight: string;
  className: string;
  children: React.ReactNode;
  onFirstPlaying: () => void;
  firstPlaying: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useLayoutEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const kick = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.play().catch(() => {});
    };
    if (v.readyState >= 2) {
      kick();
      return;
    }
    const onReady = () => kick();
    v.addEventListener("loadeddata", onReady, { once: true });
    v.addEventListener("canplay", onReady, { once: true });
    const raf = requestAnimationFrame(() => {
      if (v.readyState >= 2) kick();
    });
    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
    };
  }, [src]);

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop
        onPlaying={onFirstPlaying}
        onError={onFirstPlaying}
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

function CrossfadeHero({
  videos,
  minHeight,
  className,
  children,
  onFirstPlaying,
  firstPlaying,
}: {
  videos: string[];
  minHeight: string;
  className: string;
  children: React.ReactNode;
  onFirstPlaying: () => void;
  firstPlaying: boolean;
}) {
  const n = videos.length;
  const refs = React.useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([
    null,
    null,
  ]);
  const transitioning = React.useRef(false);

  const [slotClip, setSlotClip] = React.useState<[number, number]>([0, 1]);
  const [frontLayer, setFrontLayer] = React.useState<0 | 1>(0);
  const [opacity, setOpacity] = React.useState<[number, number]>([1, 0]);
  const [z, setZ] = React.useState<[number, number]>([2, 1]);

  const refCallbacks = React.useMemo(
    () =>
      [
        (el: HTMLVideoElement | null) => {
          refs.current[0] = el;
          if (el) {
            el.muted = true;
            el.defaultMuted = true;
          }
        },
        (el: HTMLVideoElement | null) => {
          refs.current[1] = el;
          if (el) {
            el.muted = true;
            el.defaultMuted = true;
          }
        },
      ] as const,
    []
  );

  const src0 = videos[slotClip[0] % n];
  const src1 = videos[slotClip[1] % n];

  React.useLayoutEffect(() => {
    const v = refs.current[0];
    if (!v) return;
    const kick = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.play().catch(() => {});
    };
    if (v.readyState >= 2) {
      kick();
      return;
    }
    const onReady = () => kick();
    v.addEventListener("loadeddata", onReady, { once: true });
    v.addEventListener("canplay", onReady, { once: true });
    const raf = requestAnimationFrame(() => {
      if (v.readyState >= 2) kick();
    });
    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
    };
  }, []);

  const finishCrossfade = React.useCallback(
    (fromLayer: 0 | 1) => {
      const toLayer = (1 - fromLayer) as 0 | 1;
      const vFrom = refs.current[fromLayer];
      if (vFrom) {
        vFrom.pause();
        vFrom.currentTime = 0;
      }
      setSlotClip((prev) => {
        const next: [number, number] = [prev[0], prev[1]];
        next[fromLayer] = (prev[toLayer] + 1) % n;
        return next;
      });
      setFrontLayer(toLayer);
      setZ(toLayer === 0 ? [2, 1] : [1, 2]);
      setOpacity(toLayer === 0 ? [1, 0] : [0, 1]);
      transitioning.current = false;
    },
    [n]
  );

  const handleLayerEnded = React.useCallback(
    (layer: 0 | 1) => {
      if (layer !== frontLayer || transitioning.current) return;
      const incoming = (1 - layer) as 0 | 1;
      const vIn = refs.current[incoming];
      if (!vIn) return;

      transitioning.current = true;
      vIn.currentTime = 0;
      vIn.muted = true;

      const runFade = () => {
        if (incoming === 0) {
          setZ([3, 2]);
        } else {
          setZ([2, 3]);
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (incoming === 0) {
              setOpacity([1, 0]);
            } else {
              setOpacity([0, 1]);
            }
          });
        });
        window.setTimeout(() => {
          finishCrossfade(layer);
        }, CROSSFADE_MS);
      };

      const afterPlay = () => {
        if (typeof vIn.requestVideoFrameCallback === "function") {
          vIn.requestVideoFrameCallback(() => runFade());
        } else {
          runFade();
        }
      };

      const p = vIn.play();
      if (p !== undefined) {
        p.then(afterPlay).catch(() => {
          transitioning.current = false;
        });
      } else {
        afterPlay();
      }
    },
    [frontLayer, finishCrossfade]
  );

  const videoBaseClass =
    "absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out";

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={refCallbacks[0]}
          src={src0}
          className={videoBaseClass}
          style={{
            opacity: opacity[0],
            zIndex: z[0],
            transitionDuration: `${CROSSFADE_MS}ms`,
          }}
          muted
          playsInline
          preload="auto"
          loop={false}
          onPlaying={onFirstPlaying}
          onEnded={() => handleLayerEnded(0)}
          onError={onFirstPlaying}
        />
        <video
          ref={refCallbacks[1]}
          src={src1}
          className={videoBaseClass}
          style={{
            opacity: opacity[1],
            zIndex: z[1],
            transitionDuration: `${CROSSFADE_MS}ms`,
          }}
          muted
          playsInline
          preload="auto"
          loop={false}
          onPlaying={onFirstPlaying}
          onEnded={() => handleLayerEnded(1)}
          onError={onFirstPlaying}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[4]" />

      {!firstPlaying && (
        <div className="absolute inset-0 z-[5] flex items-center justify-center bg-black/30">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full px-4 py-6 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}
