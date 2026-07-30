'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { gsap } from 'gsap';
import Logo from '@/components/Logo/Logo';
import styles from './AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ─────────────────────────────────────────────────
   Animated walking crowd canvas (unchanged logic)
───────────────────────────────────────────────── */
const CrowdCanvas = ({ src = '/all-peeps.png', rows = 15, cols = 7 }: { src?: string; rows?: number; cols?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = { src, rows, cols };

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
    const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
    const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
    const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

    const resetPeep = ({ stage, peep }: { stage: any; peep: any }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX: number, endX: number;
      if (direction === 1) { startX = -peep.width; endX = stage.width; peep.scaleX = 1; }
      else { startX = stage.width + peep.width; endX = 0; peep.scaleX = -1; }
      peep.x = startX; peep.y = startY; peep.anchorY = startY;
      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }: { peep: any; props: any }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10, yDuration = 0.25;
      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: 'none' }, 0);
      tl.to(peep, { duration: yDuration, repeat: xDuration / yDuration, yoyo: true, y: startY - 10 }, 0);
      return tl;
    };

    const walks = [normalWalk];

    type Peep = {
      image: HTMLImageElement; rect: number[]; width: number; height: number;
      drawArgs: any[]; x: number; y: number; anchorY: number; scaleX: number;
      walk: any; setRect: (rect: number[]) => void; render: (ctx: CanvasRenderingContext2D) => void;
    };

    const createPeep = ({ image, rect }: { image: HTMLImageElement; rect: number[] }): Peep => {
      const peep: Peep = {
        image, rect: [], width: 0, height: 0, drawArgs: [], x: 0, y: 0, anchorY: 0, scaleX: 1, walk: null,
        setRect: (rect: number[]) => {
          peep.rect = rect; peep.width = rect[2]; peep.height = rect[3];
          peep.drawArgs = [peep.image, ...rect, 0, 0, peep.width, peep.height];
        },
        render: (ctx: CanvasRenderingContext2D) => {
          ctx.save(); ctx.translate(peep.x, peep.y); ctx.scale(peep.scaleX, 1);
          ctx.drawImage(peep.image, peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3], 0, 0, peep.width, peep.height);
          ctx.restore();
        },
      };
      peep.setRect(rect);
      return peep;
    };

    const img = document.createElement('img');
    const stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [], availablePeeps: Peep[] = [], crowd: Peep[] = [];

    const createPeeps = () => {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows, rectHeight = height / cols;
      for (let i = 0; i < total; i++) {
        allPeeps.push(createPeep({ image: img, rect: [(i % rows) * rectWidth, ((i / rows) | 0) * rectHeight, rectWidth, rectHeight] }));
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({ peep, props: resetPeep({ peep, stage }) })
        .eventCallback('onComplete', () => { removePeepFromCrowd(peep); addPeepToCrowd(); });
      peep.walk = walk; crowd.push(peep); crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => { removeItemFromArray(crowd, peep); availablePeeps.push(peep); };

    const render = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save(); ctx.scale(dpr, dpr);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth; stage.height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = stage.width * dpr; canvas.height = stage.height * dpr;
      crowd.forEach((peep) => { if (peep.walk) peep.walk.kill(); });
      crowd.length = 0; availablePeeps.length = 0; availablePeeps.push(...allPeeps);
      while (availablePeeps.length) addPeepToCrowd().walk.progress(Math.random());
    };

    img.onload = () => { createPeeps(); resize(); gsap.ticker.add(render); };
    img.src = config.src;

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => { if (peep.walk) peep.walk.kill(); });
    };
  }, [src, rows, cols]);

  return <canvas ref={canvasRef} className={styles.crowdCanvas} />;
};

/* ─────────────────────────────────────────────────
   Animation Variants
───────────────────────────────────────────────── */

// Backdrop fades in — fast
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18 } },
  exit:    { opacity: 0, transition: { duration: 0.14 } },
};

// Card snaps open fast — closes even faster
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.07,
    borderRadius: '60px',
  },
  visible: {
    opacity: 1,
    scale: 1,
    borderRadius: '22px',
    transition: {
      delay: 0.04,
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
      borderRadius: { delay: 0.1, duration: 0.28 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.13, ease: 'easeIn' },
  },
};

// Left logo piece
const cornerLVariants = {
  hidden:   { x: -110, opacity: 0 },
  visible:  { x: 0, opacity: 1, transition: { delay: 0.02, duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
  exit:     { x: -110, opacity: 0, transition: { duration: 0.1 } },
};

// Right logo piece
const cornerRVariants = {
  hidden:   { y: -90, opacity: 0 },
  visible:  { y: 0, opacity: 1, transition: { delay: 0.08, duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
  exit:     { y: -90, opacity: 0, transition: { duration: 0.1 } },
};

// Brand logo above card
const brandVariants = {
  hidden:   { opacity: 0, y: -24, scale: 0.9 },
  visible:  {
    opacity: 1, y: 0, scale: 1,
    transition: { delay: 0.22, duration: 0.32, ease: [0.16, 1, 0.3, 1] },
  },
  exit:     { opacity: 0, y: -10, transition: { duration: 0.1 } },
};

// Header fades in
const headerVariants = {
  hidden:   { opacity: 0, y: 8 },
  visible:  { opacity: 1, y: 0, transition: { delay: 0.26, duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
};

// Buttons stagger up — faster
const bodyVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.08, delayChildren: 0.34 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 14 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.16, 1, 0.3, 1] } },
};

/* ─────────────────────────────────────────────────
   AuthModal Component
───────────────────────────────────────────────── */
export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const resetAndClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlayWrapper}>
          {/* ── Deep dark backdrop ── */}
          <motion.div
            className={styles.backdrop}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={resetAndClose}
          />

          {/* ── Fixed close button ── */}
          <motion.button
            className={styles.closeBtn}
            onClick={resetAndClose}
            aria-label="Close dialog"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.28, duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <X size={16} />
          </motion.button>

          {/* ── Modal stack: card container ── */}
          <div className={styles.modalStack}>
            {/* ── Login Card — grows from logo-mark seed ── */}
            <motion.div
              className={styles.cardContainer}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-labelledby="auth-title"
            >
              {/* ── Walking crowd characters inside card ── */}
              <CrowdCanvas src="/all-peeps.png" rows={15} cols={7} />

              {/* ── Teal logo shape 1: slides from left ── */}
              <motion.div
                className={styles.cornerTL}
                variants={cornerLVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-hidden="true"
              />

              {/* ── Teal logo shape 2: slides from top ── */}
              <motion.div
                className={styles.cornerTR}
                variants={cornerRVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-hidden="true"
              />

              {/* ── Card header — Website Logo + Subtitle ── */}
              <motion.div
                className={styles.header}
                variants={headerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className={styles.logoWrapper}>
                  <Logo variant="white" size="md" />
                </div>
                <p className={styles.subtitle} id="auth-title">
                  Start reviewing, debugging, and explaining code in seconds.
                </p>
              </motion.div>

              {/* ── Success state ── */}
              {submitted ? (
                <motion.div
                  className={styles.successState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.successIcon}>
                    <Check size={26} />
                  </div>
                  <h3>You're in!</h3>
                  <p>Redirecting you to your workspace…</p>
                  <button className={styles.doneBtn} onClick={resetAndClose}>
                    Done
                  </button>
                </motion.div>
              ) : (
                /* ── OAuth buttons stagger ── */
                <motion.div
                  className={styles.body}
                  variants={bodyVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* GitHub */}
                  <motion.button
                    variants={itemVariants}
                    className={styles.oauthBtn}
                    onClick={() => setSubmitted(true)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>Continue with GitHub</span>
                  </motion.button>

                  {/* Google */}
                  <motion.button
                    variants={itemVariants}
                    className={styles.oauthBtn}
                    onClick={() => setSubmitted(true)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Continue with Google</span>
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
