'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.scss';

const FEATURES = [
  {
    icon: '🐛',
    title: 'Instant Bug Detection',
    description:
      'Refyn scans your code in milliseconds, identifying off-by-one errors, null pointer exceptions, type mismatches, and logic flaws before they reach production.',
    tags: ['Static analysis', 'Runtime prediction', 'Type errors'],
    gradientClass: styles.cardGradient1,
  },
  {
    icon: '🧠',
    title: 'Plain-English Explanations',
    description:
      'Every bug comes with a clear, jargon-free explanation of what went wrong, why it matters, and where the issue originates — perfect for all experience levels.',
    tags: ['Root cause', 'Impact analysis', 'Beginner-friendly'],
    gradientClass: styles.cardGradient2,
  },
  {
    icon: '🔧',
    title: 'Actionable Fix Suggestions',
    description:
      'Get concrete, copy-paste-ready code patches for every issue. Refyn doesn\'t just point at problems — it hands you the solution with an explanation of the reasoning.',
    tags: ['Code patches', 'Best practices', 'Refactoring hints'],
    gradientClass: styles.cardGradient3,
  },
  {
    icon: '🌐',
    title: '30+ Languages Supported',
    description:
      'From TypeScript and Python to Rust and Go, Refyn speaks your language. Works across front-end, back-end, systems, and data engineering stacks.',
    tags: ['TypeScript', 'Python', 'Rust', 'Go', '+26 more'],
    gradientClass: styles.cardGradient4,
  },
  {
    icon: '🔒',
    title: 'Privacy-First Architecture',
    description:
      'Your code never trains our models. All analysis runs in isolated, ephemeral sandboxes. Zero data retention by default — built for teams handling sensitive IP.',
    tags: ['No data retention', 'Ephemeral compute', 'SOC 2 ready'],
    gradientClass: styles.cardGradient5,
  },
  {
    icon: '⚡',
    title: 'CI/CD Integration',
    description:
      'Drop Refyn into your GitHub Actions, GitLab CI, or Bitbucket Pipelines workflow. Automated PR reviews with inline comments — no new tools to learn.',
    tags: ['GitHub Actions', 'GitLab CI', 'Bitbucket', 'API'],
    gradientClass: styles.cardGradient6,
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>CAPABILITIES</div>
          <h2 className={styles.heading} id="features-heading">
            Everything you need to<br />
            <span className={styles.headingAccent}>ship better code</span>
          </h2>
          <p className={styles.subheading}>
            Refyn combines static analysis, AI reasoning, and developer-centric UX
            into a single tool that actually fits your workflow.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <motion.article
              key={i}
              className={`${styles.card} ${f.gradientClass}`}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className={styles.meshOverlay} aria-hidden="true" />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
                <div className={styles.tags}>
                  {f.tags.map((t, j) => (
                    <span key={j} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}



