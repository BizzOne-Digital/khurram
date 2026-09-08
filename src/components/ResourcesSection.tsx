"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { topResources } from "@/data/resources";
import { images } from "@/data/images";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { useAuditModal } from "@/context/AuditModalContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const resourceImages = [
  images.platformReport,
  images.platformDashboard,
  images.consultation,
];

export function ResourcesSection() {
  const { openModal } = useAuditModal();
  const reducedMotion = useReducedMotion();

  return (
    <section id="resources" className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-sapphire/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <SectionReveal className="mb-10 sm:mb-16">
          <p className="section-eyebrow">Top Resources</p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl">
            Executive Privacy Insights & Reports
          </AnimatedHeading>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topResources.map((resource, i) => (
            <SectionReveal key={resource.id} delay={i * 0.08}>
              <motion.article
                className="group premium-card gold-border-glow rounded-2xl overflow-hidden h-full flex flex-col"
                whileHover={reducedMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-[16/9] border-b border-white/5 overflow-hidden">
                  <Image
                    src={resourceImages[i]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <p className="label-caps text-gold/50 mb-3">{resource.category}</p>
                  <h3 className="font-display text-xl sm:text-2xl text-ivory mb-4 leading-snug group-hover:text-gold-warm/90 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-6 flex-grow">
                    {resource.description}
                  </p>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-warm transition-all group-hover:gap-3"
                  >
                    Request Access
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
