"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/data/images";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative hidden lg:flex items-center justify-center w-full h-[480px] xl:h-[520px]">
      <div
        className="ambient-orb w-72 h-72 bg-gold/10 top-1/4 right-1/4 animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-96 h-96 bg-sapphire-dark/40 bottom-0 left-1/4"
        aria-hidden="true"
      />

      {[1, 0.85, 0.7, 0.55].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gold/20"
          style={{
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
            maxWidth: 420,
            maxHeight: 420,
          }}
          animate={reducedMotion ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      ))}

      {!reducedMotion && (
        <motion.div
          className="absolute w-[420px] h-[420px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-bottom-left rounded-tl-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(212,175,55,0.15) 0deg, transparent 50deg)",
            }}
          />
        </motion.div>
      )}

      <motion.div
        className="relative z-10 animate-float"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-[-30%] bg-gold/15 rounded-full blur-3xl animate-glow-pulse" />
        <Image
          src={images.logo}
          alt=""
          width={280}
          height={280}
          className="relative object-contain drop-shadow-[0_0_80px_rgba(212,175,55,0.4)] w-[220px] h-[220px] xl:w-[280px] xl:h-[280px]"
          priority
          aria-hidden="true"
        />
      </motion.div>

      <FloatingMetric label="Profiles Removed" value="47" className="top-8 right-0" delay={0} />
      <FloatingMetric label="Devices Protected" value="3" className="bottom-24 left-0" delay={0.2} />
      <FloatingMetric label="Exposure Score" value="↓ 68%" className="bottom-8 right-8" delay={0.4} />
    </div>
  );
}

function FloatingMetric({
  label,
  value,
  className,
  delay,
}: {
  label: string;
  value: string;
  className: string;
  delay: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className} glass-panel rounded-lg px-4 py-3 border border-gold/20 shadow-xl shadow-black/30`}
      initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.6 }}
    >
      <p className="text-[10px] tracking-widest uppercase text-steel mb-0.5">{label}</p>
      <p className="font-display text-xl text-gold">{value}</p>
    </motion.div>
  );
}
