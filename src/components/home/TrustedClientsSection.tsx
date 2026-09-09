import { Container } from "@/components/ui/Container";

const clients = [
  "Emirates NBD",
  "Citibank",
  "Bank of Baroda",
  "ADNOC",
  "Abu Dhabi Police",
  "Aldar",
  "Sobha Realty",
  "Lulu Exchange",
  "Khidmah",
  "OMODA | JAECOO",
  "Mahy Khoory Automotive",
  "DEWA",
];

/**
 * TRUSTED CLIENTS SECTION — 02
 *
 * CURRENT (structural): Label + horizontal scrolling client name list.
 *
 * TODO (refinement phase):
 * - Replace text names with actual SVG logo marks (Simple Icons or custom SVGs)
 * - Add infinite marquee scroll animation (one per page max — this is the one)
 * - Ensure logos render in both light/dark mode
 */
export function TrustedClientsSection() {
  return (
    <section
      id="clients"
      style={{
        backgroundColor: "var(--color-surface-alt)",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container>
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: "1.75rem",
            textAlign: "center",
          }}
        >
          Trusted by Industry Leaders
        </p>

        {/* Client name strip — TODO: swap for logo SVGs in refinement */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem 2.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {clients.map((client, i) => (
            <span
              key={client}
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-ink-60)",
                opacity: 0.75,
                whiteSpace: "nowrap",
              }}
            >
              {client}
              {i < clients.length - 1 && (
                <span
                  style={{
                    marginLeft: "2.5rem",
                    color: "var(--color-border-strong)",
                    fontWeight: 300,
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
