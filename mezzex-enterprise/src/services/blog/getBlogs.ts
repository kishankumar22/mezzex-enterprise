import { Blog, BlogListResponse, BlogParams } from '@/types/blog';

// ─── Mock data (used until real API is connected) ────────────────────────────
export const mockBlogs: Blog[] = [
  {
    id: 1,
    title: 'How to Boost Your Website SEO in 2025',
    slug: 'how-to-boost-your-website-seo-2025',
    excerpt: 'Discover the latest SEO strategies and techniques to improve your website ranking on Google and drive more organic traffic to your business.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
    author: 'Mezzex Team',
    category: 'Digital Marketing',
    tags: ['SEO', 'Digital Marketing', 'Google'],
    publishedAt: '2025-05-01T10:00:00Z',
    updatedAt: '2025-05-01T10:00:00Z',
    readTime: 5,
  },
  {
    id: 2,
    title: 'Top Web Development Trends to Watch in 2025',
    slug: 'top-web-development-trends-2025',
    excerpt: 'From AI-powered tools to edge computing, explore the most impactful web development trends shaping the digital landscape this year.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    author: 'Mezzex Team',
    category: 'Web Development',
    tags: ['Web Development', 'Trends', 'Technology'],
    publishedAt: '2025-04-15T10:00:00Z',
    updatedAt: '2025-04-15T10:00:00Z',
    readTime: 7,
  },
  {
    id: 3,
    title: 'Why Your Business Needs a Mobile App in 2025',
    slug: 'why-your-business-needs-mobile-app-2025',
    excerpt: 'Mobile apps are no longer a luxury — they are a necessity. Learn why investing in a mobile app can transform your customer experience and drive growth.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    author: 'Mezzex Team',
    category: 'App Development',
    tags: ['Mobile App', 'Business', 'Technology'],
    publishedAt: '2025-03-20T10:00:00Z',
    updatedAt: '2025-03-20T10:00:00Z',
    readTime: 6,
  },
  {
    id: 4,
    title: 'E-commerce Strategies That Drive Sales in the UK Market',
    slug: 'ecommerce-strategies-uk-market-2025',
    excerpt: 'Unlock the full potential of your e-commerce business with proven strategies tailored for the UK market. From SEO to UX, we cover it all.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    author: 'Mezzex Team',
    category: 'E-Commerce',
    tags: ['E-Commerce', 'UK Market', 'Sales'],
    publishedAt: '2025-02-28T10:00:00Z',
    updatedAt: '2025-02-28T10:00:00Z',
    readTime: 8,
  },
  {
    id: 5,
    title: 'Digital Marketing vs Traditional Marketing: Which is Better?',
    slug: 'digital-marketing-vs-traditional-marketing',
    excerpt: 'In the modern business landscape, choosing the right marketing strategy is crucial. We compare digital and traditional marketing to help you decide.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
    author: 'Mezzex Team',
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'Marketing', 'Strategy'],
    publishedAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z',
    readTime: 6,
  },
  {
    id: 6,
    title: 'Warehouse Management: Optimising Your Supply Chain',
    slug: 'warehouse-management-optimising-supply-chain',
    excerpt: 'Efficient warehouse management is the backbone of a successful supply chain. Discover best practices and technology solutions to streamline your operations.',
    content: '<p>Full blog content here...</p>',
    featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    author: 'Mezzex Team',
    category: 'Warehouse Management',
    tags: ['Warehouse', 'Supply Chain', 'Logistics'],
    publishedAt: '2024-12-15T10:00:00Z',
    updatedAt: '2024-12-15T10:00:00Z',
    readTime: 5,
  },
];

// ─── Service functions ────────────────────────────────────────────────────────
export async function getBlogs(params?: BlogParams): Promise<BlogListResponse> {
  try {
    const USE_MOCK = !process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'https://api.mezzex.com/api';
    if (USE_MOCK) {
      const page = params?.page || 1;
      const pageSize = params?.pageSize || 6;
      const start = (page - 1) * pageSize;
      const data = mockBlogs.slice(start, start + pageSize);
      return { data, total: mockBlogs.length, page, pageSize, totalPages: Math.ceil(mockBlogs.length / pageSize) };
    }
    const { default: apiClient } = await import('@/services/api/apiClient');
    const res = await apiClient.get('/blogs', { params });
    return res.data;
  } catch {
    const page = params?.page || 1;
    const pageSize = params?.pageSize || 6;
    return { data: mockBlogs.slice(0, pageSize), total: mockBlogs.length, page, pageSize, totalPages: 1 };
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const USE_MOCK = !process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'https://api.mezzex.com/api';
    if (USE_MOCK) {
      return mockBlogs.find((b) => b.slug === slug) || mockBlogs[0];
    }
    const { default: apiClient } = await import('@/services/api/apiClient');
    const res = await apiClient.get(`/blogs/${slug}`);
    return res.data;
  } catch {
    return mockBlogs.find((b) => b.slug === slug) || null;
  }
}

export async function getLatestBlogs(count: number = 3): Promise<Blog[]> {
  const result = await getBlogs({ page: 1, pageSize: count });
  return result.data;
}
