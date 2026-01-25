import { Metadata } from "next";
import { AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${AGENCY.fullName}. Please read these terms carefully before using our services.`,
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-display mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-gray max-w-none">
            <p className="lead text-lg text-muted-foreground">
              Welcome to {AGENCY.fullName}. By accessing or using our website
              and services, you agree to be bound by these Terms of Service.
              Please read them carefully.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provisions of this agreement. If you do not
              agree to abide by these terms, please do not use this website.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              2. Services Description
            </h2>
            <p className="text-muted-foreground">
              {AGENCY.fullName} provides luxury real estate brokerage services,
              including but not limited to property sales, purchases, and
              investment advisory. All services are subject to availability and
              applicable laws and regulations.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              3. Property Information
            </h2>
            <p className="text-muted-foreground">
              While we strive to ensure all property information on our website
              is accurate and up-to-date, we do not warrant the completeness or
              accuracy of this information. Property details, including prices,
              specifications, and availability, are subject to change without
              notice. All measurements and descriptions are approximate.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              4. User Conduct
            </h2>
            <p className="text-muted-foreground mb-4">
              When using our website and services, you agree not to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Provide false or misleading information</li>
              <li>
                Use the website for any unlawful purpose or in violation of any
                applicable laws
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or data
              </li>
              <li>
                Interfere with or disrupt the website&apos;s operation
              </li>
              <li>
                Copy, reproduce, or distribute our content without permission
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of {AGENCY.fullName} or its
              content suppliers and is protected by intellectual property laws.
              You may not use, reproduce, or distribute any content without our
              express written permission.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              {AGENCY.fullName} shall not be liable for any direct, indirect,
              incidental, special, or consequential damages resulting from the
              use or inability to use our website or services. We are not
              responsible for any decisions made based on the information
              provided on this website.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. These links
              are provided for your convenience only, and we do not endorse or
              assume responsibility for the content or practices of any
              third-party sites.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              8. Confidentiality
            </h2>
            <p className="text-muted-foreground">
              We are committed to maintaining the confidentiality of our
              clients. Information shared with us during consultations or
              transactions will be treated as confidential and will not be
              disclosed to third parties without consent, except as required by
              law.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              9. Modifications to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the website after any changes constitutes
              acceptance of the new terms.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              10. Governing Law
            </h2>
            <p className="text-muted-foreground">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the jurisdiction in which{" "}
              {AGENCY.fullName} operates, without regard to its conflict of law
              provisions.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-12 mb-4">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please
              contact us:
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
