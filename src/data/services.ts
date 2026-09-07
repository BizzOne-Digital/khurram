export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    id: "exposure-assessment",
    title: "Executive Digital Exposure Assessment",
    description:
      "Review potentially exposed personal information, identity connections, public records, and discoverable digital assets.",
    icon: "shield",
  },
  {
    id: "address-review",
    title: "Address and Personal-Data Exposure Review",
    description:
      "Identify where residential, family, contact, or personal-location data may be publicly discoverable.",
    icon: "mapPin",
  },
  {
    id: "credential-diagnostics",
    title: "Credential Exposure Diagnostics",
    description:
      "Evaluate known breach indicators and password-exposure risks using authorized and privacy-conscious methods.",
    icon: "keyRound",
  },
  {
    id: "public-record-mapping",
    title: "Public-Record Risk Mapping",
    description:
      "Assess how separate public records can be combined to create a broader executive profile.",
    icon: "fileSearch",
  },
  {
    id: "data-broker-review",
    title: "Data-Broker Visibility Review",
    description:
      "Identify prominent data-broker exposure and recommend appropriate opt-out or removal actions.",
    icon: "database",
  },
  {
    id: "footprint-reduction",
    title: "Digital Footprint Reduction Strategy",
    description:
      "Provide a prioritized roadmap for reducing unnecessary visibility across the open web.",
    icon: "footprints",
  },
  {
    id: "privacy-monitoring",
    title: "Executive Privacy Monitoring",
    description:
      "Our $149/month active retainer provides ongoing review, periodic exposure checks, and continued executive privacy guidance.",
    icon: "eye",
  },
  {
    id: "risk-briefing",
    title: "Confidential Risk Briefing",
    description:
      "Present findings in a clear, private, executive-friendly format designed for informed decision-making.",
    icon: "fileText",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discover",
    description:
      "Identify publicly exposed information and potential areas of concern.",
  },
  {
    step: 2,
    title: "Diagnose",
    description:
      "Evaluate exposure pathways, credential risks, and privacy weaknesses.",
  },
  {
    step: 3,
    title: "Reduce",
    description:
      "Prioritize practical remediation and data-removal actions.",
  },
  {
    step: 4,
    title: "Monitor",
    description:
      "Maintain awareness through an ongoing executive privacy retainer.",
  },
];
