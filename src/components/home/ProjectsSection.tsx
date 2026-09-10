import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
      className={`relative overflow-hidden bg-[#F9F8F5] py-20 text-[#1A1A18] sm:py-24 lg:py-32 ${inter.className}`}
    >
      <div className="relative homepage-shell">
        {/* Subtle top divider line matching reference */}
        <div className="mb-10 w-full border-t border-[#E5E3DC] sm:mb-14" />

        {/* Section Header: Eyebrow + 2-column layout */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow: — SELECTED WORK */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B74716]">
            <span className="h-[2px] w-7 bg-[#B74716]" aria-hidden="true" />
            <span>Selected Work</span>
          </div>

          {/* Headline & Description Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 lg:items-end">
            {/* Left: Two-Tone Heading */}
            <div className="lg:col-span-7 xl:col-span-8">
              <h2 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.05] tracking-[-0.04em]">
                <span className="block font-bold text-[#1A1A18]">
                  Built to be seen.
                </span>
                <span className="block font-normal text-[#626760]">
                  Made to be remembered.
                </span>
              </h2>
            </div>

            {/* Right: Description & Link */}
            <div className="lg:col-span-5 xl:col-span-4 lg:pb-1">
              <p className="text-sm sm:text-base text-[#626760] font-normal leading-relaxed max-w-lg">
                Across retail, finance, hospitality, automotive, and real estate, each project turns a brand into a physical place people recognize.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="#project-grid"
                  className="group text-xs sm:text-sm font-semibold text-[#1A1A18] hover:text-[#B74716] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore all projects</span>
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          id="project-grid"
          className="grid scroll-mt-24 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              tabIndex={0}
              className="group relative flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26522]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#E8E6DF]">
                <Image
                  src={project.image}
                  alt={`Leader Gate ${project.client} signage project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1600px) 33vw, 500px"
                />
              </div>
              <div className="pt-3 sm:pt-3.5">
                <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-[-0.02em] text-[#1A1A18] transition-colors duration-200 group-hover:text-[var(--color-orange)]">
                  {project.client}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-normal text-[#626760]">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
