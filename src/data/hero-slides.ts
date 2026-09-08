import { images } from "./images";

export interface HeroSlide {
  id: string;
  headline: string;
  highlight?: string;
  subheadline: string;
  cta: string;
  ctaAction: "audit" | "scroll-services" | "scroll-process" | "scroll-resources";
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "reduce-risk",
    headline: "Reduce executive cyber risk",
    highlight: "without becoming executive IT",
    subheadline:
      "See how Zerotrace Executive secures your digital footprint while keeping your personal life private.",
    cta: "Find Out How",
    ctaAction: "scroll-process",
    image: images.heroSlide1,
  },
  {
    id: "protect-digital-lives",
    headline: "We Protect",
    highlight: "Digital Lives",
    subheadline:
      "Zerotrace Executive protects corporate executives, board members, high-profile individuals, and their families from cyber threats.",
    cta: "Book a Demo",
    ctaAction: "audit",
    image: images.heroSlide2,
  },
  {
    id: "resource-center",
    headline: "Executive Privacy",
    highlight: "Resource Center",
    subheadline:
      "Stay informed with our collection of executive privacy insights, in-depth reports, and top tips for staying secure.",
    cta: "Discover",
    ctaAction: "scroll-resources",
    image: images.consultation,
  },
  {
    id: "protection-framework",
    headline: "Digital Executive",
    highlight: "Protection",
    subheadline:
      "Get a comprehensive framework for safeguarding the personal digital lives of executives and their families.",
    cta: "Download",
    ctaAction: "audit",
    image: images.heroSlide2,
  },
  {
    id: "deepfake-threats",
    headline: "It looks exactly like you",
    highlight: "but it isn't",
    subheadline:
      "Prevent deepfakes and impersonation attacks targeting your executive team and personal identity.",
    cta: "Learn More",
    ctaAction: "scroll-services",
    image: images.heroSlide1,
  },
  {
    id: "cybercrime-victim",
    headline: "Are you a victim of cybercrime?",
    subheadline:
      "If you or your family have been attacked by cybercriminals, get in touch and we will provide help within 24 hours.",
    cta: "Find Out How",
    ctaAction: "audit",
    image: images.consultation,
  },
];
