"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import {
  contactMethods,
  buildMailtoBody,
  initialAuditFormData,
  type AuditFormData,
  type ContactMethod,
} from "@/data/audit-form";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

interface QuickAuditFormProps {
  variant?: "modal" | "embedded";
  onSuccess?: () => void;
  showExpandedOption?: boolean;
}

export function QuickAuditForm({
  variant = "embedded",
  onSuccess,
  showExpandedOption = true,
}: QuickAuditFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    position: "",
    contactMethod: "" as ContactMethod | "",
    businessEmail: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Name is required";
    if (!form.position.trim()) next.position = "Corporate title is required";
    if (!form.contactMethod) next.contactMethod = "Please select a contact method";
    if (
      (form.contactMethod === "Email" || form.contactMethod === "Either") &&
      !form.businessEmail.trim()
    ) {
      next.businessEmail = "Business email is required";
    } else if (
      form.businessEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)
    ) {
      next.businessEmail = "Please enter a valid email";
    }
    if (
      (form.contactMethod === "Phone" || form.contactMethod === "Either") &&
      !form.phone.trim()
    ) {
      next.phone = "Phone number is required";
    }
    if (!form.consent) next.consent = "Please acknowledge to proceed";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload: AuditFormData = {
      ...initialAuditFormData,
      fullName: form.fullName,
      position: form.position,
      contactMethod: form.contactMethod,
      businessEmail: form.businessEmail,
      phone: form.phone,
      desiredService: "Not Sure—Request Guidance",
      primaryConcern: "General executive privacy review",
      consent: form.consent,
    };

    const subject = encodeURIComponent(
      `Confidential Audit Request — ${form.fullName}`
    );
    const body = encodeURIComponent(buildMailtoBody(payload));
    window.location.href = `mailto:${contact.primaryEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex p-4 rounded-full bg-gold/10 border border-gold/30 mb-4">
          <Mail className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-display text-xl text-ivory mb-2">Inquiry Ready to Send</h3>
        <p className="text-steel text-sm max-w-sm mx-auto">
          Your email client should open with a pre-filled confidential request.
          If it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${contact.primaryEmail}`} className="text-gold hover:underline">
            {contact.primaryEmail}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={cn(variant === "embedded" && "premium-card gold-border-glow p-6 sm:p-8 lg:p-10 rounded-2xl")}>
      {variant === "embedded" && (
        <div className="mb-6">
          <p className="section-eyebrow">Confidential Intake</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-2">
            Request Your Executive Audit
          </h2>
          <p className="text-steel text-sm">
            Three quick questions — we respond within 24 hours.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <FormField label="Full Name" required error={errors.fullName}>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="form-input"
            placeholder="Your full name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Corporate Title" required error={errors.position}>
          <input
            type="text"
            value={form.position}
            onChange={(e) => update("position", e.target.value)}
            className="form-input"
            placeholder="e.g. CEO, Board Director, Founder"
            autoComplete="organization-title"
          />
        </FormField>

        <FormField label="Preferred Contact Method" required error={errors.contactMethod}>
          <div className="grid grid-cols-3 gap-2">
            {contactMethods.map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => update("contactMethod", method)}
                className={cn(
                  "py-2.5 px-3 text-xs sm:text-sm rounded-sm border transition-all",
                  form.contactMethod === method
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/10 text-steel hover:border-gold/30"
                )}
              >
                {method}
              </button>
            ))}
          </div>
        </FormField>

        {(form.contactMethod === "Email" || form.contactMethod === "Either") && (
          <FormField label="Business Email" required error={errors.businessEmail}>
            <input
              type="email"
              value={form.businessEmail}
              onChange={(e) => update("businessEmail", e.target.value)}
              className="form-input"
              placeholder="you@company.com"
              autoComplete="email"
            />
          </FormField>
        )}

        {(form.contactMethod === "Phone" || form.contactMethod === "Either") && (
          <FormField label="Phone Number" required error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="form-input"
              placeholder="289-224-9770"
              autoComplete="tel"
            />
          </FormField>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 accent-gold"
          />
          <span className="text-xs text-steel leading-relaxed">
            I understand this inquiry does not establish a professional relationship.
            My information will be handled confidentially.
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-400 text-xs" role="alert">{errors.consent}</p>
        )}

        <MagneticButton
          onClick={handleSubmit}
          variant="primary"
          className="w-full py-4 mt-2"
        >
          <Send className="w-4 h-4 mr-2 inline" />
          Request Confidential Audit
        </MagneticButton>

        {showExpandedOption && (
          <p className="text-center text-xs text-steel/60 pt-2">
            Prefer to call?{" "}
            <a href={contact.phoneTelHref} className="text-gold hover:underline">
              {contact.phone}
            </a>
          </p>
        )}
      </div>
    </div>
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
  return (
    <div>
      <label className="block text-sm text-ivory mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1" role="alert">{error}</p>}
    </div>
  );
}
