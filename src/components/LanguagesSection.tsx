import { useTranslation } from 'react-i18next';

const LanguagesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="languages" className="py-20 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-4">
          {t('languagesTitle')}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {t('languagesDescription')}
        </p>
        <p className="text-sm uppercase tracking-[0.2em] text-ancient-gold/80 mb-4">
          {t('languagesList')}
        </p>
        <p className="text-sm text-muted-foreground">
          {t('languagesNote')}
        </p>
      </div>
    </section>
  );
};

export default LanguagesSection;
