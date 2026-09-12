import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedClientsSection } from "@/components/home/TrustedClientsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CapabilitiesProcessSection } from "@/components/home/CapabilitiesProcessSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProcessMinimalSection } from "@/components/home/ProcessMinimalSection";
import { ServicesGallerySection } from "@/components/home/ServicesGallerySection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

// Homepage: introduction, work, studio, sectors, contact.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Desktop & Tablet: directly below Hero */}
        <TrustedClientsSection variant="desktop-only" />
        <AboutSection />
        <CapabilitiesProcessSection />
        {/* Mobile: placed after Capabilities per user direction */}
        <TrustedClientsSection variant="mobile-only" />
        <ProjectsSection />
        <ServicesGallerySection />
        <ProcessMinimalSection />
        <ExperienceSection />
        <FinalCTASection />
      </main>
      <Footer appearance="light" />
    </>
  );
}
