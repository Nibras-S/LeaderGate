import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries = [
  { label: "Banking & Financial Institutions", icon: "🏦" },
  { label: "Government & Public Sector", icon: "🏛️" },
  { label: "Real Estate & Property Developers", icon: "🏢" },
  { label: "Retail & Shopping Destinations", icon: "🛍️" },
  { label: "Hospitality & Tourism", icon: "🏨" },
  { label: "Healthcare & Medical Facilities", icon: "⚕️" },
  { label: "Automotive Showrooms & Service Centers", icon: "🚗" },
  { label: "Educational Institutions", icon: "🎓" },
  { label: "Corporate Offices & Business Centers", icon: "💼" },
];

/**
 * INDUSTRIES SECTION — 06
 *
 * CURRENT (structural): 3-column grid of industry cards with label.
 *
 * TODO (refinement phase):
 * - Replace emoji icons with Phosphor icon library
 * - Consider a horizontal scroll-snap pill strip for mobile
 * - Add a subtle count badge or project number per industry
 * - Dark background variant (ink section) would separate this from adjacent sections
 * - Remove emoji — use icon library only (per design system rules)
 */
export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <Container>
        <SectionHeader
          headline="Supporting Businesses Across Every Sector"
          subtext="Our experience across diverse industries allows us to develop solutions tailored to each sector's unique requirements."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1rem",
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <div
              key={industry.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--color-border)",
                backgroundColor: "#ffffff",
              }}
            >
              {/* TODO: replace with Phosphor icon */}
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                {industry.icon}
              </span>
              <span
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                }}
              >
                {industry.label}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "0.9375rem",
            color: "var(--color-text-muted)",
            maxWidth: "55ch",
          }}
        >
          Our experience across diverse industries allows us to develop solutions
          tailored to each sector&apos;s unique requirements.
        </p>
      </Container>
    </section>
  );
}
