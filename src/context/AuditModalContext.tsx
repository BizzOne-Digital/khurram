"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AuditModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  scrollToIntake: () => void;
}

const AuditModalContext = createContext<AuditModalContextValue | null>(null);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const scrollToIntake = useCallback(() => {
    const el = document.getElementById("request-audit");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <AuditModalContext.Provider value={{ isOpen, openModal, closeModal, scrollToIntake }}>
      {children}
    </AuditModalContext.Provider>
  );
}

export function useAuditModal() {
  const context = useContext(AuditModalContext);
  if (!context) {
    throw new Error("useAuditModal must be used within AuditModalProvider");
  }
  return context;
}
