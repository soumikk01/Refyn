import React from 'react';
import styles from './Languages.module.scss';

const LANGS = [
  { name: 'TypeScript',  emoji: '🟦', category: 'Frontend' },
  { name: 'JavaScript',  emoji: '🟨', category: 'Frontend' },
  { name: 'Python',      emoji: '🐍', category: 'Backend'  },
  { name: 'Rust',        emoji: '🦀', category: 'Systems'  },
  { name: 'Go',          emoji: '🐹', category: 'Backend'  },
  { name: 'Java',        emoji: '☕', category: 'Enterprise' },
  { name: 'C++',         emoji: '⚙️', category: 'Systems'  },
  { name: 'C#',          emoji: '💜', category: 'Enterprise' },
  { name: 'Ruby',        emoji: '💎', category: 'Backend'  },
  { name: 'PHP',         emoji: '🐘', category: 'Backend'  },
  { name: 'Swift',       emoji: '🍎', category: 'Mobile'   },
  { name: 'Kotlin',      emoji: '🟠', category: 'Mobile'   },
  { name: 'Scala',       emoji: '🔴', category: 'Data'     },
  { name: 'R',           emoji: '📊', category: 'Data'     },
  { name: 'SQL',         emoji: '🗄️', category: 'Data'     },
  { name: 'Shell',       emoji: '🖥️', category: 'DevOps'   },
  { name: 'Dockerfile',  emoji: '🐳', category: 'DevOps'   },
  { name: 'Terraform',   emoji: '🏗️', category: 'DevOps'   },
];

export default function Languages() {
  return (
    <section className={styles.section} id="languages" aria-labelledby="langs-heading">
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

      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className={styles.label}>LANGUAGE SUPPORT</div>
          <h2 className={styles.heading} id="langs-heading">
            Refyn speaks<br />
            <span className={styles.accent}>your language</span>
          </h2>
          <p className={styles.subheading}>
            30+ programming languages, frameworks, and config formats. If you write it, Refyn reads it.
          </p>
        </div>

        {/* Language grid */}
        <div className={styles.grid}>
          {LANGS.map((lang, i) => (
            <div key={i} className={styles.langCard}>
              <span className={styles.langEmoji} aria-hidden="true">{lang.emoji}</span>
              <span className={styles.langName}>{lang.name}</span>
              <span className={styles.langCat}>{lang.category}</span>
            </div>
          ))}
          <div className={`${styles.langCard} ${styles.more}`}>
            <span className={styles.moreText}>+12 more</span>
            <span className={styles.moreNote}>& growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

