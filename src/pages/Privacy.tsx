import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          {t('privacyPolicyTitle')}
        </h1>

        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground mb-8">
            {t('privacyEffectiveDate')}
          </p>

          <section>
            <p>{t('privacyIntro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyInfoCollected')}</h2>
            <p>{t('privacyInfoCollectedText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyHowWeUse')}</h2>
            <p>{t('privacyHowWeUseText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyDataProtection')}</h2>
            <p>{t('privacyDataProtectionText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t('privacyUserRights')}</h2>
            <p>{t('privacyUserRightsText')}</p>
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
    </main>
  );
};

export default Privacy;
