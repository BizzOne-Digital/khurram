import Link from "next/link";
import { Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
}

export function PhoneLink({ className }: PhoneLinkProps) {
  return (
    <a href={contact.phoneTelHref} className={cn("hover:text-gold transition-colors", className)}>
      <Phone className="w-3 h-3 inline mr-1.5" aria-hidden="true" />
      {contact.phone}
    </a>
  );
}

export function PhoneLinkPlain({ className }: PhoneLinkProps) {
  return (
    <a href={contact.phoneTelHref} className={cn("hover:text-gold transition-colors", className)}>
      {contact.phone}
    </a>
  );
}
