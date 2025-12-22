import { useTranslation } from 'react-i18next';

const Guidelines = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-8 text-center">
          {t('communityGuidelines')}
        </h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <section>
            <p>{t('guidelinesIntro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('guidelinesRules')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('guidelinesBeRespectful')}</li>
              <li>{t('guidelinesNoSpam')}</li>
              <li>{t('guidelinesProtectPrivacy')}</li>
              <li>{t('guidelinesStayOnTopic')}</li>
              <li>{t('guidelinesHelpOthers')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('guidelinesViolations')}</h2>
            <p>{t('guidelinesViolationsText')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold heading-gradient mb-4">{t('contact')}</h2>
            <p>{t('guidelinesContactText')}</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Guidelines;
