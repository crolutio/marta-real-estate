"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
  images: string[];
  title: string;
  video?: string;
}

export function PropertyGallery({ images, title, video }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [dialogMediaIndex, setDialogMediaIndex] = React.useState(0);

  const hasVideo = !!video;
  const hasImages = images.length > 0;
  const totalSlides = hasVideo ? 1 + images.length : images.length;
  const isVideoSlide = hasVideo && currentIndex === 0;
  const currentImageSrc = hasVideo
    ? images[currentIndex - 1]
    : images[currentIndex];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) setDialogMediaIndex(currentIndex);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const dialogGoPrev = () => {
    setDialogMediaIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };
  const dialogGoNext = () => {
    setDialogMediaIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const dialogIsVideoSlide = hasVideo && dialogMediaIndex === 0;
  const dialogImageSrc = hasVideo
    ? images[dialogMediaIndex - 1]
    : images[dialogMediaIndex];
  const fullscreenDialog = (
    <DialogContent
      showCloseButton={false}
      className="p-0 bg-background/100 border-none sm:max-w-[92vw] sm:max-h-[92vh] sm:w-[92vw] sm:h-[92vh] w-[92vw] h-[92vh] max-w-[92vw] max-h-[92vh]"
      style={{
        width: "92vw",
        height: "92vh",
        maxWidth: "92vw",
        maxHeight: "92vh",
      }}
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <DialogTitle className="sr-only">{title} Gallery</DialogTitle>
      <div className="relative w-full h-full min-h-0 p-3 md:p-5">
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 z-20 h-11 w-11 rounded-full bg-black/55 hover:bg-black/70 text-white hover:scale-110 hover:translate-y-0 active:scale-100"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogClose>
        <div className="relative mx-auto h-full w-full max-w-[1400px]">
          {dialogIsVideoSlide ? (
            <video
              src={video}
              controls
              className="w-full h-full object-contain animate-fade-in"
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={dialogImageSrc}
              src={dialogImageSrc}
              alt={`${title} - Image ${dialogMediaIndex + (hasVideo ? 0 : 1)}`}
              fill
              className="object-contain animate-fade-in"
              sizes="92vw"
            />
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/55 hover:bg-black/70 text-white hover:scale-110 hover:-translate-y-1/2 active:scale-100 active:-translate-y-1/2"
          onClick={dialogGoPrev}
          aria-label="Previous media"
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/55 hover:bg-black/70 text-white hover:scale-110 hover:-translate-y-1/2 active:scale-100 active:-translate-y-1/2"
          onClick={dialogGoNext}
          aria-label="Next media"
        >
          <ChevronRight className="h-7 w-7" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/55 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          {dialogMediaIndex + 1} / {totalSlides}
        </div>
      </div>
    </DialogContent>
  );

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") dialogGoPrev();
      if (e.key === "ArrowRight") dialogGoNext();
    },
    [isOpen, images.length]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Video only, no images
  if (hasVideo && !hasImages) {
    return (
      <div className="space-y-4">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-black">
          <video
            src={video}
            controls
            className="w-full h-full object-contain"
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  if (!hasImages) return null;

  // Video first, then images (or images only)
  return (
    <div className="space-y-4">
      {/* Main display: video or image */}
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-black">
          {isVideoSlide ? (
            <>
              <video
                src={video}
                controls
                className="w-full h-full object-contain"
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              <button
                type="button"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/45 p-2 text-white transition-colors hover:bg-black/65"
                onClick={() => {
                  setDialogMediaIndex(currentIndex);
                  setIsOpen(true);
                }}
                aria-label="Open fullscreen"
              >
                <Expand className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="relative w-full h-full group cursor-pointer"
                >
                  <Image
                    key={currentImageSrc}
                    src={currentImageSrc}
                    alt={`${title} - Image ${currentIndex}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 animate-fade-in"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority={currentIndex === (hasVideo ? 1 : 0)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Expand className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </DialogTrigger>
            </>
          )}
          {fullscreenDialog}

          {/* Navigation arrows and counter on both video and photos when multiple slides */}
          {totalSlides > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 hover:scale-110 hover:-translate-y-1/2 active:scale-100 active:-translate-y-1/2"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToPrevious(); }}
                aria-label="Previous"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 hover:scale-110 hover:-translate-y-1/2 active:scale-100 active:-translate-y-1/2"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToNext(); }}
                aria-label="Next"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-10 pointer-events-none">
                {currentIndex + 1} / {totalSlides}
              </div>
            </>
          )}
        </div>
      </Dialog>

      {/* Thumbnails: video first (with poster), then images */}
      {totalSlides > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {hasVideo && (
            <button
              type="button"
              onClick={() => setCurrentIndex(0)}
              className={cn(
                "relative aspect-[4/3] rounded-md overflow-hidden transition-all",
                currentIndex === 0
                  ? "ring-2 ring-accent ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              )}
              aria-label="View video"
            >
              <Image
                src={images[0]}
                alt={`${title} - Video`}
                fill
                className="object-cover"
                sizes="150px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </button>
          )}
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(hasVideo ? index + 1 : index)}
              className={cn(
                "relative aspect-[4/3] rounded-md overflow-hidden transition-all",
                (hasVideo ? index + 1 : index) === currentIndex
                  ? "ring-2 ring-accent ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="150px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
