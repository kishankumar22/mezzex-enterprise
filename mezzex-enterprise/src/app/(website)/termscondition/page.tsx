import TermsConditionContent from "./TermsConditionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Condition – Mezzex",
  description: "Mezzex Terms & Conditions outlining charges, agreements, liabilities, billing, cancellations, and more.",
  keywords: ["Mezzex", "Terms", "Conditions", "Billing", "Agreement"],
  robots: "index,follow",
  openGraph: {
    title: "Terms & Condition – Mezzex",
    description: "Mezzex Terms & Conditions outlining charges, agreements, liabilities, billing, cancellations, and more.",
    url: "https://mezzex.com/termscondition",
    siteName: "Mezzex",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mezzex Terms & Condition" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Condition – Mezzex",
    description: "Mezzex Terms & Conditions outlining charges, agreements, liabilities, billing, cancellations, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mezzex.com/termscondition",
  },
};

export default function TermsConditionPage() {
  return <TermsConditionContent />;
}
