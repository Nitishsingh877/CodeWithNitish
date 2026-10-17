import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const LERP = { dot: 0.35, ring: 0.14 };

// rAF-driven custom cursor (no per-mousemove React state) with hover/action/press states.
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const spotlightRef = useRef(null);
  const rafId = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const target = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState('default'); // default | hover | action | press
  const [actionLabel, setActionLabel] = useState('');

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
    };

    const handleOver = (e) => {
      const projectEl = e.target.closest('[data-cursor="project"]');
      const buttonEl = e.target.closest('button, [data-cursor="button"]');
      const interactiveEl = e.target.closest('a, input, textarea, [role="button"]');
      if (projectEl) {
        setState('action');
        setActionLabel(projectEl.getAttribute('data-cursor-label') || 'VIEW');
      } else if (buttonEl) {
        setState('button');
        setActionLabel('');
      } else if (interactiveEl) {
        setState('hover');
        setActionLabel('');
      } else {
        setState('default');
        setActionLabel('');
      }
    };

    const handleDown = () => setState((s) => (s === 'action' ? 'action' : 'press'));
    const handleUp = () => setState('default');
    const handleLeaveWindow = () => {
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleLeaveWindow);

    const tick = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * LERP.dot;
      dotPos.current.y += (target.current.y - dotPos.current.y) * LERP.dot;
      ringPos.current.x += (target.current.x - ringPos.current.x) * LERP.ring;
      ringPos.current.y += (target.current.y - ringPos.current.y) * LERP.ring;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 5}px, ${dotPos.current.y - 5}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${ringPos.current.x - 280}px, ${ringPos.current.y - 280}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleLeaveWindow);
      cancelAnimationFrame(rafId.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringSize = state === 'action' ? 64 : state === 'button' ? 60 : state === 'hover' ? 50 : state === 'press' ? 32 : 40;
  const dotSize = state === 'press' ? 4 : state === 'hover' || state === 'action' || state === 'button' ? 5 : 8;

  return (
    <>
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[560px] h-[560px] rounded-full pointer-events-none z-[1] opacity-0 blur-[110px] transition-opacity duration-500 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(229,9,20,0.16) 0%, rgba(229,9,20,0.05) 45%, transparent 72%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-red-600 transition-[width,height] duration-150 ease-out"
        style={{ width: dotSize, height: dotSize, boxShadow: '0 0 12px #E50914', willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border flex items-center justify-center transition-[width,height,border-color,box-shadow] duration-200 ease-out ${
          state === 'button' ? 'animate-pulse' : ''
        }`}
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          borderColor: state === 'default' ? 'rgba(229,9,20,0.5)' : 'rgba(229,9,20,0.95)',
          boxShadow: state === 'default' ? 'none' : '0 0 24px rgba(229,9,20,0.45)',
          willChange: 'transform',
        }}
      >
        <span ref={labelRef} className="font-mono text-[9px] font-bold uppercase tracking-widest text-red-500">
          {actionLabel}
        </span>
      </div>
    </>
  );
};

export default CustomCursor;

