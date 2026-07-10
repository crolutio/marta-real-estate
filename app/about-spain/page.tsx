import { Metadata } from "next";
import { AboutSpainContent } from "./about-spain-content";

export const metadata: Metadata = {
  title: "About Spain",
  description:
    "Luxury real estate in Spain: Barcelona markets, waterfront districts, market context, and how we advise international buyers.",
};

export default function AboutSpainPage() {
  return <AboutSpainContent />;
}
