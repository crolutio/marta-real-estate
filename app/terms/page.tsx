import { Metadata } from "next";
import { AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${AGENCY.fullName}. Please read these terms carefully before using our website.`,
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-subtitle text-4xl md:text-5xl font-semibold text-display mb-4">
              Terms of Use
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
          <div className="prose prose-gray max-w-none space-y-8 text-editorial">
            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-0 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the website operated by Marta Duran Real Estate (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).
              </p>
              <p className="text-muted-foreground">
                By accessing or using this website, you agree to be bound by these Terms. If you do not agree, you must not use this website.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">2. About Us</h2>
              <div className="p-6 bg-secondary/30 rounded-lg text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">{AGENCY.fullName}</p>
                <p>{AGENCY.address.line1}</p>
                <p>{AGENCY.address.city}, {AGENCY.address.state}, {AGENCY.address.country}</p>
                <p>Email: {AGENCY.email}</p>
                <p>Phone: {AGENCY.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">3. Use of the Website</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use this website only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="text-muted-foreground mb-2 font-medium">You must not:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Use the website in any way that violates applicable UAE laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Introduce viruses, malware, or harmful code</li>
                <li>Copy, reproduce, or exploit website content without authorization</li>
                <li>Use automated systems (bots, scraping tools) to extract data</li>
              </ul>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate access to the website if misuse is detected.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">4. Property Listings and Information Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                All property listings, descriptions, prices, images, availability, and related information displayed on this website are provided for general informational purposes only.
              </p>
              <p className="text-muted-foreground mb-4">
                While we aim to ensure accuracy, we do not guarantee that:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Property details are complete, accurate, or up to date</li>
                <li>Prices or availability will remain unchanged</li>
                <li>All properties listed are currently available</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Property listings may be withdrawn, modified, or updated at any time without notice.
              </p>
              <p className="text-muted-foreground">
                Nothing on this website constitutes a legally binding offer, contractual commitment, or professional advice.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">5. No Professional or Financial Advice</h2>
              <p className="text-muted-foreground mb-4">
                The information provided on this website does not constitute:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Investment advice</li>
                <li>Mortgage or tax advice</li>
              </ul>
              <p className="text-muted-foreground">
                You should consult qualified professionals before making any real estate or investment decisions.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">6. No Agency Relationship</h2>
              <p className="text-muted-foreground mb-4">
                Use of this website does not create:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>An agency relationship</li>
                <li>A brokerage agreement</li>
                <li>A joint venture</li>
                <li>A partnership</li>
              </ul>
              <p className="text-muted-foreground">
                A formal agreement must be executed separately to establish any professional relationship.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on this website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Text</li>
                <li>Images</li>
                <li>Logos</li>
                <li>Branding</li>
                <li>Design elements</li>
                <li>Layout</li>
                <li>Graphics</li>
                <li>Videos</li>
              </ul>
              <p className="text-muted-foreground">
                is the property of Marta Duran Real Estate or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p className="text-muted-foreground mt-4">
                You may not reproduce, distribute, modify, or republish website content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                This website may contain links to third-party websites, including developers, financial institutions, or service providers.
              </p>
              <p className="text-muted-foreground mb-4">We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>The content of third-party websites</li>
                <li>Their privacy practices</li>
                <li>Their terms and conditions</li>
              </ul>
              <p className="text-muted-foreground">
                Access to third-party websites is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by applicable law, Marta Duran Real Estate shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Investment losses</li>
                <li>Errors or omissions in property information</li>
                <li>Website downtime or technical issues</li>
              </ul>
              <p className="text-muted-foreground">
                Your use of the website is at your sole risk.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Marta Duran Real Estate, its owners, employees, agents, and affiliates from any claims, liabilities, damages, losses, or expenses arising out of: your use of the website; your violation of these Terms; or your breach of any applicable laws.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">11. Privacy</h2>
              <p className="text-muted-foreground">
                Your use of this website is also governed by our Privacy Policy, which explains how we collect and process personal data.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">12. Website Availability</h2>
              <p className="text-muted-foreground">
                We do not guarantee uninterrupted access to the website. We may suspend, withdraw, or restrict availability for business or technical reasons without notice.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">13. Modifications to These Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date.
              </p>
              <p className="text-muted-foreground">
                Continued use of the website after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, United Arab Emirates.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions regarding these Terms of Use, please contact:
              </p>
              <div className="p-6 bg-secondary/30 rounded-lg text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">{AGENCY.fullName}</p>
                <p>{AGENCY.address.line1}</p>
                <p>{AGENCY.address.city}, {AGENCY.address.state}, {AGENCY.address.country}</p>
                <p>Email: {AGENCY.email}</p>
                <p>Phone: {AGENCY.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
