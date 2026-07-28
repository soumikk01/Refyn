import React from 'react';
import styles from './HeroPanel.module.scss';

const ITEMS = [
  { num: '01', label: 'AI Code Review'   },
  { num: '02', label: 'Bug Explanation'  },
  { num: '03', label: '30+ Languages'    },
];

/**
 * HeroPanel
 *
 * Boomerang-style glass card anchored to the very bottom of the hero viewport.
 * No bottom border/radius — flush to the edge.
 * Row 1: 2-col label + serif h2 / body copy (bottom-aligned).
 * Hairline divider.
 * Row 2: 3 feature chips with arrow icon.
 */
export default function HeroPanel() {
  return (
    <div className={styles.outer}>
      <div className={styles.card}>

        {/* ── Row 1: 2-column ── */}
        <div className={styles.row1}>
          <div className={styles.left}>
            <p className={styles.microLabel}>WHAT DO WE DO?</p>
            <h2 className={styles.serif}>
              Code review that<br className={styles.brSm} />
              {' '}explains itself.
            </h2>
          </div>

          <div className={styles.right}>
            <p className={styles.body}>
              AI-powered code analysis built for real developers — agents that
              catch bugs, explain root causes in plain English, and hand you
              copy-paste fixes in under a second.
            </p>
          </div>
        </div>

        {/* ── Hairline divider ── */}
        <div className={styles.divider} />

        {/* ── Row 2: 3 feature chips ── */}
        <div className={styles.row2}>
          {ITEMS.map((item) => (
            <div key={item.num} className={styles.chip}>
              <div className={styles.chipLeft}>
                <span className={styles.chipNum}>{item.num}</span>
                <span className={styles.chipSlash}>/</span>
                <span className={styles.chipLabel}>{item.label}</span>
              </div>
              {/* Arrow SVG — matches lucide ArrowRight but native so no dep */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrow}
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
