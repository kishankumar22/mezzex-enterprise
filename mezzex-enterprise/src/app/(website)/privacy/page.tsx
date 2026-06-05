import PrivacyContent from "./PrivacyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Mezzex",
  description: "Mezzex privacy policy details and data protection practices.",
  keywords: ["Mezzex", "Privacy", "Policy", "Data Protection"],
  robots: "index,follow",
  openGraph: {
    title: "Privacy Policy – Mezzex",
    description: "Mezzex privacy policy details and data protection practices.",
    url: "https://mezzex.com/privacy",
    siteName: "Mezzex",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mezzex Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Mezzex",
    description: "Mezzex privacy policy details and data protection practices.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mezzex.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
