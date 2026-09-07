import type { Metadata } from "next";
import { contact } from "@/data/contact";

const siteUrl = "https://ztshield.ca";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${contact.businessName} | Executive Privacy Protection`,
    template: `%s | ${contact.businessName}`,
  },
  description:
    "Elite executive privacy and digital-risk protection for C-suite leaders, founders, board directors, and high-net-worth individuals in Ontario and Canada.",
  keywords: [
    "Executive privacy protection Ontario",
    "Executive digital-risk assessment",
    "C-suite privacy services Canada",
    "High-net-worth privacy protection",
    "Executive data exposure audit",
    "Digital footprint reduction for executives",
    "Zerotrace Executive",
    "ZT Shield",
  ],
  authors: [{ name: contact.businessName }],
  creator: contact.businessName,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: contact.businessName,
    title: `${contact.businessName} | ${contact.tagline}`,
    description:
      "Elite anonymity and uncompromising security for executives, founders, and high-net-worth individuals.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: contact.businessName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${contact.businessName} | ${contact.tagline}`,
    description:
      "Executive privacy and digital-risk protection for C-suite leaders and high-net-worth individuals.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: `${title} | ${contact.businessName}`,
      description,
      url: `${siteUrl}${path}`,
    },
    twitter: {
      title: `${title} | ${contact.businessName}`,
      description,
    },
  };
}
