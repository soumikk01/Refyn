// Refyn logo — exact brand recreation from the provided logo image.
// "refyn" bold wordmark + teal overlapping-X geometric mark.
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

export default function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const heights: Record<string, number> = { sm: 26, md: 34, lg: 46 };
  const h = heights[size];
  const textColor = variant === 'white' ? '#ffffff' : '#0d0d0d';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', height: h, gap: 2 }}>
      {/* ── "refyn" wordmark ── */}
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: Math.round(h * 0.76),
          letterSpacing: '-0.04em',
          color: textColor,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        refyn
      </span>

      {/*
        ── Teal geometric mark ──
        The Refyn mark is two overlapping right-pointed chevrons / arrows
        stacked to form an "X"-like double-arrow symbol in teal (#00c4a7).
        The top-right arrow is darker teal to give depth.
      */}
      <svg
        width={Math.round(h * 0.95)}
        height={Math.round(h * 0.95)}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/*
          Outer shape: a right-facing arrow/chevron parallelogram,
          forming the main body of the mark.
        */}
        <path
          d="M4 4 L28 4 L28 24 L16 36 L16 16 L4 16 Z"
          fill="#00c4a7"
        />
        {/* Inner/secondary slice — darker teal overlap */}
        <path
          d="M20 4 L36 4 L36 20 L28 28 L28 4 Z"
          fill="#009e88"
        />
        {/* White notch for visual separation */}
        <path
          d="M16 16 L28 16 L28 28 Z"
          fill="rgba(255,255,255,0.22)"
        />
      </svg>
    </div>
  );
}
