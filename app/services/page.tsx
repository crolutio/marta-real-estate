import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, FileText, MapPin, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ConsultationCta } from "@/components/consultation-cta";
import { AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Comprehensive real estate services in Dubai including company setup, banking, visas, and fiscal advice. Expert guidance for investors and businesses.`,
};

const services = [
  {
    id: "company-setup",
    title: "Company Set Up in Dubai",
    icon: Building2,
    description: "Complete assistance with establishing your business presence in Dubai's free zones and mainland. From license selection to office setup, we guide you through every step of incorporating your company in the UAE.",
    features: [
      "Free zone and mainland company setup",
      "License selection and application",
      "Office space procurement",
      "Local sponsor and agent services",
      "Business banking account setup",
      "Legal and compliance support",
    ],
  },
  {
    id: "banking",
    title: "Opening a Local Bank Account in Dubai",
    icon: CreditCard,
    description: "Expert guidance through Dubai's banking system. We help you open corporate and personal bank accounts with leading UAE banks, ensuring smooth financial operations for your business or residence.",
    features: [
      "Corporate bank account setup",
      "Personal banking assistance",
      "Relationship management with UAE banks",
      "Account documentation support",
      "Online banking setup",
      "Multi-currency account options",
    ],
  },
  {
    id: "golden-visa",
    title: "Golden Visa / Residency Visa",
    icon: Users,
    description: "Navigate Dubai's residency options with confidence. Our team provides comprehensive support for Golden Visa applications, family visas, and other residency solutions tailored to your needs.",
    features: [
      "Golden Visa application assistance",
      "Family residency visas",
      "Investment-based residency",
      "Real estate ownership visas",
      "Document preparation and submission",
      "Application tracking and follow-up",
    ],
  },
  {
    id: "fiscal-advice",
    title: "Fiscal Advice",
    icon: FileText,
    description: "Professional tax and financial planning services for individuals and businesses in Dubai. We provide strategic advice on UAE tax obligations, offshore structures, and wealth management solutions.",
    features: [
      "UAE tax compliance and planning",
      "Offshore company structures",
      "Wealth management strategies",
      "Inheritance and succession planning",
      "Financial reporting requirements",
      "Tax optimization solutions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg tracking-[0.18em] uppercase text-accent font-semibold mb-4">
              Professional Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-display mb-6">
              Comprehensive Support for Dubai Investors
            </h1>
            <p className="text-lg text-muted-foreground text-editorial">
              Beyond luxury real estate, we provide end-to-end business and
              residency services to ensure your complete transition to Dubai is
              seamless, efficient, and successful.
            </p>
            <p className="text-muted-foreground/80 text-sm mt-4 font-medium">
              We&apos;ll guide you through every step of your Dubai journey, ensuring you feel supported and confident throughout the process.
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
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-serif text-xl">
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
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-display mb-4">
              Our Process
            </h2>
            <p className="text-primary-foreground/80 text-editorial max-w-2xl mx-auto">
              We follow a structured, transparent process to ensure your Dubai
              journey is smooth and successful from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                description:
                  "Free consultation to understand your goals and requirements",
              },
              {
                title: "Strategy Development",
                description:
                  "Customized plan tailored to your specific needs and timeline",
              },
              {
                title: "Implementation",
                description:
                  "Step-by-step execution with regular progress updates",
              },
              {
                title: "Ongoing Support",
                description:
                  "Continued assistance and guidance as your Dubai presence grows",
              },
            ].map((step, index, arr) => (
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
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to Start Your Dubai Journey?
          </h2>
          <p className="text-muted-foreground text-editorial mb-8 max-w-xl mx-auto">
            Whether you need real estate services or comprehensive business
            setup support, our team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta size="lg" />
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}