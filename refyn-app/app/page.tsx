import Navbar    from '@/components/Navbar/Navbar';
import Hero       from '@/components/Hero/Hero';
import Features   from '@/components/Features/Features';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Languages  from '@/components/Languages/Languages';
import Pricing    from '@/components/Pricing/Pricing';
import CTABanner  from '@/components/CTABanner/CTABanner';
import Footer     from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Languages />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
