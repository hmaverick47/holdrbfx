import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BulletSection from "@/components/BulletSection";
import OfferStack from "@/components/OfferStack";
import AboutSection from "@/components/AboutSection";
import BonusSection from "@/components/BonusSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BulletSection />
      <OfferStack />
      <AboutSection />
      <BonusSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
