import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./Footer.module.css";

const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Design & branding", href: "#capabilities" },
      { label: "Signage & fabrication", href: "#capabilities" },
      { label: "Printing & graphics", href: "#capabilities" },
      { label: "Installation & deployment", href: "#capabilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our work", href: "#projects" },
      { label: "Our process", href: "#process" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    title: "Contact",
    desktopOnly: true,
    links: [
      { label: "Start a project", href: "#contact" },
      { label: "info@leadergate.ae", href: "mailto:info@leadergate.ae" },
      { label: "+971 4 295 8899", href: "tel:+97142958899" },
    ],
  },
];

const contactLinks = [
  { label: "Email Leader Gate", href: "mailto:info@leadergate.ae", icon: EnvelopeSimple },
  { label: "Call Leader Gate", href: "tel:+97142958899", icon: Phone },
  { label: "WhatsApp Leader Gate", href: "https://wa.me/97142958899", icon: WhatsappLogo },
  { label: "LinkedIn Leader Gate", href: "https://www.linkedin.com/company/leader-gate-advertising", icon: LinkedinLogo },
];

export function Footer({ appearance = "dark" }: { appearance?: "dark" | "light" }) {
  const currentYear = new Date().getFullYear();
  const isLight = appearance === "light";

  return (
    <footer className={`${styles.footer} ${isLight ? styles.light : styles.dark}`}>
      <div className={`homepage-shell ${styles.shell}`}>
        <div className={styles.panel}>
          <div className={styles.topGrid}>
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.logoLink} aria-label="Leader Gate home">
                <Image
                  src="/leadergate-logo.webp"
                  alt="Leader Gate Advertising"
                  width={181}
                  height={45}
                  className={styles.logo}
                />
              </Link>
              <p className={styles.intro}>
                Signage, branding, and visual communication built to be seen across the UAE.
              </p>
              <div className={styles.contactLinks}>
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className={styles.iconLink} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    <Icon size={19} weight="regular" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <nav className={styles.linkGrid} aria-label="Footer navigation">
              {footerGroups.map((group) => (
                <div key={group.title} className={group.desktopOnly ? styles.desktopOnly : undefined}>
                  <h2 className={styles.groupTitle}>{group.title}</h2>
                  <ul className={styles.linkList}>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                  {group.desktopOnly && (
                    <div className={styles.socialIconsRow}>
                      <a
                        href="https://www.linkedin.com/company/leader-gate-advertising"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="LinkedIn"
                      >
                        <LinkedinLogo size={19} weight="regular" aria-hidden="true" />
                      </a>
                      <a
                        href="https://wa.me/97142958899"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="WhatsApp"
                      >
                        <WhatsappLogo size={19} weight="regular" aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className={styles.bottomRow}>
            <p>© {currentYear} Leader Gate Advertising. All rights reserved.</p>
            <p className={styles.tagline}>Design. Fabricate. Install.</p>
          </div>
        </div>
        <p className={styles.wordmark} aria-hidden="true">Leader Gate</p>
      </div>
    </footer>
  );
}
