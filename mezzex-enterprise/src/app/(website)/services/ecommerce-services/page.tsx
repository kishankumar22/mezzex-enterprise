import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import EcommerceServicesContent from './EcommerceServicesContent';

const baseMetadata = generatePageMetadata({
  title: 'Ecommerce Services & Ecommerce Consultant UK | Mezzex',
  description: 'Professional ecommerce services and ecommerce consulting in the UK for Amazon, Shopify and eBay store growth and management.',
  path: '/services/ecommerce-services',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'ecommerce services',
    'ecommerce consultant uk',
    'amazon product listing services',
    'shopify development',
    'ebay store management',
    'inventory management services',
    'ecommerce consulting birmingham',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/ecommerce-services/#service",
  "name": "E-commerce Development Services",
  "description": "Professional e-commerce development services by Mezzex including Shopify development, WooCommerce development, online store design, payment gateway integration, and scalable eCommerce solutions for businesses in the UK.",
  "provider": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex",
    "url": "https://mezzex.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-commerce Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WooCommerce Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Store Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment Gateway Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce SEO Optimization" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Ecommerce Services", "item": "https://mezzex.com/services/ecommerce-services" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does an ecommerce consultant do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An ecommerce consultant helps businesses improve how they sell products online. Their role is to analyze an online store's performance, identify problems and opportunities, and recommend strategies to increase sales, efficiency, and growth."
      }
    },
    {
      "@type": "Question",
      "name": "What are ecommerce fulfillment services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ecommerce fulfillment services are third-party services that store inventory, process orders, pack products, and ship them to customers on behalf of an online business. Instead of handling logistics yourself, a fulfillment provider manages the operational side after a customer places an order. The typical fulfillment process includes: 1) Inventory storage – your products are stored in a warehouse. 2) Order processing – orders from your online store are received automatically. 3) Picking & packing – items are selected and packaged. 4) Shipping – orders are shipped to customers. 5) Returns handling – some providers also manage returns and exchanges."
      }
    },
    {
      "@type": "Question",
      "name": "How do ecommerce shipping solutions improve delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ecommerce shipping solutions improve delivery by making the process of getting orders from a seller to a customer faster, more accurate, and more cost-efficient. These solutions typically combine shipping software, carrier integrations, automation, and tracking tools to streamline fulfillment."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in full service ecommerce management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full-service ecommerce management is an end-to-end service where a team manages most or all aspects of running and growing an online store on behalf of a business. What's typically included: 1) Store setup and maintenance – building, configuring, updating, and managing the ecommerce website. 2) Product catalog management – adding products, organizing categories, writing descriptions, pricing, and updating inventory. 3) Website design and UX – improving navigation, mobile experience, and checkout flow. 4) Order and fulfillment coordination – managing order processing, shipping workflows, and customer delivery operations. 5) Digital marketing – handling SEO, paid advertising, email campaigns, social media, and customer acquisition. 6) Conversion rate optimization (CRO) – testing and improving pages to increase purchases. 7) Customer support management – responding to inquiries, returns, and service requests. 8) Analytics and reporting – tracking sales, traffic, customer behavior, and business performance. 9) Platform and technical management – managing integrations, updates, performance, and security. 10) Retention and growth strategy – improving repeat purchases, customer lifetime value, and scaling plans."
      }
    },
    {
      "@type": "Question",
      "name": "How much do ecommerce services cost in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of ecommerce services in the UK varies based on what you're outsourcing—store setup, marketing, management, fulfillment, or consulting. Typical UK price ranges: Ecommerce consultant: £500–£2,000+ per day or project-based. Ecommerce website setup: £2,000–£20,000+ one-time depending on complexity. Ecommerce agency (ongoing): £2,000–£8,000/month for specialist services. Ecommerce fulfillment (3PL): often includes storage, pick/pack, shipping, and account fees. Paid marketing management: from around £950+/month, excluding ad spend. Ecommerce operations software: around £159–£629+/month depending on order volume."
      }
    }
  ]
};

export default function EcommerceServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EcommerceServicesContent />
    </>
  );
}
