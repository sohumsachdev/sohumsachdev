import { ExternalLink, Download, Calculator, Cpu, Sun, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  link?: string;
  isDownload?: boolean;
  highlight?: string;
}

const projects: Project[] = [
  {
    title: "GPA Calculators",
    description:
      "Built three GPA calculators for different schools. The Severn Upper School calculator has gained 738+ active users and has become an essential tool for students planning their coursework. It brings me joy knowing it helps people. The Severn School calculator is attached.",
    icon: <Calculator className="h-6 w-6" />,
    tags: ["HTML/CSS/JS", "Frontend", "Analytics"],
    link: "https://severngpacalc.netlify.app/",
    highlight: "738+ active users",
  },
  {
    title: "Raman Spectroscopy Research",
    description:
      "As a JHU NanoEnergy Lab AEOP intern, investigated leveraging gold plasmonics to detect magnetic states in 2D materials. Abstract to be published in AEOP research journal. Gained hands-on lab skills including working with a Schlenk Line.",
    icon: <Award className="h-6 w-6" />,
    tags: ["MATLAB", "FDTD Simulations", "Research", "Lab Safety", "Schlenk Line"],
    link: "/Sohum_Research_Presentation.pdf",
    highlight: "Johns Hopkins University",
  },
  {
    title: "Solar Phone Charging Station",
    description:
      "Eagle Scout project: Designing and building a pole-mounted, solar-powered phone charging station for Kinder Farm Park. Features 100W panel, LifePO4 battery, and weatherproof electronics.",
    icon: <Sun className="h-6 w-6" />,
    tags: ["Solar Circuits", "CAD", "Engineering"],
    highlight: "Eagle Scout Project",
  },
  {
    title: "TI Codes Rover",
    description:
      "Helped lead Cyber Team's TI Codes contest entry. Our printer-to-classroom delivery rover was selected as one of 10 international finalists, earning funding for project completion.",
    icon: <Cpu className="h-6 w-6" />,
    tags: ["Robotics", "Python", "Leadership"],
    highlight: "Top 10 Finalist",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-wide uppercase mb-3">
              What I've Built
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Featured Projects
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={project.title} delay={index * 100}>
              <Card className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={project.isDownload}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={project.isDownload ? `Download ${project.title}` : `View ${project.title}`}
                      >
                        {project.isDownload ? (
                          <Download className="h-4 w-4" />
                        ) : (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mt-4">
                    {project.title}
                  </CardTitle>
                  {project.highlight && (
                    <Badge variant="secondary" className="w-fit text-xs">
                      {project.highlight}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
