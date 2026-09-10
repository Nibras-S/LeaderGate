import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We define the objective, scope, site conditions, programme, and brand requirements.",
  },
  {
    number: "02",
    title: "Design & plan",
    description:
      "Creative concepts become technical drawings, material choices, and an approved production plan.",
  },
  {
    number: "03",
    title: "Fabricate",
    description:
      "Our team cuts, forms, prints, finishes, assembles, and tests every element in-house.",
  },
  {
    number: "04",
    title: "Install",
    description:
      "Specialist crews coordinate access and complete a safe, accurate installation on site.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We remain available for maintenance, updates, repairs, and future location rollouts.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F3F0E9] py-24 text-[#1A1A18] sm:py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-[#B74716]">
            How we work
          </p>
          <h2 className="max-w-[15ch] text-[clamp(2.65rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.05em] text-[#1A1A18] text-balance">
            Clear from first survey to final handover.
          </h2>
          <p className="mt-6 max-w-[42rem] text-base font-normal leading-relaxed text-[#626760] sm:text-lg">
            One structured workflow keeps design decisions, production, site
            access, and delivery moving together.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`relative border-t border-[#DCDDD6] py-8 sm:min-h-[21rem] sm:px-6 lg:px-7 ${
                index > 0 ? "lg:border-l" : "lg:pl-0"
              }`}
            >
              <span className="block text-5xl font-normal tracking-[-0.06em] text-[#626760] tabular-nums sm:text-6xl">
                {step.number}
              </span>
              <div className="mt-16 sm:mt-20">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1A1A18] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[#626760]">
                  {step.description}
                </p>
              </div>
              <span
                className={`absolute top-[-1px] h-px w-12 bg-[#F26522] ${
                  index === 0 ? "left-0" : "left-0 sm:left-6 lg:left-7"
                }`}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
