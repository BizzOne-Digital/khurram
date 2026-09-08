"use client";

import { protectionPillars } from "@/data/protection";
import { getIcon } from "@/lib/icons";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";

export function ProtectionPillars() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-sapphire/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <SectionReveal className="text-center mb-10 sm:mb-16">
          <p className="section-eyebrow justify-center">
            Your Trusted Privacy Guide
          </p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl">
            How Zerotrace Protects You
          </AnimatedHeading>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {protectionPillars.map((pillar, i) => {
            const Icon = getIcon(pillar.icon);
            return (
              <SectionReveal key={pillar.title} delay={i * 0.08}>
                <article className="premium-card gold-border-glow p-6 sm:p-8 h-full group">
                  <div className="inline-flex p-3.5 rounded-xl bg-gradient-to-br from-sapphire-dark/80 to-sapphire/40 border border-gold/15 mb-5 group-hover:border-gold/30 transition-colors">
                    <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-ivory mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
