import { AboutSection } from "../components/AboutSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
