import { Badge } from "@/components/ui/badge";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

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
    title: "STEM Awards",
    skills: [
      "CPR/AED (American Red Cross)",
      "FEMA's CERT (Emergency Preparedness)",
      "AEOP GEMS Summer Program",
      "U.S. Naval Academy Summer STEM",
    ],
  },
  {
    title: "Other Awards",
    skills: [
      "Presidential Volunteer Service Award (Silver)",
      "Optimist International Essay (Bronze)",
      "National Latin Exam (2x Silver)",
      "MD VFW Buddy Poppy Contest (3rd in Group)",
    ],
  },
  {
    title: "Interests",
    skills: [
      "Engineering Projects",
      "Medicine & Technology",
      "Cooking & Baking",
      "Backpacking",
      "Music",
      "Investment",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wide uppercase mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Skills, Awards & Interests
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper key={category.title} delay={index * 100}>
              <div>
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
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
