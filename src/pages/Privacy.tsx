import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {t('privacyPolicy')}
          </h1>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-8">
              {t('privacyEffectiveDate')}: [To Be Added]
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyIntro')}</h2>
              <p>{t('privacyIntroText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyInfoCollected')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyInfoPersonal')}</li>
                <li>{t('privacyInfoNonPersonal')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyHowWeUse')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyUseCommunicate')}</li>
                <li>{t('privacyUseImprove')}</li>
                <li>{t('privacyUseComply')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyProtection')}</h2>
              <p>{t('privacyProtectionText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyYourRights')}</h2>
              <p>{t('privacyYourRightsText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyCookies')}</h2>
              <p>{t('privacyCookiesText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyChanges')}</h2>
              <p>{t('privacyChangesText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyContact')}</h2>
              <p>{t('privacyContactText')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;