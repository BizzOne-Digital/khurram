"use client";

import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { MagneticButton } from "./MagneticButton";
import { SecureGrid } from "./SecureGrid";
import { useAuditModal } from "@/context/AuditModalContext";

export function ConfidentialCTA() {
  const { openModal } = useAuditModal();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <SecureGrid className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-sapphire/30 via-transparent to-sapphire/30" />

      <div className="relative max-w-4xl mx-auto section-pad text-center w-full">
        <SectionReveal>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6">
            The Best Time to Reduce Exposure Is Before It Becomes Leverage.
          </AnimatedHeading>
          <p className="text-steel text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Request a discreet introductory review and learn where your most immediate
            privacy risks may exist.
          </p>
          <MagneticButton onClick={openModal} variant="primary" className="w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4">
            Request Confidential Audit
          </MagneticButton>
        </SectionReveal>
      </div>
    </section>
  );
}
