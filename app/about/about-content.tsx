"use client";

import Image from "next/image";
import { Shield, TrendingUp, Lock, Compass, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AboutPreview } from "@/components/about-preview";
import { ConsultationCta } from "@/components/consultation-cta";
import { VALUE_PROPS } from "@/lib/constants";
import { useTranslation } from "@/components/language-provider";

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  Lock: Lock,
  Compass: Compass,
};

export function AboutContent() {
  const { dict } = useTranslation();
  const a = dict.about;
  const valueItems = dict.home.valueProps.items;
  const stats = [
    { value: "10+", label: a.stats.yearsExperience },
    { value: "$2B+", label: a.stats.inTransactions },
    { value: "200+", label: a.stats.clientsServed },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative container-wide">
          <div className="max-w-2xl text-white">
            <p className="font-title text-base md:text-lg tracking-[0.16em] uppercase text-white font-semibold mb-4">
              {a.hero.eyebrow}
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              {a.hero.title}
            </h1>
            <p className="text-lg text-white/90 text-editorial">{a.hero.body}</p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section data-animate="reveal" className="animate-reveal bg-accent text-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-subtitle text-4xl md:text-5xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-white/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutPreview />

      {/* Story Section */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-4">
              <p className="font-title text-base md:text-lg tracking-[0.16em] uppercase text-accent font-semibold">
                {a.story.eyebrow}
              </p>
              <h2 className="font-subtitle text-4xl md:text-5xl font-semibold text-accent text-display">
                {a.story.title}
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-editorial">
              {a.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Languages className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">{a.languages}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {a.values.eyebrow}
            </p>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
              {a.values.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((prop, i) => {
              const Icon = iconMap[prop.icon as keyof typeof iconMap];
              const copy = valueItems[i] ?? { title: prop.title, description: prop.description };
              return (
                <Card key={prop.icon} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-subtitle font-semibold mb-2">{copy.title}</h3>
                    <p className="text-muted-foreground text-editorial">
                      {copy.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working with Investors */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold">
                  {a.investors.eyebrow}
                </p>
                <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display">
                  {a.investors.title}
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-editorial">
                {a.investors.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <ul className="space-y-3">
                {a.investors.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <ConsultationCta size="lg" />
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/dubai-skyline.jpg"
                  alt="Dubai skyline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
