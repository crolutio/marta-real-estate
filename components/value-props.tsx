import { Shield, TrendingUp, Lock, Compass } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  Lock: Lock,
  Compass: Compass,
};

export function ValueProps() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-display">
            The Pillars of Our Service
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 stagger-children">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap];
            return (
              <div
                key={prop.title}
                className="text-center p-8 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
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
  );
}
