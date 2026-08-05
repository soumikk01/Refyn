import React, { useId } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'icon-only';
  showText?: boolean;
}

export default function Logo({ size = 'md', variant = 'default', showText = true }: LogoProps) {
  const heights: Record<string, number> = { sm: 28, md: 36, lg: 48, xl: 60 };
  const h = heights[size] || 36;
  const textColor = variant === 'white' ? '#ffffff' : '#ffffff';
  const idPrefix = useId().replace(/:/g, '');

  const wordGradId = `wordGrad_${idPrefix}_${variant}`;
  const tealGradId = `tealGrad_${idPrefix}_${variant}`;
  const darkTealId = `darkTeal_${idPrefix}_${variant}`;
  const glowFilterId = `glow_${idPrefix}_${variant}`;

  if (variant === 'icon-only' || !showText) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: h,
          userSelect: 'none',
        }}
      >
        <svg
          height={h}
          width={h}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Refyn Logo Icon"
        >
          <defs>
            <linearGradient id={tealGradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00ffcc" />
              <stop offset="0.5" stopColor="#00c4a7" />
              <stop offset="1" stopColor="#008f7a" />
            </linearGradient>
            <linearGradient id={darkTealId} x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00c4a7" />
              <stop offset="1" stopColor="#006b5c" />
            </linearGradient>
            <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00c4a7" floodOpacity="0.5" />
            </filter>
          </defs>
          <g filter={`url(#${glowFilterId})`}>
            <path d="M 4 4 L 28 4 L 28 24 L 16 36 L 16 16 L 4 16 Z" fill={`url(#${tealGradId})`} />
            <path d="M 20 4 L 36 4 L 36 20 L 28 28 L 28 4 Z" fill={`url(#${darkTealId})`} />
            <path d="M 16 16 L 28 16 L 28 28 Z" fill="rgba(255,255,255,0.35)" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: h,
        userSelect: 'none',
      }}
    >
      <svg
        height={h}
        viewBox="0 0 192 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Refyn"
        style={{ height: h, width: 'auto', overflow: 'visible' }}
      >
        <defs>
          {/* Dynamic unique linear gradient for wordmark */}
          <linearGradient id={wordGradId} x1="0" y1="0" x2="192" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor={textColor} />
            <stop offset="0.22" stopColor={textColor} />
            <stop offset="0.38" stopColor="#00ffcc" />
            <stop offset="0.75" stopColor="#00c4a7" />
            <stop offset="1" stopColor="#008f7a" />
          </linearGradient>

          <linearGradient id={tealGradId} x1="0" y1="0" x2="192" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00ffcc" />
            <stop offset="0.5" stopColor="#00c4a7" />
            <stop offset="1" stopColor="#008f7a" />
          </linearGradient>

          <linearGradient id={darkTealId} x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00c4a7" />
            <stop offset="1" stopColor="#007564" />
          </linearGradient>

          {/* High-end ambient drop-shadow glow filter */}
          <filter id={glowFilterId} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#00c4a7" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ── Wordmark Group with Glow ── */}
        <g filter={`url(#${glowFilterId})`}>
          {/*
            ── CONTINUOUS SINGLE-STROKE PATH FROM CAPITAL 'R' LEG TO 'y' ──
          */}
          <path
            d="
              M 6 6
              H 26
              C 32.5 6 36.5 9.5 36.5 15.5
              C 36.5 21 33 24 27.5 25
              C 31 29, 34 34.5, 42 39.5
              C 52 44.5, 72 44.5, 87 42.5
              L 94.5 36
              L 102.5 16.5
              H 98
              L 93.5 28
              L 89 16.5
              H 84.5
              L 89.8 33
              C 87.5 37, 83.5 38.5 76 38.5
              H 45
              C 37 38.5, 31 34.5, 27 27.5
              L 18.5 25.5
              H 14.5
              V 37.5
              H 6
              V 6
              Z

              M 14.5 11.5
              V 20
              H 24.5
              C 27.5 20 29 18.8 29 15.8
              C 29 12.8 27.5 11.5 24.5 11.5
              H 14.5
              Z
            "
            fill={`url(#${wordGradId})`}
          />

          {/* Letter 'e' */}
          <path
            d="M 43.5 25.5 C 43.5 19.5 47.5 15.5 53.5 15.5 C 59.5 15.5 63 19.5 63 25.5 H 48.5 C 48.5 29 50.5 31 54 31 C 56.5 31 58.3 30 59.3 28.5 L 62.5 30.5 C 60.5 33.5 57.5 35 53.5 35 C 47.3 35 43.5 31 43.5 25.5 Z M 58 22.5 C 58 20 56.5 18.5 53.5 18.5 C 50.5 18.5 49 20 48.5 22.5 H 58 Z"
            fill={textColor}
          />

          {/* Letter 'f' */}
          <path
            d="M 71.5 16.5 V 11.5 C 71.5 9 73.5 7.5 77 7.5 H 81.5 V 12 H 78 C 76.7 12 76 12.8 76 14 V 16.5 H 81.5 V 20.5 H 76 V 37.5 H 71.5 V 20.5 H 67.5 V 16.5 H 71.5 Z"
            fill={`url(#${tealGradId})`}
          />

          {/* Letter 'n' */}
          <path
            d="M 106.5 16.5 H 111 V 19.5 C 112.5 17.3 115 16 118.5 16 C 124 16 126.5 19 126.5 24.5 V 37.5 H 122 V 25.5 C 122 22 120.3 20 117 20 C 113.5 20 111 22.5 111 27 V 37.5 H 106.5 V 16.5 Z"
            fill={`url(#${tealGradId})`}
          />
        </g>

        {/* ── Refyn Geometric Double Chevron Mark ── */}
        <g transform="translate(142, 5) scale(0.92)" filter={`url(#${glowFilterId})`}>
          <path
            d="M 4 4 L 28 4 L 28 24 L 16 36 L 16 16 L 4 16 Z"
            fill={`url(#${tealGradId})`}
          />
          <path
            d="M 20 4 L 36 4 L 36 20 L 28 28 L 28 4 Z"
            fill={`url(#${darkTealId})`}
          />
          <path
            d="M 16 16 L 28 16 L 28 28 Z"
            fill="rgba(255,255,255,0.25)"
          />
        </g>
      </svg>
    </div>
  );
}
