export interface RiskItem {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  exposureLevel: number;
}

export const risks: RiskItem[] = [
  {
    id: "home-address",
    label: "Residential Exposure",
    title: "Exposed Home Addresses",
    description:
      "Public records and data-broker profiles can connect senior leaders to personal residences and family members.",
    icon: "home",
    exposureLevel: 78,
  },
  {
    id: "credentials",
    label: "Credential Risk",
    title: "Dark-Web Credential Exposure",
    description:
      "Breached email addresses and passwords may create opportunities for account takeover, impersonation, and targeted social engineering.",
    icon: "keyRound",
    exposureLevel: 65,
  },
  {
    id: "public-records",
    label: "Intelligence Aggregation",
    title: "Public-Record Intelligence",
    description:
      "Corporate filings, property records, professional profiles, and archived content can reveal more than intended when combined.",
    icon: "fileSearch",
    exposureLevel: 82,
  },
];
