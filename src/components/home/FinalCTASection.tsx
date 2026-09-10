import { inter } from "@/lib/fonts";

export function FinalCTASection() {
  return (
    <section id="contact" className={`bg-[#F0EEE7] py-20 text-[#1A1A18] sm:py-28 lg:py-32 ${inter.className}`}>
      <div className="homepage-shell">
        <h2 className="max-w-[16ch] text-[clamp(2.75rem,6.5vw,6rem)] font-medium leading-[1.04] tracking-[-0.055em]">Let’s make your brand visible.</h2>
        <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <a href="mailto:info@leadergate.ae" className="inline-flex min-h-11 items-center border-b border-[#999C94] text-xl tracking-[-0.025em] transition-colors hover:border-[#B74716] hover:text-[#B74716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B74716] sm:text-2xl">info@leadergate.ae</a>
          <a href="mailto:info@leadergate.ae?subject=New%20project%20enquiry" className="inline-flex min-h-14 items-center whitespace-nowrap rounded-full bg-[#C44913] px-8 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-[#A93D0E] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B74716] motion-reduce:transform-none">Start your project</a>
        </div>
      </div>
    </section>
  );
}
