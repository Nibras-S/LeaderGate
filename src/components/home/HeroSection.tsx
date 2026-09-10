import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import { ResponsiveHeroVideo } from "@/components/home/ResponsiveHeroVideo";

/**
 * HERO SECTION
 *
 * Glass / pill-style CTA layout matching design mockup:
 * - Headline: "Building Brands / Through / Exceptional Signage" with orange accent
 * - Subtitle: "Precision engineering and turnkey architectural fabrication across the UAE."
 * - Primary CTA: Glass pill button "Explore Our Projects" with orange circular ArrowUpRight badge
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className={`relative flex h-[100svh] min-h-[600px] w-full flex-col justify-end overflow-hidden bg-[#0A0A09] pb-16 sm:pb-20 lg:h-[100dvh] lg:min-h-[660px] lg:justify-end lg:pb-20 xl:pb-24 ${inter.className}`}
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
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          {/* Heading — 3 clean lines, title case, bold weight, orange accent on Exceptional Signage */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] leading-[1.14] lg:leading-[1.1] font-bold tracking-[-0.03em] text-white">
            Building Brands <br />
            Through <br />
            <span className="text-[var(--color-orange)]">Exceptional Signage</span>
          </h1>

          {/* Description — Lighter typography, airy and refined */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-md sm:max-w-lg">
            Precision engineering and turnkey architectural fabrication across the UAE.
          </p>

          {/* Primary CTA: Glass / Pill-style Button */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-between gap-5 sm:gap-7 pl-6 pr-2 py-2 sm:pl-7 sm:pr-2.5 sm:py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/35 backdrop-blur-md shadow-lg shadow-black/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span className="text-sm sm:text-base font-medium text-white tracking-[-0.01em]">
                Explore Our Projects
              </span>
              <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--color-orange)] text-[#0F0F0D] transition-transform duration-300 group-hover:scale-105 shrink-0">
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
