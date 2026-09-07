"use client";

import { whyUsItems } from "@/data/why-us";
import { getIcon } from "@/lib/icons";
import { SectionReveal } from "./SectionReveal";

export function WhyUsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {whyUsItems.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <SectionReveal key={item.title} delay={i * 0.05}>
            <article className="gold-border-glow glass-panel rounded-lg p-6 h-full">
              <div className="p-3 rounded-lg bg-sapphire-dark/50 border border-gold/10 inline-flex mb-4">
                <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl text-ivory mb-2">{item.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{item.description}</p>
            </article>
          </SectionReveal>
        );
      })}
    </div>
  );
}
