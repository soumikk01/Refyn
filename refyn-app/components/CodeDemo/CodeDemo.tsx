'use client';

import React, { useState } from 'react';
import styles from './CodeDemo.module.scss';

// ── Sample buggy code ──────────────────────────────────────────────────────
const BUGGY_CODE = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total.toFixed(2);
}

const cart = [
  { name: "Widget", price: 9.99, qty: 3 },
  { name: "Gadget", price: 24.99, qty: 1 },
];

console.log(calculateTotal(cart));`;

// ── Refyn AI review output ─────────────────────────────────────────────────
const REVIEW_LINES = [
  { type: 'heading',  text: '🔍 Refyn Analysis — JavaScript' },
  { type: 'divider',  text: '' },
  { type: 'bug',      text: '❌ Bug found — Line 3' },
  { type: 'detail',   text: '  Off-by-one error: i <= items.length' },
  { type: 'detail',   text: '  This reads items[items.length] — undefined.' },
  { type: 'detail',   text: '  Causes: TypeError on .price access.' },
  { type: 'divider',  text: '' },
  { type: 'fix',      text: '✅ Fix — change loop condition' },
  { type: 'code',     text: '  i < items.length  // strict less-than' },
  { type: 'divider',  text: '' },
  { type: 'tip',      text: '💡 Suggestion' },
  { type: 'detail',   text: '  Use Array.reduce() for cleaner intent:' },
  { type: 'code',     text: '  items.reduce((s,i) => s + i.price*i.qty, 0)' },
  { type: 'divider',  text: '' },
  { type: 'score',    text: '📊 Code health: 74 / 100 — Minor issues' },
];

type Tab = 'input' | 'review';

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState<Tab>('input');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setActiveTab('review');
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowReview(true);
    }, 1600);
  };

  const handleReset = () => {
    setActiveTab('input');
    setShowReview(false);
    setIsAnalyzing(false);
  };

  return (
    <div className={styles.panel}>
      {/* Window chrome */}
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
        </div>
        <div className={styles.filename}>calculateTotal.js</div>
        <div className={styles.langBadge}>JavaScript</div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs} role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'input'}
          className={`${styles.tab} ${activeTab === 'input' ? styles.active : ''}`}
          onClick={() => { setActiveTab('input'); }}
        >
          Code Input
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'review'}
          className={`${styles.tab} ${activeTab === 'review' ? styles.active : ''}`}
          onClick={() => setActiveTab('review')}
        >
          AI Review
          {showReview && <span className={styles.reviewDot} />}
        </button>
      </div>

      {/* Content */}
      <div className={styles.body}>
        {activeTab === 'input' && (
          <div className={styles.codePane}>
            <pre className={styles.pre}>
              <code>
                {BUGGY_CODE.split('\n').map((line, i) => (
                  <div key={i} className={`${styles.codeLine} ${i === 2 ? styles.bugLine : ''}`}>
                    <span className={styles.lineNo}>{i + 1}</span>
                    <span className={styles.lineText}>
                      {i === 2
                        ? <>
                            {'  for (let i = 0; i '}
                            <span className={styles.bugToken}>&lt;= items.length</span>
                            {'; i++) {'}
                          </>
                        : line
                      }
                    </span>
                  </div>
                ))}
              </code>
            </pre>
            <div className={styles.analyzeBar}>
              <button className={styles.analyzeBtn} onClick={handleAnalyze}>
                <span>Analyze with Refyn</span>
                <span className={styles.btnIcon}>⚡</span>
              </button>
              <span className={styles.analyzeHint}>1 potential issue detected</span>
            </div>
          </div>
        )}

        {activeTab === 'review' && (
          <div className={styles.reviewPane}>
            {isAnalyzing ? (
              <div className={styles.loading}>
                <div className={styles.spinner} />
                <span>Refyn is analyzing your code…</span>
              </div>
            ) : showReview ? (
              <div className={styles.reviewOutput}>
                {REVIEW_LINES.map((l, i) => (
                  <div
                    key={i}
                    className={`${styles.reviewLine} ${styles[`type_${l.type}`]}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {l.type === 'divider' ? <hr className={styles.hr} /> : l.text}
                  </div>
                ))}
                <button className={styles.resetBtn} onClick={handleReset}>
                  ← Try another snippet
                </button>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span>Run the analysis first →</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
