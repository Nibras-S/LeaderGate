import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Wrench,
  Cpu,
  ArrowsClockwise,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";

const reasons = [
  {
    icon: Wrench,
    title: "Precision Manufacturing",
    description:
      "Every element is produced with accuracy, consistency, and premium-quality finishing.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "Equipped with CNC cutting, laser technology, digital printing, and modern fabrication capabilities to handle projects of all sizes.",
  },
  {
    icon: ArrowsClockwise,
    title: "End-to-End Project Delivery",
    description:
      "From consultation and design to production and installation, every stage is managed by one experienced team.",
  },
  {
    icon: Buildings,
    title: "Trusted Across Industries",
    description:
      "Our portfolio spans banking, government, real estate, healthcare, retail, hospitality, automotive, and corporate sectors throughout the UAE.",
  },
];

/**
 * WHY LEADER GATE SECTION — 07
 *
 * CURRENT (structural): 4-card horizontal/grid row on dark ink background.
 * Dark background adds contrast variety and anchors the page.
 *
 * TODO (refinement phase):
 * - Upgrade card design — currently flat, could use border glow or subtle gradient
 * - Consider animated counter or icon on scroll-enter
 * - Icon hover: rotate or scale animation
 * - Left-aligned section header with large display number on right column
 */
export function WhyLeaderGateSection() {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <Container>
        <SectionHeader
          headline="Why Leading Brands Choose Leader Gate"
          invertColors
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid rgba(249,248,245,0.1)",
                  backgroundColor: "rgba(249,248,245,0.04)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(242,101,34,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon
                    size={22}
                    color="var(--color-orange)"
                    weight="regular"
                  />
                </div>
                <h3
                  className="text-h4"
                  style={{
                    color: "var(--color-text-invert)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(249,248,245,0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
