import { Metadata } from "next";
import { AGENCY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${AGENCY.fullName}. Learn how we collect, use, and protect your personal information in accordance with UAE PDPL.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section data-animate="reveal" className="animate-reveal bg-secondary/30 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-subtitle text-4xl md:text-5xl font-semibold text-display mb-4">
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
          <div className="prose prose-gray max-w-none space-y-8 text-editorial">
            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-0 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Marta Duran Real Estate (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy and safeguarding your personal data. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you visit our website, contact us, or use our real estate services.
              </p>
              <p className="text-muted-foreground mb-4">
                This policy is designed in accordance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and reflects internationally recognized data protection principles.
              </p>
              <p className="text-muted-foreground">
                By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">2. Data Controller</h2>
              <p className="text-muted-foreground mb-4">
                Marta Duran Real Estate is the data controller responsible for your personal data.
              </p>
              <p className="text-muted-foreground mb-2 font-medium">Contact Details:</p>
              <div className="p-6 bg-secondary/30 rounded-lg text-muted-foreground space-y-1">
                <p>{AGENCY.fullName}</p>
                <p>{AGENCY.address.line1}</p>
                <p>{AGENCY.address.city}, {AGENCY.address.state}, {AGENCY.address.country}</p>
                <p>Email: {AGENCY.email}</p>
                <p>Phone: {AGENCY.phone}</p>
              </div>
              <p className="text-muted-foreground mt-4">
                If you have any questions regarding this Privacy Policy or how your data is handled, please contact us using the details above.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">3. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect and process the following categories of personal data:
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-2">3.1 Personal Identification Data</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Nationality (where relevant to property transactions)</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-2">3.2 Property &amp; Transaction Information</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Property preferences</li>
                <li>Budget and investment requirements</li>
                <li>Financing or mortgage-related information (if voluntarily provided)</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-2">3.3 Communication Data</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Messages sent through contact forms</li>
                <li>WhatsApp or phone communications</li>
                <li>Email correspondence</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-2">3.4 Technical &amp; Usage Data</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Referral source</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-2">3.5 Marketing Data</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Preferences regarding receiving property listings and promotional communications</li>
              </ul>
              <p className="text-muted-foreground">
                We collect personal data directly from you or automatically through website technologies.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">
                We process your personal data based on one or more of the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Consent:</strong> When you voluntarily submit your information or opt into marketing communications.</li>
                <li><strong>Performance of a Contract:</strong> To take steps at your request prior to entering into a property transaction or service agreement.</li>
                <li><strong>Legal Obligation:</strong> To comply with UAE laws and regulatory requirements.</li>
                <li><strong>Legitimate Interests:</strong> To operate, improve, and protect our business and services, provided such interests do not override your rights.</li>
              </ul>
              <p className="text-muted-foreground">
                Where processing is based on consent, you may withdraw your consent at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">5. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Respond to inquiries and provide property information</li>
                <li>Arrange property viewings</li>
                <li>Facilitate real estate transactions</li>
                <li>Send property listings that match your criteria</li>
                <li>Provide marketing communications (where permitted)</li>
                <li>Improve our website functionality and user experience</li>
                <li>Maintain internal records</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Prevent fraud and protect our business</li>
              </ul>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">6. Sharing and Disclosure of Information</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal data.
              </p>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Property developers and owners (to facilitate inquiries and transactions)</li>
                <li>Legal advisors and conveyancing professionals</li>
                <li>Mortgage brokers or financial institutions (if requested by you)</li>
                <li>Service providers (such as IT, hosting, CRM, analytics, and marketing providers)</li>
                <li>Governmental or regulatory authorities when required by law</li>
              </ul>
              <p className="text-muted-foreground">
                All third parties are required to handle personal data in accordance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">7. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Due to the international nature of real estate transactions and the use of technology service providers, your personal data may be transferred to and processed in countries outside the United Arab Emirates.
              </p>
              <p className="text-muted-foreground">
                Where such transfers occur, we take reasonable steps to ensure that appropriate safeguards are implemented in accordance with applicable data protection laws to protect your personal data.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Providing services and facilitating transactions</li>
                <li>Meeting legal, regulatory, tax, or accounting obligations</li>
                <li>Resolving disputes</li>
                <li>Enforcing agreements</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Marketing data is retained until you withdraw your consent or opt out of communications.
              </p>
              <p className="text-muted-foreground">
                When personal data is no longer required, it is securely deleted or anonymized.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">9. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="text-muted-foreground">
                However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">10. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Subject to applicable law, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>The right to access your personal data</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict processing</li>
                <li>The right to object to certain processing activities</li>
                <li>The right to data portability (where applicable)</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to lodge a complaint with a relevant supervisory authority</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise any of these rights, please contact us using the details provided above.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">11. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience.
              </p>
              <p className="text-muted-foreground mb-4">Cookies may include:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
                <li><strong>Analytics Cookies:</strong> Used to understand how visitors interact with our website.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements or measure campaign effectiveness.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You may manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.
              </p>
              <p className="text-muted-foreground">
                Where required by law, we obtain your consent before placing non-essential cookies.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">12. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites, including property developers or service providers. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review their privacy policies before providing personal data.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">13. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have collected data from a minor without appropriate consent, we will take steps to delete such information.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">14. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. The updated version will be posted on this page with a revised effective date.
              </p>
            </div>

            <div>
              <h2 className="font-subtitle text-2xl font-semibold mt-12 mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal data, please contact:
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
