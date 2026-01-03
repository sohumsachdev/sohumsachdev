const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} Sohum Sachdev. All rights reserved.</p>
        <p className="font-mono text-xs">Built with passion & code</p>
      </div>
    </footer>
  );
};

export default Footer;
