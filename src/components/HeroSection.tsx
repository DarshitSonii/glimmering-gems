import heroImage from "@/assets/hero-jewelry.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium gold chain jewelry by Manmohan Chains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-gold-pulse"
        style={{ background: "radial-gradient(circle, hsl(43 74% 52% / 0.08) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-primary font-body text-lg md:text-xl tracking-[0.3em] uppercase mb-6 animate-reveal-up">
          Since 2003
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gold-gradient">Manmohan</span>
          <br />
          <span className="text-foreground">Chains</span>
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto tracking-wide animate-reveal-up"
          style={{ animationDelay: "0.4s" }}
        >
          Where Tradition Meets Elegance
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-full font-body text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 shadow-gold hover:shadow-gold-lg"
          >
            Explore Collections
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-primary/40 text-primary px-10 py-4 rounded-full font-body text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
