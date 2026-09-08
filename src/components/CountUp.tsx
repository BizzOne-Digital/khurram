"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CountUpProps {
  value: string;
  className?: string;
}

export function CountUp({ value, className }: CountUpProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!match || reducedMotion || hasAnimated.current) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [match, reducedMotion, value]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
