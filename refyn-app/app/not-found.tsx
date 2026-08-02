'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft } from 'lucide-react';
import styles from './not-found.module.scss';

const NAV_LINKS = ['About Us', 'Programs', 'Reviews', 'FAQ', 'Contacts'];

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4';

export default function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [scaleY, setScaleY] = useState(1);

  // Dynamic vertical scale calculation for the background 404 text & oval
  useEffect(() => {
    const calculateScale = () => {
      if (textRef.current) {
        const h = textRef.current.offsetHeight;
        if (h > 0) {
          setScaleY((window.innerHeight / h) * 1.4);
        }
      }
    };
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={styles.page}>
      {/* ── BACKGROUND "404" TEXT EFFECT ── */}
      <div className={styles.bgLayer}>
        <div className={styles.bgWrapper}>
          {/* Centered 404 text */}
          <div
            ref={textRef}
            className={styles.text404}
            style={{
              transform: `scale(1.15, ${scaleY})`,
              transformOrigin: 'center',
            }}
          >
            404
          </div>

          {/* Overlaid white oval */}
          <div
            className={styles.bgOval}
            style={{
              transform: `scale(1, ${scaleY})`,
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <header className={styles.navbar}>
        {/* Logo (left) */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.dotsGrid}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
          <span className={styles.logoText}>TinyTrails</span>
        </Link>



        {/* Menu button (right) */}
        <button className={styles.menuBtn} onClick={() => setMenuOpen(true)}>
          <Menu size={16} />
          <span className={styles.menuBtnText}>Menu</span>
        </button>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div className={`${styles.menuOverlay} ${menuOpen ? '' : styles.closed}`}>
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`${styles.backdrop} ${menuOpen ? styles.visible : styles.hidden}`}
        />

        {/* Slide-in Panel */}
        <div className={`${styles.panel} ${menuOpen ? styles.open : styles.closed}`}>
          {/* Panel Header */}
          <div className={styles.panelHeader}>
            <div className={styles.logoLink}>
              <div className={styles.dotsGrid}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <span className={styles.logoText}>TinyTrails</span>
            </div>

            <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className={styles.menuList}>
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                className={styles.drawerItem}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.drawerFooter}>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={styles.drawerCta}
              style={{
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? '450ms' : '0ms',
              }}
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>



      {/* ── BOTTOM CONTENT ── */}
      <div className={styles.bottomSection}>
        <h1 className={styles.heading}>Oops, something went wrong!</h1>

        <Link href="/" className={styles.homeBtn}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
