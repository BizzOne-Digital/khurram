"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { ShieldLogo } from "./ShieldLogo";
import { MobileNavigation } from "./MobileNavigation";
import { navLinks } from "@/data/navigation";
import { useAuditModal } from "@/context/AuditModalContext";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAuditModal();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full max-w-full overflow-x-clip",
          scrolled || !isHome
            ? "bg-midnight/92 backdrop-blur-xl shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-midnight/70 to-transparent"
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between h-[68px] sm:h-[72px] lg:h-20 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 justify-self-start"
              aria-label="Zerotrace Executive Home"
            >
              <ShieldLogo size="sm" showText variant="header" />
            </Link>

            {/* Center nav — desktop */}
            <nav
              className="hidden lg:flex items-center justify-center gap-10"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 py-1",
                    pathname === link.href
                      ? "text-ivory"
                      : "text-ivory/55 hover:text-ivory"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA — desktop */}
            <div className="hidden lg:flex justify-self-end">
              <button
                onClick={openModal}
                className="px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium text-gold border border-gold/60 rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                Request Confidential Audit
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden shrink-0 p-2 text-ivory"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent origin-center"
          animate={{ scaleX: scrolled ? 1 : 0.5, opacity: scrolled ? 1 : 0.6 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
