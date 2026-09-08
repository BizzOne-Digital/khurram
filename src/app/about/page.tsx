import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import Image from "next/image";
import { AudienceCard } from "@/components/AudienceCard";
import { ConfidentialCTA } from "@/components/ConfidentialCTA";
import { SecureGrid } from "@/components/SecureGrid";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { audiences } from "@/data/audiences";
import { principles } from "@/data/why-us";
import { legalDisclaimer } from "@/data/contact";
import { images } from "@/data/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "About Zerotrace Executive",
  "Learn about Zerotrace Executive's privacy-first approach to executive digital-risk protection. Ontario-based service for C-suite leaders and high-net-worth individuals.",
  "/about"
);

const aboutSections = [
  {
    title: "Why Zerotrace Executive Exists",
    content:
      "Senior leaders operate in an environment where personal information has become a strategic asset—for both protection and exploitation. Zerotrace Executive was created to give executives the same level of strategic awareness about their digital exposure that they apply to every other dimension of their professional lives.",
  },
  {
    title: "The Executive Risk Landscape",
    content:
      "The modern executive faces a unique convergence of risks: public corporate filings, media coverage, professional networks, property records, and data-broker aggregations can collectively reveal far more than any single source. Understanding how these elements connect is the foundation of effective executive privacy.",
  },
  {
    title: "Our Privacy-First Approach",
    content:
      "We begin with discovery—identifying what is already publicly accessible. From there, we diagnose exposure pathways, prioritize remediation actions proportionate to actual risk, and offer ongoing monitoring for those who require continued visibility management.",
  },
  {
    title: "Discretion and Confidentiality",
    content:
      "Every engagement is conducted with the confidentiality expected at the executive level. Communications, findings, and recommendations are shared only with authorized parties through secure, private channels.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-x-clip w-full min-h-[50vh] flex items-center">
        <Image
          src={images.executivePortrait}
          alt=""
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        <SecureGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/85 to-midnight" />
        <div className="relative max-w-4xl mx-auto section-pad text-center w-full">
          <SectionReveal>
            <AnimatedHeading as="h1" className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8">
              Privacy Is Not Secrecy. It Is Control.
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base lg:text-lg leading-relaxed">
              Zerotrace Executive was created for individuals whose leadership, visibility,
              and influence can make personal information more valuable to bad actors. Our
              role is to help clients understand their exposure, prioritize meaningful
              action, and maintain greater control over their digital footprint.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 sm:mb-16">
            <SectionReveal>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={images.consultation}
                  alt="Confidential executive cybersecurity consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-4">
                Discretion You Can Trust
              </h2>
              <p className="text-steel leading-relaxed">
                Every engagement begins with a confidential consultation — clear findings,
                executive-friendly guidance, and absolute discretion at every step.
              </p>
            </SectionReveal>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16 w-full">
          {aboutSections.map((section, i) => (
            <SectionReveal key={section.title} delay={i * 0.1}>
              <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-3 sm:mb-4">{section.title}</h2>
              <p className="text-steel leading-relaxed">{section.content}</p>
            </SectionReveal>
          ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-sapphire/10 overflow-x-clip w-full">
        <div className="max-w-7xl mx-auto section-pad w-full">
          <SectionReveal className="text-center mb-8 sm:mb-12">
            <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl">Who We Serve</AnimatedHeading>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {audiences.map((audience, i) => (
              <AudienceCard key={audience.id} audience={audience} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 overflow-x-clip w-full">
        <div className="max-w-4xl mx-auto section-pad w-full">
          <SectionReveal>
            <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-3 sm:mb-4">
              Ontario-Based Service Delivery
            </h2>
            <p className="text-steel leading-relaxed mb-8">
              Services are provided through our Ontario operating entity. We serve
              executives, founders, board directors, and high-net-worth individuals
              across Canada with discretion and local accountability.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-6 sm:mb-8">Our Principles</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="glass-panel rounded-lg p-6 gold-border-glow"
                >
                  <h3 className="font-display text-xl text-gold mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-steel text-sm">{principle.description}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-10 sm:py-12 overflow-x-clip w-full">
        <div className="max-w-3xl mx-auto section-pad">
          <LegalDisclaimer text={legalDisclaimer} size="md" />
        </div>
      </section>

      <ConfidentialCTA />
    </div>
  );
}
