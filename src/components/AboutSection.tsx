import aboutImage from "@/assets/about-craft.png";
import { Award, Gem, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Finest ethically sourced materials and high-quality metals for every piece",
  },
  {
    icon: Award,
    title: "Master Crafted",
    description: "Meticulously handcrafted by artisans using traditional goldsmithing techniques",
  },
  {
    icon: Shield,
    title: "Certified Purity",
    description: "Every piece comes with authenticity certification and hallmark guarantee",
  },
  {
    icon: Heart,
    title: "Personalized",
    description: "Custom designs and consultations to bring your dream jewelry to life",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-gradient-reverse">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Legacy</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6">
            About Manmohan Chains
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={aboutImage}
              alt="Master artisan crafting gold chains at Manmohan Chains"
              className="relative w-full rounded-2xl shadow-gold-lg object-cover aspect-square"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-2xl hidden lg:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed">
              For over two decades, Manmohan Chains has been the epitome of excellence in fine jewellery craftsmanship.
              Established in 2003, we create timeless pieces that celebrate life's precious moments.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: combine traditional craftsmanship with contemporary design to create jewellery
              that tells your unique story. Each piece is meticulously handcrafted by our master artisans who pour
              their passion and expertise into every creation.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We believe that jewellery is more than an accessory — it's a legacy, a memory, and a statement of
              individuality that transcends time.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default AboutSection;
