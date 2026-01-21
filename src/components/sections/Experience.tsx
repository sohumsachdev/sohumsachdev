import { Microscope, Heart, Shield, TreesIcon } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

interface Experience {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Research Intern",
    organization: "Johns Hopkins University",
    role: "NanoEnergy Lab • AEOP Program",
    period: "Summer 2025",
    description: [
      "Performed experimental lab work & FDTD computational simulations",
      "Investigated gold plasmonics for detecting magnetic states in 2D materials",
      "Explored plasmonic applications for solar cell efficiency",
    ],
    icon: <Microscope className="h-5 w-5" />,
  },
  {
    title: "Member → President",
    organization: "Medical Studies Club",
    role: "60+ Members",
    period: "2024 – Present",
    description: [
      "Lead meetings, workshops, and certifications for students",
      "Organized doctor visits and hands-on skills sessions (suturing, CPR)",
      "Moderated school-wide seminar on sports injury prevention",
    ],
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Member → President",
    organization: "Cyber Team",
    role: "CyberPatriot National Semi-Finalists",
    period: "2022 – Present",
    description: [
      "Helped lead team to CyberPatriot national semi-finals",
      "Helped lead Cyber Team's TI Codes contest entry, reaching top 10 internationally",
      "Plan meetings and coordinate national/international competitions",
    ],
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "ASPL → Quartermaster",
    organization: "Scouts of America",
    role: "Eagle Scout Candidate",
    period: "2020 – Present",
    description: [
      "Lead weekly meetings and plan monthly outings",
      "Mentor younger Scouts in leadership and outdoor skills",
      "Building solar charging station for local park",
    ],
    icon: <TreesIcon className="h-5 w-5" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wide uppercase mb-3">
              Leadership & Research
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Experience
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper key={exp.title + exp.organization} delay={index * 100}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          {exp.icon}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h3 className="font-semibold text-foreground">{exp.title}</h3>
                            <span className="text-xs font-mono text-muted-foreground">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-primary">{exp.organization}</p>
                          <p className="text-xs text-muted-foreground">{exp.role}</p>
                          <ul className="space-y-1 mt-3">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-primary">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
