"use client";

import { SectionReveal } from "./SectionReveal";
import { QuickAuditForm } from "./QuickAuditForm";

export function AuditIntakeSection() {
  return (
    <section
      id="request-audit"
      className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sapphire/15 via-midnight to-midnight" />
      <div className="absolute inset-0 secure-grid-bg opacity-15" aria-hidden="true" />

      <div className="relative max-w-xl mx-auto section-pad w-full">
        <SectionReveal>
          <QuickAuditForm variant="embedded" />
        </SectionReveal>
      </div>
    </section>
  );
}
