import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your objectives, brand requirements, timeline, and project scope.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our team develops creative concepts, technical specifications, and production-ready solutions.",
  },
  {
    number: "03",
    title: "Production & Fabrication",
    description:
      "Using advanced equipment and premium materials, we manufacture signage and branding assets to the highest standards.",
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "Experienced specialists ensure every installation is completed safely, accurately, and efficiently.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We remain available for maintenance, updates, and future brand expansion requirements.",
  },
];

/**
 * PROCESS SECTION — 08
 *
 * CURRENT (structural): Vertical numbered step list.
 *
 * TODO (refinement phase):
 * - Upgrade to horizontal step timeline on desktop
 * - Consider sticky-stack scroll or pinned section with step reveal on scroll
 * - Add connecting line between steps
 * - Number typography: large display treatment in faint orange
 * - Step cards could expand on click to show more detail
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Container>
        <SectionHeader
          headline="Simple. Transparent. Reliable."
          subtext="A structured process that ensures consistent quality and clear communication at every stage."
        />

        {/* Step list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "0",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom:
                  index < steps.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
                alignItems: "flex-start",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  paddingTop: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-orange)",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div>
                <h3
                  className="text-h4"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {step.title}
                </h3>
                <p className="text-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
