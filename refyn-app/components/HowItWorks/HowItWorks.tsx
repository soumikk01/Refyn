import React from 'react';
import styles from './HowItWorks.module.scss';

const STEPS = [
  {
    number: '01',
    title: 'Paste or upload your code',
    description:
      'Drop in a code snippet, upload a file, or connect your GitHub repo. Refyn accepts any format — raw pasted text, GitHub Gist links, or direct repository access via our integrations.',
    detail: 'Supports files up to 500KB · All major encodings · Works offline via CLI',
  },
  {
    number: '02',
    title: 'Refyn analyzes in seconds',
    description:
      'Our AI runs a multi-pass analysis combining static type checking, runtime flow simulation, and semantic understanding. It identifies bugs, code smells, and security vulnerabilities simultaneously.',
    detail: 'Average analysis time: 1.2 seconds · Zero false-positive tuning · OWASP Top 10 scanning',
  },
  {
    number: '03',
    title: 'Get your review & fix',
    description:
      'Receive a structured report with every issue ranked by severity. Each finding comes with an exact line reference, a plain-English explanation, and a copy-ready code fix with context.',
    detail: 'Severity ranking · Inline diffs · Export to PDF, Markdown, or JSON',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-labelledby="hiw-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>HOW IT WORKS</div>
          <h2 className={styles.heading} id="hiw-heading">
            From messy code to clean fix<br />
            in under <span className={styles.accent}>10 seconds</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.step}>
              {/* Connector line */}
              {i < STEPS.length - 1 && <div className={styles.connector} aria-hidden="true" />}

              <div className={styles.stepLeft}>
                <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
              </div>

              <div className={styles.stepRight}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <div className={styles.stepDetail}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <a href="#get-started" className={styles.ctaBtn}>
            Start your first review — it&apos;s free
          </a>
          <p className={styles.ctaNote}>No credit card required. Results in seconds.</p>
        </div>
      </div>
    </section>
  );
}
