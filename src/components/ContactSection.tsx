import { useState } from "react";
import { MapPin, Phone, MessageCircle, Instagram, Mail, Send } from "lucide-react";

const quickLinks = [
  { icon: Phone, title: "Call", detail: "+91 9662798854", href: "tel:+919662798854" },
  { icon: MessageCircle, title: "WhatsApp", detail: "Chat with us", href: "https://wa.me/919662798854" },
  { icon: Instagram, title: "Instagram", detail: "@manmohanchains", href: "https://www.instagram.com/manmohanchains" },
  { icon: MapPin, title: "Visit", detail: "Get directions", href: "https://maps.app.goo.gl/manmohanchains" },
  { icon: Mail, title: "Email", detail: "Write to us", href: "mailto:manmohanchains@gmail.com?subject=Inquiry%20from%20Website" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:manmohanchains@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory relative">
      <div className="line-gold mb-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Let's <em className="text-primary">Connect</em>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Have a question about our collections or want to create a custom piece? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form - takes 3 cols */}
          <div className="lg:col-span-3 bg-background rounded-3xl p-8 md:p-12 shadow-warm border border-warm">
            <h3 className="font-serif text-2xl text-foreground mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-warm-gradient text-primary-foreground py-4 rounded-full font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-warm hover:shadow-warm-lg"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Quick links - takes 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl text-foreground mb-6">Quick Connect</h3>
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-warm hover:border-primary/30 hover:shadow-warm transition-all duration-300 group hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-warm-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{link.title}</p>
                  <p className="font-sans text-sm text-muted-foreground">{link.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
