import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {t('termsOfService')}
          </h1>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-8">
              {t('termsEffectiveDate')}: [To Be Added]
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('termsWelcome')}</h2>
              <p>{t('termsWelcomeText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. {t('termsUseOfSite')}</h2>
              <p>{t('termsUseOfSiteText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. {t('termsUserContent')}</h2>
              <p>{t('termsUserContentText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. {t('termsEarlyAccess')}</h2>
              <p>{t('termsEarlyAccessText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. {t('termsIntellectualProperty')}</h2>
              <p>{t('termsIntellectualPropertyText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. {t('termsLimitation')}</h2>
              <p>{t('termsLimitationText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. {t('termsGoverningLaw')}</h2>
              <p>{t('termsGoverningLawText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('contact')}</h2>
              <p>[Contact To Be Added]</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;