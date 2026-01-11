const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} Sohum Sachdev. All rights reserved.</p>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span>Built with passion & code</span>
          <span>•</span>
          <a 
            href="https://github.com/sohumsachdev/sohumsachdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            Website Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
