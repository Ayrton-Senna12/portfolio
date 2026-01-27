import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Profile Photo */}
        <div className="mb-8 fade-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                {/* Replace src with your photo */}
                <img 
                  src="/20250602_133055.jpg"
                  alt="Emre Eroğlu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
          </div>
        </div>

        {/* Terminal-style greeting */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 fade-up fade-up-delay-1">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <code className="font-mono text-sm text-muted-foreground ml-2">
            ~/portfolio <span className="text-primary">$</span> whoami
          </code>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-up fade-up-delay-2">
          Hi, I'm <span className="gradient-text">Emre Eroğlu</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 fade-up fade-up-delay-3">
          Full-Stack Developer & AI Engineer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 fade-up fade-up-delay-4">
          I craft elegant solutions to complex problems, building scalable applications 
          with modern technologies. Passionate about clean code and great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 fade-up fade-up-delay-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-medium">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              View Projects
            </Button>
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center fade-up fade-up-delay-4">
          <a 
            href="https://github.com/Ayrton-Senna12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/emre-eroglu1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:emre2135samet@gmail.com"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
