'use client';

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TypeScriptIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="tsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3178C6" />
        <stop offset="100%" stopColor="#1E4F8A" />
      </linearGradient>
      <filter id="tsGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3178C6" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect width="128" height="128" rx="28" fill="url(#tsGrad)" filter="url(#tsGlow)" />
    <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    <path fill="#FFFFFF" d="M66.4 56.6h17v8.9h-17v38.8h-11V65.5h-17v-8.9h45zm38.7 13.9c-2.4-1.8-6.1-3.4-11-4.7-4.1-1.1-6.7-2.2-7.8-3.3-1.1-1.1-1.6-2.5-1.6-4.1 0-2.1.8-3.7 2.5-4.9 1.7-1.2 4.1-1.8 7.3-1.8 3.5 0 6.6.7 9.3 2.1 2.7 1.4 4.7 3.5 6 6.3l9.2-5.7c-2.3-4.2-5.7-7.4-10.2-9.6-4.5-2.2-9.9-3.3-16.1-3.3-6.1 0-11.2 1.3-15.3 4-4.1 2.7-6.2 6.7-6.2 12.1 0 4.1 1.2 7.4 3.7 9.8 2.5 2.4 6.7 4.5 12.6 6.3 4.8 1.4 8.1 2.7 9.9 3.8 1.8 1.1 2.7 2.6 2.7 4.6 0 2.2-1 4-2.9 5.2-1.9 1.2-4.7 1.8-8.2 1.8-4.4 0-8.2-1.1-11.6-3.2-3.4-2.1-5.9-5.3-7.5-9.6l-9.6 5.4c2.5 5.7 6.4 10.1 11.9 13.1 5.5 3 11.9 4.5 19.3 4.5 7.1 0 12.9-1.4 17.5-4.2 4.6-2.8 6.9-7.1 6.9-12.8 0-4.3-1.3-7.8-3.9-10.3z" />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="jsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7DF1E" />
        <stop offset="100%" stopColor="#D4BC00" />
      </linearGradient>
      <filter id="jsGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F7DF1E" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect width="128" height="128" rx="28" fill="url(#jsGrad)" filter="url(#jsGlow)" />
    <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <path fill="#000000" d="M68.7 89.2c2.5 4.3 6.1 7.2 11.7 7.2 4.9 0 8.1-2.4 8.1-5.9 0-4.1-3.3-5.6-8.9-8l-3.1-1.3c-8.9-3.8-14.8-8.5-14.8-18.6 0-9.2 7.1-16.2 18.2-16.2 7.9 0 13.5 2.8 17.6 10.1l-8.6 5.5c-2.3-4.1-5.3-5.7-9-5.7-3.7 0-6.1 2.3-6.1 5.2 0 3.6 2.3 5 7.6 7.3l3.1 1.3c10.4 4.5 16.3 9.1 16.3 19.3 0 11-8.5 16.9-20.5 16.9-11.4 0-18.5-5.6-22.3-13.3l10.7-5.8zm-39.6.9c1.9 3.3 4.3 6.1 8.8 6.1 4.5 0 7.3-1.8 7.3-8.8V47h12.5v40.7c0 13.8-8.1 20-19.7 20-9.6 0-15.6-4.9-18.7-11.4l9.8-6.2z" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#1E4976" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#FFE873" />
      </linearGradient>
      <filter id="pyGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3776AB" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#pyGlow)">
      <path fill="url(#pyBlue)" d="M63.1 12c-27.8 0-26.1 12.1-26.1 12.1l.1 12.5h26.7v3.8H26.3S12 38.8 12 66.9c0 28.1 12.5 27.1 12.5 27.1h7.5V81.3s-.4-15.1 14.8-15.1h25.7s14.3.2 14.3-14.1V26.3S88.3 12 63.1 12zm-14.4 9.1c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z" />
      <path fill="url(#pyYellow)" d="M64.9 116c27.8 0 26.1-12.1 26.1-12.1l-.1-12.5H64.2v-3.8h37.5s14.3 1.6 14.3-26.5c0-28.1-12.5-27.1-12.5-27.1h-7.5v12.7s.4 15.1-14.8 15.1H55.5s-14.3-.2-14.3 14.1v25.8S39.7 116 64.9 116zm14.4-9.1c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z" />
    </g>
  </svg>
);

export const RustIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F74C00" />
        <stop offset="100%" stopColor="#CE412B" />
      </linearGradient>
      <filter id="rustGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F74C00" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#rustGlow)">
      <circle cx="64" cy="64" r="56" fill="#18181B" stroke="url(#rustGrad)" strokeWidth="6" />
      {/* Gear Teeth around circle */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <rect
          key={deg}
          x="60"
          y="2"
          width="8"
          height="8"
          rx="2"
          fill="url(#rustGrad)"
          transform={`rotate(${deg} 64 64)`}
        />
      ))}
      <path fill="url(#rustGrad)" d="M42 40h22c8.8 0 15 4.5 15 12 0 5.4-3.4 9.6-8.6 11.2l9.8 24.8H67.8L59.2 66H42v22H30V40h12zm0 14v12h10c3.5 0 5.8-1.8 5.8-6s-2.3-6-5.8-6H42z" />
    </g>
  </svg>
);

export const GoIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ADD8" />
        <stop offset="100%" stopColor="#007A99" />
      </linearGradient>
      <filter id="goGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00ADD8" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect width="128" height="128" rx="28" fill="url(#goGrad)" filter="url(#goGlow)" />
    <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path fill="#FFFFFF" d="M16 61.5c.2-7 2.3-13.8 6.5-19.5 7.4-10 19.3-14.7 31.4-12.4 8.7 1.6 16.2 6.8 20.8 14.3L64.5 49c-3.1-4.7-8.3-7.7-13.9-8-7.5-.4-14.6 3.8-17.7 10.7-3.1 6.8-1.9 14.8 3 20.4 4.8 5.5 12.4 7.6 19.3 5.3 4.4-1.5 8-4.8 10-9H48.4V57.6h33.8v4.2c-.3 10.4-5.4 20-13.9 26.1-9.4 6.8-22 8.4-32.9 4.3C24.7 88.1 16.9 75.8 16 61.5zm96-17v8.5H97.5v11H112v8.5H97.5V85H86V44.5h26z" />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="javaRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EA2D2E" />
        <stop offset="100%" stopColor="#B30507" />
      </linearGradient>
      <linearGradient id="javaBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5382A1" />
        <stop offset="100%" stopColor="#007396" />
      </linearGradient>
      <filter id="javaGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#EA2D2E" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#javaGlow)">
      <path fill="url(#javaBlue)" d="M57 18.5s-7.8 7.3-3.6 15.6c4.6 9 12.8 13.2 4.4 22.8-5 5.8-9.4 6.2-9.4 6.2s8.5-3.3 11-10c3.2-8.5-2.6-13.7-6.2-18-5.3-6.2-1.7-12.7 3.8-16.6zM69.8 28.5s-6.2 5.5-2.9 12.5c3.6 7.8 10.3 11.5 3.5 19-4 4.5-7.5 4.9-7.5 4.9s6.8-2.6 8.8-8c2.6-6.7-2.1-10.9-5-14.3-4.2-4.9-1.3-10.1 3.1-14.1z" />
      <path fill="url(#javaRed)" d="M42.2 73.8s-7.4 1.8-12 2.2c-7.2.7 2.4 4.3 8.3 4 15.4-.8 33-2.1 43.8-6.8 0 0-3.3 2.1-10.7 3.7-13.2 2.9-32.9 3.5-44.2.7-4.1-1-6.5-2.8 1.4-3.8 9-1.2 13.4 0 13.4 0zm-7.6 12s-8.8 2.2-14 2.8c-8.4 1 3 5 9.8 4.7 17.8-.8 38.2-2.7 50.8-8.2 0 0-4.1 2.5-12.6 4.4-15.3 3.4-38.1 4.1-51.2.9-4.8-1.2-7.5-3.3 1.6-4.5 10.4-1.3 15.6-.1 15.6-.1zm41.2 11.6c-18.7 5.7-47.5 6-60.8.5-2.7-1.1 3.9-3.7 9.8-4 13.5-.8 30.5-.3 45.4-2.8 0 0-3.8 1.6-10.1 2.5-12.8 1.9-31.5 2.5-41.9.9-7.3-1.1-1.3-3.6 4-4.3 16.5-2 39.8-3.4 53.6.4 5.9 1.6 9.8 4.4 0 6.8z" />
      <path fill="url(#javaBlue)" d="M82.8 82.2s4.8-1.2 7.7-4.5c2.6-3 2.8-6.8 2.8-6.8s.5 3.3-2 6c-3.1 3.4-8.5 5.3-8.5 5.3z" />
    </g>
  </svg>
);

export const CPlusPlusIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="cppGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00599C" />
        <stop offset="100%" stopColor="#003366" />
      </linearGradient>
      <filter id="cppGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00599C" floodOpacity="0.5" />
      </filter>
    </defs>
    <path fill="url(#cppGrad)" filter="url(#cppGlow)" d="M64 8l50 28.8v57.6L64 120 14 94.4V36.8L64 8z" />
    <path stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" d="M64 12l46 26.5v53L64 116 18 91.5v-53L64 12z" />
    <path fill="#FFFFFF" d="M50 78c-10 0-16.5-6.5-16.5-14s6.5-14 16.5-14c6.2 0 11.2 2.8 13.8 7.5l-6.8 3.8c-1.3-2.6-3.8-4.2-7-4.2-4.8 0-8.2 3.4-8.2 6.9s3.4 6.9 8.2 6.9c3.2 0 5.7-1.6 7-4.2l6.8 3.8C61.2 75.2 56.2 78 50 78zm24-18h5v-5h5v5h5v5h-5v5h-5v-5h-5v-5zm20 0h5v-5h5v5h5v5h-5v5h-5v-5h-5v-5z" />
  </svg>
);

export const CSharpIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#68217A" />
        <stop offset="100%" stopColor="#381142" />
      </linearGradient>
      <filter id="csGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#68217A" floodOpacity="0.5" />
      </filter>
    </defs>
    <path fill="url(#csGrad)" filter="url(#csGlow)" d="M64 8l50 28.8v57.6L64 120 14 94.4V36.8L64 8z" />
    <path stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" d="M64 12l46 26.5v53L64 116 18 91.5v-53L64 12z" />
    <path fill="#FFFFFF" d="M50 78c-10 0-16.5-6.5-16.5-14s6.5-14 16.5-14c6.2 0 11.2 2.8 13.8 7.5l-6.8 3.8c-1.3-2.6-3.8-4.2-7-4.2-4.8 0-8.2 3.4-8.2 6.9s3.4 6.9 8.2 6.9c3.2 0 5.7-1.6 7-4.2l6.8 3.8C61.2 75.2 56.2 78 50 78zm21-2.5l1.8-6.5h-5.2l-1.8 6.5h-4.2l1.8-6.5h-3.8v-3.8h4.8l1.5-5.2h-4.8v-3.8h5.9l1.8-6.5h4.2l-1.8 6.5h5.2l1.8-6.5h4.2l-1.8 6.5h3.8v3.8h-4.8l-1.5 5.2h4.8v3.8h-5.9l-1.8 6.5h-4.2zm1.8-10.3l1.5-5.2h-5.2l-1.5 5.2h5.2z" />
  </svg>
);

export const RubyIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rubyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0115F" />
        <stop offset="100%" stopColor="#800020" />
      </linearGradient>
      <filter id="rubyGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#E0115F" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#rubyGlow)">
      <path fill="url(#rubyGrad)" d="M38 18l52 0l24 28l-52 70l-52 -70z" />
      <path fill="rgba(255,255,255,0.3)" d="M38 18l26 28l-26 70l-24 -70z" />
      <path fill="rgba(255,255,255,0.5)" d="M38 18l26 28l26 -28z" />
      <path fill="rgba(255,255,255,0.2)" d="M64 46l26 -28l24 28z" />
    </g>
  </svg>
);

export const PHPIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="phpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#777BB4" />
        <stop offset="100%" stopColor="#4F5B93" />
      </linearGradient>
      <filter id="phpGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#777BB4" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect width="128" height="80" y="24" rx="40" fill="url(#phpGrad)" filter="url(#phpGlow)" />
    <rect x="2" y="26" width="124" height="76" rx="38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path fill="#FFFFFF" d="M36 44h-9l-7 40h9l2.8-16h6.5c7 0 11.7-4.2 12.8-11 1.1-6.5-2.6-13-15.1-13zm-1.8 16h-5.2l2.3-10h5.2c3.8 0 5 1.8 4.4 5-.5 3-2.6 5-6.7 5zm37-16h-9l-7 40h9l2.8-16h7.5l-2.8 16h9l7-40h-9l-2.8 16h-7.5l2.8-16zm36 0h-9l-7 40h9l2.8-16h6.5c7 0 11.7-4.2 12.8-11 1.1-6.5-2.6-13-15.1-13zm-1.8 16h-5.2l2.3-10h5.2c3.8 0 5 1.8 4.4 5-.5 3-2.6 5-6.7 5z" />
  </svg>
);

export const SwiftIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="swiftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F05138" />
        <stop offset="100%" stopColor="#F78A1D" />
      </linearGradient>
      <filter id="swiftGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F05138" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect width="128" height="128" rx="28" fill="url(#swiftGrad)" filter="url(#swiftGlow)" />
    <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path fill="#FFFFFF" d="M106.8 90.6C89 110.2 56 112 36.8 94c25.4 6 46.5-7.5 54.4-15.8-21.2 5.5-40-7-48-18.7 15.6 4.3 32.5-.5 39.5-6.6-26.6-.5-45.7-22.3-43-39.7 1 12 10.6 22 23 25-10.4-10-14.8-25.2-10-38.2 12.8 17 33.6 28 54.2 28.5 0 0-4.6 15-2.2 21.2 12-14.3 19.8-33 19.8-33s-3.5 12-10.2 22.8c12.2-7 19.2-18 19.2-18s-3.8 24-26.7 49.8z" />
  </svg>
);

export const KotlinIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ktGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7F52FF" />
        <stop offset="50%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#E44857" />
      </linearGradient>
      <filter id="ktGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#7F52FF" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#ktGlow)">
      <rect width="128" height="128" rx="28" fill="url(#ktGrad)" />
      <path fill="#FFFFFF" d="M112 112H16V16h96L64 64l48 48z" opacity="0.15" />
      <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    </g>
  </svg>
);

export const ScalaIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="scalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC322F" />
        <stop offset="100%" stopColor="#800000" />
      </linearGradient>
      <filter id="scalaGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#DC322F" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#scalaGlow)">
      <path fill="url(#scalaGrad)" d="M24 20c40 0 80 12 80 20s-40 20-80 20v-40z" />
      <path fill="url(#scalaGrad)" opacity="0.8" d="M24 54c40 0 80 12 80 20s-40 20-80 20v-40z" />
      <path fill="url(#scalaGrad)" opacity="0.6" d="M24 88c40 0 80 12 80 20s-40 20-80 20v-40z" />
    </g>
  </svg>
);

export const RIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#276DC3" />
        <stop offset="100%" stopColor="#16519B" />
      </linearGradient>
      <filter id="rGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#276DC3" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#rGlow)">
      <ellipse cx="64" cy="56" rx="52" ry="32" fill="none" stroke="#B8C6D6" strokeWidth="12" />
      <ellipse cx="64" cy="56" rx="52" ry="32" fill="none" stroke="url(#rGrad)" strokeWidth="6" />
      <path fill="#276DC3" d="M42 36h26c14 0 22 6 22 15 0 8-7 14-17 15l18 26H76L61 68H54v24H42V36zm12 10v13h13c5 0 9-2 9-6.5s-4-6.5-9-6.5H54z" />
    </g>
  </svg>
);

export const SQLIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="sqlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00758F" />
        <stop offset="100%" stopColor="#F29111" />
      </linearGradient>
      <filter id="sqlGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00758F" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#sqlGlow)">
      {/* Cylinders for DB */}
      <ellipse cx="64" cy="30" rx="44" ry="16" fill="#00758F" stroke="#33B5E5" strokeWidth="3" />
      <path fill="#005B70" stroke="#33B5E5" strokeWidth="3" d="M20 30v24c0 8.8 19.7 16 44 16s44-7.2 44-16V30" />
      <ellipse cx="64" cy="54" rx="44" ry="16" fill="none" stroke="#33B5E5" strokeWidth="3" />
      <path fill="#004150" stroke="#33B5E5" strokeWidth="3" d="M20 54v24c0 8.8 19.7 16 44 16s44-7.2 44-16V54" />
      <ellipse cx="64" cy="78" rx="44" ry="16" fill="none" stroke="#33B5E5" strokeWidth="3" />
      <text x="64" y="112" textAnchor="middle" fill="#F29111" fontSize="22" fontWeight="800" fontFamily="sans-serif">SQL</text>
    </g>
  </svg>
);

export const ShellIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="shGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4EAA25" />
        <stop offset="100%" stopColor="#2E6B12" />
      </linearGradient>
      <filter id="shGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4EAA25" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect width="128" height="100" y="14" rx="16" fill="#18181B" stroke="url(#shGrad)" strokeWidth="4" filter="url(#shGlow)" />
    <path fill="rgba(255,255,255,0.1)" d="M2 14h124v20H2z" />
    <circle cx="16" cy="24" r="4" fill="#FF5F56" />
    <circle cx="28" cy="24" r="4" fill="#FFBD2E" />
    <circle cx="40" cy="24" r="4" fill="#27C93F" />
    <path fill="#4EAA25" d="M24 50l16 14-16 14v-6l9-8-9-8v-6zm20 22h24v6H44v-6z" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="dockerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2496ED" />
        <stop offset="100%" stopColor="#0DB7ED" />
      </linearGradient>
      <filter id="dockerGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2496ED" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#dockerGlow)">
      {/* Containers */}
      <rect x="42" y="42" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="58" y="42" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="74" y="42" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="26" y="56" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="42" y="56" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="58" y="56" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="74" y="56" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="90" y="56" width="14" height="12" rx="2" fill="#2496ED" />
      <rect x="58" y="28" width="14" height="12" rx="2" fill="#2496ED" />
      {/* Whale body */}
      <path fill="url(#dockerGrad)" d="M120 68c-4 0-10 2-14 6-8-4-18-5-28-3-6-16-24-17-24-17H12v22c0 18 14.3 32 32 32 30 0 54-14 66-32 3 0 7-3 10-8z" />
      <circle cx="28" cy="80" r="3" fill="#FFFFFF" />
    </g>
  </svg>
);

export const TerraformIcon: React.FC<IconProps> = ({ className, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="tfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#844FBA" />
        <stop offset="100%" stopColor="#5C2D91" />
      </linearGradient>
      <filter id="tfGlow">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#844FBA" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#tfGlow)">
      <path fill="url(#tfGrad)" d="M22 22l38 22v44L22 66V22z" />
      <path fill="#844FBA" opacity="0.8" d="M64 46l38-22v44l-38 22V46z" />
      <path fill="#5C2D91" d="M64 94l38-22v44l-38 22V94z" />
      <path fill="url(#tfGrad)" opacity="0.6" d="M22 70l38 22v44L22 114V70z" />
    </g>
  </svg>
);

// Map matching names to SVG components
export const ICON_MAP: Record<string, React.FC<IconProps>> = {
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  Python: PythonIcon,
  Rust: RustIcon,
  Go: GoIcon,
  Java: JavaIcon,
  'C++': CPlusPlusIcon,
  'C#': CSharpIcon,
  Ruby: RubyIcon,
  PHP: PHPIcon,
  Swift: SwiftIcon,
  Kotlin: KotlinIcon,
  Scala: ScalaIcon,
  R: RIcon,
  SQL: SQLIcon,
  Shell: ShellIcon,
  Dockerfile: DockerIcon,
  Terraform: TerraformIcon,
};
