import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GREETINGS = ['Hello', 'नमस्ते', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Bonjour', 'Hola'];

const GREETING_VISIBLE_MS = 450;
const MARK_VISIBLE_MS = 500;
const FINAL_HOLD_MS = 1600;

const wordVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

// Netflix/Apple-style multilingual greeting intro that morphs "NKS" into the full name.
const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('greeting'); // 'greeting' | 'mark' | 'final' | 'exit'

  useEffect(() => {
    if (phase !== 'greeting') return undefined;

    if (index >= GREETINGS.length) {
      setPhase('mark');
      return undefined;
    }

    const timer = setTimeout(() => setIndex((i) => i + 1), GREETING_VISIBLE_MS + 600);
    return () => clearTimeout(timer);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== 'mark') return undefined;
    const timer = setTimeout(() => setPhase('final'), MARK_VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'final') return undefined;
    const timer = setTimeout(() => setPhase('exit'), FINAL_HOLD_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'exit') return undefined;
    const timer = setTimeout(() => onComplete && onComplete(), 600);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden px-6"
      style={{
        background: '#000',
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(229,9,20,0.12), transparent 30%), radial-gradient(circle at 80% 80%, rgba(229,9,20,0.1), transparent 35%)',
      }}
    >
      <AnimatePresence mode="wait">
        {phase === 'greeting' && index < GREETINGS.length && (
          <motion.h1
            key={GREETINGS[index]}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center font-extrabold text-white"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-2px',
              textShadow: '0 0 30px rgba(229,9,20,0.4)',
            }}
          >
            {GREETINGS[index]}
          </motion.h1>
        )}

        {phase === 'mark' && (
          <motion.h1
            key="mark"
            layoutId="brand-mark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center font-extrabold text-red-600"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-2px',
              textShadow: '0 0 40px rgba(229,9,20,0.6)',
            }}
          >
            NKS
          </motion.h1>
        )}

        {phase === 'final' && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5 text-center"
          >
            <motion.h1
              layoutId="brand-mark"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center font-extrabold text-white"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                letterSpacing: '-2px',
                textShadow: '0 0 30px rgba(229,9,20,0.4)',
              }}
            >
              Nitish Kumar Singh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm md:text-lg font-mono uppercase tracking-widest text-red-500"
            >
              Java Full Stack Developer
              <br />
              AI Automation Engineer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;



