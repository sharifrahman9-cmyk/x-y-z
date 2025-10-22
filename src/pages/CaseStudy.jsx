import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, Target, BarChart2 } from "lucide-react";

const CaseStudy = () => {
  const caseStudyData = {
    title: "SaaS Landing Page",
    description:
      "A comprehensive case study on the development of a high-converting SaaS landing page using React and Tailwind CSS.",
    imageUrl: "/projects/project1.png", // Using the same image as in ProjectsSection
    client: "Innovate Inc.",
    industry: "Software as a Service (SaaS)",
    duration: "3 Weeks",
    summary:
      "The primary goal was to create a visually appealing and highly performant landing page to drive user sign-ups for a new SaaS product. The project involved translating Figma designs into a fully responsive React application, integrating with a Supabase backend for lead capture.",
    challenges: [
      "Pixel-perfect implementation of a complex, modern design.",
      "Ensuring fast load times and a high Google PageSpeed score.",
      "Creating reusable and maintainable React components.",
      "Seamless integration with the backend for the email signup form.",
    ],
    solutions: [
      "Utilized Tailwind CSS for rapid and precise UI development, matching the Figma designs.",
      "Implemented performance optimization techniques such as lazy loading images and code splitting.",
      "Built a modular component library in React for consistency and reusability.",
      "Used React Hook Form for form state management and validation, connected to a Supabase backend via API.",
    ],
    results: [
      "Achieved a 45% increase in user sign-ups in the first month.",
      "Google PageSpeed score improved from 65 to 98.",
      "Reduced bounce rate by 30% due to improved performance and UX.",
    ],
    techStack: ["React", "Tailwind CSS", "Supabase", "Vite", "Figma"],
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <NavLink
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </NavLink>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {caseStudyData.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {caseStudyData.description}
        </p>

        <img
          src={caseStudyData.imageUrl}
          alt="Project Preview"
          className="rounded-xl shadow-lg mb-12 w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div>
            <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
              Client
            </h4>
            <p className="text-lg">{caseStudyData.client}</p>
          </div>
          <div>
            <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
              Industry
            </h4>
            <p className="text-lg">{caseStudyData.industry}</p>
          </div>
          <div>
            <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
              Duration
            </h4>
            <p className="text-lg">{caseStudyData.duration}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mx-auto">
          <h2 className="flex items-center gap-3">
            <Target className="text-primary" /> Project Summary
          </h2>
          <p>{caseStudyData.summary}</p>

          <h2 className="flex items-center gap-3">
            <Zap className="text-primary" /> Challenges
          </h2>
          <ul>
            {caseStudyData.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="flex items-center gap-3">
            <CheckCircle className="text-primary" /> Solutions
          </h2>
          <ul>
            {caseStudyData.solutions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="flex items-center gap-3">
            <BarChart2 className="text-primary" /> Results
          </h2>
          <ul>
            {caseStudyData.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudyData.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
