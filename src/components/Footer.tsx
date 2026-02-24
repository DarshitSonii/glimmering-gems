const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-gold py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl font-bold text-gold-gradient mb-3">Manmohan Chains</h3>
        <p className="font-body text-muted-foreground mb-6 tracking-wide">
          Experience the art of fine jewellery craftsmanship
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { href: "https://www.instagram.com/manmohanchains", label: "Instagram" },
            { href: "https://wa.me/919662798854", label: "WhatsApp" },
            { href: "tel:+919662798854", label: "Phone" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 font-body text-xs tracking-wider"
              aria-label={link.label}
            >
              {link.label[0]}
            </a>
          ))}
        </div>

        <p className="font-body text-sm text-muted-foreground">
          © {year} Manmohan Chains. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
