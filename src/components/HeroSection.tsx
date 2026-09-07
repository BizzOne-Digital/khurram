"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { HeroHudPanels } from "./HeroHudPanels";
import { images } from "@/data/images";
import { useAuditModal } from "@/context/AuditModalContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const { openModal } = useAuditModal();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const orbitX = useTransform(springX, [-500, 500], [-12, 12]);
  const orbitY = useTransform(springY, [-500, 500], [-12, 12]);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden w-full max-w-full"
    >
      {/* Background image — SS2 */}
      <div className="absolute inset-0">
        <Image
          src={images.heroBackground}
          alt=""
          fill
          className="object-cover object-center lg:object-[center_right]"
          priority
          quality={90}
          aria-hidden="true"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(18,58,90,0.25),transparent_60%)]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-20 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-4 items-center min-h-0 lg:min-h-[calc(100vh-8rem)]">
          {/* Left — copy */}
          <div className="z-10 w-full min-w-0">
            <motion.p
              className="label-caps text-gold mb-4 sm:mb-5 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Executive Privacy & Digital-Risk Protection
            </motion.p>

            <motion.h1
              className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Elite Anonymity.
              <br />
              <span className="text-gradient-gold">Uncompromising Security.</span>
            </motion.h1>

            <motion.p
              className="text-steel/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Reduce exposed personal data, identify digital vulnerabilities, and
              regain control of your executive footprint.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <MagneticButton
                onClick={openModal}
                variant="primary"
                className="w-full sm:w-auto px-5 sm:px-7 py-3.5 text-[11px] sm:text-sm shadow-xl shadow-gold/25 justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Request Confidential Audit
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </span>
              </MagneticButton>

              <button
                onClick={scrollToProcess}
                className="group flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gold/90 hover:text-gold transition-colors py-2"
              >
                Explore Our Approach
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          </div>

          {/* Right — shield visual + HUD */}
          <div className="relative hidden md:flex items-center justify-center min-h-[420px] lg:min-h-[520px]">
            <HeroHudPanels />

            <motion.div
              className="relative z-10"
              style={{ x: reducedMotion ? 0 : orbitX, y: reducedMotion ? 0 : orbitY }}
            >
              <SecurityOrbit />
              <motion.div
                className="relative"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-[-20%] bg-gold/10 rounded-full blur-3xl" />
                <Image
                  src={images.logo}
                  alt="Zerotrace Executive shield emblem"
                  width={320}
                  height={320}
                  className="relative object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.35)] w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="absolute bottom-6 left-4 sm:left-6 lg:left-10 label-caps text-gold/40 text-[10px] hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Privacy Preserves Freedom
        </motion.p>
      </div>
    </section>
  );
}

function SecurityOrbit() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,420px)] aspect-square"
      aria-hidden="true"
    >
      {[1, 0.88, 0.74, 0.6].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            transform: `scale(${scale})`,
            border: `1px solid rgba(212, 175, 55, ${0.25 - i * 0.05})`,
            boxShadow: i === 0 ? "0 0 30px rgba(212, 175, 55, 0.08)" : undefined,
          }}
          animate={reducedMotion ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Scanning arc */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-bottom-left rounded-tl-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(212,175,55,0.2) 0deg, transparent 45deg)",
            }}
          />
        </motion.div>
      )}

      <motion.div
        className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        style={{ transformOrigin: "50% 210px" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
