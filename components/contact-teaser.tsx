"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationCta } from "@/components/consultation-cta";
import { useTranslation } from "@/components/language-provider";

export function ContactTeaser() {
  const { dict } = useTranslation();
  return (
    <section data-animate="reveal" className="animate-reveal section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="bg-card border border-border shadow-sm rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <MessageSquare className="h-12 w-12 mx-auto text-accent mb-6" />
          
          <h2 className="font-subtitle text-3xl md:text-4xl font-semibold text-display mb-4">
            {dict.home.contactTeaser.title}
          </h2>
          
          <p className="text-muted-foreground text-editorial max-w-xl mx-auto mb-8">
            {dict.home.contactTeaser.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta size="lg" className="bg-accent text-accent-foreground hover:bg-black hover:text-white" />
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-black hover:text-white"
            >
              <Link href="/contact">
                {dict.home.contactTeaser.contactPage}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
