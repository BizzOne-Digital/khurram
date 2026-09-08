"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";
import { QuickAuditForm } from "./QuickAuditForm";

export function AuditRequestModal() {
  const { isOpen, closeModal } = useAuditModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div
            className="absolute inset-0 bg-nearblack/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-modal-title"
            className="relative w-full sm:max-w-lg max-h-[100dvh] sm:max-h-[90vh] bg-sapphire border border-gold/20 sm:rounded-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onKeyDown={trapFocus}
          >
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gold/10">
              <div>
                <p className="label-caps text-gold/60 mb-1">Quick Intake</p>
                <h2 id="audit-modal-title" className="font-display text-xl text-ivory">
                  Request Confidential Audit
                </h2>
              </div>
              <button
                ref={firstFocusRef}
                onClick={closeModal}
                className="p-2 text-steel hover:text-gold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-5 sm:p-6">
              <QuickAuditForm
                variant="modal"
                onSuccess={closeModal}
                showExpandedOption={false}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
