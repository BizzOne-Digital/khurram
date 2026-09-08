"use client";

import { motion } from "framer-motion";
import type { AudienceItem } from "@/data/audiences";
import { getIcon } from "@/lib/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AudienceCardProps {
  audience: AudienceItem;
  index: number;
}

export function AudienceCard({ audience, index }: AudienceCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = getIcon(audience.icon);

  return (
    <motion.article
      className="premium-card gold-border-glow rounded-xl p-5 sm:p-6 text-center w-full min-w-0"
      initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
    >
      <div className="inline-flex p-4 rounded-full bg-sapphire-dark/50 border border-gold/10 mb-4">
        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl text-ivory mb-3">{audience.title}</h3>
      <p className="text-steel text-sm leading-relaxed">{audience.description}</p>
    </motion.article>
  );
}
