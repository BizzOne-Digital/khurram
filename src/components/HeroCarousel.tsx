"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/hero-slides";
import { ShieldLogo } from "./ShieldLogo";
import { MagneticButton } from "./MagneticButton";
import { useAuditModal } from "@/context/AuditModalContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 7000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const { openModal } = useAuditModal();
  const reducedMotion = useReducedMotion();
  const slide = heroSlides[current];

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    setProgress(0);
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
      if (elapsed < SLIDE_DURATION) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [current, reducedMotion]);

  const handleCta = () => {
    if (slide.ctaAction === "audit") {
      openModal();
    } else if (slide.ctaAction === "scroll-process") {
      document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
    } else if (slide.ctaAction === "scroll-resources") {
      document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90dvh] lg:min-h-[92dvh] flex items-center overflow-hidden w-full max-w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={current === 0}
            sizes="100vw"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/60" />
      <div className="absolute inset-0 secure-grid-bg opacity-15" aria-hidden="true" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
        <motion.div
          className="mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShieldLogo size="hero" />
        </motion.div>

        <div className="max-w-2xl lg:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="z-10"
            >
              <motion.p
                className="section-eyebrow mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Digital Executive Protection
              </motion.p>

              <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] mb-5 sm:mb-6">
                {slide.headline}
                {slide.highlight && (
                  <>
                    <br />
                    <span className="text-gradient-gold">{slide.highlight}</span>
                  </>
                )}
              </h1>

              <p className="text-steel/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                {slide.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton
                  onClick={handleCta}
                  variant="primary"
                  className="px-7 sm:px-9 py-4 text-xs sm:text-sm shadow-xl shadow-gold/20"
                >
                  <span className="flex items-center gap-2">
                    {slide.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </MagneticButton>
                <span className="text-[11px] tracking-widest uppercase text-steel/60 hidden sm:block">
                  {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10 flex items-center justify-between gap-4">
          <div className="flex-1 max-w-xs h-0.5 bg-white/10 rounded-full overflow-hidden hidden sm:block">
            <motion.div
              className="h-full bg-gold rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              onClick={prev}
              className="p-2.5 border border-white/10 rounded-sm text-ivory/70 hover:text-ivory hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setProgress(0); }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" : "w-1.5 bg-white/25 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 border border-white/10 rounded-sm text-ivory/70 hover:text-ivory hover:border-gold/40 hover:bg-gold/5 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
