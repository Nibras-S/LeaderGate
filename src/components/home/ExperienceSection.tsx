import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Projects delivered" },
  { number: "10+", label: "Years of experience" },
  { number: "7", label: "Emirates served" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#F9F8F5] pb-20 pt-4 text-[#1A1A18] sm:pb-28 lg:pb-36">
      <div className="homepage-shell">
        <div id="why-us" className="grid scroll-mt-24 items-center gap-10 border-t border-[#DCDDD6] pt-16 lg:grid-cols-2 lg:gap-20 lg:pt-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E3E1DA]">
            <Image src="/images/about/fabrication-facility.jpg" alt="Fabrication equipment at the Leader Gate workshop" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="max-w-[18ch] text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]">One team. From drawing to installation.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#626760] sm:text-lg">We design, fabricate, and install signage in-house. Every detail stays with the people who bring it to life.</p>
            <Link href="/about#story" className="mt-7 inline-flex min-h-11 items-center border-b border-[#999C94] text-sm font-medium transition-colors hover:border-[#B74716] hover:text-[#B74716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B74716]">Inside Leader Gate</Link>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-[#DCDDD6] pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-medium tracking-[-0.05em] tabular-nums sm:text-4xl">{stat.number}</dt>
                  <dd className="mt-2 max-w-28 text-xs leading-relaxed text-[#626760] sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
