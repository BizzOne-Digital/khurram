"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ShieldLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "header" | "hero";
  showText?: boolean;
  className?: string;
  animate?: boolean;
  variant?: "default" | "header";
}

const heightClasses = {
  sm: "h-11 sm:h-12",
  md: "h-14 sm:h-16",
  lg: "h-20 sm:h-24",
  xl: "h-28 sm:h-32",
  header: "h-12 sm:h-14 lg:h-[76px]",
  hero: "h-24 sm:h-28 md:h-32 lg:h-36",
};

export function ShieldLogo({
  size = "md",
  className,
  animate = false,
  variant = "default",
}: ShieldLogoProps) {
  const reducedMotion = useReducedMotion();
  const isHeader = size === "header" || variant === "header";
  const resolvedSize = isHeader ? "header" : size;

  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        className="relative shrink-0"
        animate={
          animate && !reducedMotion
            ? { rotate: [0, 2, -2, 0] }
            : undefined
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={images.logo}
          alt="Zerotrace Executive"
          width={320}
          height={180}
          className={cn("object-contain w-auto", heightClasses[resolvedSize])}
          priority
        />
      </motion.div>
    </div>
  );
}
