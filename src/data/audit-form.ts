export const serviceChoices = [
  "Executive Audit & Diagnostics",
  "Active Protection Retainer",
  "Not Sure—Request Guidance",
] as const;

export const concernChoices = [
  "Home-address exposure",
  "Dark-web credential concerns",
  "Public-record exposure",
  "Data-broker visibility",
  "Impersonation or social-engineering concerns",
  "General executive privacy review",
  "Other",
] as const;

export const contactMethods = ["Email", "Phone", "Either"] as const;

export type ServiceChoice = (typeof serviceChoices)[number];
export type ConcernChoice = (typeof concernChoices)[number];
export type ContactMethod = (typeof contactMethods)[number];

export interface AuditFormData {
  fullName: string;
  businessEmail: string;
  phone: string;
  position: string;
  organization: string;
  contactMethod: ContactMethod | "";
  primaryConcern: ConcernChoice | "";
  desiredService: ServiceChoice | "";
  preferredDate: string;
  preferredTime: string;
  additionalContext: string;
  consent: boolean;
}

export const initialAuditFormData: AuditFormData = {
  fullName: "",
  businessEmail: "",
  phone: "",
  position: "",
  organization: "",
  contactMethod: "",
  primaryConcern: "",
  desiredService: "",
  preferredDate: "",
  preferredTime: "",
  additionalContext: "",
  consent: false,
};

export function buildMailtoBody(data: AuditFormData): string {
  const lines = [
    "CONFIDENTIAL AUDIT REQUEST",
    "========================",
    "",
    `Full Name: ${data.fullName}`,
    `Business Email: ${data.businessEmail}`,
    `Phone: ${data.phone}`,
    `Position/Role: ${data.position}`,
    `Organization: ${data.organization}`,
    `Preferred Contact Method: ${data.contactMethod}`,
    `Primary Concern: ${data.primaryConcern}`,
    `Desired Service: ${data.desiredService}`,
    `Preferred Consultation Date: ${data.preferredDate}`,
    `Preferred Time: ${data.preferredTime}`,
    "",
    "Additional Confidential Context:",
    data.additionalContext || "(None provided)",
    "",
    "---",
    "Submitted via Zerotrace Executive website inquiry form.",
    "This inquiry does not establish a professional relationship or confirm service availability.",
  ];
  return lines.join("\n");
}
