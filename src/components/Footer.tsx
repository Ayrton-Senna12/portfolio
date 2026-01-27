import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-primary fill-primary" />
          <span>by Emre Eroğlu</span>
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
