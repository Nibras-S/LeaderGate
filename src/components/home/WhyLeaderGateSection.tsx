import {
  ArrowsClockwise,
  Buildings,
  Cpu,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";

const reasons = [
  {
    icon: Wrench,
    title: "Precision manufacturing",
    description:
      "Controlled production, accurate detailing, and durable finishes across every fabricated element.",
  },
  {
    icon: Cpu,
    title: "Technology in-house",
    description:
      "CNC cutting, laser processing, digital printing, and specialist fabrication managed under one roof.",
  },
  {
    icon: ArrowsClockwise,
    title: "One accountable team",
    description:
      "Consultation, drawings, production, installation, and support coordinated through one project lead.",
  },
  {
    icon: Buildings,
    title: "Built around your site",
    description:
      "Materials and installation methods selected for the building, audience, climate, and operating hours.",
  },
];

export function WhyLeaderGateSection() {
  return (
    <section
      id="why-us"
      className={`bg-[#1B1B17] py-24 text-white sm:py-28 lg:py-36 ${inter.className}`}
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-5">
          <h2 className="max-w-[11ch] text-[clamp(2.65rem,4.6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.05em] text-white text-balance">
            Less handoff. More control.
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/58 sm:text-lg">
            The people who plan the work stay close to the people who make and
            install it. That keeps decisions clear and quality consistent.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <strong className="text-5xl font-medium tracking-[-0.06em] text-[#F26522] tabular-nums sm:text-6xl">
              100%
            </strong>
            <span className="max-w-28 text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/45">
              In-house project ownership
            </span>
          </div>
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group border-t border-white/15 py-7 sm:min-h-64 sm:py-8"
              >
                <Icon
                  size={30}
                  weight="light"
                  className="text-[#F26522] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none"
                  aria-hidden="true"
                />
                <h3 className="mt-8 text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/55 sm:text-base">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
