import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedClientsSection } from "@/components/home/TrustedClientsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyLeaderGateSection } from "@/components/home/WhyLeaderGateSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

/**
 * Leader Gate — Landing Page
 *
 * Assembly only. All logic, styling and content live in individual section components.
 * Refine each section independently in the next phase.
 *
 * Section order:
 * 01 Hero
 * 02 Trusted Clients
 * 03 About
 * 04 Capabilities
 * 05 Projects
 * 06 Industries
 * 07 Why Leader Gate
 * 08 Process
 * 09 Experience / Proof
 * 10 Final CTA
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedClientsSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <IndustriesSection />
        <WhyLeaderGateSection />
        <ProcessSection />
        <ExperienceSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
