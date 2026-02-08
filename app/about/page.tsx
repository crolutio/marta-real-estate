import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Lock,
  Compass,
  Linkedin,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ConsultationCta } from "@/components/consultation-cta";
import { AGENCY, VALUE_PROPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${AGENCY.fullName} - A trusted partner in luxury real estate with over 15 years of experience serving high-net-worth individuals worldwide.`,
};

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  Lock: Lock,
  Compass: Compass,
};

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "$2B+", label: "In Transactions" },
  { value: "200+", label: "Clients Served" },
  { value: "50+", label: "Countries" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
              About {AGENCY.name}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              A Legacy of Excellence in Luxury Real Estate
            </h1>
            <p className="text-lg text-white/90 text-editorial">
              For over 10 years, I&apos;ve helped clients navigate the
              world&apos;s most prestigious real estate markets with discretion,
              expertise, and unwavering commitment to their success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-serif text-4xl md:text-5xl font-semibold text-accent">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-primary-foreground/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                  alt={AGENCY.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-accent rounded-lg -z-10 hidden md:block" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
                  Marta's Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
                  Passion Meets Expertise
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-editorial">
                <p>
                  With over a decade of experience in Dubai&apos;s real estate market, Marta Duran has established herself as a trusted advisor to investors seeking strategic, high-value opportunities. Originally from Barcelona—where she was already one of the most reputable real estate brokers - she has worked with the region&apos;s most renowned developers and leading real estate firms, gaining invaluable expertise in luxury properties and off-market investments.
                </p>
                <p>
                  In addition to her real estate background, Marta is a qualified lawyer with a Master of Laws (LL.M.), bringing a rigorous, detail-driven perspective to every transaction. This legal foundation strengthens her ability to protect clients&apos; interests, assess risk with precision, and structure acquisitions with clarity and confidence - particularly in complex, high-stakes deals.
                </p>
                <p>
                  Throughout her career, Marta has built a reputation for market intelligence, discretion, and a meticulous approach to portfolio curation. Her ability to navigate market cycles with precision has enabled her clients to optimize returns and build enduring wealth.
                </p>
                <p>
                  Driven by a vision to elevate the real estate experience, she founded Marta Duran Realty - a firm that reflects her commitment to personalized service, integrity, and a results-driven mindset. Under her leadership, Marta Duran Realty stands as a trusted partner for discerning investors, offering exclusive access to Dubai&apos;s most coveted properties and delivering a refined, highly strategic approach to real estate investment.
                </p>
              </div>

              {/* Languages and LinkedIn */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
              Marta's Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
              Principles That Guide Every Transaction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPS.map((prop) => {
              const Icon = iconMap[prop.icon as keyof typeof iconMap];
              return (
                <div
                  key={prop.title}
                  className="bg-card p-8 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-editorial">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working with Investors */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
                  For Investors
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display">
                  Strategic Real Estate Investment Guidance
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-editorial">
                <p>
                  For high-net-worth individuals and family offices seeking to
                  build or optimize their real estate portfolios, I offer
                  comprehensive investment guidance backed by deep market
                  knowledge and global connections.
                </p>
                <p>
                  My approach goes beyond finding properties. I analyze market
                  trends, evaluate risk factors, assess potential returns, and
                  provide strategic recommendations aligned with your overall
                  wealth objectives.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Portfolio diversification strategies",
                  "Market timing and opportunity identification",
                  "Due diligence and risk assessment",
                  "Access to off-market opportunities",
                  "Coordination with legal and tax advisors",
                ].map((item) => (
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
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop"
                  alt="Luxury property investment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 text-editorial mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or investing, I&apos;m here to guide
            you every step of the way. Let&apos;s discuss your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
