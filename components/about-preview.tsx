"use client";

import { Award, Users, Globe } from "lucide-react";
import { useTranslation } from "@/components/language-provider";

export function AboutPreview() {
  const { dict } = useTranslation();
  const a = dict.aboutPreview;
  return (
    <section data-animate="reveal" className="animate-reveal section-padding overflow-hidden bg-card">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="font-title text-base md:text-lg tracking-[0.16em] uppercase text-accent font-semibold">
              {a.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
              {a.title}
            </h2>
          </div>

          <div className="space-y-8">
            {a.sections.map((section, i) => (
              <div key={section.heading ?? i} className="space-y-4">
                {section.heading && (
                  <h3 className="font-subtitle text-2xl md:text-3xl font-semibold text-accent">
                    {section.heading}
                  </h3>
                )}
                <div className="space-y-4 text-muted-foreground text-editorial">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
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
    </section>
  );
}
