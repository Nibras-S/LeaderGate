import { CtaButton } from "@/components/ui/CtaButton";

export function FinalCTASection() {
  return (
    <section id="contact" className="bg-[#F9F8F5] py-12 text-[#1A1A18] sm:py-16 lg:py-20 border-t border-[#E5E3DC]">
      <div className="homepage-shell">
        <h2 className="max-w-[16ch] text-[clamp(2.75rem,6.5vw,6rem)] font-medium leading-[1.04] tracking-[-0.055em]">Let’s make your brand visible.</h2>
        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <a href="mailto:info@leadergate.ae" className="inline-flex min-h-11 items-center border-b border-[#999C94] text-xl tracking-[-0.025em] transition-colors hover:border-[#B74716] hover:text-[#B74716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B74716] sm:text-2xl">info@leadergate.ae</a>
          <CtaButton
            href="mailto:info@leadergate.ae?subject=New%20project%20enquiry"
            variant="dark"
          >
            Start your project
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
