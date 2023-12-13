import { HeroSection, SkillsSection } from "./components/sections";
import About from "./components/sections/About";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      {/* <SkillsSection /> */}
    </main>
  );
}
