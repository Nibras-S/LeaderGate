import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedClientsSection } from "@/components/home/TrustedClientsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

// Homepage: introduction, work, studio, sectors, contact.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedClientsSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <IndustriesSection />
        <FinalCTASection />
      </main>
      <Footer appearance="light" />
    </>
  );
}
