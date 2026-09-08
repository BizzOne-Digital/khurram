export interface ProtectionPillar {
  title: string;
  description: string;
  icon: string;
}

export const protectionPillars: ProtectionPillar[] = [
  {
    title: "Personalized Protection",
    description:
      "Designed to suit individual lifestyles, we tailor cybersecurity solutions to meet your specific requirements — delivering unparalleled levels of service and protection.",
    icon: "userCheck",
  },
  {
    title: "Holistic Cybersecurity",
    description:
      "We safeguard personal devices, home networks, online accounts, and digital profiles — testing exposure pathways and eliminating vulnerabilities across every touchpoint.",
    icon: "shield",
  },
  {
    title: "Peace of Mind",
    description:
      "Our team provides the support and guidance needed to feel secure at all times. We are trusted to handle every detail with — and for — our clients.",
    icon: "heartHandshake",
  },
  {
    title: "Purpose-Built Process",
    description:
      "Our specialist methodology is designed exclusively to protect personal privacy by shrinking your attack surface and countering sophisticated cybersecurity threats.",
    icon: "cpu",
  },
];

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "audit",
    title: "Executive Audit & Diagnostics",
    subtitle: "Digital Executive Protection",
    description:
      "Reduce your digital footprint and safeguard personal privacy. Extend cybersecurity defenses beyond the corporate walls without burdening internal resources.",
    cta: "Learn More",
    href: "/pricing",
  },
  {
    id: "retainer",
    title: "Active Protection Retainer",
    subtitle: "Private Client Services",
    description:
      "Protect yourself and your family from targeted cyber attacks threatening your reputation, privacy, safety, and finances with personalized ongoing monitoring.",
    cta: "Learn More",
    href: "/pricing",
  },
];
