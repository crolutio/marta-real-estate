import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationCta } from "@/components/consultation-cta";
import { AGENCY } from "@/lib/constants";

export function Hero() {
  return (
    <section data-animate="reveal" className="animate-reveal relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-white pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Image
            src="/logo-big.webp"
            alt={`${AGENCY.fullName} logo`}
            width={1260}
            height={360}
            className="mx-auto h-60 md:h-72 w-auto object-contain"
            priority
          />

          {/* Eyebrow */}
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80">
            Spaces Curated for Exceptional Living
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-display">
            Find the Place Where You
            <span className="block mt-2 text-white">Belong</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-editorial">
            We specialize in high-end homes for clients seeking modern luxury and comfort.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1a1a1a] hover:bg-accent hover:text-accent-foreground text-base px-8"
            >
              <Link href="/properties">
                View Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
