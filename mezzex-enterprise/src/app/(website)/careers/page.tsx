import { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import CareersContent from './CareersContent';


export const metadata: Metadata = generatePageMetadata({
  title: 'Careers – Work with Us',
  description: 'Join the team at Mezzex. Check out our open positions in E-Commerce customer service, catalogue management, data analysis, account management, product research, and project management.',
  path: '/careers',
});

export default function CareersPage() {
  return <CareersContent />;
}
