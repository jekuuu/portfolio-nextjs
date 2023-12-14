import { HeroSection, SkillsSection } from "./components/sections";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      {/* <SkillsSection /> */}
      <Experience />
    </main>
  );
}
