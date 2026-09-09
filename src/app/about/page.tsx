import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About Us | Leader Gate — Premier UAE Signage & Fabrication",
  description:
    "Discover the engineering precision, advanced machinery, and artisanal craftsmanship behind Leader Gate, UAE's trusted partner for architectural signage, corporate branding, and large-scale manufacturing.",
};

const factorySpecs = [
  {
    title: "Fiber Laser Metal Cutting",
    detail: "High-power fiber laser beds handling stainless steel, mild steel, and architectural brass up to 15mm thickness with ±0.05mm tolerance.",
    tag: "3000 × 1500mm Bed",
  },
  {
    title: "Heavy-Duty CNC Routing",
    detail: "Multi-tool automatic changer routing for solid aluminum, ACP composite panels, acrylics, polyurethane foam, and hardwood substrates.",
    tag: "4000 × 2000mm Bed",
  },
  {
    title: "Automated Channel Letter Benders",
    detail: "Computerized flange and return bending machines for flawless 3D aluminum and stainless steel letters with precision radius contours.",
    tag: "Sub-Millimeter Radius",
  },
  {
    title: "Industrial Spray & Powder Coating",
    detail: "Pressurized, dust-free automotive spray booths and baking ovens delivering resilient polyurethane and fluoropolymer finishes.",
    tag: "UV & Salt-Spray Tested",
  },
  {
    title: "Large-Format Digital Printing",
    detail: "High-resolution UV-curable and latex flatbed printers producing photorealistic visual graphics directly onto rigid and flexible media.",
    tag: "3200mm Seamless Width",
  },
  {
    title: "Certified Structural Rigging Fleet",
    detail: "Dedicated crane trucks, boom lifts, and certified rope-access installation crews licensed for high-rise commercial façades.",
    tag: "UAE-Wide Deployment",
  },
];

const complianceStandards = [
  {
    title: "Dubai Civil Defense (DCD) Compliance",
    desc: "All illuminated systems utilize flame-retardant wiring, low-voltage certified Mean Well power supplies, and fire-resistant internal substrates.",
  },
  {
    title: "UAE Municipality Signage Permits",
    desc: "Complete documentation preparation including structural calculation reports, wind-load assessments, and certified engineering drawings.",
  },
  {
    title: "ISO 9001 Quality Management",
    desc: "Rigorous multi-stage QA checkpoints from raw material inspection and laser cutting to pre-installation bench testing and illumination soak tests.",
  },
  {
    title: "IP67 Weather-Sealed Optics",
    desc: "Signage modules engineered specifically to endure UAE ambient temperatures up to 55°C, high dust concentrations, and coastal humidity.",
  },
];

const lifecycleSteps = [
  {
    num: "01",
    title: "Consultation & Structural Survey",
    desc: "On-site laser measurements, architectural feasibility study, and comprehensive brand guideline alignment.",
  },
  {
    num: "02",
    title: "Engineering & Municipality Permits",
    desc: "Shop drawings, wind-load calculation certification, and full municipal & Civil Defense submission management.",
  },
  {
    num: "03",
    title: "In-House Precision Fabrication",
    desc: "CNC machining, channel letter manufacturing, electrostatic finishing, and 48-hour illumination bench testing.",
  },
  {
    num: "04",
    title: "Certified Turnkey Installation",
    desc: "Rigging by certified safety crews with licensed crane lifts, minimum tenant disruption, and structural handover.",
  },
  {
    num: "05",
    title: "Preventative Maintenance & Warranty",
    desc: "Proactive inspection schedules, rapid response teams, and guaranteed long-term warranties across the UAE.",
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

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-[#F9F8F5] text-[#1A1A18] ${inter.className}`}>
      <Navbar appearance="light" />

      <main id="main-content" className="pt-[4.5rem] sm:pt-[5.5rem]">
        <section
          id="hero"
          className="relative overflow-hidden bg-[#F9F8F5] pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-14 lg:pt-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(26,26,24,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,24,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.82fr_1.38fr] lg:items-center lg:gap-16 lg:px-14">
            <div id="about" className="max-w-[39rem]">
              <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.3em] text-[#F26522] lg:hidden">
                About Leader Gate
              </p>
              <h1 className="text-[clamp(2.8rem,5vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#171715] text-balance">
                Your end-to-end signage <span className="text-[#F26522]">partner</span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-base font-normal leading-relaxed text-[#5E686D] sm:text-lg">
                We design, fabricate, and install signage and branded environments
                that help businesses stand out across the UAE.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="#story"
                  className="group inline-flex min-h-14 items-center gap-8 rounded-full bg-[#F26522] px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#DC5510] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
                >
                  Our story
                  <ArrowRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#projects"
                  className="group inline-flex min-h-12 items-center gap-6 border-b border-[#1A1A18]/50 text-sm font-semibold text-[#1A1A18] transition-colors hover:border-[#F26522] hover:text-[#F26522] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
                >
                  View our work
                  <ArrowRight size={17} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="grid min-h-[20rem] grid-cols-[minmax(0,1fr)_8.75rem] overflow-hidden rounded-[1.35rem] shadow-[0_24px_60px_-34px_rgba(104,55,25,0.45)] sm:min-h-[25rem] sm:grid-cols-[minmax(0,1fr)_12.5rem] lg:min-h-[27rem] lg:grid-cols-[minmax(0,1fr)_14rem]">
              <div className="relative min-w-0">
                <Image
                  src="/images/about/fabrication-laser.jpg"
                  alt="Precision laser cutting at the Leader Gate fabrication facility"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 75vw, 42vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 to-black/15" />
              </div>
              <aside className="flex flex-col justify-between bg-[#F26522] px-5 py-7 text-white sm:px-7 sm:py-9 lg:px-8 lg:py-10">
                <div>
                  <p className="text-[0.625rem] font-semibold uppercase leading-[1.65] tracking-[0.3em] sm:text-xs">
                    Ideas shaped<br />into reality
                  </p>
                  <span className="mt-6 block h-px w-9 bg-white/85" />
                </div>
                <div>
                  <strong className="block text-4xl font-medium tracking-[-0.05em] tabular-nums sm:text-5xl">
                    500+
                  </strong>
                  <p className="mt-3 text-[0.5625rem] font-semibold uppercase leading-[1.6] tracking-[0.24em] sm:text-[0.6875rem]">
                    Projects delivered<br />across the UAE
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="capabilities" className="relative bg-[#F9F8F5] pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
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

        {/* ─────────────────────────────────────────────
            SECTION 1: Ethos & In-House Facility
        ───────────────────────────────────────────── */}
        <section id="story" className="border-t border-[#E3E1DA] bg-[#F9F8F5] py-20 sm:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Left */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A18]/[0.05] text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-[#1A1A18]/70 mb-4">
                  <span>Our Craftsmanship</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.02em] text-[#1A1A18] leading-[1.18]">
                  Where Digital Precision <br />
                  <span className="font-medium">Meets Master Fabrication</span>
                </h2>
                <p className="mt-5 text-base text-[#4A4944] font-light leading-relaxed">
                  In an industry often crowded with middlemen and outsourced
                  assemblies, Leader Gate operates from a fully unified,
                  purpose-built fabrication facility in the UAE.
                </p>
                <p className="mt-3.5 text-sm sm:text-base text-[#6B6A64] font-light leading-relaxed">
                  Every letter, bracket, illumination circuit, and structural weld
                  is executed under one roof. This total operational control allows
                  us to guarantee exact color matching, structural integrity, and
                  strict adherence to demanding project handover deadlines for the
                  nation&apos;s premier institutions.
                </p>

                {/* Pillars Checklist */}
                <div className="mt-8 space-y-3.5">
                  {[
                    "Direct manufacturer pricing with zero third-party markups",
                    "Dedicated project engineers assigned to every contract",
                    "Proactive mockups, material sample boards, and site testing",
                    "Seamless coordination with main contractors and architects",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/10 text-[#F26522] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={14} weight="fill" />
                      </span>
                      <span className="text-sm font-light text-[#2E2E2B]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Double-Bezel Visual Right */}
              <div className="lg:col-span-6">
                <div className="rounded-[2.25rem] p-2 sm:p-2.5 bg-[#EAE8E1]/80 border border-[#DEDBD2] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.06)]">
                  <div className="rounded-[calc(2.25rem-0.625rem)] overflow-hidden bg-[#0A0A09] aspect-[16/11] relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    <Image
                      src="/images/about/fabrication-laser.jpg"
                      alt="Leader Gate precision laser cutting in action"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                      <span className="text-[10px] font-medium tracking-widest uppercase bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                        In-House Production
                      </span>
                      <p className="mt-2 text-sm sm:text-base font-medium">
                        Fiber Laser CNC Metal Processing Facility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 2: Factory & Machinery Specifications
        ───────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#F0EFEA] border-y border-[#E3E1DA]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="max-w-2xl mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A18]/[0.05] text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-[#1A1A18]/70 mb-4">
                <span>Infrastructure & Capacity</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.02em] text-[#1A1A18] leading-[1.18]">
                Industrial Machinery <br />
                <span className="font-medium">& Production Specifications</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#6B6A64] font-light">
                Our plant is engineered to support both high-volume corporate
                nationwide rollouts and bespoke high-concept architectural
                installations with unmatched speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factorySpecs.map((spec) => (
                <div
                  key={spec.title}
                  className="p-6 rounded-2xl bg-white border border-[#E3E1DA] shadow-sm hover:border-[#1A1A18]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#1A1A18]/[0.04] text-[#1A1A18]">
                        {spec.tag}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#F26522] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-base font-medium text-[#1A1A18] mb-2 tracking-tight">
                      {spec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73726C] font-light leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3: Regulatory Compliance & Safety
        ───────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#F9F8F5]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column Graphic */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-[2.25rem] p-2 sm:p-2.5 bg-[#EAE8E1]/80 border border-[#DEDBD2] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.06)]">
                  <div className="rounded-[calc(2.25rem-0.625rem)] overflow-hidden bg-[#0A0A09] aspect-square relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    <Image
                      src="/images/about/fabrication-craftsman.jpg"
                      alt="Artisan wiring electrical LED components for channel letters"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                      <span className="text-[10px] font-medium tracking-widest uppercase bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                        Bench Testing
                      </span>
                      <p className="mt-2 text-sm sm:text-base font-medium">
                        Civil Defense Stamped LED Module Wiring
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Text */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A18]/[0.05] text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-[#1A1A18]/70 mb-4">
                  <span>Safety & Governance</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.02em] text-[#1A1A18] leading-[1.18]">
                  Built to the Most Rigorous <br />
                  <span className="font-medium">UAE Engineering Codes</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#6B6A64] font-light leading-relaxed">
                  Signage across the UAE operates in demanding environmental
                  conditions: extreme summer thermal loads, sand abrasion, and high
                  wind pressure on high-rise structures. We design with zero
                  compromise on safety.
                </p>

                <div className="mt-8 space-y-4">
                  {complianceStandards.map((std) => (
                    <div
                      key={std.title}
                      className="p-4 rounded-xl bg-white border border-[#E8E6DF] shadow-sm"
                    >
                      <h3 className="text-sm font-medium text-[#1A1A18] mb-1">
                        {std.title}
                      </h3>
                      <p className="text-xs text-[#73726C] font-light leading-relaxed">
                        {std.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 4: Turnkey Execution Blueprint
        ───────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#0F0F0D] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
            <div className="max-w-2xl mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-white/70 mb-4">
                <span>The Leader Gate Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.02em] text-white leading-[1.18]">
                From Concept to Handover: <br />
                <span className="font-medium text-white">A Proven 5-Phase Blueprint</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {lifecycleSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:bg-white/[0.07] transition-colors duration-300"
                >
                  <div>
                    <span className="text-2xl font-light text-[#F26522] block mb-3 font-mono">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-medium text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            FINAL CTA: Consultation & Project Initiation
        ───────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-[#F9F8F5] text-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A18]/[0.04] border border-[#1A1A18]/[0.08] text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-[#1A1A18]/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              <span>Partner With Leader Gate</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[#1A1A18] leading-[1.15]">
              Ready to Engineer Your Next <br />
              <span className="font-medium">Brand Landmark?</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#575651] font-light max-w-xl mx-auto leading-relaxed">
              Schedule a technical consultation with our engineering and project
              estimation team to discuss site feasibility, budget, and delivery
              schedules.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3.5 pl-7 pr-3 py-3 rounded-full bg-[#0F0F0D] text-white text-sm font-medium transition-all duration-200 hover:bg-[#1C1C1A] hover:scale-[1.01] active:scale-[0.98] shadow-md group cursor-pointer"
              >
                <span>Request a Technical Consultation</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <ArrowRight size={15} weight="bold" />
                </span>
              </Link>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-black/5 text-[#1A1A18] text-sm font-medium transition-colors cursor-pointer"
              >
                <span>View Our Completed Projects</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
