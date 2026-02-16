import { Metadata } from "next";
import { AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${AGENCY.fullName}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-display mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section data-animate="reveal" className="animate-reveal section-padding">
        <div className="container-narrow">
          <div className="prose prose-gray max-w-none">
            <p className="lead text-lg text-muted-foreground">
              At {AGENCY.fullName}, we are committed to protecting your privacy
              and personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in a variety of ways,
              including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone
                number, and other contact information you provide when
                contacting us or requesting information about properties.
              </li>
              <li>
                <strong>Property Preferences:</strong> Information about your
                real estate interests, budget, and requirements.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website, including your IP address, browser type,
                and pages visited.
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you property listings that match your criteria</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted partners who
              assist us in operating our business, such as property developers
              or legal professionals, but only when necessary to fulfill your
              requests and with your consent.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of marketing communications</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground">
              Our website may use cookies and similar tracking technologies to
              enhance your experience. You can set your browser to refuse
              cookies, but this may limit some features of our website.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-secondary/30 rounded-lg">
              <p className="font-semibold">{AGENCY.fullName}</p>
              <p className="text-muted-foreground">
                {AGENCY.address.line1}
                <br />
                {AGENCY.address.city}, {AGENCY.address.state} {AGENCY.address.zip}
                <br />
                Email: {AGENCY.email}
                <br />
                Phone: {AGENCY.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
