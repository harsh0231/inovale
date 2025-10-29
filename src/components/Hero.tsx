import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
  animationClass?: string;
}

const Hero = ({ title, subtitle, backgroundImage, children, animationClass = "animate-hero-zoom" }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className={`w-full h-full object-cover ${animationClass}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 animate-hero-pulse" />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-bg opacity-30 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-exo text-5xl md:text-7xl font-bold mb-6 animate-text-slide-fade animate-text-glow uppercase tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-text-slide-fade" style={{ animationDelay: "0.3s" }}>
          {subtitle}
        </p>
        {children && (
          <div className="animate-text-slide-fade" style={{ animationDelay: "0.6s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
