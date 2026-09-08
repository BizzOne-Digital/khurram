"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { images } from "@/data/images";

export function SampleReportShowcase() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-sapphire/10" />
      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SectionReveal>
            <p className="section-eyebrow">Your Deliverable</p>
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl mb-6">
              What You Actually Receive
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base leading-relaxed mb-6">
              Before investing $999, know exactly what your Executive Audit delivers —
              a confidential, executive-friendly risk report with clear remediation priorities.
            </p>
            <ul className="space-y-3">
              {[
                "Threat exposure score with severity indices",
                "Redacted breach & credential findings table",
                "Data-broker visibility assessment",
                "Prioritized remediation action plan",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-steel">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="relative premium-card gold-border-glow rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                <Image
                  src={images.platformReport}
                  alt="Sample Executive Digital Exposure Assessment report — confidential deliverable"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block text-[10px] px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded uppercase tracking-wider mb-2">
                  Sample — Redacted
                </span>
                <p className="font-display text-lg text-ivory">
                  Executive Digital Exposure Assessment
                </p>
                <p className="text-xs text-steel/70 mt-1">
                  Delivered within 48–72 hours of your confidential intake
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
