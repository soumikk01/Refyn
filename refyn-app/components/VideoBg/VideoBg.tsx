'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './VideoBg.module.scss';

// ── requestVideoFrameCallback type augmentation ───────────────────────────────
// rVFC is a WHATWG API not yet in TypeScript's lib.dom.d.ts.
// Declaring it here avoids @ts-expect-error / `any` casts.
interface VideoFrameCallbackMetadata {
  expectedDisplayTime: DOMHighResTimeStamp;
  height:              number;
  mediaTime:           number;
  presentationTime:    DOMHighResTimeStamp;
  presentedFrames:     number;
  processingDuration?: number;
  width:               number;
}

type VideoWithRVFC = HTMLVideoElement & {
  requestVideoFrameCallback(
    callback: (now: DOMHighResTimeStamp, metadata: VideoFrameCallbackMetadata) => void
  ): number;
  cancelVideoFrameCallback(handle: number): void;
};
// ─────────────────────────────────────────────────────────────────────────────

// Exact CloudFront URL from the Boomerang spec
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4';

const MAX_CAPTURE_WIDTH = 960;
const FPS               = 30;
const FRAME_INTERVAL    = 1000 / FPS;

/**
 * BoomerangVideoBg
 *
 * Plays the CloudFront video once, captures every frame into ImageBitmap[],
 * then loops them forward → backward (ping-pong / boomerang) on a canvas at 30 fps.
 *
 * — Uses requestVideoFrameCallback when available, rAF fallback otherwise.
 * — Deduplicates frames by currentTime.
 * — Caps capture width at 960 px, scales height proportionally.
 * — While frames are building: shows the live <video>.
 * — After video.ended: hides video, shows canvas with ping-pong playback.
 */
export default function VideoBg() {
  const videoRef        = useRef<HTMLVideoElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef    = useRef<HTMLCanvasElement | null>(null);
  const framesRef       = useRef<ImageBitmap[]>([]);
  const lastTimeRef     = useRef<number>(-1);
  const pingPongRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef          = useRef<number | null>(null);
  const frameIdxRef     = useRef(0);
  const dirRef          = useRef<1 | -1>(1);

  const [framesReady, setFramesReady] = useState(false);

  // ── frame capture ──────────────────────────────────────────────────────────
  function captureFrame(video: HTMLVideoElement) {
    const t = video.currentTime;
    if (Math.abs(t - lastTimeRef.current) < 0.001) return;
    lastTimeRef.current = t;

    const srcW = video.videoWidth;
    const srcH = video.videoHeight;
    if (!srcW || !srcH) return;

    const w = Math.min(srcW, MAX_CAPTURE_WIDTH);
    const h = Math.round((srcH / srcW) * w);

    if (!offscreenRef.current) offscreenRef.current = document.createElement('canvas');
    const oc  = offscreenRef.current;
    oc.width  = w;
    oc.height = h;
    oc.getContext('2d')?.drawImage(video, 0, 0, w, h);

    createImageBitmap(oc).then((bmp) => framesRef.current.push(bmp));
  }

  function scheduleCapture(video: HTMLVideoElement) {
    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
      (video as VideoWithRVFC).requestVideoFrameCallback(() => {
        captureFrame(video);
        if (!video.ended && !video.paused) scheduleCapture(video);
      });
    } else {
      const loop = () => {
        if (video.ended || video.paused) return;
        captureFrame(video);
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    }
  }

  // ── ping-pong playback ─────────────────────────────────────────────────────
  function startPingPong(frames: ImageBitmap[]) {
    const canvas = displayCanvasRef.current;
    if (!canvas || frames.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width  = frames[0].width;
    canvas.height = frames[0].height;

    pingPongRef.current = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frames[frameIdxRef.current], 0, 0);

      frameIdxRef.current += dirRef.current;
      if (frameIdxRef.current >= frames.length - 1) {
        frameIdxRef.current = frames.length - 1;
        dirRef.current      = -1;
      } else if (frameIdxRef.current <= 0) {
        frameIdxRef.current = 0;
        dirRef.current      = 1;
      }
    }, FRAME_INTERVAL);
  }

  // ── lifecycle ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.play().catch(() => {});
      scheduleCapture(video);
    };

    const onEnded = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      // allow final createImageBitmap promises to settle
      setTimeout(() => {
        setFramesReady(true);
        startPingPong(framesRef.current);
      }, 120);
    };

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('ended', onEnded);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (pingPongRef.current !== null) clearInterval(pingPongRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /* scale-[1.15] anchored from top — slightly overscaled to bleed edges */
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: framesReady ? 'none' : 'block' }}
        className={styles.media}
      />
      <canvas
        ref={displayCanvasRef}
        style={{ display: framesReady ? 'block' : 'none' }}
        className={styles.media}
      />
    </div>
  );
}
