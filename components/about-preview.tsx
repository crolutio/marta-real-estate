import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENCY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
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
                    15+
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
              <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
                About {AGENCY.name}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                A Trusted Partner in Luxury Real Estate
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-editorial">
              <p>
                With over 15 years of experience in the luxury real estate market,
                I have built a reputation for discretion, expertise, and
                exceptional results. My approach is deeply personal—I take the
                time to understand your vision and work tirelessly to find
                properties that exceed your expectations.
              </p>
              <p>
                Whether you&apos;re seeking a primary residence, a vacation retreat,
                or an investment opportunity, I provide the guidance and insight
                you need to make informed decisions in the world&apos;s most
                prestigious markets.
              </p>
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
