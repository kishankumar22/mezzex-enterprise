export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  authorImage?: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime?: number;
}

export interface BlogListResponse {
  data: Blog[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BlogParams {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
}
