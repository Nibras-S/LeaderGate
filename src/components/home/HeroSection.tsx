"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

/**
 * HERO SECTION — 01 (Clean, Modern & Minimal Editorial Style)
 *
 * Implements exact visual reference:
 * - Manrope modern clean sans-serif typography with light, refined weight (400-500)
 * - Title-case clean heading: "Building Brands Through Exceptional Signage" (no all-caps, no orange)
 * - Desktop breaks: "Building Brands / Through / Exceptional Signage"
 * - Mobile breaks: "Building Brands / Through Exceptional Signage" (compact 2 lines)
 * - Eyebrow: single-line "PREMIUM SIGNAGE • BRANDING • FABRICATION"
 * - 1-2 line concise description
 * - Primary CTA: White rounded pill "View Our Projects →"
 * - Secondary CTA: Clean text link "Request a Consultation →" (no border, no outline, no orange)
 * - Minimal centered "SCROLL" indicator at bottom
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
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center overflow-hidden bg-[#0A0A09] font-[family-name:var(--font-manrope)]"
    >
      {/* Background Video — Cinematic & Clearly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.01]"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </video>

        {/* Directional scrim: darkens text zone on left, keeps video clear & dramatic on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 55% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent 35% to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content — Vertically centered, modern editorial layout matching reference */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-16 flex items-center">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          {/* Eyebrow — Clean, single line, subtle */}
          <p className="text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white/70 mb-3.5 sm:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] whitespace-nowrap">
            Premium Signage • Branding • Fabrication
          </p>

          {/* Heading — Clean white, title case, light/refined weight */}
          {/* Mobile: exactly 2 lines. Desktop: 3 lines. Exact match to reference designs */}
          <h1 className="text-[1.38rem] leading-[1.24] sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] lg:leading-[1.08] font-normal tracking-[-0.02em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            <span className="lg:hidden">
              Building Brands <br />
              Through Exceptional Signage
            </span>
            <span className="hidden lg:inline">
              Building Brands <br />
              Through <br />
              Exceptional Signage
            </span>
          </h1>

          {/* Description — Concise, airy, refined */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/75 font-normal leading-relaxed max-w-md sm:max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Precision engineering and turnkey architectural fabrication across the UAE.
          </p>

          {/* CTAs — White pill primary + clean text link secondary matching reference */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7">
            {/* Primary CTA: White Rounded Pill Button */}
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-[#0F0F0D] text-sm sm:text-[0.9375rem] font-semibold transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-xl group cursor-pointer"
            >
              <span>View Our Projects</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary CTA: Clean Text Link (no border, no outline, no orange) */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 py-2 text-white/90 hover:text-white text-sm sm:text-[0.9375rem] font-medium transition-colors group cursor-pointer drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            >
              <span>Request a Consultation</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Minimalist Centered Scroll Indicator (Matching Reference) */}
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
            <div className="w-full h-1/2 bg-white animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
