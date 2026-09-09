"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

/**
 * HERO SECTION — 01 (De-congested & High-Clarity Video)
 *
 * Spacious, cinematic full-viewport hero:
 * - Bright, highly visible fabrication video background
 * - Minimal, light scrim overlay (no dark blanket)
 * - Clear, un-congested typography with vast breathing room
 * - Minimalist bottom-centered "SCROLL" indicator (matching reference)
 */
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* Background Video — Bright, crisp, clearly visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </video>

        {/* Light, subtle scrim only — protects text without darkening the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 50% to-black/30 pointer-events-none" />
      </div>

      {/* Top Spacer for transparent overlay header */}
      <div className="h-20 sm:h-24 shrink-0 pointer-events-none" />

      {/* Hero Content — Spacious, clean, and de-congested */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-6 sm:pb-10 flex flex-col justify-end">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-orange)] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Premium Signage • Branding • Fabrication
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
          >
            Building Brands Through{" "}
            <span className="text-[var(--color-orange)] inline-block">
              Exceptional Signage
            </span>
          </motion.h1>

          {/* Subtext — Concise and airy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Leader Gate is a leading UAE signage, branding, and fabrication
            company helping businesses create powerful visual experiences
            through innovative design and precision manufacturing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="shadow-2xl shadow-orange-500/30 group"
            >
              <span>Start Your Project</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button variant="ghost-invert" size="lg" href="#projects">
              <span>View Our Projects</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Minimalist Bottom-Centered Scroll Indicator (like Viera reference) */}
      <div className="relative z-10 w-full pb-4 flex justify-center items-center pointer-events-none">
        <a
          href="#clients"
          className="pointer-events-auto group flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to content"
        >
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.25em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Scroll
          </span>
          <div className="w-[1px] h-5 bg-white/30 overflow-hidden relative">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[var(--color-orange)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
