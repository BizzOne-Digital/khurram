"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { MagneticButton } from "./MagneticButton";
import { useAuditModal } from "@/context/AuditModalContext";
import { images } from "@/data/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PlatformShowcase() {
  const { openModal } = useAuditModal();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(18,58,90,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <SectionReveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 rounded-2xl blur-2xl" aria-hidden="true" />
              <div className="relative space-y-4 sm:space-y-5">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src={images.platformDashboard}
                    alt="Zerotrace Executive privacy dashboard showing exposure metrics"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/30">
                    <Image
                      src={images.platformReport}
                      alt="Executive Digital Exposure Assessment report"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/30">
                    <Image
                      src={images.platformMobile}
                      alt="Zerotrace mobile privacy monitoring app"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="section-eyebrow">Platform Preview</p>
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl mb-6">
              Executive Privacy, Delivered With Discretion
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base leading-relaxed mb-8">
              From comprehensive exposure assessments to ongoing monitoring, Zerotrace
              Executive provides the intelligence and guidance senior leaders need to
              regain control of their digital footprint.
            </p>

            <ul className="space-y-3 mb-8">
              {["Real-time exposure scoring", "Data-broker profile tracking", "Confidential executive briefings"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-steel">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton onClick={openModal} variant="primary" className="px-7 py-4">
                <span className="flex items-center gap-2">
                  Request Confidential Audit
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold/40 text-gold text-xs sm:text-sm tracking-[0.12em] uppercase rounded-sm hover:bg-gold/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
