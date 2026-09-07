"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ShieldLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  animate?: boolean;
  variant?: "default" | "header";
}

const sizes = {
  sm: { img: 40, text: "text-sm" },
  md: { img: 56, text: "text-base" },
  lg: { img: 80, text: "text-lg" },
  xl: { img: 120, text: "text-xl" },
};

export function ShieldLogo({
  size = "md",
  showText = false,
  className,
  animate = false,
  variant = "default",
}: ShieldLogoProps) {
  const reducedMotion = useReducedMotion();
  const { img, text } = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.div
        className="relative"
        animate={
          animate && !reducedMotion
            ? { rotate: [0, 2, -2, 0] }
            : undefined
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={images.logo}
          alt="Zerotrace Executive shield logo"
          width={img}
          height={img}
          className="object-contain"
          priority
        />
      </motion.div>
      {showText && (
        <div className={cn("hidden sm:block leading-tight", text)}>
          {variant === "header" ? (
            <>
              <span className="block font-sans font-semibold tracking-[0.22em] text-ivory uppercase text-[11px]">
                Zerotrace
              </span>
              <span className="block font-sans font-medium tracking-[0.28em] text-sapphire-dark uppercase text-[9px] text-steel">
                Executive
              </span>
            </>
          ) : (
            <>
              <span className="block font-sans font-semibold tracking-widest text-gold uppercase text-xs">
                Zerotrace
              </span>
              <span className="block font-sans text-[10px] tracking-[0.3em] text-steel uppercase">
                Executive
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
