const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-dark py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-primary-foreground mb-3">
              Manmohan <span className="text-primary">Chains</span>
            </h3>
            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed">
              Experience the art of fine jewellery craftsmanship. Premium quality gold chains since 2003.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">Navigate</h4>
            <ul className="space-y-3">
              {["Home", "Heritage", "Collections", "Craft", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-sans text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919662798854" className="block font-sans text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                +91 9662798854
              </a>
              <a href="mailto:manmohanchains@gmail.com" className="block font-sans text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                manmohanchains@gmail.com
              </a>
              <a href="https://www.instagram.com/manmohanchains" target="_blank" rel="noopener noreferrer" className="block font-sans text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                @manmohanchains
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/40">
            © {year} Manmohan Chains. All rights reserved.
          </p>
          <p className="font-sans text-xs text-primary-foreground/30">
            Premium Gold Jewellery — Since 2003
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
