"use client";

import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { MagneticButton } from "./MagneticButton";
import { useAuditModal } from "@/context/AuditModalContext";

export function ConfidentialCTA() {
  const { openModal } = useAuditModal();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-sapphire/10 to-midnight" />
      <div className="absolute inset-0 secure-grid-bg opacity-20" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto section-pad w-full">
        <SectionReveal>
          <div className="cta-glow-box text-center">
            <p className="section-eyebrow justify-center mb-6">Take Action Now</p>
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 relative z-10">
              The Best Time to Reduce Exposure Is Before It Becomes Leverage.
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Request a discreet introductory review and learn where your most immediate
              privacy risks may exist.
            </p>
            <MagneticButton
              onClick={openModal}
              variant="primary"
              className="relative z-10 w-full sm:w-auto text-xs sm:text-sm px-8 sm:px-10 py-4 shadow-xl shadow-gold/25"
            >
              Request Confidential Audit
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
