"use client";

import { executiveStats } from "@/data/stats";
import { CountUp } from "./CountUp";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-sapphire/20 via-sapphire/10 to-midnight" />
      <div className="absolute inset-0 secure-grid-bg opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="section-eyebrow justify-center">Industry Intelligence</p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6">
            We Are Digital Executive Protection
          </AnimatedHeading>
          <p className="text-steel text-sm sm:text-base lg:text-lg leading-relaxed">
            Our specialist cybersecurity expertise and concierge support is tailored
            to protect the personal privacy, devices, and digital lives of every
            client — delivering peace of mind in an increasingly connected world.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {executiveStats.map((stat, i) => (
            <SectionReveal key={stat.value} delay={i * 0.08}>
              <div className="stat-card group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CountUp
                  value={stat.value}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold mb-3 sm:mb-4 block"
                />
                <p className="text-steel text-xs sm:text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
