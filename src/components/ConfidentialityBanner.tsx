"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const items = [
  "PRIVATE",
  "DISCREET",
  "STRATEGIC",
  "EXECUTIVE-LEVEL",
  "ONTARIO-BASED",
];

export function ConfidentialityBanner() {
  const reducedMotion = useReducedMotion();
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative py-4 border-y border-gold/10 bg-sapphire/30 overflow-hidden w-full max-w-full isolate"
      aria-label="Confidentiality attributes"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight z-10 pointer-events-none" />
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
          animate={reducedMotion ? undefined : { x: ["0%", "-33.33%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label-caps text-gold/50 flex items-center gap-4 sm:gap-8 shrink-0"
          >
            {item}
            <span className="text-gold/20" aria-hidden="true">•</span>
          </span>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
