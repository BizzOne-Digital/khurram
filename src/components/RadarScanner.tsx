"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RadarScannerProps {
  size?: number;
  className?: string;
}

export function RadarScanner({ size = 300, className = "" }: RadarScannerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {[1, 0.66, 0.33].map((scale, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-gold/10"
          style={{ transform: `scale(${scale})` }}
        />
      ))}
      <div className="absolute inset-0 rounded-full border border-gold/20" />
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.6) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-bottom-left"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(212,175,55,0.15) 0deg, transparent 60deg)",
              borderRadius: "100% 0 0 0",
            }}
          />
        </motion.div>
      )}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/60" />
    </div>
  );
}
