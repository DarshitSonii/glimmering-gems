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
