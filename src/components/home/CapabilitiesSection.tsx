import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  PaintBrush,
  Signpost,
  Printer,
  HardHat,
} from "@phosphor-icons/react/dist/ssr";

const capabilities = [
  {
    icon: PaintBrush,
    title: "Design & Brand Development",
    description:
      "Strategic visual concepts that transform ideas into memorable brand experiences and impactful environments.",
  },
  {
    icon: Signpost,
    title: "Signage & Fabrication",
    description:
      "Custom-built signage solutions including illuminated signs, 3D lettering, wayfinding systems, ACP cladding, architectural signage, and corporate branding elements.",
  },
  {
    icon: Printer,
    title: "Printing & Graphics",
    description:
      "Large-format printing, vinyl graphics, wall coverings, window graphics, banners, stickers, display solutions, and promotional materials produced to the highest standards.",
  },
  {
    icon: HardHat,
    title: "Installation & Deployment",
    description:
      "Professional installation services delivered safely, efficiently, and consistently across commercial, retail, hospitality, government, and corporate projects throughout the UAE.",
  },
];

/**
 * CAPABILITIES SECTION — 04
 *
 * CURRENT (structural): 2×2 card grid with icon, title, description.
 *
 * TODO (refinement phase):
 * - Upgrade card layout: consider alternating large/small bento cells
 * - Add hover state: card lifts, icon transitions to orange
 * - Each card could feature a supporting project image thumbnail
 * - Consider a dark surface background (var(--color-ink)) for contrast variety
 */
export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface-alt)" }}
    >
      <Container>
        <SectionHeader
          headline="Complete Branding & Signage Solutions"
          subtext="From initial concept to final installation, we deliver every element of your brand's physical presence."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="sm:grid-cols-2"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="card-surface"
                style={{ padding: "2rem" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-orange-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={24} color="var(--color-orange)" weight="regular" />
                </div>
                <h3 className="text-h4" style={{ marginBottom: "0.75rem" }}>
                  {cap.title}
                </h3>
                <p className="text-body">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
