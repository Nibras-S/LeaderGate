import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    id: "al-masraf",
    image: "/images/projects/al-masraf.png",
    client: "Al Masraf",
    category: "Banking & Corporate",
    description:
      "Corporate headquarters and branch branding solutions featuring illuminated building signage, wayfinding systems, customer guidance elements, and interior brand applications.",
  },
  {
    id: "al-madina",
    image: "/images/projects/al-madina.png",
    client: "Al Madina Hypermarket",
    category: "Retail",
    description:
      "Large-format retail signage and façade branding designed to maximize visibility, strengthen brand presence, and create a welcoming customer experience.",
  },
  {
    id: "jaecoo",
    image: "/images/projects/jaecoo.png",
    client: "JAECOO & DONGFENG Showroom",
    category: "Automotive",
    description:
      "Premium automotive dealership branding featuring illuminated façade signage, showroom branding, and customer-focused automotive retail environments.",
  },
  {
    id: "sobha",
    image: "/images/projects/sobha.png",
    client: "SOBHA Realty",
    category: "Real Estate",
    description:
      "High-impact branding and illuminated signage solutions supporting luxury real estate developments and premium property destinations.",
  },
  {
    id: "dominos",
    image: "/images/projects/dominos.png",
    client: "Domino's Pizza",
    category: "F&B Retail",
    description:
      "Retail storefront branding and illuminated signage solutions designed to enhance brand recognition and customer engagement.",
  },
  {
    id: "chums",
    image: "/images/projects/chums.png",
    client: "CHUMS Café",
    category: "Hospitality",
    description:
      "Custom hospitality signage and branding solutions that combine craftsmanship, visibility, and inviting customer experiences.",
  },
];

/**
 * PROJECTS SECTION — 05
 *
 * CURRENT (structural): 3-column grid of project cards with real images.
 *
 * TODO (refinement phase):
 * - Upgrade to bento asymmetric grid (hero card large, others smaller)
 * - Add hover: image scale + card overlay with project details
 * - Category pill badges with consistent styling
 * - Add lightbox or project detail overlay on click
 * - Consider alternating full-width featured row + 2-col row
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <SectionHeader
            headline="Creating Impact Across the UAE"
            subtext="Every project we deliver is designed to enhance visibility, strengthen brand identity, and create meaningful customer experiences."
            className="mb-0"
          />
          <Button variant="outline" href="#projects">
            Explore All Projects
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="card"
              style={{ overflow: "hidden" }}
            >
              {/* Project image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  backgroundColor: "var(--color-surface-alt)",
                }}
              >
                <Image
                  src={project.image}
                  alt={`Leader Gate — ${project.client} project`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card content */}
              <div style={{ padding: "1.5rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-orange)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.category}
                </span>
                <h3 className="text-h4" style={{ marginBottom: "0.75rem" }}>
                  {project.client}
                </h3>
                <p className="text-caption">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button variant="primary" href="#contact">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
