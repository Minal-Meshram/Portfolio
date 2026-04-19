import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import SkillSection from "../component/SkillSection";
import ProjectSection from "../component/ProjectSection";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";
import ExperienceSection from "@/component/ExperienceSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;