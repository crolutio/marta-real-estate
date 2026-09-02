"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

interface HeroVideoBackgroundProps {
  videos: string[];
  children: React.ReactNode;
  className?: string;
  /** Min height e.g. min-h-screen or min-h-[70vh] */
  minHeight?: string;
  /**
   * When true (default), two-layer crossfade between clips — best for long homepage reels.
   * When false, two-layer hard cuts (no fade), which avoids blend artifacts on some videos.
   */
  crossfade?: boolean;
  /**
   * Vertical placement of hero content:
   * - "center" (default): centered in the viewport at every breakpoint
   * - "start": pinned to the top at every breakpoint
   * - "top-mobile": pinned to the top on mobile, centered on `md+`
   */
  contentAlign?: ContentAlign;
  /**
   * Still shown until the first video frame decodes, and left in place if
   * decoding never succeeds. Without it a codec failure leaves an empty
   * section — which is how the hero presented on some Apple devices.
   */
  poster?: string;
}

type ContentAlign = "center" | "start" | "top-mobile";

const CONTENT_SHELL =
  "relative z-10 flex-1 flex min-h-0 w-full px-4 sm:px-6 overflow-y-auto";

function contentShellClass(contentAlign: ContentAlign) {
  if (contentAlign === "start") {
    return `${CONTENT_SHELL} items-start justify-start pt-8 md:pt-12 lg:pt-16 pb-8`;
  }
  if (contentAlign === "top-mobile") {
    return `${CONTENT_SHELL} items-start justify-center pt-8 pb-8 md:items-center md:pt-0 md:py-6`;
  }
  return `${CONTENT_SHELL} items-center justify-center py-6`;
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
  crossfade = true,
  contentAlign = "center",
  poster,
}: HeroVideoBackgroundProps) {
  const n = videos.length;
  const noop = React.useCallback(() => {}, []);

  if (!n) return null;

  if (n === 1) {
    return (
      <SingleClipHero
        src={videos[0]}
        minHeight={minHeight}
        className={className}
        contentAlign={contentAlign}
        poster={poster}
        onFirstPlaying={noop}
      >
        {children}
      </SingleClipHero>
    );
  }

  if (!crossfade) {
    return (
      <CutSwitchHero
        videos={videos}
        minHeight={minHeight}
        className={className}
        contentAlign={contentAlign}
        poster={poster}
        onFirstPlaying={noop}
      >
        {children}
      </CutSwitchHero>
    );
  }

  return (
    <CrossfadeHero
      videos={videos}
      minHeight={minHeight}
      className={className}
      contentAlign={contentAlign}
      poster={poster}
      onFirstPlaying={noop}
    >
      {children}
    </CrossfadeHero>
  );
}

function SingleClipHero({
  src,
  minHeight,
  className,
  contentAlign,
  poster,
  children,
  onFirstPlaying,
}: {
  src: string;
  minHeight: string;
  className: string;
  contentAlign: ContentAlign;
  poster?: string;
  children: React.ReactNode;
  onFirstPlaying: () => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [buffering, setBuffering] = React.useState(true);
  // Once a layer errors it is done for good; a later `stalled`/`waiting` from
  // the dead element must not bring the spinner back over the poster.
  const [failed, setFailed] = React.useState(false);

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
        poster={poster}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        loop
        onPlaying={() => {
          onFirstPlaying();
          setBuffering(false);
        }}
        onCanPlay={() => setBuffering(false)}
        onTimeUpdate={() => setBuffering(false)}
        onWaiting={() => !failed && setBuffering(true)}
        onStalled={() => !failed && setBuffering(true)}
        onError={() => {
          onFirstPlaying();
          setFailed(true);
          setBuffering(false);
        }}
      />
      {buffering && !failed && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-transparent pointer-events-none">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}
      <div className={contentShellClass(contentAlign)}>
        {children}
      </div>
    </section>
  );
}

/** Two layers with instant cut (no opacity blend). */
function CutSwitchHero({
  videos,
  minHeight,
  className,
  contentAlign,
  poster,
  children,
  onFirstPlaying,
}: {
  videos: string[];
  minHeight: string;
  className: string;
  contentAlign: ContentAlign;
  poster?: string;
  children: React.ReactNode;
  onFirstPlaying: () => void;
}) {
  const n = videos.length;
  const refs = React.useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([
    null,
    null,
  ]);
  const transitioning = React.useRef(false);
  const [slotClip, setSlotClip] = React.useState<[number, number]>([0, 1]);
  const [frontLayer, setFrontLayer] = React.useState<0 | 1>(0);
  const [z, setZ] = React.useState<[number, number]>([2, 1]);
  const [buffering, setBuffering] = React.useState(true);
  // Per-layer terminal failure. A dead layer's later `stalled`/`waiting`
  // events must not re-show the spinner over the poster.
  const [failed, setFailed] = React.useState<[boolean, boolean]>([false, false]);

  // Spinner reflects only the visible (front) layer's buffering state.
  const handlePlaying = React.useCallback(
    (layer: 0 | 1) => {
      onFirstPlaying();
      if (layer === frontLayer) setBuffering(false);
    },
    [onFirstPlaying, frontLayer]
  );
  const handleReady = React.useCallback(
    (layer: 0 | 1) => {
      if (layer === frontLayer) setBuffering(false);
    },
    [frontLayer]
  );
  const handleWaiting = React.useCallback(
    (layer: 0 | 1) => {
      if (layer === frontLayer && !failed[layer]) setBuffering(true);
    },
    [frontLayer, failed]
  );
  const handleError = React.useCallback((layer: 0 | 1) => {
    setFailed((prev) => {
      const next: [boolean, boolean] = [prev[0], prev[1]];
      next[layer] = true;
      return next;
    });
    setBuffering(false);
  }, []);

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

  // Advance from the just-ended front layer to the hidden layer with an instant
  // cut. The commit (z/front/slot swap) runs on the first presented frame of the
  // incoming clip, with timeout fallbacks so playback can never get permanently
  // stuck if `requestVideoFrameCallback` or the `play()` promise never fire.
  const advance = React.useCallback(
    (fromLayer: 0 | 1) => {
      if (fromLayer !== frontLayer || transitioning.current) return;
      const incoming = (1 - fromLayer) as 0 | 1;
      const vIn = refs.current[incoming];
      const vOut = refs.current[fromLayer];
      if (!vIn || !vOut) return;

      transitioning.current = true;
      vIn.currentTime = 0;

      let committed = false;
      const commit = () => {
        if (committed) return;
        committed = true;
        setZ(incoming === 0 ? [3, 2] : [2, 3]);
        setFrontLayer(incoming);
        vOut.pause();
        vOut.currentTime = 0;
        setSlotClip((prev) =>
          fromLayer === 0
            ? [((prev[1] + 1) % n) as number, prev[1]]
            : [prev[0], ((prev[0] + 1) % n) as number]
        );
        transitioning.current = false;
      };

      const scheduleCommit = () => {
        if (typeof vIn.requestVideoFrameCallback === "function") {
          vIn.requestVideoFrameCallback(() => commit());
        }
        // Fallback: commit even if the frame callback never fires.
        window.setTimeout(commit, 150);
      };

      const playAndCommit = () => {
        const p = vIn.play();
        if (p !== undefined) {
          p.then(scheduleCommit).catch(scheduleCommit);
        } else {
          scheduleCommit();
        }
        // Hard fallback in case the play() promise never settles.
        window.setTimeout(scheduleCommit, 300);
      };

      // Only cut once the incoming clip is buffered enough to play through,
      // otherwise the switch would reveal a stalling video (visible stutter).
      if (vIn.readyState >= 3) {
        playAndCommit();
      } else {
        // Genuine buffering wait — show the spinner until the next clip is ready.
        setBuffering(true);
        let started = false;
        const start = () => {
          if (started) return;
          started = true;
          vIn.removeEventListener("canplay", start);
          vIn.removeEventListener("canplaythrough", start);
          playAndCommit();
        };
        vIn.addEventListener("canplay", start, { once: true });
        vIn.addEventListener("canplaythrough", start, { once: true });
        // Safety: don't wait forever if readiness events never fire.
        window.setTimeout(start, 1500);
      }
    },
    [frontLayer, n]
  );

  return (
    <section
      className={`relative flex flex-col overflow-hidden ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={refCallbacks[0]}
          src={src0}
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: z[0] }}
          muted
          playsInline
          preload="auto"
          autoPlay
          loop={false}
          onPlaying={() => handlePlaying(0)}
          onCanPlay={() => handleReady(0)}
          onTimeUpdate={() => handleReady(0)}
          onWaiting={() => handleWaiting(0)}
          onStalled={() => handleWaiting(0)}
          onEnded={() => advance(0)}
          onError={() => handleError(0)}
        />
        <video
          ref={refCallbacks[1]}
          src={src1}
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: z[1] }}
          muted
          playsInline
          preload="auto"
          loop={false}
          onPlaying={() => handlePlaying(1)}
          onCanPlay={() => handleReady(1)}
          onTimeUpdate={() => handleReady(1)}
          onWaiting={() => handleWaiting(1)}
          onStalled={() => handleWaiting(1)}
          onEnded={() => advance(1)}
          onError={() => handleError(1)}
        />
      </div>
      {buffering && !failed[frontLayer] && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-transparent pointer-events-none">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}
      <div className={contentShellClass(contentAlign)}>
        {children}
      </div>
    </section>
  );
}

function CrossfadeHero({
  videos,
  minHeight,
  className,
  contentAlign,
  poster,
  children,
  onFirstPlaying,
}: {
  videos: string[];
  minHeight: string;
  className: string;
  contentAlign: ContentAlign;
  poster?: string;
  children: React.ReactNode;
  onFirstPlaying: () => void;
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
  const [buffering, setBuffering] = React.useState(true);
  // Per-layer terminal failure. A dead layer's later `stalled`/`waiting`
  // events must not re-show the spinner over the poster.
  const [failed, setFailed] = React.useState<[boolean, boolean]>([false, false]);

  // Spinner reflects only the visible (front) layer's buffering state.
  const handlePlaying = React.useCallback(
    (layer: 0 | 1) => {
      onFirstPlaying();
      if (layer === frontLayer) setBuffering(false);
    },
    [onFirstPlaying, frontLayer]
  );
  const handleReady = React.useCallback(
    (layer: 0 | 1) => {
      if (layer === frontLayer) setBuffering(false);
    },
    [frontLayer]
  );
  const handleWaiting = React.useCallback(
    (layer: 0 | 1) => {
      if (layer === frontLayer && !failed[layer]) setBuffering(true);
    },
    [frontLayer, failed]
  );
  const handleError = React.useCallback((layer: 0 | 1) => {
    setFailed((prev) => {
      const next: [boolean, boolean] = [prev[0], prev[1]];
      next[layer] = true;
      return next;
    });
    setBuffering(false);
  }, []);

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
          poster={poster}
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
          onPlaying={() => handlePlaying(0)}
          onCanPlay={() => handleReady(0)}
          onTimeUpdate={() => handleReady(0)}
          onWaiting={() => handleWaiting(0)}
          onStalled={() => handleWaiting(0)}
          onEnded={() => handleLayerEnded(0)}
          onError={() => handleError(0)}
        />
        <video
          ref={refCallbacks[1]}
          src={src1}
          poster={poster}
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
          onPlaying={() => handlePlaying(1)}
          onCanPlay={() => handleReady(1)}
          onTimeUpdate={() => handleReady(1)}
          onWaiting={() => handleWaiting(1)}
          onStalled={() => handleWaiting(1)}
          onEnded={() => handleLayerEnded(1)}
          onError={() => handleError(1)}
        />
      </div>


      {buffering && !failed[frontLayer] && (
        <div className="absolute inset-0 z-[5] flex items-center justify-center bg-transparent pointer-events-none">
          <Loader2 className="h-12 w-12 text-white animate-spin" aria-hidden />
        </div>
      )}

      <div className={contentShellClass(contentAlign)}>
        {children}
      </div>
    </section>
  );
}
