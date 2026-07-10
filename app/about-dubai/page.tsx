import { Metadata } from "next";
import { AboutDubaiContent } from "./about-dubai-content";

export const metadata: Metadata = {
  title: "About Dubai",
  description: "Discover Dubai's luxury real estate market, premier developers, property insights, and key neighborhoods. Expert guidance for investors and residents.",
};

export default function AboutDubaiPage() {
  return <AboutDubaiContent />;
}
