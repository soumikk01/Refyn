'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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

const centerIndex = Math.floor(LANGS.length / 2);

interface LangCardProps {
  lang: typeof LANGS[0];
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedLangCard = ({ lang, index, centerIndex, scrollYProgress }: LangCardProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 35, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 12, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 10, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.2, 1]);

  return (
    <motion.div
      className={styles.langCard}
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        transformOrigin: 'center',
      }}
    >
      <span className={styles.langEmoji} aria-hidden="true">{lang.emoji}</span>
      <span className={styles.langName}>{lang.name}</span>
      <span className={styles.langCat}>{lang.category}</span>
    </motion.div>
  );
};

export default function Languages() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const moreScale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const moreOpacity = useTransform(scrollYProgress, [0, 0.35], [0.2, 1]);

  return (
    <section ref={sectionRef} className={styles.section} id="languages" aria-labelledby="langs-heading">
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

        {/* Language grid with 3D scroll parallax */}
        <div
          className={styles.grid}
          style={{ perspective: '500px' }}
        >
          {LANGS.map((lang, i) => (
            <AnimatedLangCard
              key={i}
              lang={lang}
              index={i}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
          <motion.div
            className={`${styles.langCard} ${styles.more}`}
            style={{
              opacity: moreOpacity,
              scale: moreScale,
            }}
          >
            <span className={styles.moreText}>+12 more</span>
            <span className={styles.moreNote}>& growing</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


