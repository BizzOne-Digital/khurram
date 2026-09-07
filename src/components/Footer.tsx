"use client";

import Link from "next/link";
import { ShieldLogo } from "./ShieldLogo";
import { MagneticButton } from "./MagneticButton";
import { LegalDisclaimer } from "./LegalDisclaimer";
import { navLinks } from "@/data/navigation";
import { contact, legalDisclaimer } from "@/data/contact";
import { useAuditModal } from "@/context/AuditModalContext";
import { formatPhoneLink } from "@/lib/utils";

export function Footer() {
  const { openModal } = useAuditModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-gold/20 bg-nearblack overflow-hidden">
      <div
        className="absolute inset-0 secure-grid-bg opacity-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 opacity-[0.03] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <ShieldLogo size="xl" />
      </div>

      <div className="relative max-w-7xl mx-auto section-pad py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <ShieldLogo size="md" showText />
            <p className="mt-4 text-sm text-steel italic font-display">
              {contact.tagline}
            </p>
          </div>

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
              <li>
                <button
                  onClick={openModal}
                  className="text-sm text-steel hover:text-gold transition-colors"
                >
                  Request Confidential Audit
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label-caps text-gold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-steel">
              <li>
                <a
                  href={`tel:${formatPhoneLink(contact.phone)}`}
                  className="hover:text-gold transition-colors"
                >
                  {contact.phone}
                </a>
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
              <li>
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {contact.website}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label-caps text-gold mb-4">Request Audit</h3>
            <p className="text-sm text-steel mb-4">
              Begin with a confidential introductory review of your digital exposure.
            </p>
            <MagneticButton onClick={openModal} variant="secondary" className="text-xs">
              Request Confidential Audit
            </MagneticButton>
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
