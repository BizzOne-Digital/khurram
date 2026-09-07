"use client";

import { useAuditModal } from "@/context/AuditModalContext";
import { MagneticButton } from "./MagneticButton";

export function StickyAuditCTA() {
  const { openModal } = useAuditModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-midnight/95 backdrop-blur-xl border-t border-gold/20 md:hidden w-full max-w-full safe-bottom">
      <MagneticButton onClick={openModal} variant="primary" className="w-full max-w-full text-[11px] sm:text-xs">
        Request Confidential Audit
      </MagneticButton>
    </div>
  );
}
