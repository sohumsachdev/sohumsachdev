import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollAnimationWrapper>
          <p className="text-primary font-mono text-sm tracking-wide uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing research opportunities, projects, or just having a conversation
            about technology and science.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            <span>Millersville, Maryland</span>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:sohumvedant@gmail.com">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/sohumsachdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/sohumsachdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a
              href="/Sohum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Contact;
