import React from "react";
import Link from "next/link";

export type CtaButtonVariant = "glass" | "dark" | "outline" | "solid-orange";

export interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: CtaButtonVariant;
  className?: string;
  badgeClassName?: string;
  icon?: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  ariaLabel?: string;
}

const variantStyles: Record<CtaButtonVariant, { container: string; badge: string }> = {
  // Empereal .site-cta-on-dark / .hero-home-pill: Translucent glass for dark backgrounds
  glass: {
    container:
      "border-white/40 bg-white/[0.08] text-white shadow-lg shadow-black/15 backdrop-blur-md hover:-translate-y-0.5 hover:border-white/85 hover:bg-white/[0.14]",
    badge: "bg-[var(--color-orange)] text-[#0F0F0D] group-hover:bg-[#FF7733]",
  },
  // Solid dark pill for light surfaces (high contrast & crisp)
  dark: {
    container:
      "border-[#0F0F0D] bg-[#0F0F0D] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#1E1E1C] hover:border-[#1E1E1C] hover:shadow-md",
    badge: "bg-[var(--color-orange)] text-[#0F0F0D] group-hover:bg-[#FF7733]",
  },
  // Empereal .site-cta: Refined border outline for light surfaces
  outline: {
    container:
      "border-[#1A1A18]/25 bg-transparent text-[#1A1A18] hover:-translate-y-0.5 hover:border-[#1A1A18]/50 hover:bg-[#1A1A18]/[0.04]",
    badge: "bg-[var(--color-orange)] text-[#0F0F0D] group-hover:bg-[#FF7733]",
  },
  // Empereal .site-cta-solid: Vibrant orange solid button
  "solid-orange": {
    container:
      "border-[var(--color-orange)] bg-[var(--color-orange)] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#DC5510] hover:border-[#DC5510]",
    badge: "bg-white text-[#0F0F0D]",
  },
};

/**
 * Unified CTA Button — Replicating the exact Empereal website CTA sizing & UI
 *
 * Sizing & UI specs from Empereal:
 * - min-h-[44px] w-fit rounded-full border py-1 pl-5 pr-1 gap-3
 * - text-sm font-medium whitespace-nowrap
 * - 36px (h-9 w-9) circular badge
 * - Smooth -translate-y-0.5 lift on hover
 * - Signature 45° badge rotation on hover (turning ↗ into →)
 */
export function CtaButton({
  children,
  href,
  onClick,
  variant = "glass",
  className = "",
  badgeClassName = "",
  icon,
  external = false,
  type = "button",
  id,
  ariaLabel,
}: CtaButtonProps) {
  const currentVariant = variantStyles[variant];

  // Empereal's exact clean diagonal arrow SVG
  const defaultIcon = (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12 12 4m0 0H6.25M12 4v5.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const innerContent = (
    <>
      <span className="text-sm font-medium tracking-[-0.01em] whitespace-nowrap">
        {children}
      </span>
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:rotate-45 ${currentVariant.badge} ${badgeClassName}`}
      >
        {icon ?? defaultIcon}
      </span>
    </>
  );

  // Exact base classes matching Empereal's .site-cta & .hero-home-pill
  const baseClasses = `group inline-flex min-h-[44px] w-fit items-center justify-center gap-3 whitespace-nowrap rounded-full border py-1 pl-5 pr-1 text-sm font-medium transition-all duration-200 select-none active:translate-y-0 cursor-pointer ${currentVariant.container} ${className}`;

  if (href) {
    const isSpecialLink =
      external ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isSpecialLink) {
      return (
        <a
          href={href}
          onClick={onClick}
          id={id}
          aria-label={ariaLabel}
          className={baseClasses}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        className={baseClasses}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
}
