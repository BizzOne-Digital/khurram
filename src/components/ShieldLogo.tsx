"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ShieldLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "header";
  showText?: boolean;
  className?: string;
  animate?: boolean;
  variant?: "default" | "header";
}

const sizes = {
  sm: { img: 52, text: "text-sm" },
  md: { img: 72, text: "text-base" },
  lg: { img: 96, text: "text-lg" },
  xl: { img: 140, text: "text-xl" },
  header: { img: 64, text: "text-base" },
};

export function ShieldLogo({
  size = "md",
  showText = false,
  className,
  animate = false,
  variant = "default",
}: ShieldLogoProps) {
  const reducedMotion = useReducedMotion();
  const isHeader = size === "header" || variant === "header";
  const { img, text } = sizes[isHeader ? "header" : size];

  return (
    <div className={cn("flex items-center gap-3 sm:gap-3.5", className)}>
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
          alt="Zerotrace Executive shield logo"
          width={isHeader ? 100 : img}
          height={isHeader ? 100 : img}
          className={cn(
            "object-contain",
            isHeader
              ? "w-14 h-14 sm:w-16 sm:h-16 lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px]"
              : "w-auto h-auto"
          )}
          style={isHeader ? undefined : { width: img, height: img }}
          priority
        />
      </motion.div>
      {showText && (
        <div className={cn("leading-none", text)}>
          {isHeader ? (
            <>
              <span className="block font-sans font-bold tracking-[0.14em] text-ivory uppercase text-sm sm:text-base lg:text-xl xl:text-2xl">
                Zerotrace
              </span>
              <span className="block font-sans font-medium tracking-[0.2em] text-gold uppercase text-[11px] sm:text-xs lg:text-sm xl:text-base mt-0.5 lg:mt-1">
                Executive
              </span>
            </>
          ) : (
            <>
              <span className="block font-sans font-semibold tracking-widest text-gold uppercase text-xs sm:text-sm">
                Zerotrace
              </span>
              <span className="block font-sans text-[10px] sm:text-xs tracking-[0.3em] text-steel uppercase mt-0.5">
                Executive
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
