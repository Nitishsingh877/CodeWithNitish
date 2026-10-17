import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Deterministic pseudo-random offset per index so layout is stable across renders (no Math.random jitter).
const seeded = (seed, min, max) => {
  const x = Math.sin(seed * 999.123) * 10000;
  const frac = x - Math.floor(x);
  return min + frac * (max - min);
};

const getVariant = (phase, index, total) => {
  const center = (total - 1) / 2;
  const offset = index - center;
  const zBase = 100 - Math.abs(offset) * 10;

  if (phase === 'archive') {
    return {
      x: seeded(index, -8, 8),
      y: seeded(index + 1, -6, 6),
      rotate: seeded(index + 2, -6, 6),
      scale: 0.9,
      opacity: 1,
      zIndex: total - index,
    };
  }

  if (phase === 'shuffle') {
    const exchanged = (index + Math.floor(total / 2)) % total;
    return {
      x: seeded(index + 3, -46, 46),
      y: seeded(index + 4, -34, -10),
      rotate: seeded(index + 5, -12, 12),
      scale: 0.97,
      opacity: 1,
      zIndex: total - exchanged,
    };
  }

  // distributed (final) state
  return {
    x: offset * 230,
    y: Math.abs(offset) * 16,
    rotate: offset * 4 + seeded(index + 6, -2, 2),
    scale: offset === 0 ? 1 : Math.max(0.8, 0.92 - Math.abs(offset) * 0.04),
    opacity: offset === 0 ? 1 : 0.85,
    zIndex: zBase,
  };
};

/**
 * Cinematic archive -> shuffle -> distribute choreography for skill/project card decks.
 * Desktop/tablet get the full scene; mobile falls back to a plain swipeable deck.
 */
const CardArchive = ({ cards, renderCard, archiveLabel = 'ARCHIVE_SLOTS' }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState(reducedMotion ? 'distributed' : 'archive');
  const [replayKey, setReplayKey] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sceneX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const sceneY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reducedMotion) {
      setPhase('distributed');
      return undefined;
    }
    if (!isInView) return undefined;

    setPhase('archive');
    const t1 = setTimeout(() => setPhase('shuffle'), 400);
    const t2 = setTimeout(() => setPhase('distributed'), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView, reducedMotion, replayKey]);

  const handlePointerMove = (e) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 18);
    mouseY.set(y * 10);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const replay = () => {
    if (reducedMotion) return;
    setReplayKey((k) => k + 1);
  };

  return (
    <div>
      {/* Desktop / tablet cinematic scene */}
      <div
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        className="hidden md:block relative h-[460px] lg:h-[520px] select-none"
      >
        {/* Archive storage unit backdrop */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] aspect-video bg-[#141414] rounded-[22px] border border-red-600/30 shadow-[0_20px_50px_rgba(229,9,20,0.15)] flex items-center justify-center pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="absolute -top-5 left-6 w-24 h-6 bg-[#1f1f1f] rounded-t-lg border-t border-red-600/30" />
          <span className="font-mono text-xs tracking-widest text-red-600/50 uppercase">{archiveLabel}</span>
        </div>

        <motion.div style={{ x: sceneX, y: sceneY }} className="absolute inset-0">
          {cards.map((card, index) => {
            const variant = getVariant(phase, index, cards.length);
            return (
              <div
                key={card.id ?? card.name ?? index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: variant.zIndex }}
              >
                <motion.div
                  animate={{
                    x: variant.x,
                    y: variant.y,
                    rotate: variant.rotate,
                    scale: variant.scale,
                    opacity: variant.opacity,
                  }}
                  transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.9 }}
                >
                  {renderCard(card, index, phase)}
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {!reducedMotion && (
          <button
            type="button"
            onClick={replay}
            aria-label="Replay card shuffle animation"
            className="absolute bottom-0 right-0 z-[200] px-3 py-1.5 rounded border border-white/15 bg-black/70 text-[10px] font-mono uppercase tracking-widest text-white/70 hover:border-red-600/60 hover:text-red-500 transition-colors"
          >
            &#8635; Reshuffle
          </button>
        )}
      </div>

      {/* Mobile: plain swipeable deck, no absolute positioning, no horizontal page overflow */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6">
        {cards.map((card, index) => (
          <div key={card.id ?? card.name ?? index} className="shrink-0 snap-center">
            {renderCard(card, index, 'distributed')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardArchive;
