'use client';

import React from 'react';
import styles from './Hero.module.scss';
import VideoBg from '@/components/VideoBg/VideoBg';
import HeroPanel from '@/components/HeroPanel/HeroPanel';
import { useAuthModal } from '@/context/AuthModalContext';

export default function Hero() {
  const { openAuthModal } = useAuthModal();

  return (
    <section className={styles.hero} id="hero" aria-label="Hero">

      {/* ── Z-0: Boomerang ping-pong video background ── */}
      <VideoBg />

      {/* ── Z-10: All foreground content ── */}
      <div className={styles.content}>

        {/* ── Centered copy block ── */}
        <div className={styles.copy}>
          {/* Beta badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Now in public beta · 10,000+ developers</span>
          </div>

          {/* Display headline — P22 Mackinac, Boomerang style */}
          <h1 className={styles.headline}>
            Review smarter.<br />
            Debug <em className={styles.accent}>faster.</em><br />
            Ship clean.
          </h1>

          {/* Subcopy */}
          <p className={styles.sub}>
            AI-powered code reviewer and bug explainer — paste any snippet and
            get instant, plain-English feedback across 30+ languages.
          </p>

          {/* CTA — Boomerang black pill */}
          <div className={styles.actions}>
            <button className={styles.ctaPrimary} onClick={openAuthModal}>
              Start reviewing for free
            </button>
            <a href="#how-it-works" className={styles.ctaSecondary}>
              See how it works
            </a>
          </div>

          {/* Trust strip */}
          <div className={styles.trust}>
            {['No sign-up to try', '30+ languages', 'Instant results'].map((t) => (
              <div key={t} className={styles.trustItem}>
                <span className={styles.check} aria-hidden="true">✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ── mt-auto: glass panel anchored to viewport bottom ── */}
        <HeroPanel />
      </div>
    </section>
  );
}

