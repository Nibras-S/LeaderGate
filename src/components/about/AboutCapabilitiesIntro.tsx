import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";
import { CtaButton } from "@/components/ui/CtaButton";

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

type AboutCapabilitiesIntroProps = {
  pageHero?: boolean;
};

export function AboutCapabilitiesIntro({
  pageHero = false,
}: AboutCapabilitiesIntroProps) {
  const Heading = pageHero ? "h1" : "h2";

  return (
    <div className={`bg-[#F9F8F5] text-[#1A1A18] ${inter.className}`}>
      <section
        id={pageHero ? "hero" : "about"}
        className={`relative overflow-hidden bg-[#F9F8F5] pb-14 sm:pb-16 lg:pb-14 ${
          pageHero ? "pt-12 sm:pt-16 lg:pt-20" : "pt-20 sm:pt-24 lg:pt-28"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(26,26,24,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,24,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="relative homepage-shell grid gap-10 lg:grid-cols-[0.82fr_1.38fr] lg:items-center lg:gap-16">
          <div id={pageHero ? "about" : undefined} className="max-w-[39rem]">
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.3em] text-[#F26522] lg:hidden">
              About Leader Gate
            </p>
            <Heading className="text-[clamp(2.8rem,5vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#171715] text-balance">
              Your end-to-end signage{" "}
              <span className="text-[#F26522]">partner</span>
            </Heading>
            <p className="mt-6 max-w-[34rem] text-base font-normal leading-relaxed text-[#5E686D] sm:text-lg">
              We design, fabricate, and install signage and branded environments
              that help businesses stand out across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CtaButton
                href={pageHero ? "#story" : "/about"}
                variant="dark"
              >
                Our story
              </CtaButton>
              <Link
                href="/#projects"
                className="group inline-flex min-h-12 items-center gap-6 border-b border-[#1A1A18]/50 text-sm font-semibold text-[#1A1A18] transition-colors hover:border-[#F26522] hover:text-[#F26522] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
              >
                View our work
                <ArrowRight
                  size={17}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="grid min-h-[20rem] grid-cols-[minmax(0,1fr)_8.75rem] overflow-hidden rounded-[1.35rem] shadow-[0_24px_60px_-34px_rgba(104,55,25,0.45)] sm:min-h-[25rem] sm:grid-cols-[minmax(0,1fr)_12.5rem] lg:min-h-[27rem] lg:grid-cols-[minmax(0,1fr)_14rem]">
            <div className="relative min-w-0">
              <Image
                src="/images/about/fabrication-laser.jpg"
                alt="Precision laser cutting at the Leader Gate fabrication facility"
                fill
                priority={pageHero}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 75vw, 42vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 to-black/15" />
            </div>
            <aside className="flex flex-col justify-between bg-[#F26522] px-5 py-7 text-white sm:px-7 sm:py-9 lg:px-8 lg:py-10">
              <div>
                <p className="text-[0.625rem] font-semibold uppercase leading-[1.65] tracking-[0.3em] sm:text-xs">
                  Ideas shaped
                  <br />
                  into reality
                </p>
                <span className="mt-6 block h-px w-9 bg-white/85" />
              </div>
              <div>
                <strong className="block text-4xl font-medium tracking-[-0.05em] tabular-nums sm:text-5xl">
                  500+
                </strong>
                <p className="mt-3 text-[0.5625rem] font-semibold uppercase leading-[1.6] tracking-[0.24em] sm:text-[0.6875rem]">
                  Projects delivered
                  <br />
                  across the UAE
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="relative bg-[#F9F8F5] pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="homepage-shell">
          <div className="border-t border-[#1A1A18]/15 pt-8 sm:pt-10">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#171715] sm:text-4xl">
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
                  <h3 className="max-w-[13rem] text-lg font-semibold leading-[1.15] tracking-[-0.035em] text-[#171715] sm:text-xl">
                    {capability.title}
                  </h3>
                  <ul className="space-y-1.5 border-l border-[#1A1A18]/12 pl-5 text-sm leading-snug text-[#637076] sm:text-base lg:mt-6 lg:border-l-0 lg:pl-0">
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
        </div>
      </section>
    </div>
  );
}
