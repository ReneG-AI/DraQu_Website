import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameFeatures />
      <DiscordSection />
      <Footer />
      <SocialIcons variant="floating" />
    </div>
  );
};

export default Index;
