import type { Metadata } from "next";
import { AGENCY } from "@/lib/constants";
import { InvestContent } from "./invest-content";

export const metadata: Metadata = {
  title: "Invest",
  description: `Invest in Dubai with ${AGENCY.fullName}. Estimated returns and multilingual support from our Dubai-based team.`,
};

export default function InvestPage() {
  return <InvestContent />;
}
