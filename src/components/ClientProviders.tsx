"use client";

import { useState, useCallback } from "react";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditRequestModal } from "@/components/AuditRequestModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { StickyAuditCTA } from "@/components/StickyAuditCTA";
import { LoadingSequence } from "@/components/LoadingSequence";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <AuditModalProvider>
      {loading && <LoadingSequence onComplete={handleLoadComplete} />}
      <ScrollProgress />
      <CursorSpotlight />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="page-container">
        <Header />
        <main className="min-h-screen flex flex-col pb-20 md:pb-0 w-full max-w-full overflow-x-clip">
          {children}
        </main>
        <Footer />
      </div>
      <AuditRequestModal />
      <StickyAuditCTA />
    </AuditModalProvider>
  );
}
