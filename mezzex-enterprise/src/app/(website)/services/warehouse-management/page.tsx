import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import WarehouseManagementContent from './WarehouseManagementContent';

const baseMetadata = generatePageMetadata({
  title: 'Warehouse Management System Services | Mezzex',
  description: 'Professional warehouse management system services by Mezzex including inventory tracking systems, stock management software, order processing automation, logistics optimisation, and custom warehouse software solutions in the UK.',
  path: '/services/warehouse-management',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'warehouse management system services',
    'inventory tracking systems',
    'stock management software',
    'order processing automation',
    '3pl warehousing solutions',
    'logistics supply chain optimization',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/warehouse-management/#service",
  "name": "Warehouse Management System Services",
  "description": "Professional warehouse management system services by Mezzex including inventory tracking systems, stock management software, order processing automation, logistics optimisation, and custom warehouse software solutions for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Warehouse Management Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory Management System" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stock Tracking Software" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Order Processing Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logistics & Supply Chain Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Warehouse Software Development" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Warehouse Management", "item": "https://mezzex.com/services/warehouse-management" }
  ]
};

export default function WarehouseManagementPage() {
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
      <WarehouseManagementContent />
    </>
  );
}
