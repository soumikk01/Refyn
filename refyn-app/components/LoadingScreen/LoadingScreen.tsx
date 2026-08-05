'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.scss';

export default function LoadingScreen() {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.centerContainer}>
        {/* Vector Line Drawing Logo Creation Animation */}
        <div className={styles.logoWrapper}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 40 40"
            fill="none"
            className={styles.animatedSvgMark}
          >
            <defs>
              <linearGradient id="loadTealGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00ffcc" />
                <stop offset="0.5" stopColor="#00c4a7" />
                <stop offset="1" stopColor="#008f7a" />
              </linearGradient>
              <linearGradient id="loadDarkTeal" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00c4a7" />
                <stop offset="1" stopColor="#007564" />
              </linearGradient>
              <filter id="loadGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00ffcc" floodOpacity="0.8" />
              </filter>
            </defs>
            <g filter="url(#loadGlow)">
              {/* Primary Chevron Stroke Draw & Fill */}
              <path
                d="M 4 4 L 28 4 L 28 24 L 16 36 L 16 16 L 4 16 Z"
                fill="url(#loadTealGrad)"
                stroke="#00ffcc"
                strokeWidth="1.5"
                className={styles.drawPath1}
              />
              {/* Facet 2 Stroke Draw & Fill */}
              <path
                d="M 20 4 L 36 4 L 36 20 L 28 28 L 28 4 Z"
                fill="url(#loadDarkTeal)"
                stroke="#00c4a7"
                strokeWidth="1.5"
                className={styles.drawPath2}
              />
              {/* Inner Facet 3 Stroke Draw & Fill */}
              <path
                d="M 16 16 L 28 16 L 28 28 Z"
                fill="rgba(255,255,255,0.4)"
                stroke="#ffffff"
                strokeWidth="1"
                className={styles.drawPath3}
              />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
