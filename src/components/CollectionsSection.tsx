import collectionImg from "@/assets/collection-flat.png";
import heroImg from "@/assets/hero-jewelry.png";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    number: "01",
    name: "Classic Chains",
    desc: "Timeless designs for everyday elegance — refined, subtle, and enduring.",
  },
  {
    number: "02",
    name: "Fancy Chains",
    desc: "Bold patterns and intricate links that make an unforgettable statement.",
  },
  {
    number: "03",
    name: "22K Gold",
    desc: "Premium purity for the discerning collector — crafted to last generations.",
  },
  {
    number: "04",
    name: "Custom Designs",
    desc: "Bespoke creations tailored to your vision — your dream, our craftsmanship.",
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background relative">
      <div className="line-gold mb-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">Curated Selection</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our <em className="text-primary">Collections</em>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted gold chains that blend traditional artistry with modern sophistication.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative rounded-3xl overflow-hidden mb-20 group">
          <img
            src={collectionImg}
            alt="Gold chain collection on linen fabric"
            className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-14">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-3">Featured</p>
            <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-2">Signature Collection</h3>
            <p className="font-sans text-primary-foreground/80 max-w-md">
              Our most beloved designs — each one a masterwork of precision and beauty.
            </p>
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.number}
              className="group border border-warm rounded-2xl p-8 md:p-10 hover:border-primary/40 hover:shadow-warm-lg transition-all duration-500 bg-background cursor-pointer hover-lift"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                  {cat.number}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{cat.name}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary image */}
        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <img
              src={heroImg}
              alt="Premium gold chain close-up"
              className="w-full rounded-2xl shadow-warm object-cover aspect-square"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Crafted for <em className="text-primary">You</em>
            </h3>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're looking for a timeless piece for daily wear or a statement chain for special occasions,
              our collection has something for every taste. Each chain undergoes rigorous quality checks and comes
              with our hallmark purity certification.
            </p>
            <a
              href="https://www.manmohanchains.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-warm-gradient text-primary-foreground px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-warm hover:shadow-warm-lg"
            >
              View All Collections
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
