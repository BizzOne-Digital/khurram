"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceOfferings } from "@/data/protection";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";

export function ServiceSelection() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.04),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <SectionReveal className="text-center mb-10 sm:mb-16">
          <p className="section-eyebrow justify-center">Our Services</p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4">
            Select the Service You Require
          </AnimatedHeading>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {serviceOfferings.map((offering, i) => (
            <SectionReveal key={offering.id} delay={i * 0.1}>
              <article className="group premium-card gold-border-glow rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="p-7 sm:p-9 lg:p-10 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ivory mb-2">
                    {offering.subtitle}
                  </h3>
                  <h4 className="font-sans text-sm sm:text-base text-gold/80 font-medium mb-5 tracking-wide">
                    {offering.title}
                  </h4>
                  <p className="text-steel text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    {offering.description}
                  </p>
                  <Link
                    href={offering.href}
                    className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-warm transition-all group-hover:gap-4"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
