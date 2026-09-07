"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/data/images";
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
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => onComplete(), 2800),
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
        <SecureGridOverlay />
        <div className="relative">
          <motion.div
            className="absolute inset-[-20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              <motion.path
                d="M100 10 L30 35 L30 95 C30 140 60 175 100 190 C140 175 170 140 170 95 L170 35 L100 10 Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: phase >= 2 ? 1 : 0.8,
              opacity: phase >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images.logo}
              alt="Zerotrace Executive"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
          >
            <p className="label-caps text-gold/60">Initializing Secure Environment</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function SecureGridOverlay() {
  return (
    <div
      className="absolute inset-0 secure-grid-bg opacity-20"
      aria-hidden="true"
    />
  );
}
