"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  children,
  as = "h2",
  className,
  delay = 0,
}: AnimatedHeadingProps) {
  const reducedMotion = useReducedMotion();
  const words = children.split(" ");

  const Tag = as;

  if (reducedMotion) {
    return <Tag className={cn("heading-display text-balance", className)}>{children}</Tag>;
  }

  return (
    <Tag className={cn("heading-display text-balance", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.2em] last:mr-0"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
