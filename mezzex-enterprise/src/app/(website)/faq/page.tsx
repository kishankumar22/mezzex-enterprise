
import { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ – Mezzex",
  description: "Frequently Asked Questions about Mezzex IT and digital marketing solutions.",
  keywords: ["Mezzex", "FAQ", "Questions", "Digital Marketing", "IT Services"],
  robots: "index,follow",
  openGraph: {
    title: "FAQ – Mezzex",
    description: "Frequently Asked Questions about Mezzex IT and digital marketing solutions.",
    url: "https://mezzex.com/faq",
    siteName: "Mezzex",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mezzex FAQ" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Mezzex",
    description: "Frequently Asked Questions about Mezzex IT and digital marketing solutions.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://mezzex.com/faq" },
};

export default function FAQPage() {
  return <FAQContent />;
}
