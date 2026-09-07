"use client";

import Link from "next/link";
import { ShieldLogo } from "@/components/ShieldLogo";
import { MagneticButton } from "@/components/MagneticButton";
import { SecureGrid } from "@/components/SecureGrid";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <SecureGrid />
      <div className="relative text-center px-4">
        <ShieldLogo size="lg" className="justify-center mb-8" />
        <h1 className="font-display text-6xl text-gold mb-4">404</h1>
        <p className="text-steel text-lg mb-8 max-w-md mx-auto">
          The page you requested could not be located. It may have been moved or
          does not exist within our secure environment.
        </p>
        <Link href="/">
          <MagneticButton variant="primary">Return to Home</MagneticButton>
        </Link>
      </div>
    </section>
  );
}
