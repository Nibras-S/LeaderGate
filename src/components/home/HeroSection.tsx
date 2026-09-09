"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { inter } from "@/lib/fonts";

/**
 * HERO SECTION — 01 (Refined Editorial Style)
 *
 * Visual refinement:
 * - Inter modern clean sans-serif typography with light, refined weight (300-400)
 * - Title-case light heading: "Building Brands Through Exceptional Signage" (pure white, light/spacious)
 * - Desktop breaks: "Building Brands / Through / Exceptional Signage"
 * - Mobile breaks: "Building Brands / Through Exceptional Signage" (compact 2 lines)
 * - Lower vertical positioning on mobile for airy breathing room above
 * - Eyebrow: single-line refined "PREMIUM SIGNAGE • BRANDING • FABRICATION"
 * - Supporting text: light, elegant weight
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
      className={`relative w-full h-[100dvh] min-h-[660px] flex flex-col justify-end lg:justify-center pb-24 sm:pb-28 lg:pb-10 lg:pt-14 overflow-hidden bg-[#0A0A09] ${inter.className}`}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 55% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent 40% to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content — Positioned lower with visual breathing room above */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          {/* Eyebrow — Refined, light uppercase letterspacing */}
          <p className="text-[0.6875rem] sm:text-xs font-normal uppercase tracking-[0.2em] text-white/60 mb-3 sm:mb-4 whitespace-nowrap">
            Premium Signage • Branding • Fabrication
          </p>

          {/* Heading — Clean white, title case, refined Medium weight (500) */}
          {/* Mobile: exactly 2 lines. Desktop: 3 lines */}
          <h1 className="text-[1.34rem] leading-[1.24] sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] lg:leading-[1.08] font-medium tracking-[-0.02em] text-white">
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

          {/* Description — Lighter typography, airy and refined */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-md sm:max-w-lg">
            Precision engineering and turnkey architectural fabrication across the UAE.
          </p>

          {/* CTAs — White pill primary + clean text link secondary matching reference */}
          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-7">
            {/* Primary CTA: White Rounded Pill Button */}
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-[#0F0F0D] text-sm sm:text-[0.9375rem] font-medium transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg group cursor-pointer"
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
              className="inline-flex items-center gap-2 py-2 text-white/80 hover:text-white text-sm sm:text-[0.9375rem] font-light sm:font-normal transition-colors group cursor-pointer"
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
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <a
          href="#clients"
          className="pointer-events-auto group flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to content"
        >
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.25em]">
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
