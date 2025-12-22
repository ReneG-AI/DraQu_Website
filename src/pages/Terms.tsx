import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-8 text-center">
          {t('termsTitle')}
        </h1>

        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground mb-8">
            {t('termsEffectiveDate')}
          </p>

          <section>
            <p>{t('termsIntro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsAcceptance')}</h2>
            <p>{t('termsAcceptanceText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsUseOfService')}</h2>
            <p>{t('termsUseOfServiceText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsUserContent')}</h2>
            <p>{t('termsUserContentText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsEarlyAccess')}</h2>
            <p>{t('termsEarlyAccessText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsIntellectualProperty')}</h2>
            <p>{t('termsIntellectualPropertyText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsLiability')}</h2>
            <p>{t('termsLiabilityText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsGoverningLaw')}</h2>
            <p>{t('termsGoverningLawText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('termsContact')}</h2>
            <p>{t('termsContactText')}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
