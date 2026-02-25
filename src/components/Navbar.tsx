import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Heritage", href: "#heritage" },
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-warm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
        {/* Logo */}
        <button onClick={() => go("#home")} className="group">
          <span className="font-serif text-xl md:text-2xl text-foreground tracking-wide">
            Manmohan <span className="text-primary">Chains</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+919662798854"
          className="hidden lg:inline-flex items-center gap-2 font-sans text-sm font-medium bg-warm-gradient text-primary-foreground px-6 py-2.5 rounded-full tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
        >
          Call Now
        </a>

        {/* Mobile */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-warm animate-fade-up">
          <div className="flex flex-col items-center gap-6 py-10">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-sans text-base text-muted-foreground hover:text-foreground tracking-[0.15em] uppercase"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+919662798854"
              className="bg-warm-gradient text-primary-foreground px-8 py-3 rounded-full font-sans text-sm font-medium tracking-wider uppercase"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
