"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/services";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProcessTimeline({ vertical = false }: { vertical?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={
        vertical
          ? "relative space-y-8 pl-14 sm:pl-16 border-l border-gold/20 ml-1 overflow-hidden"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      }
    >
      {processSteps.map((step, i) => (
        <motion.div
          key={step.step}
          className={
            vertical
              ? "relative"
              : "premium-card gold-border-glow p-6 sm:p-8 relative"
          }
          initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          whileHover={reducedMotion || vertical ? undefined : { y: -4 }}
        >
          {vertical && (
            <div className="absolute left-0 top-0 -translate-x-1/2">
              <SecurityRing step={step.step} />
            </div>
          )}

          {!vertical && (
            <div className="mb-5">
              <SecurityRing step={step.step} />
            </div>
          )}

          <span className="label-caps text-gold/60 mb-2 block">
            Phase {step.step}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-ivory mb-2">{step.title}</h3>
          <p className="text-steel text-sm leading-relaxed">{step.description}</p>

          {!vertical && i < processSteps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/20" aria-hidden="true" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function SecurityRing({ step }: { step: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-12 h-12" aria-hidden="true">
      <motion.div
        className="absolute inset-0 rounded-full border border-gold/30"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 8 + step * 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-1 rounded-full border border-gold/20"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 6 + step, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gold font-display text-lg">{step}</span>
      </div>
    </div>
  );
}
