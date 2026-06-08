import Image from "next/image";
import { Award, Users, Globe, Languages } from "lucide-react";
import { AGENCY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section data-animate="reveal" className="animate-reveal section-padding overflow-hidden bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-lg shadow-xl max-w-[220px] hidden md:block">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <span className="block font-subtitle text-2xl font-semibold text-white">
                    10+
                  </span>
                  <span className="text-xs text-white/85">
                    Years Experience
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-subtitle text-2xl font-semibold text-white">
                    $2B+
                  </span>
                  <span className="text-xs text-white/85">
                    In Transactions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-title text-base md:text-lg tracking-[0.16em] uppercase text-accent font-semibold">
                About {AGENCY.name}
              </p>
              <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
                A Trusted Partner in Luxury Real Estate
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-editorial">
              <p>
                Marta Duran is the CEO and owner of the company. With over a decade of experience in Dubai&apos;s real estate market, she has established herself as a trusted advisor to investors seeking strategic, high-value opportunities. She combines her real estate expertise with a Master of Laws (LL.M.) qualification to provide comprehensive guidance as your Dubai expert.
              </p>
              <p>
                Whether you&apos;re seeking a primary residence, vacation retreat, or investment opportunity, Marta offers exclusive access to Dubai&apos;s most coveted properties with a refined, strategic approach to real estate investment. You&apos;ll feel completely supported throughout your entire journey.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Languages className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Speaks Spanish, English, and German
              </span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
