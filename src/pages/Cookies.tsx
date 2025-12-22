import { useTranslation } from 'react-i18next';

const Cookies = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-8 text-center">
          {t('cookiesPolicyTitle')}
        </h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground mb-8">
            {t('cookiesEffectiveDate')}
          </p>

          <section>
            <p>{t('cookiesPolicyIntro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('cookiesWhatAre')}</h2>
            <p>{t('cookiesWhatAreText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('cookiesHowWeUse')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('cookiesEssential')}</li>
              <li>{t('cookiesAnalytics')}</li>
              <li>{t('cookiesPreferences')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('cookiesManage')}</h2>
            <p>{t('cookiesManageText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('contact')}</h2>
            <p>{t('cookiesContactText')}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Cookies;
