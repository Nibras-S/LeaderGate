import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Wrench,
  Cpu,
  ArrowsClockwise,
  ShieldCheck,
  Crane,
  GlobeHemisphereWest,
  Sparkle,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "About Us | Leader Gate — Premier UAE Signage, Branding & Fabrication",
  description:
    "Leader Gate is a leading UAE signage, branding, and fabrication company delivering complete visual solutions through strategic design, precision fabrication, and flawless turnkey execution.",
};

const metrics = [
  { value: "10+", label: "Years in UAE" },
  { value: "500+", label: "Projects Delivered" },
  { value: "7", label: "Emirates Covered" },
  { value: "100%", label: "In-House Fabrication" },
];

const principles = [
  {
    icon: Wrench,
    title: "100% In-House Fabrication",
    description:
      "Zero third-party subcontracting. Every letter, bracket, illumination circuit, and structural weld is executed in our facility with complete quality control.",
  },
  {
    icon: Cpu,
    title: "Sub-Millimeter Precision",
    description:
      "Multi-axis CNC routing, high-power fiber laser metal cutting, and automated channel letter bending delivering exact tolerances on every material.",
  },
  {
    icon: ArrowsClockwise,
    title: "Full Lifecycle Ownership",
    description:
      "Single accountable project engineer coordinating structural site survey, engineering drawings, fabrication, installation, and preventative maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "UAE Regulatory Compliance",
    description:
      "Certified wind-load calculation engineering, Dubai Civil Defense (DCD) fire-safety compliance, and complete UAE municipality permit management.",
  },
  {
    icon: Crane,
    title: "Certified Rigging Crews",
    description:
      "In-house licensed crane operators, boom lifts, and certified rope-access installation technicians for complex high-elevation commercial façades.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Multi-Emirate Coverage",
    description:
      "Synchronized simultaneous deployment across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#1A1A18]">
      <Navbar />

      <main id="main-content">
        {/* ─────────────────────────────────────────────
            SECTION 1: HERO (Full-bleed with user's about.png)
        ───────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative isolate flex min-h-[92svh] sm:min-h-[100svh] overflow-hidden rounded-b-2xl sm:rounded-b-3xl bg-[#0A0A09] text-white"
          aria-labelledby="about-hero-title"
        >
          {/* Hero background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/about/about-hero.png"
              alt="Leader Gate state-of-the-art signage and precision fabrication facility in the UAE"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Cinematic gradient overlays matching Empereal editorial style */}
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,0.92)_0%,rgba(10,10,9,0.76)_42%,rgba(10,10,9,0.36)_75%,rgba(10,10,9,0.18)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,9,0.5)_0%,transparent_25%,transparent_65%,rgba(10,10,9,0.85)_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative flex w-full flex-1 items-center pb-44 pt-36 sm:pb-44 sm:pt-40 lg:pb-40 lg:pt-44">
            <div className="homepage-shell w-full">
              <div className="max-w-[48rem]">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F26522] sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
                  Est. 2014 · 10+ Years of Manufacturing Excellence
                </p>

                <h1
                  id="about-hero-title"
                  className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-[-0.035em] text-white text-balance"
                >
                  Your End-to-End <br className="hidden sm:inline" />
                  <span className="text-[#F26522]">Signage Partner</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/85">
                  At Leader Gate, we create powerful brand experiences through
                  strategic design, precision fabrication, and flawless
                  execution for the UAE&apos;s leading institutions and businesses.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <CtaButton href="#story" variant="glass">
                    Read Our Story
                  </CtaButton>
                  <CtaButton
                    href="mailto:info@leadergate.ae?subject=New%20project%20enquiry"
                    variant="solid-orange"
                  >
                    Start Your Project
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>

          {/* Curved Stats Card — Anchored to bottom left like Empereal */}
          <div className="absolute bottom-0 left-0 z-10 w-full sm:w-[68%] sm:max-w-[48rem] 2xl:left-1/2 2xl:max-w-[64rem] 2xl:-translate-x-1/2">
            <dl className="grid grid-cols-2 sm:grid-cols-4 bg-white text-[#171715] shadow-2xl rounded-tr-3xl sm:rounded-tr-[3rem] p-4 sm:p-6 lg:p-7 border-t border-r border-[#1A1A18]/10">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="px-3 py-3 text-center sm:px-4"
                >
                  <dd className="font-display text-2xl font-bold leading-none text-[#F26522] sm:text-3xl lg:text-4xl tabular-nums">
                    {metric.value}
                  </dd>
                  <dt className="mx-auto mt-2 max-w-[8rem] text-[10px] font-medium uppercase tracking-wider leading-[1.25] text-[#5E686D] sm:text-xs">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 2: OUR STORY (Empereal 2-Col layout)
        ───────────────────────────────────────────── */}
        <section
          id="story"
          className="bg-white py-20 sm:py-28 lg:py-32"
          aria-labelledby="our-story-title"
        >
          <div className="homepage-shell">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-stretch">
              {/* Left Column: Story narrative */}
              <div className="max-w-[38rem] flex flex-col justify-center">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F26522]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
                  Our Story
                </p>
                <h2
                  id="our-story-title"
                  className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] text-[#171715] sm:text-4xl lg:text-5xl leading-[1.08] text-balance"
                >
                  Building Impactful Brand Landmarks Since 2014
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5E686D]">
                  <p>
                    At <strong className="font-semibold text-[#171715]">Leader Gate</strong>,
                    we create powerful brand experiences through strategic design,
                    precision fabrication, and flawless execution. As a leading UAE
                    signage, branding, and fabrication company, we deliver complete
                    visual solutions that help businesses establish a stronger and
                    more memorable presence.
                  </p>
                  <p>
                    From <strong className="font-semibold text-[#171715]">concept development and manufacturing to professional installation and ongoing support</strong>,
                    our dedicated teams combine advanced machinery, experienced
                    craftsmanship, and meticulous project management to deliver
                    exceptional results.
                  </p>
                  <p>
                    Our expertise spans <strong className="font-semibold text-[#171715]">architectural signage, corporate branding, large-scale printing, custom fabrication, and multi-location rollouts</strong>.
                    Whether it&apos;s a single retail destination or a large-scale
                    corporate project, we bring the same commitment to quality,
                    reliability, and excellence to every detail.
                  </p>
                </div>

                <blockquote className="mt-8 border-l-2 border-[#F26522] pl-4 text-base sm:text-lg font-medium italic text-[#171715]">
                  &ldquo;We don&apos;t just manufacture signs — we build brands
                  through exceptional signage.&rdquo;
                </blockquote>
              </div>

              {/* Right Column: Stacked Vision & Mission cards */}
              <div className="grid grid-rows-2 gap-5 h-full">
                {/* Vision Card (Dark) */}
                <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-[#0F0F0D] p-7 sm:p-8 text-white ring-1 ring-white/10 shadow-lg">
                  <div
                    className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#F26522]/15 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#F26522]/20 text-[#F26522] shrink-0"
                      aria-hidden="true"
                    >
                      <Sparkle size={18} weight="fill" />
                    </span>
                    <h3 className="font-display text-sm font-semibold text-[#F26522] tracking-wider uppercase">
                      Vision
                    </h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    To be the UAE&apos;s most trusted partner for brand visibility
                    and architectural fabrication — delivering visual landmarks
                    that captivate audiences, command attention, and endure the
                    region&apos;s climate with unmatched durability.
                  </p>
                </div>

                {/* Mission Card (Surface) */}
                <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-[#F9F8F5] border border-[#1A1A18]/10 p-7 sm:p-8 text-[#171715] ring-1 ring-[#1A1A18]/5 shadow-sm">
                  <div
                    className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#F26522]/10 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#F26522]/15 text-[#F26522] shrink-0"
                      aria-hidden="true"
                    >
                      <Compass size={18} weight="fill" />
                    </span>
                    <h3 className="font-display text-sm font-semibold text-[#171715] tracking-wider uppercase">
                      Mission
                    </h3>
                  </div>
                  <p className="text-[#5E686D] leading-relaxed text-sm sm:text-base">
                    To design, engineer, and fabricate world-class visual solutions
                    with uncompromising precision and direct manufacturer
                    accountability. We ensure total quality control under one roof —
                    delivering seamless execution from initial site survey to final
                    structural handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3: WHAT SETS US APART (3x2 grid)
        ───────────────────────────────────────────── */}
        <section
          id="principles"
          className="bg-[#F9F8F5] py-20 sm:py-28 lg:py-32 border-t border-[#E5E3DC]"
          aria-labelledby="principles-title"
        >
          <div className="homepage-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F26522]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
                Why Choose Leader Gate
              </p>
              <h2
                id="principles-title"
                className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] text-[#171715] sm:text-4xl lg:text-5xl leading-[1.08] text-balance"
              >
                Engineered for Quality, Built to Last
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5E686D] leading-relaxed text-balance">
                Six core operating principles that ensure complete operational
                control and lasting visual impact on every project.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article
                    key={principle.title}
                    className="group relative flex flex-col rounded-2xl border border-[#1A1A18]/8 bg-white p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#F26522]/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F26522]/10 text-[#F26522] transition-colors group-hover:bg-[#F26522] group-hover:text-white">
                      <Icon size={22} weight="light" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-[#171715] sm:text-xl">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#5E686D]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 4: ABOUT CTA (Empereal AboutCTA style)
        ───────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-[#0A0A09] text-white border-t border-white/10 py-20 sm:py-24"
          aria-labelledby="about-cta-title"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-[36rem] rounded-full bg-[#F26522]/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="homepage-shell relative z-10 text-center max-w-2xl mx-auto">
            <h2
              id="about-cta-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white text-balance"
            >
              Ready to engineer your next brand landmark?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/75 max-w-lg mx-auto leading-relaxed">
              Dubai · Abu Dhabi · Sharjah · Northern Emirates — wherever you
              build, Leader Gate is ready to fabricate your vision.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton
                href="mailto:info@leadergate.ae?subject=New%20project%20enquiry"
                variant="solid-orange"
              >
                Start Your Project
              </CtaButton>
            </div>
          </div>
        </section>
      </main>

      <Footer appearance="light" />
    </div>
  );
}
