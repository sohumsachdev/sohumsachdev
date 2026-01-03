import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Technical",
    skills: ["MATLAB", "Python", "HTML/CSS/JS", "CAD", "Ansys Simulations", "FDTD", "Solar Circuits"],
  },
  {
    title: "Certifications",
    skills: ["CPR/AED (American Red Cross)", "FEMA CERT", "AEOP GEMS", "U.S. Naval Academy STEM"],
  },
  {
    title: "Awards",
    skills: [
      "Presidential Volunteer Service Award (Silver)",
      "Optimist International Essay (Bronze)",
      "National Latin Exam (2x Silver)",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-mono text-sm tracking-wide uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Skills & Awards
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-card border-border/50 text-foreground hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
