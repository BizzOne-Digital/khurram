import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ClientProviders } from "@/components/ClientProviders";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1118",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} overflow-x-clip`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zerotrace Executive",
              url: "https://ztshield.ca",
              logo: "https://ztshield.ca/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-416-720-8752",
                contactType: "customer service",
                email: "info@ztshield.ca",
                areaServed: "CA",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "ON",
                addressCountry: "CA",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Executive Privacy & Digital-Risk Protection",
              provider: {
                "@type": "Organization",
                name: "Zerotrace Executive",
              },
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
              description:
                "Executive digital exposure assessment, privacy monitoring, and digital-risk protection for C-suite leaders and high-net-worth individuals.",
            }),
          }}
        />
      </head>
      <body className="font-sans overflow-x-clip">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
