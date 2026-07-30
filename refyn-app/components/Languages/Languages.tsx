'use client';

import React, { useState } from 'react';
import styles from './Languages.module.scss';
import { ICON_MAP } from './TechIcons';

interface LangItem {
  name: string;
  category: string;
  brandColor: string;
  tagline: string;
}

const LANGS: LangItem[] = [
  { name: 'TypeScript',  category: 'Frontend',   brandColor: '#3178C6', tagline: 'Typed JS at scale' },
  { name: 'JavaScript',  category: 'Frontend',   brandColor: '#F7DF1E', tagline: 'Web Standard' },
  { name: 'Python',      category: 'Backend',    brandColor: '#3776AB', tagline: 'AI & Data Science' },
  { name: 'Rust',        category: 'Systems',    brandColor: '#F74C00', tagline: 'Memory Safety & Speed' },
  { name: 'Go',          category: 'Backend',    brandColor: '#00ADD8', tagline: 'Cloud & Concurrency' },
  { name: 'Java',        category: 'Enterprise', brandColor: '#EA2D2E', tagline: 'Enterprise Scale' },
  { name: 'C++',         category: 'Systems',    brandColor: '#00599C', tagline: 'High Performance' },
  { name: 'C#',          category: 'Enterprise', brandColor: '#68217A', tagline: '.NET Ecosystem' },
  { name: 'Ruby',        category: 'Backend',    brandColor: '#E0115F', tagline: 'Developer Happiness' },
  { name: 'PHP',         category: 'Backend',    brandColor: '#777BB4', tagline: 'Modern Web Stack' },
  { name: 'Swift',       category: 'Mobile',     brandColor: '#F05138', tagline: 'iOS & Apple Platforms' },
  { name: 'Kotlin',      category: 'Mobile',     brandColor: '#7F52FF', tagline: 'Android Native' },
  { name: 'Scala',       category: 'Data',       brandColor: '#DC322F', tagline: 'Functional Data Engine' },
  { name: 'R',           category: 'Data',       brandColor: '#276DC3', tagline: 'Statistical Analysis' },
  { name: 'SQL',         category: 'Data',       brandColor: '#00758F', tagline: 'Relational Database' },
  { name: 'Shell',       category: 'DevOps',     brandColor: '#4EAA25', tagline: 'Terminal Automation' },
  { name: 'Dockerfile',  category: 'DevOps',     brandColor: '#2496ED', tagline: 'Container Isolation' },
  { name: 'Terraform',   category: 'DevOps',     brandColor: '#844FBA', tagline: 'Infrastructure as Code' },
];

const ROW_1 = LANGS.slice(0, 9);
const ROW_2 = LANGS.slice(9, 18);

// Duplicate rows 3 times for continuous seamless marquee flow
const STREAM_ROW_1 = [...ROW_1, ...ROW_1, ...ROW_1];
const STREAM_ROW_2 = [...ROW_2, ...ROW_2, ...ROW_2];

export default function Languages() {
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  const renderIconCard = (lang: LangItem, indexKey: string) => {
    const IconComponent = ICON_MAP[lang.name];

    return (
      <div key={indexKey} className={styles.iconCard}>
        {/* Realistic Vector Icon */}
        <div className={styles.iconBox}>
          {IconComponent ? (
            <IconComponent size={46} />
          ) : (
            <span style={{ fontSize: 32 }}>⚡</span>
          )}
        </div>

        {/* Static Card Text */}
        <span className={styles.staticName}>{lang.name}</span>
        <span className={styles.staticCat}>{lang.category}</span>
      </div>
    );
  };

  return (
    <section
      className={`${styles.section} ${isSectionHovered ? styles.sectionHovered : ''}`}
      id="languages"
      aria-labelledby="langs-heading"
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
      />
      <div className={styles.videoOverlay} aria-hidden="true" />
      <div className={styles.topGradient} aria-hidden="true" />
      <div className={styles.bottomGradient} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={`${styles.badgeDot} ${isSectionHovered ? styles.badgeDotActive : ''}`} />
            <span className={styles.label}>
              {isSectionHovered ? 'STREAMING ACTIVE' : 'LANGUAGE SUPPORT'}
            </span>
          </div>

          <h2 className={styles.heading} id="langs-heading">
            Refyn speaks<br />
            <span className={styles.accent}>your language</span>
          </h2>

          <p className={styles.subheading}>
            30+ programming languages, frameworks, and config formats. If you write it, Refyn reads it.
          </p>
        </div>

        {/* Marquee Streaming Rows */}
        <div className={styles.marqueeContainer}>
          {/* Row 1: Right-to-Left */}
          <div className={`${styles.marqueeTrack} ${styles.slideRightToLeft}`}>
            {STREAM_ROW_1.map((lang, idx) => renderIconCard(lang, `r1-${idx}`))}
          </div>

          {/* Row 2: Right-to-Left */}
          <div className={`${styles.marqueeTrack} ${styles.slideRightToLeftFast}`}>
            {STREAM_ROW_2.map((lang, idx) => renderIconCard(lang, `r2-${idx}`))}
          </div>
        </div>
      </div>
    </section>
  );
}
