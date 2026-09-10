import {
  Bank,
  Buildings,
  Car,
  City,
  FirstAid,
  GraduationCap,
  OfficeChair,
  ShoppingBag,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";

const industries = [
  { label: "Banking & Financial Institutions", icon: Bank },
  { label: "Government & Public Sector", icon: City },
  { label: "Real Estate & Property Developers", icon: Buildings },
  { label: "Retail & Shopping Destinations", icon: ShoppingBag },
  { label: "Hospitality & Tourism", icon: Storefront },
  { label: "Healthcare & Medical Facilities", icon: FirstAid },
  { label: "Automotive Showrooms & Service Centers", icon: Car },
  { label: "Educational Institutions", icon: GraduationCap },
  { label: "Corporate Offices & Business Centers", icon: OfficeChair },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className={`relative overflow-hidden bg-[#F0F2ED] py-24 text-[#1A1A18] sm:py-28 lg:py-36 ${inter.className}`}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-[#B74716]">
            Industries
          </p>
          <h2 className="max-w-[16ch] text-[clamp(2.65rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.05em] text-[#1A1A18] text-balance">
            One production partner. Every kind of place.
          </h2>
          <p className="mt-6 max-w-[42rem] text-base font-normal leading-relaxed text-[#626760] sm:text-lg">
            We adapt materials, visibility, compliance, and installation planning
            to the demands of each environment.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isWide = index === 0 || index === 5 || index === 8;

            return (
              <article
                key={industry.label}
                className={`group flex min-h-44 flex-col justify-between rounded-2xl border border-[#DCDDD6] bg-[#FCFCFA] p-6 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#F26522]/45 hover:bg-[#FFF4EA] motion-reduce:transform-none ${
                  isWide ? "lg:col-span-6" : "lg:col-span-3"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <Icon
                    size={27}
                    weight="light"
                    className="text-[#B74716]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium tabular-nums text-[#626760]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="max-w-[20rem] text-lg font-medium leading-tight tracking-[-0.025em] text-[#1A1A18] sm:text-xl">
                  {industry.label}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
