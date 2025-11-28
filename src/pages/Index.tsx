import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import GameFeatures from "@/components/GameFeatures";
import SteamSection from "@/components/SteamSection";
import DiscordSection from "@/components/DiscordSection";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrailerSection />
      <SteamSection />
      <GameFeatures />
      <DiscordSection />
      <SocialIcons variant="floating" />
    </div>
  );
};

export default Index;
