import Image from "next/image";
import { inter } from "@/lib/fonts";

const stats = [
  { number: "500+", label: "Projects delivered" },
  { number: "100+", label: "Corporate clients" },
  { number: "10+", label: "Years in the industry" },
  { number: "7", label: "Emirates covered" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`bg-[#F9F8F5] py-24 text-[#1A1A18] sm:py-28 lg:py-36 ${inter.className}`}
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:items-stretch lg:gap-16 lg:px-14">
        <div className="relative min-h-[28rem] overflow-hidden rounded-2xl bg-[#262620] lg:col-span-7 lg:min-h-[42rem]">
          <Image
            src="/images/about/fabrication-facility.jpg"
            alt="Leader Gate team operating fabrication equipment in the UAE facility"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <p className="max-w-lg text-lg font-medium leading-snug tracking-[-0.025em] text-white sm:text-2xl">
              Every project is planned, produced, checked, and installed by teams
              working to one shared standard.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between lg:col-span-5 lg:py-2">
          <div>
            <h2 className="max-w-[12ch] text-[clamp(2.65rem,4.6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.05em] text-[#1A1A18] text-balance">
              Experience you can measure. Quality you can see.
            </h2>
            <p className="mt-6 max-w-md text-base font-normal leading-relaxed text-[#626760] sm:text-lg">
              Our reputation comes from completed work, repeat clients, and a
              consistent standard from the first drawing to the final fixing.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 border-t border-[#DCDDD6] lg:mt-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`min-h-36 py-6 ${
                  index % 2 === 0 ? "pr-5" : "border-l border-[#DCDDD6] pl-5"
                } ${index > 1 ? "border-t border-[#DCDDD6]" : ""}`}
              >
                <dt className="text-4xl font-medium tracking-[-0.06em] text-[#B74716] tabular-nums sm:text-5xl">
                  {stat.number}
                </dt>
                <dd className="mt-2 max-w-32 text-xs font-medium uppercase leading-relaxed tracking-[0.14em] text-[#626760]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
