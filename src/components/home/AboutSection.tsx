import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";

const benefits = [
  {
    title: "Precision In-House Manufacturing",
    description:
      "State-of-the-art CNC routers, fiber laser metal cutters, and automated channel letter benders managed 100% in-house with zero third-party dependency.",
    icon: "/images/built-to-last-icon.webp",
  },
  {
    title: "Proven UAE Delivery Track Record",
    description:
      "10+ years of operational excellence with 500+ landmark installations delivered across all 7 Emirates, fully compliant with UAE safety and municipality codes.",
    icon: "/images/environmentally-friendly-icon.webp",
  },
];

const capabilities = [
  {
    title: "Design & Brand Development",
    items: [
      "Brand consultation",
      "Creative design",
      "Technical drawings",
      "Production-ready solutions",
    ],
  },
  {
    title: "Signage & Fabrication",
    items: [
      "Illuminated signs",
      "3D letters & logos",
      "Architectural signage",
      "ACP cladding",
      "Wayfinding systems",
    ],
  },
  {
    title: "Printing & Graphics",
    items: [
      "Large-format printing",
      "Vinyl graphics",
      "Wall & window graphics",
      "Banners & displays",
      "Promotional materials",
    ],
  },
  {
    title: "Installation & Deployment",
    items: [
      "Site survey & planning",
      "Professional installation",
      "Multi-site rollouts",
      "UAE-wide delivery",
      "Maintenance & support",
    ],
  },
];

export function AboutSection() {
  return (
    <div className="bg-white text-[#1A1A18]">
      {/* ─────────────────────────────────────────────
          WHO WE ARE / ABOUT INTRO
      ───────────────────────────────────────────── */}
      <section
        id="about"
        className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20"
        aria-labelledby="about-title"
      >
        <div className="homepage-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14 xl:gap-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#1A1A18]/15 bg-white px-3.5 py-1 text-[11px] font-medium tracking-wide text-[#1A1A18] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
                Who We Are
              </p>

              <h2
                id="about-title"
                className="mt-4 max-w-[18ch] font-display text-[clamp(2.1rem,3.4vw,3.35rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#171715]"
              >
                Your End-to-End <br className="hidden sm:inline" />
                <span className="text-[#F26522]">Signage Partner</span>
              </h2>

              <div className="mt-6 space-y-4 max-w-xl text-base leading-relaxed text-[#5E686D]">
                <p>
                  At Leader Gate, we create powerful brand experiences through strategic design, precision fabrication, and flawless execution. As a leading UAE signage, branding, and fabrication company, we deliver complete visual solutions that help businesses establish a stronger and more memorable presence.
                </p>
                <p>
                  From concept development and manufacturing to professional installation and ongoing support, our dedicated teams combine advanced machinery, experienced craftsmanship, and meticulous project management to deliver exceptional results.
                </p>
              </div>

              <div className="mt-8 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-4">
                <CtaButton href="/about" variant="dark">
                  Our Story
                </CtaButton>
              </div>
            </div>

            <figure className="relative flex items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#1A1A18]/10 bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.14)]">
                <Image
                  src="/images/about/about.png"
                  alt="Leader Gate state-of-the-art precision fabrication machinery"
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          <div className="mt-14 grid gap-8 border-t border-[#1A1A18]/10 pt-10 sm:grid-cols-2 lg:gap-16">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="flex max-w-xl items-start gap-4">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#1A1A18]/8 bg-[#F9F8F5] p-1.5 flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-full w-full object-contain mix-blend-multiply"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-[#171715] sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5E686D]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          OUR CAPABILITIES SECTION (Restored from history)
      ───────────────────────────────────────────── */}
      <section
        id="capabilities"
        className="relative bg-[#F9F8F5] py-20 sm:py-24 lg:py-28 border-t border-[#1A1A18]/10"
        aria-labelledby="capabilities-title"
      >
        <div className="homepage-shell">
          <div className="mb-10 sm:mb-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F26522]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
              Core Capabilities
            </p>
            <h2
              id="capabilities-title"
              className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[#171715] sm:text-4xl lg:text-5xl leading-[1.08]"
            >
              Our capabilities
            </h2>
            <span className="mt-3 block h-0.5 w-12 bg-[#F26522]" />
          </div>

          <div className="divide-y divide-[#1A1A18]/12 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-7 first:pt-0 lg:block lg:min-h-[13rem] lg:px-9 lg:py-0 lg:first:pl-0 lg:last:pr-0"
              >
                <h3 className="max-w-[13rem] font-display text-lg font-semibold leading-[1.15] tracking-[-0.035em] text-[#171715] sm:text-xl">
                  {capability.title}
                </h3>
                <ul className="space-y-2 border-l border-[#1A1A18]/12 pl-5 text-sm leading-snug text-[#637076] sm:text-base lg:mt-6 lg:border-l-0 lg:pl-0">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[0.6em] h-px w-3 shrink-0 bg-[#F26522]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
