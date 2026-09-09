import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * FINAL CTA SECTION — 10
 *
 * CURRENT (structural): Dark ink band with headline, subtext, and 2 CTAs.
 *
 * TODO (refinement phase):
 * - Add a full-bleed background project photography with dark overlay
 * - Large display headline with orange accent word
 * - Consider a subtle animated gradient or brand texture on the dark background
 * - CTA section should have more vertical breathing room (py-32 or more)
 * - Add a small brand mark or geometric accent element
 */
export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: "var(--color-ink)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <Container>
        <div style={{ maxWidth: "60ch" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
              marginBottom: "1.25rem",
            }}
          >
            Get Started
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 700,
              color: "var(--color-text-invert)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--color-orange)" }}>Remarkable</span>
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(249,248,245,0.65)",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "3rem",
            }}
          >
            Whether you&apos;re launching a new business, upgrading a corporate
            facility, rebranding multiple locations, or developing a large-scale
            project, Leader Gate is ready to bring your vision to life.
          </p>

          <p
            style={{
              fontSize: "0.9375rem",
              color: "rgba(249,248,245,0.5)",
              marginBottom: "2.5rem",
            }}
          >
            Partner with a team trusted by leading organizations across the UAE
            to deliver signage, branding, and fabrication solutions without
            compromise.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="#contact">
              Start Your Project
            </Button>
            <Button variant="ghost-invert" size="lg" href="#contact">
              Speak With Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
