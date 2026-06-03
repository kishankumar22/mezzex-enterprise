import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CounterSection } from '@/components/home/CounterSection';
import { WorkProcess } from '@/components/home/WorkProcess';
import { WhyPartner } from '@/components/home/WhyPartner';
import { OtherServices } from '@/components/home/OtherServices';
import { BlogPreview } from '@/components/home/BlogPreview';
import { OverviewSection } from '@/components/home/OverviewSection';
import { HireSection } from '@/components/home/HireSection';
import { PartnerSection } from '@/components/home/PartnerSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CounterSection />
      <WorkProcess />
      <WhyPartner />
      <OverviewSection />
      <HireSection />
      <OtherServices />
      <PartnerSection />   
      <BlogPreview />
    </>
  );
}
