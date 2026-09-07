export const auditPricing = {
  name: "Executive Audit & Diagnostics",
  regularPrice: 1899,
  limitedPrice: 999,
  period: "one-time",
  badge: "Limited-Time Offer",
  features: [
    "Initial confidential consultation",
    "Executive exposure assessment",
    "Personal-data visibility review",
    "Credential exposure diagnostics",
    "Public-record risk mapping",
    "Data-broker review",
    "Prioritized remediation roadmap",
    "Executive findings summary",
  ],
  homeFeatures: [
    "Exposure assessment",
    "Diagnostic review",
    "Prioritized action plan",
    "Confidential findings summary",
  ],
  cta: "Request Confidential Audit",
  homeCta: "Request Your Audit",
};

export const retainerPricing = {
  name: "Active Protection Retainer",
  price: 149,
  period: "month",
  features: [
    "Recurring exposure monitoring",
    "Periodic privacy reviews",
    "Continued visibility checks",
    "Ongoing remediation guidance",
    "Executive privacy support",
    "Updated priority recommendations",
  ],
  homeFeatures: [
    "Ongoing monitoring",
    "Privacy-maintenance support",
    "Recurring exposure review",
    "Continued risk visibility",
    "Executive-focused guidance",
  ],
  cta: "Discuss Active Protection",
  homeCta: "Explore Active Protection",
};

export const comparisonRows = [
  {
    feature: "Engagement type",
    audit: "One-time diagnostic",
    retainer: "Monthly retainer",
  },
  {
    feature: "Best suited for",
    audit: "Initial exposure discovery",
    retainer: "Ongoing executive privacy",
  },
  {
    feature: "Initial exposure review",
    audit: true,
    retainer: true,
  },
  {
    feature: "Action plan",
    audit: true,
    retainer: true,
  },
  {
    feature: "Ongoing monitoring",
    audit: false,
    retainer: true,
  },
  {
    feature: "Recurring privacy review",
    audit: false,
    retainer: true,
  },
  {
    feature: "Monthly support",
    audit: false,
    retainer: true,
  },
  {
    feature: "Investment",
    audit: "$999 one-time*",
    retainer: "$149/month",
  },
] as const;
