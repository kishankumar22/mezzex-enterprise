export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  featuredImage: string;
  features: string[];
  subServices?: SubService[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface SubService {
  id: number;
  title: string;
  slug: string;
  description: string;
  href: string;
}

export interface ServiceListResponse {
  data: Service[];
  total: number;
}
