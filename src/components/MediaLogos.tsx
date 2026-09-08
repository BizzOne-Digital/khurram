"use client";

import { motion } from "framer-motion";
import { mediaOutlets } from "@/data/resources";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MediaLogos() {
  const reducedMotion = useReducedMotion();
  const repeated = [...mediaOutlets, ...mediaOutlets];

  return (
    <section className="py-12 sm:py-16 overflow-x-clip w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto section-pad w-full mb-8">
        <p className="text-center label-caps text-steel/50">As seen in</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight z-10 pointer-events-none" />
        <motion.div
          className="flex gap-12 sm:gap-20 whitespace-nowrap"
          animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((outlet, i) => (
            <span
              key={`${outlet}-${i}`}
              className="font-display text-xl sm:text-2xl text-ivory/20 shrink-0 tracking-wide"
            >
              {outlet}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
