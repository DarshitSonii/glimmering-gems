import heroImage from "@/assets/hero-jewelry.png";

const collections = [
  { name: "Classic Chains", description: "Timeless designs for everyday elegance" },
  { name: "Fancy Chains", description: "Bold patterns that make a statement" },
  { name: "22K Gold", description: "Premium purity for discerning collectors" },
  { name: "Custom Designs", description: "Bespoke creations tailored to you" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="relative py-24 md:py-32 bg-dark-gradient">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Curated Selection</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Hero showcase */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <img
            src={heroImage}
            alt="Premium gold chain collection"
            className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Exquisite Gold Chains
            </h3>
            <p className="font-body text-lg text-foreground/80 max-w-lg">
              Discover our signature collection of handcrafted gold chains, each piece a masterwork of precision and beauty.
            </p>
          </div>
        </div>

        {/* Collection cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <div
              key={col.name}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:glow-gold transition-all duration-300">
                <span className="text-primary font-display text-xl font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{col.name}</h3>
              <p className="font-body text-muted-foreground">{col.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.manmohanchains.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-gradient text-primary-foreground px-10 py-4 rounded-full font-body text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 shadow-gold hover:shadow-gold-lg"
          >
            View All Collections
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default CollectionsSection;
