"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PartnerSection } from "@/components/home/PartnerSection";
import TypewriterHeading from "@/components/common/TypewriterHeading";

export default function TermsConditionContent() {
  const sections = [
    {
      title: "Charges",
      content: "First-month charges must be paid for onboarding to occur. The charges will be outlined at a monthly rate in your proposal. Depending on the client’s preference, recurring payments may be billed monthly or at greater time increments. Generally, clients are billed on the first of the month, after the invoice for the first month of services, which are to be pro-rated according to their official proposal agreement date.",
    },
    {
      title: "Agreement Term, Cancellation and Refunds",
      content: "Clients accept to pay the amount agreed on their customized proposal, at the beginning of every month that services are to be offered. Services are only offered in monthly increments, and Mezzex will not process refunds for services already rendered. Clients may terminate their service at any time, but have to provide at least 15 days advance notice before the end of that month to avoid future charges.",
    },
    {
      title: "No Liability",
      content: "To the fullest extent permitted by law, Mezzex will not be liable for any damages whatsoever, including direct, indirect, incidental, special, or consequential related to your use of the Website. Even if we have been advised of the possibility of such damages, including without limitation, damages for loss of profits, data, or other intangible losses.",
    },
    {
      title: "Billing",
      content: "Clients may pay invoices via debit or credit card remittance to Mezzex’s payment gateway, PayPal remittance, and America Express remittance.",
    },
    {
      title: "Cancellation of Services",
      content: "If a client wishes to terminate their service, they are requested to cancel service through email or by calling Mezzex, at least 30 days in advance. Also, clients must receive a cancellation admission in writing to complete the cancellation process and avoid services from being performed past the cancellation month.",
    },
    {
      title: "Communication",
      content: "You must be supportive of your digital marketing campaign and required to be responsive to Mezzex requests in a sensible period of time and admit if they are not, it may affect performance with no modification of service costs.",
    },
    {
      title: "Amazon Services Integration",
      content: `By using our Amazon Services integration tool and connecting your Amazon seller account, you explicitly authorize Mezzex to access your Amazon seller account data for the purposes of order management, shipping management, and related services. This authorization includes, but is not limited to:
- Accessing and retrieving order information from your Amazon seller account
- Processing shipping and tracking information
- Managing inventory data across multiple channels
- Generating reports and analytics based on your account data

You acknowledge and agree that:
- You retain full ownership of your Amazon seller account and all associated data
- You may revoke Mezzex's access to your Amazon account at any time through your Amazon Seller Central account settings
- Revoking access will immediately terminate the integration services, and Mezzex will no longer have access to your account data
- You are responsible for maintaining the security of your Amazon seller account credentials
- Mezzex will use your data solely for providing the integration services and will not share it with third parties without your explicit consent, except as required by law

For more information about how we handle your data, please refer to our Privacy Policy.`,
    },
    {
      title: "Changes to Terms and Conditions",
      content: "Mezzex reserves the right to alter these terms and conditions at any time by updating the terms on the website. If you continue using the website after such alterations constitute your acceptance of the changed terms.",
    },
    {
      title: "Governing Law and Venue",
      content: "By purchasing Mezzex’s service, you agree that your agreement shall be governed by and construed in accordance with the laws of England and Wales. You also agree that any dispute arising out of or related to these terms and conditions shall be resolved exclusively in the courts of England, with respect to any such matters relating to your purchase of Mezzex’s services.",
    },
    {
      title: "Contact Us",
      content: `For any Kind of query, please feel free to contact us:
Email: <a href="mailto:info@mezzex.com" className="text-[#4BEAFF] hover:underline">info@mezzex.com</a>
Phone: +44 121-661 6357`
    },
  ];

  return (
    <section className="bg-white text-gray-800">
      {/* Main Content */}
      <motion.div
        className="container mx-auto py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <section className="text-center mb-2 pt-2">
          <h2 className="text-2xl font-semibold mb-2">Terms & Condition – Mezzex</h2>
          <p className="text-lg text-gray-700">
            Mezzex is committed to providing transparent terms and conditions for our services.
          </p>
        </section>
        <div className="space-y-2">
          {sections.map((sec, idx) => (
            <div key={idx} className="mian-policy-box space-y-2">
              <h4 className="text-xl font-medium text-gray-900 hover:text-[#4BEAFF] transition-colors">
                {sec.title}
              </h4>
              <p className="text-base leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: sec.content.replace(/\n/g, "<br/>") }} />
              <hr className="my-6 border-gray-300" />
            </div>
          ))}
        </div>
      </motion.div>
      {/* Partner Section */}
      <div className="mb-6">
        <PartnerSection />
      </div>
    </section>
  );
}
