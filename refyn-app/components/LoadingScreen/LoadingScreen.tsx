'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.scss';

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message }: LoadingScreenProps) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Only the logo mark — no text, perfectly centered */}
      <div className={styles.centerContainer}>
        <div className={styles.logoWrapper}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 40 40"
            fill="none"
            className={styles.animatedSvgMark}
            aria-label="Refyn"
          >
            <defs>
              <linearGradient id="ls_tealGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00ffcc" />
                <stop offset="0.5" stopColor="#00c4a7" />
                <stop offset="1" stopColor="#008f7a" />
              </linearGradient>
              <linearGradient id="ls_darkTeal" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00c4a7" />
                <stop offset="1" stopColor="#007564" />
              </linearGradient>
              <filter id="ls_glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00ffcc" floodOpacity="0.9" />
              </filter>
            </defs>
            <g filter="url(#ls_glow)">
              <path
                d="M 4 4 L 28 4 L 28 24 L 16 36 L 16 16 L 4 16 Z"
                fill="url(#ls_tealGrad)"
                stroke="#00ffcc"
                strokeWidth="1.2"
                strokeLinejoin="round"
                className={styles.drawPath1}
              />
              <path
                d="M 20 4 L 36 4 L 36 20 L 28 28 L 28 4 Z"
                fill="url(#ls_darkTeal)"
                stroke="#00c4a7"
                strokeWidth="1.2"
                strokeLinejoin="round"
                className={styles.drawPath2}
              />
              <path
                d="M 16 16 L 28 16 L 28 28 Z"
                fill="rgba(255,255,255,0.42)"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="0.8"
                strokeLinejoin="round"
                className={styles.drawPath3}
              />
            </g>
          </svg>

          {/* Thin spinning ring */}
          <div className={styles.spinRing} aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
}
