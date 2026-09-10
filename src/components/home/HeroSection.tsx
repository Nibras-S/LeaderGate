"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ResponsiveHeroVideo } from "@/components/home/ResponsiveHeroVideo";
import { CtaButton } from "@/components/ui/CtaButton";

const ROTATING_CAPABILITIES = [
  "Signage & Fabrication",
  "Design & Brand Development",
  "Printing & Graphics",
  "Installation & Deployment",
];

/**
 * HERO SECTION
 *
 * Glass / pill-style CTA layout with dynamic capability ticker:
 * - Headline: "Building Brands / Through / [Rotating Capability]"
 * - Dynamic 3rd line: Smoothly rotates across core capabilities in brand orange
 * - Subtitle: "Precision engineering and turnkey architectural fabrication across the UAE."
 * - Primary CTA: Glass pill button "Explore Our Projects" with orange circular ArrowUpRight badge
 */
export function HeroSection() {
  const [capabilityIndex, setCapabilityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCapabilityIndex((prev) => (prev + 1) % ROTATING_CAPABILITIES.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col justify-end overflow-hidden bg-[#0A0A09] pb-16 sm:pb-20 lg:h-[100dvh] lg:min-h-[660px] lg:justify-end lg:pb-20 xl:pb-24"
    >
      {/* Background Video — Cinematic & Clearly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ResponsiveHeroVideo />

        {/* Directional scrim: darkens text zone on left, keeps video clear & dramatic on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 55% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent 40% to-black/50 pointer-events-none" />
      </div>

      {/* Hero Content — Centered container with lower placement and refined padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-4xl">
          {/* Heading — 3 clean lines, title case, bold weight, fixed-height rotating orange capability */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] leading-[1.14] lg:leading-[1.1] font-bold tracking-[-0.03em] text-white">
            Building Brands <br />
            Through <br />
            <span className="relative block h-[1.35em] lg:h-[1.3em] overflow-hidden text-[var(--color-orange)]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={ROTATING_CAPABILITIES[capabilityIndex]}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-full"
                >
                  {ROTATING_CAPABILITIES[capabilityIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Description — Lighter typography, airy and refined */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-md sm:max-w-lg">
            Precision engineering and turnkey architectural fabrication across the UAE.
          </p>

          {/* Primary CTA: Glass / Pill-style Button */}
          <div className="mt-6 sm:mt-8">
            <CtaButton href="#projects" variant="glass">
              Explore Our Projects
            </CtaButton>
          </div>
        </div>
      </div>

    </section>
  );
}
