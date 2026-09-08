"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const items = [
  "PRIVATE",
  "DISCREET",
  "STRATEGIC",
  "EXECUTIVE-LEVEL",
  "ONTARIO-BASED",
  "CONFIDENTIAL",
];

export function ConfidentialityBanner() {
  const reducedMotion = useReducedMotion();
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative py-4 border-y border-gold/15 bg-gradient-to-r from-sapphire/40 via-sapphire/20 to-sapphire/40 overflow-hidden w-full max-w-full isolate"
      aria-label="Confidentiality attributes"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight z-10 pointer-events-none" />
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-10 sm:gap-16 whitespace-nowrap will-change-transform"
          animate={reducedMotion ? undefined : { x: ["0%", "-33.33%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeated.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="label-caps text-gold/60 flex items-center gap-6 sm:gap-10 shrink-0 font-medium"
            >
              <span className="text-gold/80">{item}</span>
              <span className="text-gold/25 text-lg" aria-hidden="true">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
