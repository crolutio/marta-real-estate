"use client";

import Image from "next/image";
import { Award, Users, Globe, Languages } from "lucide-react";
import { AGENCY } from "@/lib/constants";
import { useTranslation } from "@/components/language-provider";

export function AboutPreview() {
  const { dict } = useTranslation();
  const a = dict.aboutPreview;
  return (
    <section data-animate="reveal" className="animate-reveal section-padding overflow-hidden bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-10 items-center">
          {/* Image Side */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-xs sm:max-w-sm">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/marta.jpg"
                alt={`${AGENCY.name} - Luxury Real Estate Specialist`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 384px"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-3 -right-3 bg-black text-white p-3 rounded-lg shadow-xl max-w-[180px] hidden md:block">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center">
                  <span className="block font-subtitle text-xl font-semibold text-white">
                    10+
                  </span>
                  <span className="text-[10px] leading-tight text-white/85">
                    {a.yearsExperience}
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-subtitle text-xl font-semibold text-white">
                    $2B+
                  </span>
                  <span className="text-[10px] leading-tight text-white/85">
                    {a.inTransactions}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 min-w-0 w-full">
            <div className="space-y-4">
              <p className="font-title text-base md:text-lg tracking-[0.16em] uppercase text-accent font-semibold">
                {a.eyebrow}
              </p>
              <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                {a.title}
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-editorial">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Languages className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                {a.languages}
              </span>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{a.topAgent}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{a.clients}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{a.globalNetwork}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
