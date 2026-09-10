"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { CtaButton } from "@/components/ui/CtaButton";

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Navbar — Exact reference positioning:
 * - Edge-to-edge full width (no max-w-7xl constraint on header)
 * - Logo at far left (px-6 sm:px-10 lg:px-14)
 * - Hamburger at far right (px-6 sm:px-10 lg:px-14)
 * - Overlay menu maintains exact same logo and close icon coordinates (zero shift)
 */
type NavbarProps = {
  appearance?: "dark" | "light";
};

export function Navbar({ appearance = "dark" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollSentinelRef = useRef<HTMLSpanElement>(null);
  const usesDarkInk = scrolled || appearance === "light";

  // Observe a single threshold instead of doing work on every scroll event.
  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <span
        ref={scrollSentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[60px] h-px w-px"
      />
      {/* Fixed Header — Full-width edge-to-edge layout matching reference */}
      <header
        className={`fixed left-0 right-0 top-0 z-40 isolate transition-[padding,box-shadow] duration-300 ${
          scrolled
            ? "py-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            : appearance === "light"
              ? "bg-[#F9F8F5]/90 backdrop-blur-md border-b border-[#1A1A18]/[0.06] py-5 sm:py-6"
              : "bg-gradient-to-b from-black/60 via-black/15 to-transparent py-5 sm:py-7"
        }`}
      >
        {scrolled && (
          <div
            aria-hidden="true"
            className="navbar-glass pointer-events-none absolute inset-0 -z-10"
          />
        )}

        <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Logo — Far left */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Leader Gate Advertising Home"
          >
            <Image
              src={
                usesDarkInk
                  ? "/leadergate-logo.webp"
                  : "/leadergate-logo-white.webp"
              }
              alt="Leader Gate Advertising"
              width={180}
              height={56}
              priority
              className="h-8 sm:h-9 md:h-10 w-auto drop-shadow-md"
            />
          </Link>

          {appearance === "light" && (
            <p
              className={`absolute left-1/2 hidden -translate-x-1/2 text-[0.625rem] font-semibold uppercase tracking-[0.38em] lg:block ${
                usesDarkInk ? "text-[#1A1A18]/70" : "text-white/70"
              }`}
            >
              Design&nbsp;&nbsp;/&nbsp;&nbsp;Fabricate&nbsp;&nbsp;/&nbsp;&nbsp;Install
            </p>
          )}

          {/* Hamburger — Far right (clean 3 lines like reference) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className={`p-2 -mr-2 hover:opacity-75 transition-opacity cursor-pointer flex flex-col justify-center items-end gap-[5px] sm:gap-[6px] w-10 h-10 ${
              usesDarkInk ? "text-[#1A1A18]" : "text-white"
            }`}
          >
            <span className="h-[2px] w-6 sm:w-7 bg-current rounded-full transition-transform" />
            <span className="h-[2px] w-6 sm:w-7 bg-current rounded-full transition-transform" />
            <span className="h-[2px] w-6 sm:w-7 bg-current rounded-full transition-transform" />
          </button>
        </div>
      </header>

      {/* Full-Screen Immersive Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 bg-[#0F0F0D] text-white flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar inside Overlay — Identical padding & height so logo and icon have zero shift */}
            <div className="w-full py-5 sm:py-7">
              <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/leadergate-logo-white.webp"
                    alt="Leader Gate Advertising"
                    width={180}
                    height={56}
                    priority
                    className="h-8 sm:h-9 md:h-10 w-auto"
                  />
                </Link>

                {/* Close 'X' icon button — Exact same far-right position */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 -mr-2 text-white hover:opacity-75 transition-opacity cursor-pointer flex items-center justify-center w-10 h-10"
                >
                  <X size={26} className="text-white" />
                </button>
              </div>
            </div>

            {/* Overlay Center: Clean Navigation Links (Viera style) */}
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 my-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              {/* Left: Minimal Brand Accent */}
              <div className="hidden lg:block max-w-md space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                  Leader Gate Advertising
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white leading-tight">
                  Building Brands Through Exceptional Signage
                </h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Turnkey architectural signage, large format branding, and precision fabrication across the UAE.
                </p>
                <div className="pt-4 text-xs text-white/60 space-y-1.5 font-mono">
                  <p>DUBAI &amp; SHARJAH, UAE</p>
                  <p>info@leadergate.ae • +971 4 295 8899</p>
                </div>
              </div>

              {/* Right: Large Vertical Navigation Links */}
              <div className="w-full lg:w-auto">
                <ul className="space-y-3 sm:space-y-4 list-none p-0 m-0">
                  {menuItems.map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + idx * 0.04,
                        duration: 0.3,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group inline-flex items-center text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white/75 hover:text-white transition-all duration-200"
                      >
                        <span className="group-hover:translate-x-3 transition-transform duration-200 group-hover:text-[var(--color-orange)]">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Prominent CTA */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10">
                  <CtaButton
                    href="#contact"
                    variant="glass"
                    onClick={() => setMenuOpen(false)}
                  >
                    Start Your Project
                  </CtaButton>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Minimal footer line */}
            <div className="w-full py-6 border-t border-white/10">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
                <p>Let&apos;s build something great together</p>
                <a
                  href="mailto:info@leadergate.ae"
                  className="text-white/60 hover:text-[var(--color-orange)] transition-colors"
                >
                  info@leadergate.ae
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
