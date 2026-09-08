export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "data-access",
    question: "How do you access or find my data without compromising me further?",
    answer:
      "We use only publicly available sources, authorized breach-intelligence databases, and privacy-conscious OSINT methods — never unauthorized access to your accounts or devices. You retain full control: we work from information you approve and use secure, encrypted channels for all communications. No credentials or device access is required for the initial audit.",
  },
  {
    id: "audit-timeline",
    question: "How long does the initial audit take?",
    answer:
      "Most Executive Audit & Diagnostics engagements are completed within 48–72 hours after your confidential intake call. You receive a prioritized findings summary first, followed by the full executive risk report with remediation steps within one week.",
  },
  {
    id: "data-brokers",
    question:
      "How do you handle data deletion requests with Canadian and international data brokers?",
    answer:
      "We identify your profiles across major Canadian and international data-broker networks, then provide a prioritized opt-out roadmap with step-by-step removal guidance. Where legally permitted, we facilitate removal requests on your behalf. Canadian privacy frameworks (including PIPEDA considerations) guide our approach for cross-border data handling.",
  },
  {
    id: "deliverable",
    question: "What exactly do I receive for the $999 audit?",
    answer:
      "You receive a confidential Executive Digital Exposure Assessment including: a threat exposure score, redacted breach and credential findings, data-broker visibility report, public-record risk mapping, and a prioritized remediation action plan — all delivered in an executive-friendly format designed for immediate decision-making.",
  },
];
