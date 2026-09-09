import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
  },
  {
    number: "100+",
    label: "Corporate Clients",
  },
  {
    number: "10+",
    label: "Years of Industry Experience",
  },
  {
    number: "UAE-Wide",
    label: "Service Coverage",
  },
];

/**
 * EXPERIENCE / PROOF SECTION — 09
 *
 * CURRENT (structural): Stats strip + quality copy block.
 * Dark surface for contrast variety.
 *
 * TODO (refinement phase):
 * - Animate numbers on scroll-enter (count-up effect with Motion)
 * - Larger display-scale number treatment
 * - Could feature a full-width project photography background with overlay
 * - Add a "Quality That Speaks for Itself" sub-block with the approved copy
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <Container>
        <SectionHeader
          headline="Built on Experience. Driven by Excellence."
          align="center"
        />

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            marginBottom: "5rem",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
          }}
          className="sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRight: "1px solid var(--color-border)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "var(--color-orange)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quality copy */}
        <div
          style={{
            maxWidth: "68ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3 className="text-h3" style={{ marginBottom: "1.25rem" }}>
            Quality That Speaks for Itself
          </h3>
          <p className="text-body-lg" style={{ marginBottom: "1rem" }}>
            Our reputation has been built through successful project delivery,
            long-term client relationships, and an unwavering commitment to quality.
          </p>
          <p className="text-body">
            Every sign, branding element, and installation is created with the
            same goal: to help our clients stand out, communicate effectively,
            and make a lasting impression.
          </p>
        </div>
      </Container>
    </section>
  );
}
