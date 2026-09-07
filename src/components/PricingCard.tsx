"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useAuditModal } from "@/context/AuditModalContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  regularPrice?: number;
  price: number;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
  variant?: "audit" | "retainer";
  featured?: boolean;
}

export function PricingCard({
  title,
  regularPrice,
  price,
  period,
  features,
  cta,
  badge,
  variant = "audit",
  featured = false,
}: PricingCardProps) {
  const { openModal } = useAuditModal();
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "relative gold-border-glow glass-panel rounded-xl p-5 sm:p-8 lg:p-10 flex flex-col w-full min-w-0",
        featured && "ring-1 ring-gold/30"
      )}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {badge && (
        <span className="absolute -top-3 left-8 px-4 py-1 bg-gold text-nearblack text-xs tracking-widest uppercase font-medium rounded-sm">
          {badge}
        </span>
      )}

      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-ivory mb-4 sm:mb-6">{title}</h3>

      <div className="mb-8">
        {regularPrice && (
          <p className="text-steel text-lg line-through mb-1">
            ${regularPrice.toLocaleString()}
          </p>
        )}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl sm:text-5xl text-gold">
            ${price.toLocaleString()}
          </span>
          <span className="text-steel text-sm">/{period}</span>
        </div>
        {variant === "audit" && (
          <p className="label-caps text-gold/60 mt-2">Limited-time investment</p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-steel">
            <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <MagneticButton
        onClick={openModal}
        variant={featured ? "primary" : "secondary"}
        className="w-full"
      >
        {cta}
      </MagneticButton>
    </motion.article>
  );
}
