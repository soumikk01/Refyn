'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './LiveEditor.module.scss';

/* ─────────────────────────────────────────────────
   SVG Icons — crisp monochrome SVGs matching VS Code
───────────────────────────────────────────────── */

const IconExplorer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconGit = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

const IconDebug = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c3.31 0 6-2.69 6-6v-4l2-2-2-2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2L4 10l2 2v4c0 3.31 2.69 6 6 6z" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconExtensions = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="9" height="9" rx="1.5" />
    <rect x="13" y="2" width="9" height="9" rx="1.5" />
    <rect x="2" y="13" width="9" height="9" rx="1.5" />
    <path d="M13 18.5h4m-2-2v4" />
  </svg>
);

const IconFileTs = ({ active = false }: { active?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3" fill={active ? '#3178c6' : '#3178c620'} />
    <text x="3" y="17" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#fff">TS</text>
  </svg>
);

const IconFolder = ({ open = false }: { open?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={open ? '#e8a020' : '#c08020'}>
    {open
      ? <path d="M2 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2H2V6zm0 6h20l-2 8H4L2 12z" />
      : <path d="M2 6a2 2 0 0 1 2-2h4l2 2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
    }
  </svg>
);

const IconChevron = ({ open = true }: { open?: boolean }) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points={open ? '6 9 12 15 18 9' : '9 18 15 12 9 6'} />
  </svg>
);

const IconSparkle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c4a7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const IconGitBranch = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const IconError = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const IconWarning = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const IconClose = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconShield = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBell = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

/* ─────────────────────────────────────────────────
   Code frames — each frame is a "snapshot" of code
   Lines alternate between normal, buggy, and fixed states
───────────────────────────────────────────────── */
interface CodeLine {
  tokens: { text: string; cls: string }[];
  lineNo: number;
  state?: 'normal' | 'bug' | 'fix' | 'dim';
}

const FRAME_BEFORE: CodeLine[] = [
  {
    lineNo: 1, state: 'dim',
    tokens: [{ text: '// Fetch user data with no error handling', cls: 'cm' }]
  },
  {
    lineNo: 2, state: 'normal',
    tokens: [
      { text: 'async', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'function', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'fetchUser', cls: 'fn' },
      { text: '(', cls: 'pu' }, { text: 'id', cls: 'va' }, { text: ') {', cls: 'pu' },
    ]
  },
  {
    lineNo: 3, state: 'bug',
    tokens: [
      { text: '  ', cls: '' },
      { text: 'const', cls: 'kw' }, { text: ' res = ', cls: '' },
      { text: 'await', cls: 'kw' }, { text: ' fetch(', cls: 'pu' },
      { text: '`/api/users/${', cls: 'st' }, { text: 'id', cls: 'va' }, { text: '}`', cls: 'st' },
      { text: ');', cls: 'pu' },
    ]
  },
  {
    lineNo: 4, state: 'bug',
    tokens: [
      { text: '  ', cls: '' },
      { text: 'return', cls: 'kw' }, { text: ' res.', cls: '' },
      { text: 'json', cls: 'fn' }, { text: '();', cls: 'pu' },
    ]
  },
  {
    lineNo: 5, state: 'normal',
    tokens: [{ text: '}', cls: 'pu' }]
  },
  {
    lineNo: 6, state: 'normal',
    tokens: []
  },
  {
    lineNo: 7, state: 'normal',
    tokens: [
      { text: 'const', cls: 'kw' }, { text: ' user = ', cls: '' },
      { text: 'await', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'fetchUser', cls: 'fn' },
      { text: '(', cls: 'pu' }, { text: '42', cls: 'nu' }, { text: ');', cls: 'pu' },
    ]
  },
  {
    lineNo: 8, state: 'bug',
    tokens: [
      { text: 'console', cls: 'va' }, { text: '.', cls: 'pu' },
      { text: 'log', cls: 'fn' }, { text: '(', cls: 'pu' },
      { text: 'user.name', cls: 'va' }, { text: ');', cls: 'pu' },
    ]
  },
];

const FRAME_AFTER: CodeLine[] = [
  {
    lineNo: 1, state: 'dim',
    tokens: [{ text: '// ✅ Fetch user data with proper error handling', cls: 'cm' }]
  },
  {
    lineNo: 2, state: 'normal',
    tokens: [
      { text: 'async', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'function', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'fetchUser', cls: 'fn' },
      { text: '(', cls: 'pu' }, { text: 'id', cls: 'va' }, { text: ') {', cls: 'pu' },
    ]
  },
  {
    lineNo: 3, state: 'fix',
    tokens: [
      { text: '  ', cls: '' },
      { text: 'try', cls: 'kw' }, { text: ' {', cls: 'pu' },
    ]
  },
  {
    lineNo: 4, state: 'fix',
    tokens: [
      { text: '    ', cls: '' },
      { text: 'const', cls: 'kw' }, { text: ' res = ', cls: '' },
      { text: 'await', cls: 'kw' }, { text: ' fetch(', cls: 'pu' },
      { text: '`/api/users/${', cls: 'st' }, { text: 'id', cls: 'va' }, { text: '}`', cls: 'st' },
      { text: ');', cls: 'pu' },
    ]
  },
  {
    lineNo: 5, state: 'fix',
    tokens: [
      { text: '    ', cls: '' },
      { text: 'if', cls: 'kw' }, { text: ' (!res.', cls: '' },
      { text: 'ok', cls: 'fn' }, { text: ') ', cls: 'pu' },
      { text: 'throw', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'new', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'Error', cls: 'fn' },
      { text: '(`HTTP ${res.status}`);', cls: 'pu' },
    ]
  },
  {
    lineNo: 6, state: 'fix',
    tokens: [
      { text: '    ', cls: '' },
      { text: 'return', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'await', cls: 'kw' }, { text: ' res.', cls: '' },
      { text: 'json', cls: 'fn' }, { text: '();', cls: 'pu' },
    ]
  },
  {
    lineNo: 7, state: 'fix',
    tokens: [
      { text: '  } ', cls: 'pu' },
      { text: 'catch', cls: 'kw' },
      { text: ' (err) {', cls: 'pu' },
    ]
  },
  {
    lineNo: 8, state: 'fix',
    tokens: [
      { text: '    ', cls: '' },
      { text: 'console', cls: 'va' }, { text: '.', cls: 'pu' },
      { text: 'error', cls: 'fn' },
      { text: '(', cls: 'pu' }, { text: '"fetchUser failed:"', cls: 'st' },
      { text: ', err);', cls: 'pu' },
    ]
  },
  {
    lineNo: 9, state: 'fix',
    tokens: [
      { text: '    ', cls: '' },
      { text: 'return', cls: 'kw' }, { text: ' ', cls: '' },
      { text: 'null', cls: 'kw' }, { text: ';', cls: 'pu' },
    ]
  },
  {
    lineNo: 10, state: 'fix',
    tokens: [{ text: '  }', cls: 'pu' }]
  },
  {
    lineNo: 11, state: 'normal',
    tokens: [{ text: '}', cls: 'pu' }]
  },
];

/* AI analysis messages that typewrite in */
const AI_MESSAGES = [
  {
    id: 'bug1',
    severity: 'critical',
    icon: 'critical',
    title: 'Missing error handling on fetch()',
    line: 'Line 3–4',
    body: 'Network errors and non-2xx responses are silently swallowed. Add try/catch and check response.ok.',
  },
  {
    id: 'bug2',
    severity: 'warning',
    icon: 'warning',
    title: 'Possible null dereference',
    line: 'Line 8',
    body: 'user.name accessed without null guard — fetchUser can return undefined on network failure.',
  },
  {
    id: 'fix',
    severity: 'success',
    icon: 'success',
    title: 'Refyn applied 2 fixes',
    line: '1.2s analysis',
    body: 'Added try/catch, response.ok guard, and null-safe return. Code is now production-safe.',
  },
];

/* Stages of the demo loop */
type Stage = 'idle' | 'scanning' | 'found' | 'fixing' | 'done';

const TOKEN_CLASS: Record<string, string> = {
  kw: styles.tkKw, fn: styles.tkFn, st: styles.tkSt,
  nu: styles.tkNu, cm: styles.tkCm, va: styles.tkVa,
  pu: styles.tkPu, '': '',
};

/* Traffic light icon symbols shown on hover */
const TrafficLights = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.trafficLights}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={`${styles.dot} ${styles.dotRed}`}>
        {hovered && <span className={styles.dotSymbol}>×</span>}
      </span>
      <span className={`${styles.dot} ${styles.dotYellow}`}>
        {hovered && <span className={styles.dotSymbol}>−</span>}
      </span>
      <span className={`${styles.dot} ${styles.dotGreen}`}>
        {hovered && <span className={styles.dotSymbol}>+</span>}
      </span>
    </div>
  );
};

function CodeLineComp({ line, animate = false }: { line: CodeLine; animate?: boolean }) {
  const stateClass = line.state === 'bug' ? styles.lineBug
    : line.state === 'fix' ? styles.lineFix
    : line.state === 'dim' ? styles.lineDim
    : styles.lineNormal;

  return (
    <div className={`${styles.codeLine} ${stateClass} ${animate ? styles.lineAnimate : ''}`}>
      <span className={styles.lineNo}>{line.lineNo}</span>
      <span className={styles.lineContent}>
        {line.tokens.map((t, i) => (
          <span key={i} className={TOKEN_CLASS[t.cls] || ''}>{t.text}</span>
        ))}
      </span>
    </div>
  );
}

function ScanBeam({ active }: { active: boolean }) {
  return (
    <div className={`${styles.scanBeam} ${active ? styles.scanActive : ''}`} aria-hidden="true" />
  );
}

/* Severity dot icon */
function SeverityDot({ type }: { type: string }) {
  if (type === 'critical') return <span className={`${styles.severityDot} ${styles.dotCritical}`} />;
  if (type === 'warning')  return <span className={`${styles.severityDot} ${styles.dotWarning}`} />;
  return (
    <span className={`${styles.severityDot} ${styles.dotSuccess}`}>
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
        <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export default function LiveEditor() {
  const [stage, setStage] = useState<Stage>('idle');
  const [shownMessages, setShownMessages] = useState<number>(0);
  const [showFixed, setShowFixed] = useState(false);
  const [cursorLine, setCursorLine] = useState(1);
  const [scanLine, setScanLine] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const delay = useCallback((ms: number) => new Promise<void>(r => {
    timerRef.current = setTimeout(r, ms);
  }), []);

  const runDemo = useCallback(async () => {
    setStage('idle');
    setShownMessages(0);
    setShowFixed(false);
    setScanLine(0);
    setCursorLine(3);
    await delay(1200);

    setStage('scanning');
    for (let l = 0; l <= 8; l++) {
      setScanLine(l);
      await delay(90);
    }
    await delay(300);

    setStage('found');
    await delay(400);
    setShownMessages(1);
    await delay(700);
    setShownMessages(2);
    await delay(1200);

    setStage('fixing');
    await delay(600);
    setShowFixed(true);
    await delay(800);

    setStage('done');
    setShownMessages(3);
    await delay(4000);

    runDemo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => runDemo(), 600);
    return () => {
      clearTimer();
      clearTimeout(t);
    };
  }, [runDemo]);

  const frame = showFixed ? FRAME_AFTER : FRAME_BEFORE;
  const isScanning = stage === 'scanning';
  const isFixed = stage === 'done' || showFixed;

  const statusColor = isFixed ? '#10b981' : isScanning ? '#f59e0b' : '#6b7280';

  return (
    <section className={styles.section} id="live-demo" aria-label="Live Code Editor Demo">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260717_120352_eb988725-1351-43b3-8095-16e4a1005e3d.mp4"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* Section header */}
      <div className={styles.headerWrap}>
        <div className={styles.badge}>
          <span className={styles.badgePulse} />
          <span className={styles.badgeLabel}>LIVE DEMO</span>
        </div>
        <h2 className={styles.heading}>
          Watch Refyn<br />
          <span className={styles.accent}>work in real time</span>
        </h2>
        <p className={styles.sub}>
          Paste any snippet. Refyn scans, finds every bug, and ships production-ready fixes — in seconds.
        </p>
      </div>

      {/* Editor Chrome */}
      <div className={styles.editorWrap}>
        {/* Ambient glow rings */}
        <div className={styles.glowRingOuter} aria-hidden="true" />
        <div className={styles.glowRingInner} aria-hidden="true" />

        <div className={styles.editor}>
          {/* ── Title Bar ── */}
          <div className={styles.titleBar}>
            <TrafficLights />

            <div className={styles.tabs}>
              {/* Active tab */}
              <div className={`${styles.tab} ${styles.tabActive}`}>
                <span className={styles.tabIconWrap}><IconFileTs active /></span>
                <span>fetchUser.ts</span>
                {(stage === 'found' || stage === 'fixing') && (
                  <span className={styles.tabDirty} title="Unsaved changes">●</span>
                )}
                <span className={styles.tabCloseBtn} title="Close"><IconClose /></span>
              </div>
              <div className={styles.tab}>
                <span className={styles.tabIconWrap}><IconFileTs /></span>
                <span>api.ts</span>
                <span className={styles.tabCloseBtn} title="Close"><IconClose /></span>
              </div>
              <div className={styles.tab}>
                <span className={styles.tabIconWrap}><IconFolder /></span>
                <span>utils/</span>
              </div>
            </div>

            <div className={styles.titleBarRight}>
              <span
                className={styles.statusPill}
                style={{ background: statusColor }}
              >
                {isFixed ? '✓ Fixed' : isScanning ? '⟳ Scanning…' : '● Ready'}
              </span>
            </div>
          </div>

          {/* ── Activity Bar + Sidebar + Code ── */}
          <div className={styles.body}>
            {/* Activity Bar (left icons) */}
            <div className={styles.activityBar}>
              {[
                { Icon: IconExplorer,   tip: 'Explorer' },
                { Icon: IconSearch,     tip: 'Search' },
                { Icon: IconGit,        tip: 'Source Control' },
                { Icon: IconDebug,      tip: 'Run & Debug' },
                { Icon: IconExtensions, tip: 'Extensions' },
              ].map(({ Icon, tip }, i) => (
                <div
                  key={i}
                  className={`${styles.activityIcon} ${i === 0 ? styles.activityIconActive : ''}`}
                  title={tip}
                >
                  <Icon />
                </div>
              ))}
            </div>

            {/* File Explorer Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarTitle}>EXPLORER</div>
              <div className={styles.sidebarSection}>
                <div className={styles.sidebarGroup}>
                  <span className={styles.sidebarGroupChevron}><IconChevron open /></span>
                  <span>src</span>
                </div>
                <div className={`${styles.sidebarFile} ${styles.sidebarFileActive}`}>
                  <IconFileTs active />
                  <span>fetchUser.ts</span>
                </div>
                <div className={styles.sidebarFile}>
                  <IconFileTs />
                  <span>api.ts</span>
                </div>
                <div className={styles.sidebarFile}>
                  <IconFileTs />
                  <span>index.ts</span>
                </div>
                <div className={styles.sidebarGroup}>
                  <span className={styles.sidebarGroupChevron}><IconChevron open /></span>
                  <span>utils</span>
                </div>
                <div className={styles.sidebarFile}>
                  <IconFileTs />
                  <span>helpers.ts</span>
                </div>
                <div className={styles.sidebarFile}>
                  <IconFileTs />
                  <span>types.ts</span>
                </div>
              </div>
            </div>

            {/* Main Code Area */}
            <div className={styles.codeArea}>
              <div className={styles.codeScroll}>
                {/* Scan beam overlay */}
                <ScanBeam active={isScanning} />

                {frame.map((line, idx) => (
                  <div
                    key={`${showFixed ? 'fix' : 'bug'}-${idx}`}
                    className={`${styles.codeLineWrapper} ${isScanning && idx === scanLine ? styles.scanHighlight : ''}`}
                  >
                    <CodeLineComp
                      line={line}
                      animate={showFixed && line.state === 'fix'}
                    />
                  </div>
                ))}

                {/* Blinking cursor */}
                {!showFixed && (
                  <div
                    className={styles.cursor}
                    style={{ top: `${(cursorLine - 1) * 24 + 6}px` }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Bottom status bar */}
              <div className={styles.statusBar}>
                <div className={styles.statusLeft}>
                  <span className={styles.statusItem}>
                    <IconGitBranch />
                    main
                  </span>
                  <span className={`${styles.statusItem} ${isFixed ? styles.statusSuccess : styles.statusError}`}>
                    <IconError />
                    {isFixed ? '0 errors' : '2 errors'}
                  </span>
                  <span className={`${styles.statusItem} ${isFixed ? styles.statusSuccess : styles.statusWarn}`}>
                    <IconWarning />
                    {isFixed ? '0 warnings' : '1 warning'}
                  </span>
                </div>
                <div className={styles.statusRight}>
                  <span className={styles.statusItem}>TypeScript</span>
                  <span className={styles.statusItem}>UTF-8</span>
                  <span className={styles.statusItem}>Ln {cursorLine}, Col 1</span>
                  <span className={styles.statusItem}>
                    <IconShield />
                  </span>
                  <span className={styles.statusItem}>
                    <IconBell />
                  </span>
                </div>
              </div>
            </div>

            {/* ── fyn AI Panel ── */}
            <div className={styles.aiPanel}>
              <div className={styles.aiPanelHeader}>
                <div className={styles.aiLogo}>
                  <span className={`${styles.aiLogoIcon} ${isScanning ? styles.aiLogoIconScanning : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 4 L28 4 L28 24 L16 36 L16 16 L4 16 Z" fill="url(#aiLogoGrad1)" />
                      <path d="M20 4 L36 4 L36 20 L28 28 L28 4 Z" fill="#009e88" />
                      <path d="M16 16 L28 16 L28 28 Z" fill="rgba(255,255,255,0.3)" />
                      <defs>
                        <linearGradient id="aiLogoGrad1" x1="4" y1="4" x2="28" y2="36" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00ffcc" />
                          <stop offset="1" stopColor="#00c4a7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className={styles.fynBrand}>fyn</span>
                </div>
                <div className={`${styles.aiStatus} ${isScanning ? styles.aiStatusActive : isFixed ? styles.aiStatusDone : ''}`}>
                  {isScanning ? 'Analyzing…' : isFixed ? 'Done' : 'Ready'}
                </div>
              </div>

              {/* Progress bar during scan */}
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: isScanning ? `${(scanLine / 8) * 100}%`
                      : (stage === 'found' || stage === 'fixing') ? '70%'
                      : stage === 'done' ? '100%' : '0%',
                    background: stage === 'done' ? '#10b981' : undefined,
                  }}
                />
              </div>

              {/* AI Messages */}
              <div className={styles.aiMessages}>
                {AI_MESSAGES.slice(0, shownMessages).map((msg) => (
                  <div
                    key={msg.id}
                    className={`${styles.aiMsg} ${
                      msg.severity === 'critical' ? styles.aiMsgCritical
                      : msg.severity === 'warning' ? styles.aiMsgWarning
                      : styles.aiMsgSuccess
                    }`}
                  >
                    <div className={styles.aiMsgHeader}>
                      <SeverityDot type={msg.icon} />
                      <div className={styles.aiMsgMeta}>
                        <span className={styles.aiMsgTitle}>{msg.title}</span>
                        <span className={styles.aiMsgLine}>{msg.line}</span>
                      </div>
                    </div>
                    <p className={styles.aiMsgBody}>{msg.body}</p>
                    {msg.severity !== 'success' && (
                      <div className={styles.aiMsgActions}>
                        <button className={styles.aiMsgFix}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                          Apply fix
                        </button>
                        <button className={styles.aiMsgIgnore}>Ignore</button>
                      </div>
                    )}
                  </div>
                ))}

                {shownMessages === 0 && (
                  <div className={styles.aiEmpty}>
                    <div className={styles.aiEmptyIcon}><IconSparkle /></div>
                    <p>Paste your code and Refyn will review it instantly.</p>
                  </div>
                )}
              </div>

              {/* Cool Stats Footer */}
              {stage === 'done' && (
                <div className={styles.aiFooter}>
                  <div className={`${styles.aiStatCard} ${styles.statCardRed}`}>
                    <span className={styles.aiStatLabel}>Issues found</span>
                    <span className={styles.aiStatValueRed}>2</span>
                  </div>
                  <div className={`${styles.aiStatCard} ${styles.statCardGreen}`}>
                    <span className={styles.aiStatLabel}>Fixed</span>
                    <span className={styles.aiStatValueGreen}>2</span>
                  </div>
                  <div className={`${styles.aiStatCard} ${styles.statCardBlue}`}>
                    <span className={styles.aiStatLabel}>Time</span>
                    <span className={styles.aiStatValueBlue}>1.2s</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
