'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.scss';

const DISMISS_MS = 2400;

interface SplashScreenProps {
  onDone?: () => void;
}

export default function SplashScreen({ onDone }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDone?.(), 580);
    }, DISMISS_MS);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          {/* ── Only the logo mark drawing animation, centered ── */}
          <div className={styles.center}>
            <div className={styles.markWrap}>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.markSvg}
                aria-label="Refyn"
              >
                <defs>
                  <linearGradient id="sp_teal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00ffcc" />
                    <stop offset="0.5" stopColor="#00c4a7" />
                    <stop offset="1" stopColor="#008f7a" />
                  </linearGradient>
                  <linearGradient id="sp_dark" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00c4a7" />
                    <stop offset="1" stopColor="#006b5c" />
                  </linearGradient>
                  <filter id="sp_glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00ffcc" floodOpacity="0.9" />
                  </filter>
                </defs>

                <g filter="url(#sp_glow)">
                  {/* Facet 1 — large chevron */}
                  <path
                    d="M 4 4 L 28 4 L 28 24 L 16 36 L 16 16 L 4 16 Z"
                    fill="url(#sp_teal)"
                    stroke="#00ffcc"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                    className={styles.path1}
                  />
                  {/* Facet 2 — accent panel */}
                  <path
                    d="M 20 4 L 36 4 L 36 20 L 28 28 L 28 4 Z"
                    fill="url(#sp_dark)"
                    stroke="#00c4a7"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                    className={styles.path2}
                  />
                  {/* Facet 3 — inner triangle highlight */}
                  <path
                    d="M 16 16 L 28 16 L 28 28 Z"
                    fill="rgba(255,255,255,0.42)"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                    className={styles.path3}
                  />
                </g>
              </svg>

              {/* Spinning ring */}
              <div className={styles.spinRing} aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
