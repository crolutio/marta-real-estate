"use client";

import Link from "next/link";
import { ArrowRight, Building2, FileText, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConsultationCta } from "@/components/consultation-cta";
import { useTranslation } from "@/components/language-provider";

const serviceIcons = [Building2, CreditCard, Users, FileText];

export function ServicesContent() {
  const { dict } = useTranslation();
  const s = dict.servicesPage;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="font-title text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              {s.hero.eyebrow}
            </p>
            <h1 className="font-subtitle text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              {s.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground text-editorial">
              {s.hero.body}
            </p>
            <p className="text-muted-foreground/80 text-sm mt-4 font-medium">
              {s.hero.note}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        data-animate="reveal"
        className="animate-reveal pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32"
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {s.services.map((service, i) => {
              const Icon = serviceIcons[i] ?? Building2;
              return (
                <Card key={service.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="font-subtitle text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-editorial">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-4">
              {s.process.title}
            </h2>
            <p className="text-primary-foreground/80 text-editorial max-w-2xl mx-auto">
              {s.process.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {s.process.steps.map((step, index, arr) => (
              <div key={step.title} className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-primary-foreground/70">{step.description}</p>
                {index < arr.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-7 top-8 h-6 w-6 text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {s.cta.title}
          </h2>
          <p className="text-muted-foreground text-editorial mb-8 max-w-xl mx-auto">
            {s.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta size="lg" />
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                {s.cta.contactUs}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
