"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PartnerSection } from "@/components/home/PartnerSection";
import TypewriterHeading from "@/components/common/TypewriterHeading";

export default function PrivacyContent() {
  return (
    <section className="bg-white text-gray-800" id="main-faq-page">
      {/* Main Content */}
      <motion.div
        className="container mx-auto py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Privacy Policy – Mezzex
          </h2>
          <p className="text-lg text-gray-700">
            Mezzex is committed to respecting your privacy and protecting your data.
          </p>
        </section>

        <div className="space-y-4">
          {/* Intro */}
          <div className="mian-policy-box">
            <p className="text-base leading-relaxed text-gray-800">
              Mezzex (“we”, “our”, “us”) is committed to respecting your privacy, protecting your data, and being transparent about how your information is collected, used, stored, and shared. This Privacy Policy explains our practices in compliance with the UK Data Protection Act 2018, the UK GDPR, and Amazon’s Data Protection and Acceptable Use Policies.
            </p>
            <br />
            <p className="when-answering text-base text-gray-800">
              If you do not agree with the terms of this policy, please discontinue use of our website and services immediately. By using our website and services, you confirm that you are at least 18 years old and that you consent to the practices described in this Privacy Policy. For questions, contact us at <a href="mailto:info@mezzex.com" className="text-[#4BEAFF] hover:underline">info@mezzex.com</a>.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: "1. Information We Collect",
              items: [
                "Identity Information: Name, company name, role, and account identifiers.",
                "Contact Information: Email address, phone number, and mailing address.",
                "Amazon Seller Information: Order data, catalogue data, inventory details, and performance metrics, when authorised.",
                "Transaction Information: Payment details, invoices, and billing records.",
                "Technical Information: IP address, device details, browser type, cookies, and usage logs.",
                "Support Information: Communications with our customer service or technical support."
              ]
            },
            {
              title: "2. How We Use Your Information",
              description: "We process personal and Amazon Information only for legitimate business purposes, including:",
              items: [
                "Responding to enquiries and providing customer support.",
                "Managing contracts, subscriptions, and payments.",
                "Enabling integrations with the Amazon Selling Partner API.",
                "Operating, maintaining, and improving our website and services.",
                "Complying with legal obligations and audit requirements.",
                "Preventing fraud, misuse, and unauthorised access.",
                "Sending marketing communications, where you have opted in."
              ]
            },
            {
              title: "3. Data Sharing",
              items: [
                "Service Providers: Hosting, infrastructure, payment processors, support (e.g., AWS, secure payment gateways).",
                "Legal Authorities: When required by law or to enforce our rights.",
                "Business Transfers: In the event of a merger, acquisition, or restructuring, subject to safeguards."
              ]
            },
            {
              title: "4. Data Retention and Backup",
              items: [
                "Seller data retained for 90 days after termination, then securely deleted.",
                "Backup copies stored in encrypted form and purged on a rolling basis.",
                "Encryption Standards: AES-256 for data at rest, TLS 1.2+ for data in transit."
              ]
            },
            {
              title: "5. Security and Access Controls",
              items: [
                "SSL/TLS certificates on all services.",
                "Firewalls, intrusion detection, and monitoring.",
                "Role-based access to Amazon Information.",
                "Passwords stored using salted hashing (bcrypt).",
                "Strong password policy: min 12 characters, symbols, rotated every 90 days."
              ]
            },
            {
              title: "6. Risk Management and Incident Response",
              items: [
                "Detection: Monitor and log abnormal activity.",
                "Containment: Restrict access to compromised systems.",
                "Notification: Notify affected users and Amazon within required timeframe.",
                "Remediation: Patch vulnerabilities, restore backups, validate systems.",
                "Review: Audit incident and improve preventive measures."
              ]
            },
            {
              title: "7. Vulnerability and Change Management",
              items: [
                "Code undergoes regular reviews and vulnerability scans.",
                "Critical vulnerabilities patched within 24–48 hours.",
                "System changes approved by authorised managers, tracked in logs.",
                "Development and production environments segregated."
              ]
            },
            {
              title: "8. Cookies and Tracking",
              description: "We use cookies to improve site usability and tailor user experience. Cookies may collect statistical, non-identifiable information. You may disable cookies in your browser, but some functionality may be limited. See our Cookies Policy for details.",
              items: [
                "Essential cookies – required for website functionality.",
                "Analytics cookies – help us understand usage patterns.",
                "Preference cookies – remember your settings.",
                "Security cookies – used to prevent fraud and misuse."
              ]
            },
            {
              title: "9. Your Rights",
              description: "Under UK GDPR, you have the right to:",
              items: [
                "Access a copy of your personal data.",
                "Request corrections or deletions.",
                "Restrict or object to processing.",
                "Withdraw consent for marketing.",
                "Request data portability."
              ]
            },
            {
              title: "10. Links to Other Websites",
              description: "Our website may link to external websites. We are not responsible for their content or privacy practices. Please review their policies before providing personal information."
            },
            {
              title: "11. Changes to this Policy",
              description: "We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date. Continued use of our services after updates constitutes acceptance of the new terms."
            },
            {
  title: "Contact Us",
  description: `If you have questions about this Privacy Policy or our data practices, please contact Mezzex Ltd, Spacebox Business Park Unit E 38, Plume Street, Birmingham, B6 7RT. Email: <a href="mailto:info@mezzex.com" className="text-[#4BEAFF] hover:underline">info@mezzex.com</a>, Phone: +44 121 661 6357.`
},
          ].map((section, idx) => (
            <div key={idx} className="mian-policy-box space-y-4">
  <h4 className="text-xl font-medium text-gray-900 hover:text-[#4BEAFF] transition-colors">{section.title}</h4>
  {section.title === "Contact Us" ? (
    <motion.p
      className="text-gray-700"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
    />
  ) : (
    <>
      {section.description && <p className="text-gray-700">{section.description}</p>}
    </>
  )}
  {section.items && (
    <ul className="list-disc list-inside when-answering   text-gray-800 space-y-1">
      {section.items.map((item, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  )}
  <hr className="my-6 border-gray-300" />
</div>
          ))}
        </div>
      </motion.div>
   {/* Partner Section */}
            <div className='mb-12'>
      
            <PartnerSection />
            </div>
        
      
    </section>
  );
}
