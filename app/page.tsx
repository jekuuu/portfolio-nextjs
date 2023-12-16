import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  SkillsSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
