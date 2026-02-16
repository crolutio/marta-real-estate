import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section data-animate="reveal" className="animate-reveal section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-white text-xl md:text-2xl tracking-[0.12em] uppercase font-semibold mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
            Trusted by Discerning Clients Worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3 stagger-children">
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-primary-foreground/5 border-primary-foreground/10"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent mb-6" />
                <blockquote className="text-lg text-primary-foreground/90 text-editorial mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-primary-foreground/10 pt-6">
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.title} · {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
