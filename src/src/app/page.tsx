import HeroSection from '@/components/sections/hero-section';
import VSL from '@/components/sections/VSL';
import OurSolution from '@/components/sections/Our-Solution';
import OurProcess from '@/components/sections/Our-Process';
import FAQSection from '@/components/sections/faq-section';
import ScalingProblems from '@/components/sections/ProblemSection';
import PricingSection from '@/components/sections/pricing-section';
import RelatableSection from '@/components/sections/relatable-section';
import ScalingWaySection from '@/components/sections/ScalingWaySection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* See Section */}
      <VSL />
      
      {/* Scaling Problems Section */}
      <ScalingProblems />

      

      {/* Relatable Section */}
      <RelatableSection />

      {/* There IS A WAY Section */}
      <ScalingWaySection />

      {/* Solution Section */}
      <OurSolution/>

      {/* Design Section */}
      <OurProcess />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
}
