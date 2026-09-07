export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const audiences: AudienceItem[] = [
  {
    id: "c-suite",
    title: "C-Suite Executives",
    description:
      "Leadership visibility attracts attention. Corporate disclosures, media coverage, and professional networks can inadvertently expose personal details that require strategic management.",
    icon: "crown",
  },
  {
    id: "founders",
    title: "Founders",
    description:
      "Entrepreneurial success often increases public interest. Funding announcements, product launches, and industry events can expand your discoverable digital footprint beyond what you intended.",
    icon: "rocket",
  },
  {
    id: "board-directors",
    title: "Board Directors",
    description:
      "Governance roles create formal public associations. Regulatory filings and corporate records can link directors to residential information and family connections.",
    icon: "users",
  },
  {
    id: "hnwi",
    title: "High-Net-Worth Individuals",
    description:
      "Wealth visibility creates distinct privacy considerations. Property records, philanthropic activities, and lifestyle indicators can form a composite profile accessible to motivated parties.",
    icon: "gem",
  },
];
