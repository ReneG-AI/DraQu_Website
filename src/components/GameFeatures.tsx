import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { Flame, MessageSquareOff, Users } from 'lucide-react';

const GameFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      titleKey: "nexusBullet1Title",
      descriptionKey: "nexusBullet1Desc",
      Icon: MessageSquareOff,
      gradient: "bg-gradient-mystic"
    },
    {
      titleKey: "nexusBullet2Title",
      descriptionKey: "nexusBullet2Desc",
      Icon: Users,
      gradient: "bg-gradient-dragon"
    },
    {
      titleKey: "nexusBullet3Title",
      descriptionKey: "nexusBullet3Desc",
      Icon: Flame,
      gradient: "bg-gradient-mystic"
    }
  ];

  return (
    <section id="nexus" className="py-20 px-6 bg-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-ethereal opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t('nexusTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('nexusSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.titleKey}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="text-center p-6">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${feature.gradient} flex items-center justify-center text-2xl shadow-epic group-hover:shadow-glow-ethereal transition-all duration-300`}>
                  <feature.Icon className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-lg text-mist-light max-w-3xl mx-auto">
          {t('nexusClosing')}
        </p>

        <div className="mt-8 flex justify-center">
          <div className="rounded-2xl border border-border/60 bg-card/60 px-6 py-4 text-center text-sm text-muted-foreground shadow-card">
            <p className="text-foreground font-semibold">{t('indieTitle')}</p>
            <p className="mt-1">{t('indieDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
