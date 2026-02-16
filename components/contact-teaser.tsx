import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationCta } from "@/components/consultation-cta";

export function ContactTeaser() {
  return (
    <section data-animate="reveal" className="animate-reveal section-padding">
      <div className="container-narrow">
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <MessageSquare className="h-12 w-12 mx-auto text-accent mb-6" />
          
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-4">
            Ready to Find Your Dream Property?
          </h2>
          
          <p className="text-muted-foreground text-editorial max-w-xl mx-auto mb-8">
            Let&apos;s discuss your real estate goals. Whether you&apos;re buying, selling,
            or investing, I&apos;m here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta size="lg" />
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
