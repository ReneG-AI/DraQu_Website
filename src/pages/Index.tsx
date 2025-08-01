import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameFeatures />
      <Footer />
    </div>
  );
};

export default Index;
