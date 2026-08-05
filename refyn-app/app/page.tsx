'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModalProvider } from '@/context/AuthModalContext';
import SplashScreen    from '@/components/SplashScreen/SplashScreen';
import Navbar          from '@/components/Navbar/Navbar';
import Hero            from '@/components/Hero/Hero';
import LiveEditor      from '@/components/LiveEditor/LiveEditor';
import Features        from '@/components/Features/Features';
import HowItWorks      from '@/components/HowItWorks/HowItWorks';
import Languages       from '@/components/Languages/Languages';
import CTABanner       from '@/components/CTABanner/CTABanner';
import Footer          from '@/components/Footer/Footer';

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* ── Site content renders immediately behind the splash ── */}
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

      {/* ── Splash overlay sits on top, transparent + blurred ── */}
      <SplashScreen onDone={() => setSplashDone(true)} />
    </>
  );
}
