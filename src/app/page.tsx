import { HeroCarousel } from "@/components/HeroCarousel";
import { ConfidentialityBanner } from "@/components/ConfidentialityBanner";
import { StatsSection } from "@/components/StatsSection";
import { ServiceSelection } from "@/components/ServiceSelection";
import { ProtectionPillars } from "@/components/ProtectionPillars";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { RiskCard } from "@/components/RiskCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PricingCard } from "@/components/PricingCard";
import { AudienceCard } from "@/components/AudienceCard";
import { ResourcesSection } from "@/components/ResourcesSection";
import { MediaLogos } from "@/components/MediaLogos";
import { SampleReportShowcase } from "@/components/SampleReportShowcase";
import { WhyUsGrid } from "@/components/WhyUsGrid";
import { FAQSection } from "@/components/FAQSection";
import { AuditIntakeSection } from "@/components/AuditIntakeSection";
import { ConfidentialCTA } from "@/components/ConfidentialCTA";
import { RedactedTextReveal } from "@/components/RedactedTextReveal";
import { SecureGrid } from "@/components/SecureGrid";
import { risks } from "@/data/risks";
import { audiences } from "@/data/audiences";
import { auditPricing, retainerPricing } from "@/data/pricing";
import { consultationNote } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Executive Privacy Protection",
  "Elite executive privacy and digital-risk protection for C-suite leaders, founders, and high-net-worth individuals in Ontario and Canada.",
  "/"
);

export default function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <HeroCarousel />
      <ConfidentialityBanner />
      <StatsSection />
      <ServiceSelection />
      <ProtectionPillars />
      <PlatformShowcase />
      <SampleReportShowcase />

      <section className="py-12 sm:py-16 bg-sapphire/20 border-y border-gold/10 overflow-x-clip w-full">
        <div className="max-w-2xl mx-auto section-pad text-center w-full">
          <p className="label-caps text-gold/60 mb-4">Sensitive Data Detected</p>
          <RedactedTextReveal
            sensitiveText="John Executive — 142 Maple Ridge Dr, Toronto ON — spouse: Sarah Executive — breached credentials: 3 accounts"
            redactedLabel="████ █████████ — ███ █████ ████ ██, ███████ ██"
          />
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
        <SecureGrid className="opacity-50" />
        <div className="relative max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6">
              Your Personal Information Is Already in Motion
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base lg:text-lg leading-relaxed">
              Executive risk rarely begins inside the boardroom. Home addresses, family
              associations, breached passwords, public filings, data-broker profiles, and
              reused credentials can create a map of an executive&apos;s private life.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {risks.map((risk, i) => (
              <RiskCard key={risk.id} risk={risk} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-10 sm:mb-16">
            <p className="section-eyebrow justify-center">Why Zerotrace Executive</p>
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl">
              Governance, Safety & Discretion
            </AnimatedHeading>
          </SectionReveal>
          <WhyUsGrid />
        </div>
      </section>

      <section id="process" className="relative py-16 sm:py-24 lg:py-32 bg-sapphire/10 overflow-x-clip w-full">
        <SecureGrid className="opacity-30" />
        <div className="relative max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-10 sm:mb-16">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4">
              From Exposure to Controlled Visibility
            </AnimatedHeading>
          </SectionReveal>
          <ProcessTimeline />
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-10 sm:mb-16">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4">
              Executive Protection Offers
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <PricingCard
              title={auditPricing.name}
              regularPrice={auditPricing.regularPrice}
              price={auditPricing.limitedPrice}
              period={auditPricing.period}
              features={auditPricing.homeFeatures}
              cta={auditPricing.homeCta}
              badge={auditPricing.badge}
              variant="audit"
              featured
            />
            <PricingCard
              title={retainerPricing.name}
              price={retainerPricing.price}
              period={retainerPricing.period}
              features={retainerPricing.homeFeatures}
              cta={retainerPricing.homeCta}
              variant="retainer"
            />
          </div>

          <p className="text-center text-xs sm:text-sm text-steel mt-6 sm:mt-8 italic px-2">
            {consultationNote}
          </p>
        </div>
      </section>

      <FAQSection />

      <section className="py-16 sm:py-24 lg:py-32 bg-sapphire/10 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-10 sm:mb-16">
            <AnimatedHeading className="text-xl sm:text-2xl lg:text-4xl mb-4">
              Built for C-Suite Executives, Founders, Board Directors, and High-Net-Worth Individuals.
            </AnimatedHeading>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {audiences.map((audience, i) => (
              <AudienceCard key={audience.id} audience={audience} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-t border-gold/10 overflow-x-clip w-full">
        <div className="max-w-4xl mx-auto section-pad text-center w-full">
          <SectionReveal>
            <p className="label-caps text-gold/50 mb-6">Want to know more?</p>
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl mb-4">
              Get in touch and schedule a confidential consultation
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base">
              Book a demonstration or request a callback to see Zerotrace Executive in action.
            </p>
          </SectionReveal>
        </div>
      </section>

      <ResourcesSection />
      <MediaLogos />

      <AuditIntakeSection />
      <ConfidentialCTA />
    </div>
  );
}
