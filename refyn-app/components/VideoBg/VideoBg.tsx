'use client';

import React, { useEffect, useRef } from 'react';
import styles from './VideoBg.module.scss';

// Exact Cloudfront background video animation URL
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

export default function VideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const isScrolledRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play initial intro animation on enter / load / refresh
    video.play().catch(() => {});

    let animationFrameId: number;

    const handleScroll = () => {
      if (!video || !video.duration) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
      targetTimeRef.current = progress * (video.duration - 0.05);

      if (window.scrollY > 15) {
        if (!isScrolledRef.current) {
          isScrolledRef.current = true;
          currentTimeRef.current = video.currentTime;
        }
        if (!video.paused) {
          video.pause();
        }
      } else {
        if (isScrolledRef.current) {
          isScrolledRef.current = false;
          video.play().catch(() => {});
        }
      }
    };

    const updateVideo = () => {
      if (isScrolledRef.current && video && video.duration) {
        // Smooth lerp scroll scrubbing
        currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * 0.12;
        if (Math.abs(video.currentTime - currentTimeRef.current) > 0.02) {
          video.currentTime = currentTimeRef.current;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideo);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        className={styles.media}
      />
    </div>
  );
}
