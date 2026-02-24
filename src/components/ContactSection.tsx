import { useState } from "react";
import { MapPin, Phone, MessageCircle, Instagram, Mail } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Store",
    detail: "Get directions to our location",
    href: "https://maps.app.goo.gl/manmohanchains",
  },
  {
    icon: Phone,
    title: "Call Now",
    detail: "+91 9662798854",
    href: "tel:+919662798854",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Message us directly",
    href: "https://wa.me/919662798854",
  },
  {
    icon: Instagram,
    title: "Follow Us",
    detail: "@manmohanchains",
    href: "https://www.instagram.com/manmohanchains",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "Send us an email",
    href: "mailto:manmohanchains@gmail.com?subject=Inquiry%20from%20Website",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mailto fallback
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:manmohanchains@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-dark-gradient-reverse">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm text-primary mb-2 tracking-wide">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-gold text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm text-primary mb-2 tracking-wide">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-gold text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-primary mb-2 tracking-wide">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-gold text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm text-primary mb-2 tracking-wide">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-gold text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground py-4 rounded-full font-body text-lg font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 shadow-gold hover:shadow-gold-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Quick Connect</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 group block"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">{card.title}</h4>
                  <p className="font-body text-muted-foreground text-sm">{card.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
