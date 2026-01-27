import { Code2, Coffee, Rocket, Terminal } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Terminal,
      title: "2+ Years",
      description: "Professional Experience"
    },
    {
      icon: Code2,
      title: "10+ Projects",
      description: "Delivered Successfully"
    },
    {
      icon: Coffee,
      title: "∞ Coffee",
      description: "Cups Consumed"
    },
    {
      icon: Rocket,
      title: "Always",
      description: "Learning New Tech"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="code-highlight mb-4 inline-block">{'<About />'}</code>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A bit about <span className="gradient-text">me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning ideas into reality, one line of code at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a software engineering student with a strong passion for building meaningful 
            and well-structured digital products. I have hands-on experience across 
            both frontend and backend development, and I enjoy turning complex problems into clean, efficient, 
            and user-friendly solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
            My main interests include backend systems, artificial intelligence, and data-driven applications.
            I'm constantly learning new technologies, improving my problem-solving skills, 
            and working on projects that push my technical limits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge through 
              technical writing and mentoring.
            </p>
            
            {/* Code snippet style */}
            <div className="glass-card p-4 font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-accent">const</span>{" "}
                <span className="text-primary">developer</span> = {"{"}
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-primary">name</span>:{" "}
                <span className="text-green-400">"Emre Eroğlu"</span>,
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-primary">role</span>:{" "}
                <span className="text-green-400">"Full-Stack Developer"</span>,
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-primary">passions</span>:{" "}
                <span className="text-yellow-400">[</span>
                <span className="text-green-400">"Clean Code"</span>,{" "}
                <span className="text-green-400">"UX"</span>,{" "}
                <span className="text-green-400">"Innovation"</span>
                <span className="text-yellow-400">]</span>
              </div>
              <div className="text-muted-foreground">{"}"}</div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-lift hover:border-primary/30 transition-colors"
              >
                <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
