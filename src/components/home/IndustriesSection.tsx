const industries = ["Banking & finance", "Retail", "Hospitality", "Real estate", "Government", "Healthcare", "Automotive", "Education", "Corporate spaces"];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#F9F8F5] pb-20 text-[#1A1A18] sm:pb-28 lg:pb-36">
      <div className="homepage-shell">
        <div className="grid gap-7 border-t border-[#DCDDD6] pt-9 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2 className="text-xl font-medium tracking-[-0.035em] sm:text-2xl">Across industries.</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {industries.map((industry) => <li key={industry} className="text-sm leading-relaxed text-[#626760] sm:text-base">{industry}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
