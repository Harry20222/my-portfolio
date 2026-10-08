'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const VIDEO_SRC = '/videos/death-stranding-bt-intro.mp4';
const SESSION_KEY = 'portfolio-intro-visited-v1';
// Reserve 200 ms for browser scheduling/rendering within the seven-second limit.
const MAX_DURATION_MS = 6800;
const EXIT_DURATION_MS = 400;
const LOAD_TIMEOUT_MS = 1200;
const STALL_TIMEOUT_MS = 1000;

type Phase = 'idle' | 'playing' | 'exiting';

export default function CinematicIntro({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const dismissRef = useRef<() => void>(() => {});

  useEffect(() => {
    const video = videoRef.current;
    const content = contentRef.current;
    if (!video || !content) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = new Set<ReturnType<typeof setTimeout>>();
    let finished = false;
    let visible = false;
    let exiting = false;
    let releasePage: (() => void) | undefined;
    let focusFrame = 0;
    let progressTimer: ReturnType<typeof setInterval> | undefined;
    let loadTimer: ReturnType<typeof setTimeout> | undefined;
    let deadline = 0;
    let lastTime = 0;
    let lastProgress = 0;

    const schedule = (callback: () => void, delay: number) => {
      const timer = setTimeout(callback, delay);
      timers.add(timer);
      return timer;
    };

    const stop = () => {
      finished = true;
      timers.forEach(clearTimeout);
      clearInterval(progressTimer);
      cancelAnimationFrame(focusFrame);
      video.pause();
      video.removeAttribute('src');
      video.load();
      releasePage?.();
      releasePage = undefined;
    };

    const dismiss = () => {
      if (finished) return;
      stop();
      setPhase('idle');
    };
    dismissRef.current = dismiss;

    const dissolve = () => {
      if (finished || exiting) return;
      if (!visible) return dismiss();
      exiting = true;
      setPhase('exiting');
      schedule(dismiss, Math.max(0, Math.min(EXIT_DURATION_MS, deadline - performance.now())));
    };

    const onPlaying = () => {
      if (finished) {
        video.pause();
        return;
      }
      if (exiting) return;
      clearTimeout(loadTimer);
      lastTime = video.currentTime;
      lastProgress = performance.now();
      if (visible) return;

      visible = true;
      const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const bodyOverflow = document.body.style.overflow;
      const rootOverflow = document.documentElement.style.overflow;
      const wasInert = content.inert;
      content.inert = true;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      releasePage = () => {
        const focusWasInsideIntro = skipRef.current === document.activeElement;
        content.inert = wasInert;
        document.body.style.overflow = bodyOverflow;
        document.documentElement.style.overflow = rootOverflow;
        if (focusWasInsideIntro) {
          const target = previousFocus?.isConnected && previousFocus !== document.body
            ? previousFocus
            : content;
          target.focus({ preventScroll: true });
        }
      };

      setPhase('playing');
      focusFrame = requestAnimationFrame(() => skipRef.current?.focus({ preventScroll: true }));
      progressTimer = setInterval(() => {
        if (finished || exiting) return;
        const now = performance.now();
        if (video.currentTime !== lastTime) {
          lastTime = video.currentTime;
          lastProgress = now;
        } else if (now - lastProgress >= STALL_TIMEOUT_MS) {
          dismiss();
        }
      }, 100);
    };

    const onTimeUpdate = () => {
      if (Number.isFinite(video.duration) && video.duration - video.currentTime <= EXIT_DURATION_MS / 1000) {
        dissolve();
      }
    };
    const onPause = () => {
      if (visible && !exiting && !video.ended) dismiss();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!visible || finished) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        skipRef.current?.focus();
      }
    };
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') dismiss();
      else if (deadline && performance.now() >= deadline) dismiss();
    };
    const onMotionChange = () => {
      if (motionPreference.matches) dismiss();
    };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', dissolve);
    video.addEventListener('error', dismiss);
    video.addEventListener('pause', onPause);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('hashchange', dismiss);
    window.addEventListener('popstate', dismiss);
    window.addEventListener('pagehide', dismiss);
    motionPreference.addEventListener('change', onMotionChange);

    // Defer the session claim so React Strict Mode's rehearsal does not consume it.
    schedule(() => {
      try {
        if (sessionStorage.getItem(SESSION_KEY)) return;
        // Claim every initial entry, including deep links, so navigation cannot start an intro later.
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        return; // Without tab storage, bypass rather than replay on each visit.
      }

      if (window.location.pathname !== '/' || window.location.hash || motionPreference.matches || document.visibilityState !== 'visible') return;

      deadline = performance.now() + MAX_DURATION_MS;
      // Loading and the dissolve share one budget; the final timer is an independent cutoff.
      schedule(dissolve, MAX_DURATION_MS - EXIT_DURATION_MS);
      schedule(dismiss, MAX_DURATION_MS);
      loadTimer = schedule(dismiss, LOAD_TIMEOUT_MS);
      video.muted = true;
      video.src = VIDEO_SRC;
      video.preload = 'auto';
      try {
        void video.play().then(() => {
          if (finished) video.pause();
        }).catch(dismiss);
      } catch {
        dismiss();
      }
    }, 0);

    return () => {
      stop();
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', dissolve);
      video.removeEventListener('error', dismiss);
      video.removeEventListener('pause', onPause);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('hashchange', dismiss);
      window.removeEventListener('popstate', dismiss);
      window.removeEventListener('pagehide', dismiss);
      motionPreference.removeEventListener('change', onMotionChange);
      dismissRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    if (pathname === '/') return;
    const timer = setTimeout(() => dismissRef.current(), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div ref={contentRef} className="portfolio-content" tabIndex={-1}>
        {children}
      </div>
      <div
        className={`cinematic-intro${phase === 'exiting' ? ' cinematic-intro--exiting' : ''}`}
        hidden={phase === 'idle'}
        role="dialog"
        aria-modal="true"
        aria-label="Death Stranding cinematic intro"
      >
        <video ref={videoRef} className="cinematic-intro__video" autoPlay muted playsInline preload="none" aria-hidden="true" tabIndex={-1} />
        <button ref={skipRef} type="button" className="cinematic-intro__skip" onClick={() => dismissRef.current()} aria-label="Skip intro">
          Skip
        </button>
      </div>
    </>
  );
}
