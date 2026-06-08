import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { ValueProps } from "@/components/value-props";
import { Testimonials } from "@/components/testimonials";
import { ContactTeaser } from "@/components/contact-teaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <ValueProps />
      <Testimonials />
      <ContactTeaser />
    </>
  );
}
