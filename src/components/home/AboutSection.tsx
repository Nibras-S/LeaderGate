import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlights = [
  "Advanced machinery and precision manufacturing",
  "Experienced craftsmen and dedicated project teams",
  "Complete solutions from concept to installation",
  "Consistent quality across single sites and large-scale rollouts",
];

/**
 * ABOUT SECTION — 03
 *
 * CURRENT (structural): Split layout — left copy, right image + stat strip.
 *
 * TODO (refinement phase):
 * - Upgrade image to a workshop/fabrication photo (generate or real)
 * - Add scroll-reveal animations on the text block
 * - Consider adding a subtle brand texture overlay to image
 * - Stat strip could become the ExperienceSection metrics instead (avoid duplication)
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left — Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              aspectRatio: "4/3",
              border: "1px solid var(--color-border)",
            }}
            className="order-2 lg:order-1"
          >
            {/* TODO (refinement): replace with fabrication/workshop image */}
            <Image
              src="/images/projects/al-masraf.png"
              alt="Leader Gate — Al Masraf corporate signage project"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="About Leader Gate"
              headline="Your End-to-End Signage Partner"
            />

            <p className="text-body-lg" style={{ marginBottom: "1.5rem" }}>
              At Leader Gate, we do more than manufacture signs.
            </p>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              We help organizations strengthen their brand presence through
              strategic design, high-quality fabrication, and flawless
              execution. With advanced machinery, experienced craftsmen, and
              dedicated project teams, we provide complete solutions from
              concept development and production to installation and ongoing
              support.
            </p>
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              Whether it&apos;s a single retail location or a large-scale
              corporate rollout, we bring the same commitment to quality,
              reliability, and excellence.
            </p>

            {/* Highlights list */}
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 2.5rem 0",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-body)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-orange)",
                      marginTop: "0.45rem",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="secondary" href="#capabilities">
              Explore Our Capabilities
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
