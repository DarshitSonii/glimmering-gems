import heroImg from "@/assets/hero-chain-white.png";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Top marquee */}
      <div className="bg-warm-dark overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
              Premium Gold Chains &nbsp;✦&nbsp; Since 2003 &nbsp;✦&nbsp; Handcrafted Excellence &nbsp;✦&nbsp; 22K Certified &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main hero */}
      <div className="flex-1 grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left - text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-up">
              Est. 2003 — Premium Jewellery
            </p>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Where Tradition
              <br />
              <em className="text-primary">Meets</em> Elegance
            </h1>

            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-10 max-w-md animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              For over two decades, Manmohan Chains has been crafting timeless gold chains
              that celebrate life's most precious moments.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <a
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-warm-gradient text-primary-foreground px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-warm hover:shadow-warm-lg"
              >
                Explore Collections
              </a>
              <a
                href="#heritage"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#heritage")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1"
              >
                Our Heritage
              </a>
            </div>
          </div>
        </div>

        {/* Right - image */}
        <div className="relative overflow-hidden order-1 lg:order-2 min-h-[50vh] lg:min-h-0">
          <img
            src={heroImg}
            alt="Premium gold chain on marble - Manmohan Chains"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay with brand mark */}
          <div className="absolute bottom-8 right-8 bg-background/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-warm hidden md:block">
            <p className="font-serif text-lg text-foreground">Manmohan Chains</p>
            <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">Premium Gold Since 2003</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delay">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
