import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const GameFeatures = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      titleKey: "cooperativeTitle",
      descriptionKey: "cooperativeDesc",
      icon: "🤝",
      gradient: "bg-gradient-mystic"
    },
    {
      titleKey: "dragonTitle",
      descriptionKey: "dragonDesc",
      icon: "🐉",
      gradient: "bg-gradient-dragon"
    },
    {
      titleKey: "magicTitle",
      descriptionKey: "magicDesc",
      icon: "✨",
      gradient: "bg-gradient-ethereal"
    },
    {
      titleKey: "epicTitle",
      descriptionKey: "epicDesc",
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
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('featuresDesc')}
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
                  {t(feature.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {t(feature.descriptionKey)}
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