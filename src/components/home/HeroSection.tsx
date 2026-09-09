"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

/**
 * HERO SECTION — 01 (Minimal & Uncongested Layout)
 *
 * Inspired directly by reference:
 * - Middle-aligned content block with vast breathing space
 * - Orange dash accent above clean uppercase eyebrow
 * - High-impact, architectural display headline
 * - Single-line concise subtext (no over-context)
 * - Single focused rounded pill CTA (Start Your Project →)
 * - Left-weighted scrim overlay leaving the machinery video open and visible
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
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center overflow-hidden bg-black"
    >
      {/* Background Video — Full bleed, clearly visible */}
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

        {/* Soft directional scrim: darkens only the text zone on left, leaving video open on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 55% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent 35% to-black/40 pointer-events-none" />
      </div>

      {/* Hero Content — Middle-aligned, spacious, no congestion */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-20 flex items-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Accent Line + Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 sm:mb-5"
          >
            <div className="w-8 h-[3px] bg-[var(--color-orange)] mb-3 rounded-full" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Premium Signage • Branding • Fabrication
            </p>
          </motion.div>

          {/* Punchy Architectural Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.04] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            Building Brands Through{" "}
            <span className="text-[var(--color-orange)] block sm:inline">
              Exceptional Signage
            </span>
          </motion.h1>

          {/* Short, crisp single-line subtext — No over-context */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Precision engineering and turnkey architectural fabrication across the UAE.
          </motion.p>

          {/* Single Focused Rounded Pill CTA — exactly matching reference pattern */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 sm:mt-9"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--color-orange)] text-white text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[var(--color-orange-hover)] hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-orange-500/30 group"
            >
              <span>Start Your Project</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <a
          href="#clients"
          className="pointer-events-auto group flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
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
