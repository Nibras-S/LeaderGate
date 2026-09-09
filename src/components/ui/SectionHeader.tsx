import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  align?: "left" | "center";
  invertColors?: boolean; // for dark section backgrounds
  className?: string;
}

/**
 * Reusable section header: optional eyebrow tag + headline + optional subtext.
 * Eyebrow usage is intentionally restrained — not every section needs one.
 * Per design-taste-frontend skill: max 1 eyebrow per 3 sections.
 */
export function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = "left",
  invertColors = false,
  className = "",
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxWidth = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 ${textAlign} ${className}`}>
      {eyebrow && (
        <p className="text-eyebrow mb-3">{eyebrow}</p>
      )}
      <h2
        className="text-h2"
        style={invertColors ? { color: "var(--color-text-invert)" } : undefined}
      >
        {headline}
      </h2>
      {subtext && (
        <p
          className={`text-body-lg mt-4 max-w-[52ch] ${maxWidth}`}
          style={
            invertColors
              ? { color: "rgba(249, 248, 245, 0.7)" }
              : undefined
          }
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
