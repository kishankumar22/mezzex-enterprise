
  import { Metadata } from "next";
  import SEOToolContent from "./SEOToolContent";

  export const metadata: Metadata = {
    title: "Free SEO Checker Tool – Mezzex",
    description: "Use our free SEO tool to audit your website, find SEO issues, improve rankings, analyze performance, and optimize pages easily.",
    keywords: ["seo tool", "best seo tools", "seo audit tool"],
    robots: "index,follow",
    openGraph: {
      title: "Free SEO Checker Tool – Mezzex",
      description: "Use our free SEO tool to audit your website, find SEO issues, improve rankings, analyze performance, and optimize pages easily.",
      url: "https://mezzex.com/seo-tool",
      siteName: "Mezzex",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mezzex SEO Tool" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Free SEO Checker Tool – Mezzex",
      description: "Use our free SEO tool to audit your website, find SEO issues, improve rankings, analyze performance, and optimize pages easily.",
      images: ["/og-image.png"],
    },
    alternates: { canonical: "https://mezzex.com/seo-tool" },
  };

  export default function SEOToolPage() {
    return <SEOToolContent />;
  }
