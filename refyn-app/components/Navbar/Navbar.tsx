'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo/Logo';
import styles from './Navbar.module.scss';

const navLinks = [
  { label: 'Features',   href: '#features'   },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Languages',  href: '#languages'  },
  { label: 'Pricing',    href: '#pricing'    },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* ── Logo ── */}
        <Link href="/" className={styles.logoLink} aria-label="Refyn home">
          <Logo size="md" />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── CTA + hamburger ── */}
        <div className={styles.actions}>
          <a href="#pricing" className={styles.ctaSecondary}>
            View Pricing
          </a>
          <a href="#get-started" className={styles.ctaPrimary}>
            Try for Free
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.open : ''}`} aria-hidden={!mobileOpen}>
        <nav className={styles.mobileNav}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className={styles.mobileCTAs}>
            <a href="#pricing" className={styles.ctaSecondary} onClick={() => setMobileOpen(false)}>
              View Pricing
            </a>
            <a href="#get-started" className={styles.ctaPrimary} onClick={() => setMobileOpen(false)}>
              Try for Free →
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
