import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GameFeatures = () => {
  const features = [
    {
      title: "Cooperative Strategy",
      description: "Work together with fellow adventurers to overcome mystical challenges and unlock the secrets of elemental magic.",
      icon: "🤝",
      gradient: "bg-gradient-mystic"
    },
    {
      title: "Dragon Companions",
      description: "Summon and bond with majestic dragons, each wielding unique elemental powers to aid in your quest.",
      icon: "🐉",
      gradient: "bg-gradient-dragon"
    },
    {
      title: "Elemental Magic",
      description: "Master the four elements - Fire, Water, Earth, and Air - as you weave spells through strategic card play.",
      icon: "✨",
      gradient: "bg-gradient-ethereal"
    },
    {
      title: "Epic Campaign",
      description: "Journey through an immersive story filled with ancient mysteries, magical creatures, and legendary artifacts.",
      icon: "📖",
      gradient: "bg-gradient-mystic"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-ethereal opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover the Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience a card game like no other, where cooperation and strategy meet in a world of dragons and elemental wonder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.gradient} flex items-center justify-center text-2xl shadow-epic group-hover:shadow-glow-ethereal transition-all duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;