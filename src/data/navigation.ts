export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
] as const;

export type NavHref = (typeof navLinks)[number]["href"];
