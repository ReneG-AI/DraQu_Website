import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import DiscordSection from "@/components/DiscordSection";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GameFeatures />
      <DiscordSection />
      <SocialIcons variant="floating" />
    </div>
  );
};

export default Index;
