import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Globe, Languages, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENCY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section data-animate="reveal" className="animate-reveal section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/marta.jpg"
                alt={`${AGENCY.name} - Luxury Real Estate Specialist`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-xl max-w-[280px] hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="block font-serif text-3xl font-semibold text-accent">
                    10+
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-3xl font-semibold text-accent">
                    $2B+
                  </span>
                  <span className="text-sm text-muted-foreground">
                    In Transactions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base md:text-lg tracking-[0.16em] uppercase text-accent font-semibold">
                About {AGENCY.name}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                A Trusted Partner in Luxury Real Estate
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-editorial">
              <p>
                With over a decade of experience in Dubai&apos;s real estate market, Marta Duran has established herself as a trusted advisor to investors seeking strategic, high-value opportunities. Originally from Barcelona, she combines her real estate expertise with a Master of Laws (LL.M.) qualification to provide comprehensive guidance.
              </p>
              <p>
                Whether you&apos;re seeking a primary residence, vacation retreat, or investment opportunity, Marta offers exclusive access to Dubai&apos;s most coveted properties with a refined, strategic approach to real estate investment. You&apos;ll feel completely supported throughout your entire journey.
              </p>
            </div>

            {/* Languages and LinkedIn */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Speaks Spanish, English, and German
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={AGENCY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">Top 1% Agent</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">200+ Clients</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">Global Network</span>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
