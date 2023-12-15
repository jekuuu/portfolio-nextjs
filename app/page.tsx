import { HeroSection, SkillsSection } from "./components/sections";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <About />
      <SkillsSection />
      <Experience />
    </main>
  );
}
