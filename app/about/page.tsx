import { Metadata } from "next";
import { AGENCY } from "@/lib/constants";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${AGENCY.fullName} - A trusted partner in luxury real estate with over 15 years of experience serving high-net-worth individuals worldwide.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
