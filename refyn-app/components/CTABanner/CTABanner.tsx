import React from 'react';
import styles from './CTABanner.module.scss';

export default function CTABanner() {
  return (
    <section className={styles.section} id="get-started" aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.card}>
          {/* Decorative blobs */}
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.label}>START FOR FREE TODAY</div>
            <h2 className={styles.heading} id="cta-heading">
              Your code deserves a<br />
              second pair of eyes
            </h2>
            <p className={styles.subtext}>
              Join over 10,000 developers who catch bugs before they ship.
              No credit card, no setup — just paste your code and go.
            </p>

            <div className={styles.actions}>
              <a href="#" className={styles.primaryBtn}>
                Analyze my code for free
                <span aria-hidden="true" className={styles.arrow}>→</span>
              </a>
              <a href="#pricing" className={styles.ghostBtn}>
                See all plans
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>10K+</span>
                <span className={styles.statLabel}>Developers</span>
              </div>
              <div className={styles.divider} aria-hidden="true" />
              <div className={styles.stat}>
                <span className={styles.statNum}>2M+</span>
                <span className={styles.statLabel}>Bugs caught</span>
              </div>
              <div className={styles.divider} aria-hidden="true" />
              <div className={styles.stat}>
                <span className={styles.statNum}>1.2s</span>
                <span className={styles.statLabel}>Avg. review time</span>
              </div>
              <div className={styles.divider} aria-hidden="true" />
              <div className={styles.stat}>
                <span className={styles.statNum}>30+</span>
                <span className={styles.statLabel}>Languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
