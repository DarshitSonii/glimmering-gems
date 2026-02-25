import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import CollectionsSection from "@/components/CollectionsSection";
import CraftSection from "@/components/CraftSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top marquee - above everything */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-warm-dark overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
              Premium Gold Chains &nbsp;✦&nbsp; Since 2003 &nbsp;✦&nbsp; Handcrafted Excellence &nbsp;✦&nbsp; 22K Certified &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <HeritageSection />
        <CollectionsSection />
        <CraftSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
