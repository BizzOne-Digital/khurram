"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const nodes = [
  { id: "public", label: "Public Records", x: 15, y: 20 },
  { id: "brokers", label: "Data Brokers", x: 85, y: 15 },
  { id: "breach", label: "Breach Databases", x: 80, y: 50 },
  { id: "social", label: "Social Profiles", x: 20, y: 55 },
  { id: "contact", label: "Personal Contact", x: 50, y: 75 },
  { id: "location", label: "Location Exposure", x: 50, y: 35 },
];

const connections = [
  ["public", "location"],
  ["brokers", "location"],
  ["breach", "contact"],
  ["social", "contact"],
  ["location", "contact"],
  ["public", "social"],
  ["brokers", "breach"],
];

export function ExposureMap() {
  const reducedMotion = useReducedMotion();
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full aspect-[16/10] max-w-4xl mx-auto">
      <p className="label-caps text-center text-steel mb-6">
        Illustrative Risk Model — Not a Live Scan
      </p>

      <svg
        viewBox="0 0 100 80"
        className="w-full h-full"
        role="img"
        aria-label="Diagram showing how personal information can move between public records, data brokers, breach databases, social profiles, contact details, and location exposure"
      >
        <title>Executive Exposure Pathway Model</title>

        {connections.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          if (!a || !b) return null;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(212,175,55,0.2)"
              strokeWidth="0.3"
              initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
              whileInView={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          );
        })}

        {!reducedMotion &&
          connections.map(([from, to], i) => {
            const a = nodeMap[from];
            const b = nodeMap[to];
            if (!a || !b) return null;
            return (
              <motion.circle
                key={`pulse-${from}-${to}`}
                r="0.5"
                fill="#D4AF37"
                initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              />
            );
          })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#0F2537"
              stroke="#D4AF37"
              strokeWidth="0.4"
              initial={reducedMotion ? undefined : { scale: 0 }}
              whileInView={reducedMotion ? undefined : { scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            />
            <text
              x={node.x}
              y={node.y + 7}
              textAnchor="middle"
              fill="#8C969F"
              fontSize="2.5"
              className="font-sans"
            >
              {node.label}
            </text>
          </g>
        ))}

        <motion.circle
          cx="50"
          cy="50"
          r="12"
          fill="none"
          stroke="rgba(212,175,55,0.15)"
          strokeWidth="0.3"
          animate={reducedMotion ? undefined : { r: [12, 14, 12] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
