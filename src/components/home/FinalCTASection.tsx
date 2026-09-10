import Image from "next/image";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { inter } from "@/lib/fonts";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-[#F3F0E9] py-24 text-[#1A1A18] sm:py-28 lg:py-36 ${inter.className}`}
    >
      <Image
        src="/images/about/fabrication-cad.jpg"
        alt="Leader Gate production planning and technical design"
        fill
        className="object-cover opacity-10"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3F0E9] via-[#F3F0E9]/95 to-[#F3F0E9]/60" />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-14">
        <div className="lg:col-span-7">
          <h2 className="max-w-[11ch] text-[clamp(3rem,6vw,6.25rem)] font-medium leading-[0.91] tracking-[-0.06em] text-[#1A1A18] text-balance">
            Bring us the brief. We&apos;ll build the rest.
          </h2>
          <p className="mt-7 max-w-[38rem] text-base font-normal leading-relaxed text-[#626760] sm:text-lg">
            Share your site, timeline, and objectives. Our team will respond with
            the right next step for design, production, or installation.
          </p>
        </div>

        <aside className="rounded-2xl bg-[#C44913] p-7 text-white sm:p-9 lg:col-span-5 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            Project enquiries
          </p>
          <a
            href="mailto:info@leadergate.ae?subject=New%20project%20enquiry"
            className="group mt-7 flex items-center justify-between gap-5 border-b border-white/35 pb-6 text-xl font-medium tracking-[-0.03em] text-white transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-2xl"
          >
            <span className="break-all">info@leadergate.ae</span>
            <ArrowUpRight
              size={23}
              weight="bold"
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="tel:+97142958899"
            className="group mt-6 flex min-h-14 w-full items-center justify-between gap-5 rounded-full bg-[#171715] px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#292925] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="flex items-center gap-3">
              <Phone size={18} weight="bold" />
              Speak with our team
            </span>
            <span className="hidden text-white/55 sm:inline">+971 4 295 8899</span>
          </a>

          <p className="mt-7 text-sm leading-relaxed text-white/90">
            Serving projects across all seven Emirates from our UAE production
            facility.
          </p>
        </aside>
      </div>
    </section>
  );
}
