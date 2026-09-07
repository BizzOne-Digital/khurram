"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface RedactedTextRevealProps {
  sensitiveText: string;
  redactedLabel?: string;
  className?: string;
  autoPlay?: boolean;
}

export function RedactedTextReveal({
  sensitiveText,
  redactedLabel = "████████ ████████",
  className,
  autoPlay = true,
}: RedactedTextRevealProps) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"hidden" | "visible" | "redacted">(
    reducedMotion ? "redacted" : "hidden"
  );

  useEffect(() => {
    if (!autoPlay || reducedMotion) return;

    const timer1 = setTimeout(() => setPhase("visible"), 800);
    const timer2 = setTimeout(() => setPhase("redacted"), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [autoPlay, reducedMotion]);

  if (reducedMotion) {
    return (
      <p className={cn("font-mono text-sm text-steel", className)}>
        <span className="redacted px-2">{redactedLabel}</span>
      </p>
    );
  }

  return (
    <div className={cn("font-mono text-xs sm:text-sm overflow-hidden max-w-full", className)}>
      <AnimatePresence mode="wait">
        {phase === "visible" && (
          <motion.p
            key="visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="text-gold-warm/80"
          >
            {sensitiveText}
          </motion.p>
        )}
        {phase === "redacted" && (
          <motion.p
            key="redacted"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <span className="redacted px-3 py-1 inline-block">{redactedLabel}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-gold/60 tracking-widest uppercase"
            >
              Secured
            </motion.span>
          </motion.p>
        )}
        {phase === "hidden" && (
          <motion.div
            key="hidden"
            className="h-6 bg-steel/10 rounded animate-pulse"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
