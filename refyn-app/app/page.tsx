'use client';

import { AuthModalProvider } from '@/context/AuthModalContext';
import Navbar    from '@/components/Navbar/Navbar';
import Hero       from '@/components/Hero/Hero';
import Features   from '@/components/Features/Features';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Languages   from '@/components/Languages/Languages';
import LiveEditor  from '@/components/LiveEditor/LiveEditor';
import CTABanner  from '@/components/CTABanner/CTABanner';
import Footer     from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <AuthModalProvider>
      <main>
        <Navbar />
        <Hero />
        <LiveEditor />
        <Features />
        <HowItWorks />
        <Languages />
        <CTABanner />
        <Footer />
      </main>
    </AuthModalProvider>
  );
}

