"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { RiskItem } from "@/data/risks";
import { getIcon } from "@/lib/icons";
import { useAuditModal } from "@/context/AuditModalContext";

interface RiskCardProps {
  risk: RiskItem;
  index: number;
}

export function RiskCard({ risk, index }: RiskCardProps) {
  const reducedMotion = useReducedMotion();
  const { openModal } = useAuditModal();
  const Icon = getIcon(risk.icon);

  return (
    <motion.article
      className="group relative gold-border-glow glass-panel rounded-lg p-5 sm:p-8 overflow-hidden w-full min-w-0"
      initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />

      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-lg bg-sapphire-dark/50 border border-gold/10">
          <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
        </div>
        <ExposureIndicator level={risk.exposureLevel} />
      </div>

      <span className="label-caps text-gold/60 mb-2 block">{risk.label}</span>
      <h3 className="font-display text-xl sm:text-2xl text-ivory mb-3">{risk.title}</h3>
      <p className="text-steel text-sm leading-relaxed mb-6">{risk.description}</p>

      <button
        onClick={openModal}
        className="text-sm text-gold tracking-wider uppercase hover:text-gold-warm transition-colors flex items-center gap-2 group/btn"
      >
        Review Exposure
        <motion.span
          className="inline-block"
          animate={reducedMotion ? undefined : { x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </button>
    </motion.article>
  );
}

function ExposureIndicator({ level }: { level: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="text-right" aria-label={`Exposure indicator: ${level}%`}>
      <span className="label-caps text-[10px] text-steel block mb-1">Exposure</span>
      <div className="w-16 h-1 bg-sapphire-dark rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-sapphire-dark to-gold rounded-full"
          initial={reducedMotion ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </div>
      <span className="text-xs text-gold/80 mt-1 block">{level}%</span>
    </div>
  );
}
