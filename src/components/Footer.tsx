"use client";

import Link from "next/link";
import { ShieldLogo } from "./ShieldLogo";
import { MagneticButton } from "./MagneticButton";
import { LegalDisclaimer } from "./LegalDisclaimer";
import { navLinks } from "@/data/navigation";
import { contact, legalDisclaimer } from "@/data/contact";
import { useAuditModal } from "@/context/AuditModalContext";
import { PhoneLinkPlain } from "./PhoneLink";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Executive Audit", href: "/pricing" },
      { label: "Active Protection", href: "/pricing" },
      { label: "All Services", href: "/services" },
      { label: "Request Confidential Audit", href: null },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "#request-audit" },
    ],
  },
];

export function Footer() {
  const { openModal } = useAuditModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-gold/20 bg-nearblack overflow-hidden">
      <div
        className="absolute inset-0 secure-grid-bg opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto section-pad py-10 sm:py-12 text-center w-full">
          <p className="label-caps text-gold/50 mb-2">Protect Your Digital Life</p>
          <ShieldLogo size="lg" showText className="justify-center" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto section-pad py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <h3 className="label-caps text-gold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-steel">
              <li>
                <PhoneLinkPlain className="text-base text-ivory hover:text-gold transition-colors" />
              </li>
              {contact.emails.map((email) => (
                <li key={email.address}>
                  <a
                    href={`mailto:${email.address}`}
                    className="hover:text-gold transition-colors"
                  >
                    {email.address}
                  </a>
                </li>
              ))}
              <li className="text-steel/70">{contact.location}</li>
            </ul>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="label-caps text-gold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="text-sm text-steel hover:text-gold transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-steel hover:text-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <button
                        onClick={openModal}
                        className="text-sm text-steel hover:text-gold transition-colors"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label-caps text-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <MagneticButton onClick={openModal} variant="secondary" className="text-xs">
                Request Confidential Audit
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <LegalDisclaimer text={legalDisclaimer} className="mb-4" />
          <p className="text-xs text-steel/60">
            © {year} {contact.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
