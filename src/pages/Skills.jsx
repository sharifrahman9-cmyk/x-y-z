import React from "react";
import {
  Cpu,
  Database,
  LayoutDashboard,
  GitBranch,
  BrainCircuit,
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    description:
      "I build responsive and interactive user interfaces with modern JavaScript frameworks.",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "SASS/SCSS",
      "Redux Toolkit",
    ],
  },
  {
    category: "Backend",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    description:
      "I develop robust server-side applications and APIs to power web services.",
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    description:
      "I have experience with both SQL and NoSQL databases for efficient data management.",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    description:
      "I use modern tools and practices to streamline development and deployment workflows.",
    skills: ["Git & GitHub", "Docker", "Vite", "Webpack", "Jest", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((categoryItem, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                {categoryItem.icon}
                <h3 className="text-2xl font-semibold">
                  {categoryItem.category}
                </h3>
              </div>
              <h4 className="text-muted-foreground mb-4 font-medium text-base">
                {categoryItem.description}
              </h4>
              <ul className="flex flex-wrap gap-2 pt-2">
                {categoryItem.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
