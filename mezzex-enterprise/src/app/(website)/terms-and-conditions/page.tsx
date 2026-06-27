import { generatePageMetadata } from '@/seo/metadata';
import TermsConditionContent from './TermsConditionContent';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Mezzex IT Services.',
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return <TermsConditionContent />;
}
