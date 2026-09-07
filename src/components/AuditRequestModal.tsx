"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";
import { MagneticButton } from "./MagneticButton";
import {
  initialAuditFormData,
  buildMailtoBody,
  serviceChoices,
  concernChoices,
  contactMethods,
  type AuditFormData,
} from "@/data/audit-form";
import { contact } from "@/data/contact";
import { formatPhoneLink, cn } from "@/lib/utils";

const STEPS = ["Contact", "Concerns", "Schedule", "Review"];

export function AuditRequestModal() {
  const { isOpen, closeModal } = useAuditModal();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<AuditFormData>(initialAuditFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const resetForm = useCallback(() => {
    setStep(0);
    setForm(initialAuditFormData);
    setErrors({});
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      resetForm();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, resetForm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const updateField = <K extends keyof AuditFormData>(
    field: K,
    value: AuditFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (step === 0) {
      if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!form.businessEmail.trim()) {
        newErrors.businessEmail = "Business email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
        newErrors.businessEmail = "Please enter a valid email";
      }
      if (!form.phone.trim()) newErrors.phone = "Phone number is required";
      if (!form.position.trim()) newErrors.position = "Position is required";
      if (!form.organization.trim()) newErrors.organization = "Organization is required";
      if (!form.contactMethod) newErrors.contactMethod = "Please select a contact method";
    }

    if (step === 1) {
      if (!form.primaryConcern) newErrors.primaryConcern = "Please select a primary concern";
      if (!form.desiredService) newErrors.desiredService = "Please select a service";
    }

    if (step === 3 && !form.consent) {
      newErrors.consent = "You must acknowledge the notice to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    if (!validateStep()) return;

    const subject = encodeURIComponent(
      `Confidential Audit Request — ${form.fullName}`
    );
    const body = encodeURIComponent(buildMailtoBody(form));
    window.location.href = `mailto:${contact.primaryEmail}?subject=${subject}&body=${body}`;
    closeModal();
  };

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
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-nearblack/80 backdrop-blur-sm"
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
            className="relative w-full sm:max-w-lg lg:max-w-xl max-h-[100dvh] sm:max-h-[90vh] bg-sapphire border border-gold/20 sm:rounded-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onKeyDown={trapFocus}
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <div>
                <p className="label-caps text-gold/60 mb-1">
                  Step {step + 1} of {STEPS.length}
                </p>
                <h2 id="audit-modal-title" className="font-display text-xl text-ivory">
                  {STEPS[step]}
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

            <div className="flex gap-1 px-6 pt-4">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i <= step ? "bg-gold" : "bg-white/10"
                  )}
                />
              ))}
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {step === 0 && (
                <>
                  <FormField label="Full Name" required error={errors.fullName}>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Business Email" required error={errors.businessEmail}>
                    <input
                      type="email"
                      value={form.businessEmail}
                      onChange={(e) => updateField("businessEmail", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Phone Number" required error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Position or Role" required error={errors.position}>
                    <input
                      type="text"
                      value={form.position}
                      onChange={(e) => updateField("position", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Organization" required error={errors.organization}>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => updateField("organization", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Preferred Contact Method" required error={errors.contactMethod}>
                    <select
                      value={form.contactMethod}
                      onChange={(e) =>
                        updateField("contactMethod", e.target.value as AuditFormData["contactMethod"])
                      }
                      className="form-input"
                    >
                      <option value="">Select...</option>
                      {contactMethods.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </FormField>
                </>
              )}

              {step === 1 && (
                <>
                  <FormField label="Primary Concern" required error={errors.primaryConcern}>
                    <select
                      value={form.primaryConcern}
                      onChange={(e) =>
                        updateField("primaryConcern", e.target.value as AuditFormData["primaryConcern"])
                      }
                      className="form-input"
                    >
                      <option value="">Select...</option>
                      {concernChoices.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Desired Service" required error={errors.desiredService}>
                    <select
                      value={form.desiredService}
                      onChange={(e) =>
                        updateField("desiredService", e.target.value as AuditFormData["desiredService"])
                      }
                      className="form-input"
                    >
                      <option value="">Select...</option>
                      {serviceChoices.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Additional Confidential Context">
                    <textarea
                      value={form.additionalContext}
                      onChange={(e) => updateField("additionalContext", e.target.value)}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Optional — share any context that may help us prepare..."
                    />
                  </FormField>
                </>
              )}

              {step === 2 && (
                <>
                  <FormField label="Preferred Consultation Date">
                    <input
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => updateField("preferredDate", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Preferred Time">
                    <input
                      type="time"
                      value={form.preferredTime}
                      onChange={(e) => updateField("preferredTime", e.target.value)}
                      className="form-input"
                    />
                  </FormField>
                  <div className="glass-panel rounded-lg p-4 mt-4">
                    <p className="text-sm text-steel">
                      Prefer to speak directly? Call us at{" "}
                      <a
                        href={`tel:${formatPhoneLink(contact.phone)}`}
                        className="text-gold hover:text-gold-warm"
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="glass-panel rounded-lg p-4 space-y-2 text-sm">
                    <ReviewRow label="Name" value={form.fullName} />
                    <ReviewRow label="Email" value={form.businessEmail} />
                    <ReviewRow label="Phone" value={form.phone} />
                    <ReviewRow label="Role" value={form.position} />
                    <ReviewRow label="Organization" value={form.organization} />
                    <ReviewRow label="Concern" value={form.primaryConcern} />
                    <ReviewRow label="Service" value={form.desiredService} />
                    {form.preferredDate && (
                      <ReviewRow label="Date" value={form.preferredDate} />
                    )}
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer mt-4">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-1 accent-gold"
                    />
                    <span className="text-xs text-steel leading-relaxed">
                      I understand that submitting this inquiry does not establish a
                      professional relationship or confirm service availability. My
                      information will be handled confidentially.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-400 text-xs" role="alert">{errors.consent}</p>
                  )}

                  <p className="text-xs text-steel/60 mt-2">
                    Submission will open your email client with a pre-filled confidential
                    inquiry to {contact.primaryEmail}.
                  </p>
                </>
              )}
            </div>

            <div className="p-6 border-t border-gold/10 flex items-center justify-between gap-4">
              {step > 0 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-sm text-steel hover:text-gold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < STEPS.length - 1 ? (
                <MagneticButton onClick={handleNext} variant="primary">
                  Continue <ChevronRight className="w-4 h-4 ml-1 inline" />
                </MagneticButton>
              ) : (
                <MagneticButton onClick={handleSubmit} variant="primary">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Send Inquiry
                </MagneticButton>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-ivory mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-1" role="alert">{error}</p>
      )}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between">
      <span className="text-steel">{label}</span>
      <span className="text-ivory text-right">{value}</span>
    </div>
  );
}
