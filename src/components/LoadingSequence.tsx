"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldLogo } from "./ShieldLogo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LoadingSequenceProps {
  onComplete: () => void;
}

export function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => onComplete(), 2400),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-nearblack"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 secure-grid-bg opacity-20" aria-hidden="true" />
        <div className="relative flex flex-col items-center">
          <motion.div
            className="absolute inset-[-40%] bg-gold/10 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.8 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: phase >= 1 ? 1 : 0.85,
              opacity: phase >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShieldLogo size="xl" animate />
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
          >
            <p className="label-caps text-gold/60">Initializing Secure Environment</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
