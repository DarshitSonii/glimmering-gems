import { Gem, Award, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "Only the finest ethically sourced gold and precious metals in every piece.",
  },
  {
    icon: Award,
    title: "Master Artisans",
    desc: "Decades of expertise in traditional goldsmithing techniques passed through generations.",
  },
  {
    icon: Shield,
    title: "Hallmark Certified",
    desc: "Every creation comes with authenticity certification and purity guarantee.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "Custom designs and personalized consultations for your dream jewellery.",
  },
];

const CraftSection = () => {
  return (
    <section id="craft" className="py-24 md:py-32 bg-warm-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            The Manmohan <em className="text-primary">Promise</em>
          </h2>
          <p className="font-sans text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            Every chain we create carries our promise of excellence, authenticity, and timeless beauty.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 border border-primary-foreground/10 hover:border-primary/30 bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-warm-gradient flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform duration-300">
                <v.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-3">{v.title}</h3>
              <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial-style quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="w-12 h-[2px] bg-warm-gradient mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground/80 italic leading-relaxed mb-6">
            "Jewellery is more than an accessory — it's a legacy, a memory, and a statement of individuality that transcends time."
          </blockquote>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary">— Manmohan Chains</p>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
