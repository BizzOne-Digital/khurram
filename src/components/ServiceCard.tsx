"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = getIcon(service.icon);

  return (
    <motion.article
      className="group gold-border-glow glass-panel rounded-lg p-5 sm:p-6 lg:p-8 w-full min-w-0"
      initial={reducedMotion ? undefined : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={reducedMotion ? undefined : { scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-sapphire-dark/60 border border-gold/10 shrink-0 group-hover:border-gold/30 transition-colors">
          <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-xl text-ivory mb-2">{service.title}</h3>
          <p className="text-steel text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
