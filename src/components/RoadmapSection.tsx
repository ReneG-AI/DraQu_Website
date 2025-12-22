import { useTranslation } from 'react-i18next';

const RoadmapSection = () => {
  const { t } = useTranslation();

  return (
    <section id="roadmap" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto rounded-3xl border border-border/60 bg-card/60 px-8 py-8 text-foreground shadow-card">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t('roadmapTitle')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            {t('roadmapIntro')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
