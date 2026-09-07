"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const leftPanelItems = [
  "Personal Data",
  "Exposed Records",
  "Online Profiles",
  "Data Brokers",
  "Risk Surface",
];

const rightPanelItems = [
  "Digital Footprint",
  "Threat Intelligence",
  "Reputation Defense",
  "Executive Privacy",
  "Peace of Mind",
];

const monitoringTags = ["Global Monitoring", "Protection", "Discretion"];

export function HeroHudPanels() {
  const reducedMotion = useReducedMotion();

  const float = (delay: number) =>
    reducedMotion
      ? {}
      : {
          y: [0, -8, 0],
          transition: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Left data panel */}
      <motion.div
        className="absolute top-[8%] left-[0%] xl:left-[2%] w-44 xl:w-52 glass-panel rounded-lg p-3 border border-gold/15 shadow-xl shadow-black/40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, ...float(0) }}
        transition={{ delay: 0.8 }}
      >
        <p className="label-caps text-[9px] text-gold/70 mb-2 border-b border-gold/10 pb-1">
          Exposure Index
        </p>
        <ul className="space-y-1.5">
          {leftPanelItems.map((item, i) => (
            <li key={item} className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-steel uppercase tracking-wide">{item}</span>
              <span className="h-1 flex-1 max-w-12 bg-sapphire-dark rounded-full overflow-hidden">
                <motion.span
                  className="block h-full bg-gold/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${55 + i * 8}%` }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                />
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Global monitoring panel */}
      <motion.div
        className="absolute bottom-[18%] left-[0%] xl:left-[1%] w-40 xl:w-48 glass-panel rounded-lg p-3 border border-gold/15"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, ...float(0.5) }}
        transition={{ delay: 1 }}
      >
        <div className="relative h-16 mb-2 rounded bg-sapphire-dark/60 overflow-hidden">
          <svg viewBox="0 0 100 50" className="w-full h-full opacity-70">
            <ellipse cx="50" cy="25" rx="40" ry="20" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" />
            {[20, 35, 50, 65, 80].map((x) => (
              <circle key={x} cx={x} cy={25} r="1.5" fill="#D4AF37" />
            ))}
            <path d="M20 25 Q50 10 80 25" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-1">
          {monitoringTags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] uppercase tracking-wider text-gold/60 px-1.5 py-0.5 border border-gold/10 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Confidential document panel */}
      <motion.div
        className="absolute top-[6%] right-[0%] xl:right-[2%] w-36 xl:w-44 glass-panel rounded-lg p-3 border border-gold/15"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, ...float(0.3) }}
        transition={{ delay: 0.9 }}
      >
        <p className="label-caps text-[9px] text-gold/70 mb-2">Confidential</p>
        <div className="space-y-1.5">
          {[100, 85, 70, 90, 60].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-sm bg-steel/30"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <p className="text-[8px] text-steel/50 mt-2 uppercase tracking-widest">Redacted</p>
      </motion.div>

      {/* Right intelligence panel */}
      <motion.div
        className="absolute top-[38%] right-[0%] xl:right-[1%] w-44 xl:w-52 glass-panel rounded-lg p-3 border border-gold/15"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, ...float(0.7) }}
        transition={{ delay: 1.1 }}
      >
        <p className="label-caps text-[9px] text-gold/70 mb-2 border-b border-gold/10 pb-1">
          Intelligence Layer
        </p>
        <ul className="space-y-1.5">
          {rightPanelItems.map((item, i) => (
            <li key={item} className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-steel uppercase tracking-wide">{item}</span>
              <span className="h-1 flex-1 max-w-12 bg-sapphire-dark rounded-full overflow-hidden">
                <motion.span
                  className="block h-full bg-gold/50 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${45 + i * 10}%` }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                />
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Quieter tomorrow panel */}
      <motion.div
        className="absolute bottom-[12%] right-[0%] xl:right-[2%] w-36 xl:w-44 glass-panel rounded-lg overflow-hidden border border-gold/15"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, ...float(1) }}
        transition={{ delay: 1.3 }}
      >
        <div className="h-14 bg-gradient-to-br from-sapphire-dark to-midnight relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent)]" />
        </div>
        <p className="text-[9px] text-center text-gold/70 py-2 px-2 uppercase tracking-widest leading-relaxed">
          A Quieter Digital Tomorrow
        </p>
      </motion.div>
    </div>
  );
}
