import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-3xl text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="text-primary font-mono text-sm tracking-wide uppercase">
            Student • Researcher • Builder
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-foreground tracking-tight">
            Sohum Sachdev
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            High school student passionate about research, engineering, and building tools that help people.
            Currently exploring plasmonics at Johns Hopkins University.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/sohumsachdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/sohumsachdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:sohumvedant@gmail.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
