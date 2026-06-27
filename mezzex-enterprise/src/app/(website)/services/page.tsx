import { generatePageMetadata } from '@/seo/metadata';
import ServicesContent from './ServicesContent';

export const metadata = generatePageMetadata({
  title: 'Mezzex - Web, Software & App Development | UK-Based Technology Partner',
  description: 'UK-based technology partner delivering custom web development, software solutions, and mobile apps. From discovery to deployment with transparent pricing and agile delivery.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesContent />;
}

