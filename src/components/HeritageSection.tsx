import craftImg from "@/assets/craft-detail.png";

const stats = [
  { number: "20+", label: "Years of Excellence" },
  { number: "10K+", label: "Happy Customers" },
  { number: "500+", label: "Unique Designs" },
  { number: "100%", label: "Certified Purity" },
];

const HeritageSection = () => {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="line-gold mb-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">Our Heritage</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15]">
              A Legacy of
              <br />
              <em className="text-primary">Fine</em> Craftsmanship
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Established in 2003, Manmohan Chains has been the epitome of excellence in fine jewellery craftsmanship.
              Our philosophy is simple: combine traditional artistry with contemporary design to create jewellery that
              tells your unique story.
            </p>
          </div>
        </div>

        {/* Image + text split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/15 rounded-3xl" />
            <img
              src={craftImg}
              alt="Master artisan crafting gold chain"
              className="relative w-full rounded-3xl shadow-warm-lg object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-foreground">Every Link Tells a Story</h3>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                Each piece is meticulously handcrafted by our master artisans who pour their passion and expertise
                into every creation. We believe that jewellery is more than an accessory — it's a legacy, a memory,
                and a statement of individuality that transcends time.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                Only the finest materials including ethically sourced precious metals and high-quality gold are used.
                All our jewellery comes with authenticity certification and hallmark purity guarantee.
              </p>
            </div>

            {/* Signature detail */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-[2px] bg-warm-gradient" />
              <p className="font-serif text-xl italic text-primary">Manmohan Chains</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-10 px-6 bg-background rounded-2xl border border-warm shadow-warm hover-lift"
            >
              <p className="font-serif text-4xl md:text-5xl text-primary mb-2">{s.number}</p>
              <p className="font-sans text-sm text-muted-foreground tracking-[0.1em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
