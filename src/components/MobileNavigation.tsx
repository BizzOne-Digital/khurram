"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { useAuditModal } from "@/context/AuditModalContext";
import { MagneticButton } from "./MagneticButton";
import { ShieldLogo } from "./ShieldLogo";
import { PhoneLinkPlain } from "./PhoneLink";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const { openModal } = useAuditModal();

  const handleAuditClick = () => {
    onClose();
    openModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-nearblack/95 backdrop-blur-xl"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <div className="mb-8">
                <ShieldLogo size="lg" showText />
              </div>

              <nav className="flex-grow space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block py-4 text-2xl font-display tracking-wide border-b border-white/5",
                        pathname === link.href ? "text-gold" : "text-ivory"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-4 mt-8">
                <PhoneLinkPlain className="flex items-center justify-center gap-2 py-3 text-ivory border border-gold/30 rounded-sm w-full" />
                <MagneticButton onClick={handleAuditClick} variant="primary" className="w-full">
                  Request Confidential Audit
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
