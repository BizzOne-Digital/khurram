"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  href?: string;
}

export function MagneticButton({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-gold text-nearblack hover:bg-gold-warm shadow-lg shadow-gold/20",
    secondary:
      "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10",
    ghost: "text-ivory hover:text-gold border border-transparent hover:border-gold/30",
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 rounded-sm overflow-hidden max-w-full",
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={!reducedMotion ? { x: ["-100%", "200%"] } : undefined}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        style={{ x: position.x, y: position.y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
