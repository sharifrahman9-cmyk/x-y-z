import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";

export const Root = () => {
  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden">
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Root;
