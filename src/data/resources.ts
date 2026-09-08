export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const topResources: ResourceItem[] = [
  {
    id: "exposure-report",
    title: "Executive Digital Exposure Report 2025",
    category: "White Paper & Report",
    description:
      "Discover why top executives are becoming the weakest link in cybersecurity. Based on industry research, this report uncovers how cybercriminals breach home networks and personal devices to access sensitive organizational data.",
  },
  {
    id: "protection-framework",
    title: "Digital Executive Protection Framework",
    category: "White Paper & Report",
    description:
      "A comprehensive framework for safeguarding the personal digital lives of executives — covering exposure assessment, remediation priorities, and ongoing monitoring best practices.",
  },
  {
    id: "deepfake-threats",
    title: "Faked to Perfection: Deepfake Threats",
    category: "White Paper & Report",
    description:
      "Deepfake-powered impersonation attacks are on the rise, threatening the financial stability and reputation of organizations. Learn how prepared executives are to address this growing risk.",
  },
];

export const mediaOutlets = [
  "Forbes",
  "CNBC",
  "Bloomberg",
  "The Wall Street Journal",
  "BBC",
  "CBC",
  "The Globe and Mail",
  "Financial Post",
];
