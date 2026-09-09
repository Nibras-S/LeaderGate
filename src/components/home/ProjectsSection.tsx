import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";

const projects = [
  {
    id: "al-masraf",
    image: "/images/projects/al-masraf.png",
    client: "Al Masraf",
    category: "Banking & Corporate",
    description:
      "Corporate headquarters and branch branding solutions featuring illuminated building signage, wayfinding systems, customer guidance elements, and interior brand applications.",
  },
  {
    id: "al-madina",
    image: "/images/projects/al-madina.png",
    client: "Al Madina Hypermarket",
    category: "Retail",
    description:
      "Large-format retail signage and façade branding designed to maximize visibility, strengthen brand presence, and create a welcoming customer experience.",
  },
  {
    id: "jaecoo",
    image: "/images/projects/jaecoo.png",
    client: "JAECOO & DONGFENG Showroom",
    category: "Automotive",
    description:
      "Premium automotive dealership branding featuring illuminated façade signage, showroom branding, and customer-focused automotive retail environments.",
  },
  {
    id: "sobha",
    image: "/images/projects/sobha.png",
    client: "SOBHA Realty",
    category: "Real Estate",
    description:
      "High-impact branding and illuminated signage solutions supporting luxury real estate developments and premium property destinations.",
  },
  {
    id: "dominos",
    image: "/images/projects/dominos.png",
    client: "Domino's Pizza",
    category: "F&B Retail",
    description:
      "Retail storefront branding and illuminated signage solutions designed to enhance brand recognition and customer engagement.",
  },
  {
    id: "chums",
    image: "/images/projects/chums.png",
    client: "CHUMS Café",
    category: "Hospitality",
    description:
      "Custom hospitality signage and branding solutions that combine craftsmanship, visibility, and inviting customer experiences.",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className={`relative overflow-hidden bg-[#11110F] py-24 text-white sm:py-28 lg:py-36 ${inter.className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:5rem_100%]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-[#F26522]">
              <span className="h-px w-9 bg-[#F26522]" />
              Selected work
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.8rem,5vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.055em] text-white text-balance">
              Built to be seen.
              <span className="block font-light text-white/55">
                Made to be remembered.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-[34rem] text-base font-light leading-relaxed text-white/65 sm:text-lg">
              Across retail, finance, hospitality, automotive, and real estate,
              each project turns a brand into a physical place people recognize.
            </p>
            <Link
              href="#project-grid"
              className="group mt-7 inline-flex min-h-12 items-center gap-7 border-b border-white/35 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#F26522] hover:text-[#F26522] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
            >
              Explore all projects
              <ArrowDownRight
                size={18}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div
          id="project-grid"
          className="mt-14 grid scroll-mt-24 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:auto-rows-[18.5rem]"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative isolate min-h-[23rem] overflow-hidden rounded-2xl bg-[#252521] sm:min-h-[26rem] lg:min-h-0 ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-7 lg:row-span-2"
                  : index < 3
                    ? "lg:col-span-5"
                    : "lg:col-span-4"
              }`}
            >
              <Image
                src={project.image}
                alt={`Leader Gate ${project.client} signage project`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transform-none motion-reduce:transition-none"
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 58vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10 transition-colors duration-500 group-hover:from-black/95" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <div className="flex items-end justify-between gap-5 border-t border-white/25 pt-4">
                  <div>
                    <p className="mb-1 text-xs font-medium text-white/55">
                      {project.category}
                    </p>
                    <h3 className={`font-medium leading-tight tracking-[-0.035em] text-white ${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {project.client}
                    </h3>
                    {index === 0 && (
                      <p className="mt-3 hidden max-w-xl text-sm font-light leading-relaxed text-white/65 sm:block">
                        {project.description}
                      </p>
                    )}
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-[background-color,color,transform] duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#F26522]">
                    <ArrowUpRight size={17} weight="bold" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/50">
            Have a site, rollout, or signage package in mind? Bring us the brief;
            our team will take it from survey to installation.
          </p>
          <Link
            href="#contact"
            className="group inline-flex min-h-14 w-fit items-center gap-8 rounded-full bg-[#F26522] px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#DC5510] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
          >
            Start your project
            <ArrowUpRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
