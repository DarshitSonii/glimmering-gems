import { useState } from "react";
import { ArrowLeft, ArrowRight, Search, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useNavigate } from "react-router-dom";

// Categories data
const categories = [
  {
    id: "classic",
    name: "Classic Chains",
    desc: "Timeless designs for everyday elegance",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b354?w=600&q=80",
  },
  {
    id: "fancy",
    name: "Fancy Chains",
    desc: "Bold patterns and intricate links",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
  },
  {
    id: "22k",
    name: "22K Gold",
    desc: "Premium purity for discerning collectors",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
  },
  {
    id: "custom",
    name: "Custom Designs",
    desc: "Bespoke creations tailored to you",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  },
  {
    id: "mens",
    name: "Men's Collection",
    desc: "Sophisticated chains for the modern man",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
  },
  {
    id: "bridal",
    name: "Bridal Collection",
    desc: "Celebrate your special day in gold",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  },
];

// Sample products per category
const productsByCategory: Record<string, { title: string; karat?: string; desc: string; image: string }[]> = {
  classic: [
    { title: "Rope Chain 20\"", karat: "22K", desc: "Elegant rope twist pattern with secure clasp", image: "https://images.unsplash.com/photo-1515562141589-67f0d569b354?w=400&q=80" },
    { title: "Cable Link Chain", karat: "18K", desc: "Classic interlocking oval links for daily wear", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80" },
    { title: "Box Chain 24\"", karat: "22K", desc: "Square links creating a smooth, refined look", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { title: "Curb Chain", karat: "18K", desc: "Flat, interlocking links with a polished finish", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  ],
  fancy: [
    { title: "Byzantine Chain", karat: "22K", desc: "Complex woven pattern for a luxurious statement", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
    { title: "Figaro Link", karat: "18K", desc: "Alternating short and long oval links", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { title: "Wheat Chain", karat: "22K", desc: "Four strands of twisted oval links braided together", image: "https://images.unsplash.com/photo-1515562141589-67f0d569b354?w=400&q=80" },
  ],
  "22k": [
    { title: "Premium Flat Chain", karat: "22K", desc: "Ultra-premium flat design with hallmark certification", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80" },
    { title: "Heritage Gold Chain", karat: "22K", desc: "Traditional design passed through generations", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
  ],
  custom: [
    { title: "Custom Name Chain", karat: "22K", desc: "Personalized with your name or initials", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  ],
  mens: [
    { title: "Heavy Curb Chain", karat: "22K", desc: "Bold masculine design with substantial weight", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
    { title: "Franco Chain", karat: "18K", desc: "Strong, square links for a modern edge", image: "https://images.unsplash.com/photo-1515562141589-67f0d569b354?w=400&q=80" },
  ],
  bridal: [
    { title: "Bridal Layered Set", karat: "22K", desc: "Multi-layered chains for the perfect bridal look", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { title: "Temple Chain", karat: "22K", desc: "Traditional temple-inspired design", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80" },
  ],
};

const Collections = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const activeCat = categories.find((c) => c.id === activeCategory);
  const products = activeCategory ? productsByCategory[activeCategory] || [] : [];

  const openModal = (image: string, index: number) => {
    setModalImage(image);
    setModalIndex(index);
  };

  const closeModal = () => setModalImage(null);

  const navModal = (dir: number) => {
    const newIdx = (modalIndex + dir + products.length) % products.length;
    setModalIndex(newIdx);
    setModalImage(products[newIdx].image);
  };

  const whatsappInquiry = (product: { title: string; karat?: string }) => {
    const msg = `Hello Manmohan Chains! 👋\n\nI'm interested in: *${product.title}*${product.karat ? ` (${product.karat})` : ""}\n\nCould you please share more details?\n\nThank you!`;
    window.open(`https://wa.me/919662798854?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const requestMore = () => {
    const msg = `Hello Manmohan Chains! 👋\n\nI'm interested in seeing more products from your *${activeCat?.name}* collection.\n\nCould you please share more designs?\n\nThank you!`;
    window.open(`https://wa.me/919662798854?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4">Curated Selection</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our <em className="text-primary">Collections</em>
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our exquisite range of handcrafted jewellery, each piece telling its own unique story.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-foreground transition-colors tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </section>

      <div className="line-gold" />

      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Navigation bar when viewing products */}
          {activeCategory && (
            <div className="flex items-center justify-between mb-10 p-5 rounded-2xl bg-card border border-warm shadow-warm">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">{activeCat?.name}</h2>
              <button
                onClick={() => setActiveCategory(null)}
                className="inline-flex items-center gap-2 bg-warm-gradient text-primary-foreground px-5 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 shadow-warm"
              >
                <ArrowLeft className="w-4 h-4" />
                All Collections
              </button>
            </div>
          )}

          {/* Categories grid */}
          {!activeCategory && (
            <>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Browse Collections</h2>
                <p className="font-sans text-muted-foreground">Select a category to explore</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group relative rounded-2xl overflow-hidden h-[260px] border border-warm hover:border-primary/40 transition-all duration-500 hover-lift text-left"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl text-primary-foreground mb-1">{cat.name}</h3>
                      <p className="font-sans text-sm text-primary-foreground/70">{cat.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-primary">
                        View More <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Products grid */}
          {activeCategory && (
            <>
              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {products.map((product, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl overflow-hidden bg-card border border-warm hover:border-primary/40 hover:shadow-warm-lg transition-all duration-500 hover-lift"
                    >
                      {/* Image */}
                      <div
                        className="relative h-[200px] md:h-[250px] overflow-hidden cursor-pointer bg-ivory"
                        onClick={() => openModal(product.image, idx)}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Search className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4 md:p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif text-base md:text-lg text-foreground leading-snug">{product.title}</h3>
                          {product.karat && (
                            <span className="flex-shrink-0 bg-warm-gradient text-primary-foreground text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full tracking-wide">
                              {product.karat}
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-2">{product.desc}</p>
                        <button
                          onClick={() => whatsappInquiry(product)}
                          className="w-full flex items-center justify-center gap-2 bg-[hsl(142_70%_40%)] text-primary-foreground py-2.5 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-8 rounded-2xl border-2 border-dashed border-primary/30 bg-ivory">
                  <p className="font-serif text-2xl text-foreground mb-3">No Products Available</p>
                  <p className="font-sans text-muted-foreground mb-6">
                    Check back later or browse other categories.
                  </p>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="inline-flex items-center gap-2 bg-warm-gradient text-primary-foreground px-6 py-3 rounded-full font-sans text-sm font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Browse Other Categories
                  </button>
                </div>
              )}

              {/* Request more */}
              {products.length > 0 && (
                <div className="mt-16 text-center py-12 px-8 rounded-3xl bg-ivory border border-warm">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Looking for More?</h3>
                  <p className="font-sans text-muted-foreground max-w-lg mx-auto mb-6">
                    We have many more exquisite designs in this collection. Contact us on WhatsApp to explore the full range.
                  </p>
                  <button
                    onClick={requestMore}
                    className="inline-flex items-center gap-3 bg-warm-gradient text-primary-foreground px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-warm hover:shadow-warm-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request More Products
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>

          {products.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navModal(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navModal(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <img
            src={modalImage}
            alt="Product zoom"
            className="max-w-[90%] max-h-[85vh] object-contain rounded-xl shadow-warm-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Collections;
