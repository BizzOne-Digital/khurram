import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ConfidentialCTA } from "@/components/ConfidentialCTA";
import { SecureGrid } from "@/components/SecureGrid";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Executive Privacy Services",
  "Comprehensive executive digital exposure assessment, credential diagnostics, data-broker review, and ongoing privacy monitoring for senior leaders.",
  "/services"
);

export default function ServicesPage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-x-clip w-full">
        <SecureGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/20 to-midnight" />
        <div className="relative max-w-7xl mx-auto section-pad text-center w-full">
          <SectionReveal>
            <p className="label-caps text-gold/70 mb-4">Our Capabilities</p>
            <AnimatedHeading as="h1" className="text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
              Executive Privacy Services
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Comprehensive digital-risk assessment and protection services designed
              exclusively for executive-level privacy requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-sapphire/10 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-10 sm:mb-16">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4">
              Our Engagement Process
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base max-w-2xl mx-auto">
              A structured approach from initial discovery through ongoing protection.
            </p>
          </SectionReveal>
          <ProcessTimeline vertical />
        </div>
      </section>

      <ConfidentialCTA />
    </div>
  );
}
