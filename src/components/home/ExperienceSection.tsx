import Image from "next/image";

const stats = [
  { number: "500+", label: "Projects delivered" },
  { number: "10+", label: "Years of experience" },
  { number: "7", label: "Emirates served" },
];

const industries = [
  "Banking & finance",
  "Retail",
  "Hospitality",
  "Real estate",
  "Government",
  "Healthcare",
  "Automotive",
  "Education",
  "Corporate spaces",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#F9F8F5] text-[#1A1A18] border-t border-[#E5E3DC] py-12 sm:py-16 lg:py-20"
    >
      <div className="homepage-shell">
        {/* ── MOBILE ONLY: Title & Narrative First for Immediate Context ── */}
        <div className="lg:hidden mb-6">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F26522] mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
            Experience & Reach
          </p>
          <h2 className="font-display text-2xl font-semibold leading-[1.14] tracking-[-0.035em] sm:text-3xl text-[#171715] text-balance">
            One team. <br className="hidden sm:inline" />
            From drawing to installation.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#626760]">
            We design, fabricate, and install signage in-house. Every detail stays with the people who bring it to life.
          </p>
        </div>

        {/* ── MAIN 2-COLUMN GRID (Side-by-Side on Desktop) ── */}
        <div
          id="why-us"
          className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20"
        >
          {/* Left Column: Workshop Facility Image */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#1A1A18]/10 bg-[#E3E1DA] shadow-sm self-stretch min-h-[260px] sm:min-h-[300px]">
            <Image
              src="/images/about/fabrication-facility.jpg"
              alt="Fabrication equipment at the Leader Gate workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Title (Desktop) + Stats + Across Industries */}
          <div className="flex flex-col justify-center">
            {/* Desktop-only Title & Narrative */}
            <div className="hidden lg:block">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F26522] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F26522]" />
                Experience & Reach
              </p>

              <h2 className="font-display max-w-[18ch] text-2xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[2.35rem] text-balance text-[#171715]">
                One team. <br className="hidden sm:inline" />
                From drawing to installation.
              </h2>

              <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-[#626760]">
                We design, fabricate, and install signage in-house. Every detail stays with the people who bring it to life.
              </p>
            </div>

            {/* 3 Stats Columns */}
            <dl className="mt-6 lg:mt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-[#DCDDD6] pt-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-[#171715] tabular-nums">
                    {stat.number}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-[#626760]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Across Industries */}
            <div id="industries" className="mt-6 border-t border-[#DCDDD6] pt-5">
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#171715] mb-3">
                Across industries
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 list-none p-0 m-0">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className="text-xs sm:text-sm leading-normal text-[#626760]"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
