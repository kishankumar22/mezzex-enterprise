import { Service, ServiceListResponse } from '@/types/service';

export const mockServices: Service[] = [
  {
    id: 1,
    title: 'Website Designing & Development',
    slug: 'website-designing-development',
    shortDescription: 'Get the most interactive and enchanting website to bring your business to life digitally through our Website Designing & Development. Boost your brand’s presence in digital, keep your users engaged, increase conversion rates and boost sales for the long term',
    fullDescription: 'Get the most interactive and enchanting website to bring your business to life digitally through our website and app development services. Boost your brand\'s presence in digital, keep your users engaged, increase conversion rates and boost sales for the long term.',
    icon: 'Monitor',
    featuredImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    features: ['Responsive Design', 'SEO Optimised', 'Fast Loading', 'Mobile-First', 'CMS Integration', 'E-Commerce Ready'],
  },
  {
    id: 2,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortDescription: 'Access a full suite of Digital marketing services to bring your business to new heights of derived growth, improved online visibility, and outranked competition. Check how you can fundamentally boost sales in both B2C and B2B industries with our Full Service Digital Marketi',
    fullDescription: 'Access a full suite of Digital Marketing Services to bring your business to new heights of derived growth, improved online visibility, and outranked competition.',
    icon: 'TrendingUp',
    featuredImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    features: ['SEO', 'Social Media Marketing', 'PPC Advertising', 'Content Writing', 'Email Marketing', 'Ecommerce Marketing'],
  },
  {
    id: 3,
    title: 'Software Development',
    slug: 'software-development',
    shortDescription: 'Make your software or website look good, work well, and be fully optimised to offer a seamless user experience for your target audience with our development services. As a top Software development company, we develop software and websites that are responsive, mobile-',
    fullDescription: 'Make your software or website look good, work well, and be fully optimised to offer a seamless user experience for your target audience with our development services.',
    icon: 'Code',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    features: ['Custom Software', 'Web Development', 'API Integration', 'Cloud Solutions', 'Maintenance', 'Quality Assurance'],
  },
  {
    id: 4,
    title: 'App Development',
    slug: 'app-development',
    shortDescription: 'The number of application users is increasing every day, whether you are an Android or an iOS user. This is why as an App Development company, Mezzex offers exceptional app development services to help you keep up with the latest trends and technologies to bring yo',
    fullDescription: 'The number of application users is increasing every day. Mezzex offers exceptional app development services to help you keep up with the latest trends and technologies.',
    icon: 'Smartphone',
    featuredImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design', 'App Testing', 'App Store Submission'],
  },
  {
    id: 5,
    title: 'E-Commerce Services',
    slug: 'ecommerce-services',
    shortDescription: 'Position your e‑commerce business website on the top search engine result pages of relevant web searches on Google and Bing. Ensure your website is easily discoverability, drives relevant traffic, and delivers top ROI. Access quality e‑commerce services bound with e‑commerc.',
    fullDescription: 'Position your e-commerce business website on the top search engine result pages of relevant web searches on Google and Bing.',
    icon: 'ShoppingCart',
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    features: ['E-Commerce Design', 'Payment Integration', 'Inventory Management', 'SEO', 'Analytics', 'Customer Support'],
  },
  {
    id: 6,
    title: 'Warehouse Management',
    slug: 'warehouse-management',
    shortDescription: 'Mezzex provides a range of complete Warehouse management services including order fulfilment, 3PL warehousing services, and inventory management. Our specialists are engaged in warehouse e-commerce fulfilment services, including real-time tracking of goods,',
    fullDescription: 'Mezzex provides a range of complete warehouse management services including order fulfilment, 3PL warehousing services, and inventory management.',
    icon: 'Package',
    featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    features: ['Order Fulfilment', '3PL Warehousing', 'Inventory Management', 'Real-time Tracking', 'Packing Services', 'Shipping Management'],
  },
];

export async function getServices(): Promise<ServiceListResponse> {
  try {
    const USE_MOCK = !process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'https://api.mezzex.com/api';
    if (USE_MOCK) return { data: mockServices, total: mockServices.length };
    const { default: apiClient } = await import('@/services/api/apiClient');
    const res = await apiClient.get('/services');
    return res.data;
  } catch {
    return { data: mockServices, total: mockServices.length };
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const USE_MOCK = !process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'https://api.mezzex.com/api';
    if (USE_MOCK) return mockServices.find((s) => s.slug === slug) || mockServices[0];
    const { default: apiClient } = await import('@/services/api/apiClient');
    const res = await apiClient.get(`/services/${slug}`);
    return res.data;
  } catch {
    return mockServices.find((s) => s.slug === slug) || null;
  }
}
