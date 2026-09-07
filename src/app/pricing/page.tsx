import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { PricingCard } from "@/components/PricingCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ConfidentialCTA } from "@/components/ConfidentialCTA";
import { SecureGrid } from "@/components/SecureGrid";
import { auditPricing, retainerPricing } from "@/data/pricing";
import { pricingDisclaimer, consultationNote } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Executive Privacy Pricing",
  "Executive Audit & Diagnostics from $999 and Active Protection Retainer at $149/month. Transparent pricing for C-suite privacy services in Ontario.",
  "/pricing"
);

export default function PricingPage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-x-clip w-full">
        <SecureGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/20 to-midnight" />
        <div className="relative max-w-7xl mx-auto section-pad text-center w-full">
          <SectionReveal>
            <p className="label-caps text-gold/70 mb-4">Investment</p>
            <AnimatedHeading as="h1" className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
              Executive Protection Pricing
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Two distinct engagement options designed for different stages of your
              executive privacy journey.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <PricingCard
              title={auditPricing.name}
              regularPrice={auditPricing.regularPrice}
              price={auditPricing.limitedPrice}
              period={auditPricing.period}
              features={auditPricing.features}
              cta={auditPricing.cta}
              badge={auditPricing.badge}
              variant="audit"
              featured
            />
            <PricingCard
              title={retainerPricing.name}
              price={retainerPricing.price}
              period={retainerPricing.period}
              features={retainerPricing.features}
              cta={retainerPricing.cta}
              variant="retainer"
            />
          </div>

          <p className="text-center text-sm text-steel mt-8 italic max-w-2xl mx-auto">
            {consultationNote}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-sapphire/10 overflow-x-clip w-full">
        <div className="max-w-5xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-8 sm:mb-12">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl">
              Compare Engagements
            </AnimatedHeading>
          </SectionReveal>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-10 sm:py-12 overflow-x-clip w-full">
        <div className="max-w-3xl mx-auto section-pad">
          <LegalDisclaimer text={pricingDisclaimer} size="md" />
        </div>
      </section>

      <ConfidentialCTA />
    </div>
  );
}
