import Image from "next/image";
import Link from "next/link";
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
      className={`relative overflow-hidden bg-[#F9F8F5] py-24 text-[#1A1A18] sm:py-28 lg:py-36 ${inter.className}`}
    >

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-8 border-t border-[#DCDDD6] pt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-[#B74716]">
              <span className="h-px w-9 bg-[#F26522]" />
              Selected work
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.8rem,5vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#1A1A18] text-balance">
              Built to be seen.
              <span className="block font-normal text-[#626760]">
                Made to be remembered.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-[34rem] text-base font-normal leading-relaxed text-[#626760] sm:text-lg">
              Across retail, finance, hospitality, automotive, and real estate,
              each project turns a brand into a physical place people recognize.
            </p>
            <Link
              href="#project-grid"
              className="mt-7 inline-flex min-h-12 items-center border-b border-[#DCDDD6] text-sm font-semibold text-[#1A1A18] transition-colors duration-200 hover:border-[#F26522] hover:text-[#B74716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
            >
              Explore all projects
            </Link>
          </div>
        </div>

        <div
          id="project-grid"
          className="mt-14 grid scroll-mt-24 gap-3 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:auto-rows-[26rem] xl:auto-rows-[29rem]"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              tabIndex={0}
              className="group relative isolate min-h-[25rem] overflow-hidden rounded-2xl bg-[#252521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522] md:min-h-[28rem] lg:min-h-0"
            >
              <Image
                src={project.image}
                alt={`Leader Gate ${project.client} signage project`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5 transition-colors duration-500 lg:from-black/80 lg:via-black/5 group-hover:from-black/95 group-hover:via-black/45 group-focus-visible:from-black/95 group-focus-visible:via-black/45" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                <div className="relative">
                  <div className="border-t border-white/25 pt-4 lg:transition-transform lg:duration-300 lg:ease-out lg:group-hover:-translate-y-28 lg:group-focus-visible:-translate-y-28 motion-reduce:transition-none">
                    <p className="mb-1 text-xs font-medium text-white/55">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                      {project.client}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-[52ch] text-sm font-light leading-relaxed text-white/75 lg:invisible lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:translate-y-3 lg:opacity-0 lg:transition-[opacity,transform,visibility] lg:duration-300 lg:ease-out lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:visible lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#DCDDD6] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[#626760]">
            Have a site, rollout, or signage package in mind? Bring us the brief;
            our team will take it from survey to installation.
          </p>
          <Link
            href="#contact"
            className="inline-flex min-h-14 w-fit items-center rounded-full bg-[#C44913] px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#DC5510] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
}
