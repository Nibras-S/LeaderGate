import React from "react";

const processSteps = [
  {
    step: "01",
    title: "Survey & Consultation",
    desc: "We audit site conditions and architectural parameters before proposing solutions.",
    items: [
      "Site condition audit",
      "Architectural drawings inspection",
      "Local regulatory & code review",
      "Visibility & angle assessment",
    ],
  },
  {
    step: "02",
    title: "Design & Engineering",
    desc: "Creative concepts become verified production blueprints and 3D calculations.",
    items: [
      "Production shop drawings",
      "3D structural calculations",
      "Illumination specifications",
      "Material & finish selection",
    ],
  },
  {
    step: "03",
    title: "In-House Fabrication",
    desc: "Laser cutting, CNC machining, and automated assembly in our UAE facility.",
    items: [
      "Fiber laser & CNC cutting",
      "Computerized channel bending",
      "Electrostatic coating & spray",
      "48-hour LED bench testing",
    ],
  },
  {
    step: "04",
    title: "Installation & Support",
    desc: "Certified rigging crews coordinate turnkey mounting and handover nationwide.",
    items: [
      "Certified rigging & crane lifts",
      "Turnkey multi-site mounting",
      "Civil Defense permit sign-off",
      "Ongoing maintenance & warranty",
    ],
  },
];

export function ProcessMinimalSection() {
  return (
    <section
      id="process"
      className="relative bg-[#F9F8F5] py-10 sm:py-14 lg:py-16 border-t border-[#1A1A18]/10"
      aria-labelledby="process-title"
    >
      <div className="homepage-shell">
        <div className="mb-7 sm:mb-9">
          <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.25em] text-[#B74716]">
            <span className="h-[2px] w-7 bg-[#B74716]" aria-hidden="true" />
            Working Process
          </p>
          <h2
            id="process-title"
            className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[#171715] sm:text-4xl lg:text-5xl leading-[1.08]"
          >
            How We Work
          </h2>
          <p className="mt-3 max-w-none text-base text-[#626760] font-normal leading-relaxed">
            Four disciplined phases. In-house manufacturing. Zero handoffs from concept to turnkey installation across the UAE.
          </p>
          <span className="mt-4 block h-0.5 w-12 bg-[#F26522]" />
        </div>

        <div className="divide-y divide-[#1A1A18]/12 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-7 first:pt-0 lg:block lg:min-h-[14rem] lg:px-9 lg:py-0 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-display text-xs font-bold text-[#F26522] tracking-widest uppercase">
                  STEP {step.step}
                </span>
              </div>
              <h3 className="mt-2 max-w-[13rem] font-display text-lg font-semibold leading-[1.15] tracking-[-0.035em] text-[#171715] sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#7A7972] leading-relaxed">
                {step.desc}
              </p>
              <ul className="space-y-2 border-l border-[#1A1A18]/12 pl-5 text-sm leading-snug text-[#637076] sm:text-base lg:mt-5 lg:border-l-0 lg:pl-0">
                {step.items.map((item) => (
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
  );
}
