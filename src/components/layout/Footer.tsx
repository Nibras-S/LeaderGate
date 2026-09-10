import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    group: "Services",
    links: [
      { label: "Design & Branding", href: "#capabilities" },
      { label: "Signage & Fabrication", href: "#capabilities" },
      { label: "Printing & Graphics", href: "#capabilities" },
      { label: "Installation & Deployment", href: "#capabilities" },
    ],
  },
  {
    group: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#projects" },
      { label: "Our Process", href: "#process" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    group: "Contact",
    links: [
      { label: "Request a Consultation", href: "#contact" },
      { label: "Speak With Our Team", href: "#contact" },
    ],
  },
];

/**
 * Footer — dark ink background, logo, nav groups, tagline.
 * TODO (refinement phase): add social links, UAE address, phone/email, certifications badge.
 */
export function Footer({ appearance = "dark" }: { appearance?: "dark" | "light" }) {
  const currentYear = new Date().getFullYear();
  const isLight = appearance === "light";

  return (
    <footer
      data-appearance={appearance}
      style={{
        backgroundColor: isLight ? "#F9F8F5" : "var(--color-ink)",
        color: isLight ? "#1A1A18" : "var(--color-text-invert)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <Container>
        {/* Top: Logo + link groups */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: isLight ? "1px solid #DCDDD6" : "1px solid rgba(249,248,245,0.1)",
          }}
          className="grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div>
            <Link href="/">
              <Image
                src="/leadergate-logo.webp"
                alt="Leader Gate Advertising"
                width={150}
                height={45}
                style={{ height: "38px", width: "auto", filter: isLight ? undefined : "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.9375rem",
                color: isLight ? "#626760" : "rgba(249,248,245,0.6)",
                lineHeight: 1.7,
                maxWidth: "28ch",
              }}
            >
              Premium Signage, Branding & Visual Communication Solutions Across the UAE.
            </p>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.group}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isLight ? "#626760" : "rgba(249,248,245,0.45)",
                  marginBottom: "1rem",
                }}
              >
                {group.group}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{ fontSize: "0.9375rem", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: tagline + copyright */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "2rem",
          }}
          className="sm:flex-row sm:items-center sm:justify-between"
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: isLight ? "#B74716" : "var(--color-orange)",
            }}
          >
            Design. Fabricate. Install. Elevate.
          </p>
          <p style={{ fontSize: "0.8125rem", color: isLight ? "#626760" : "rgba(249,248,245,0.4)" }}>
            © {currentYear} Leader Gate Advertising. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
