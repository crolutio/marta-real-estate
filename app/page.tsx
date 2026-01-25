import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { AboutPreview } from "@/components/about-preview";
import { ValueProps } from "@/components/value-props";
import { Testimonials } from "@/components/testimonials";
import { ContactTeaser } from "@/components/contact-teaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutPreview />
      <ValueProps />
      <Testimonials />
      <ContactTeaser />
    </>
  );
}
