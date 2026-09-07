import { cn } from "@/lib/utils";

interface LegalDisclaimerProps {
  text: string;
  className?: string;
  size?: "sm" | "md";
}

export function LegalDisclaimer({ text, className, size = "sm" }: LegalDisclaimerProps) {
  return (
    <p
      className={cn(
        "text-steel leading-relaxed",
        size === "sm" ? "text-xs" : "text-sm",
        className
      )}
    >
      {text}
    </p>
  );
}
