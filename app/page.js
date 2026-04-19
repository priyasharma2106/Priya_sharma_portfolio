import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HackathonsAndAchievements from "./components/homepage/hackathons-achievements";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <HackathonsAndAchievements />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
};