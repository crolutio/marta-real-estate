import { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description: `Comprehensive real estate services in Dubai including company setup, banking, visas, and fiscal advice. Expert guidance for investors and businesses.`,
};

export default function ServicesPage() {
  return <ServicesContent />;
}
