"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SecureGridProps {
  className?: string;
  animated?: boolean;
}

export function SecureGrid({ className = "", animated = true }: SecureGridProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        className="absolute inset-0 secure-grid-bg opacity-30"
        animate={
          animated && !reducedMotion
            ? { backgroundPosition: ["0px 0px", "60px 60px"] }
            : undefined
        }
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--midnight) 70%)",
        }}
      />
    </div>
  );
}
