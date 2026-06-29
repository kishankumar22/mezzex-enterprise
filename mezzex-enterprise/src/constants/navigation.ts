export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface NavSubItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Website Designing & Development', href: '/services/website-designing-development' },
      {
        label: 'Digital Marketing',
        href: '/services/digital-marketing',
        children: [
          { label: 'SEO', href: '/services/digital-marketing/search-engine-optimisation' },
          { label: 'Social Media Marketing', href: '/services/digital-marketing/social-media-marketing' },
          { label: 'PPC', href: '/services/digital-marketing/pay-per-click' },
          { label: 'Content Writing', href: '/services/digital-marketing/content-writing' },
          { label: 'Ecommerce Marketing', href: '/services/digital-marketing/e-commerce-marketing' },
          { label: 'Email Marketing', href: '/services/digital-marketing/email-marketing' },
        ],
      },
      {
        label: 'Software Development',
        href: '/services/software-development',
        children: [
          { label: 'Custom Software Development', href: '/services/software-development/custom-software-development' },
          { label: 'Web Development', href: '/services/software-development/web-development' },
        ],
      },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'Ecommerce Services', href: '/services/ecommerce-services' },
      { label: 'Warehouse Management', href: '/services/warehouse-management' },
      { label: 'Amazon Services', href: '/services/amazon-services' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blogs', href: '/blog' },
];
