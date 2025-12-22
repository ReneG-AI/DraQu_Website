import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import GameFeatures from "@/components/GameFeatures";
import SteamSection from "@/components/SteamSection";
import DiscordSection from "@/components/DiscordSection";
import SocialIcons from "@/components/SocialIcons";
import RoadmapSection from "@/components/RoadmapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrailerSection />
      <SteamSection />
      <GameFeatures />
      <DiscordSection />
      <RoadmapSection />
      <SocialIcons variant="floating" />
    </div>
  );
};

export default Index;
