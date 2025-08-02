import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {t('cookiesPolicy')}
          </h1>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <section>
              <p>{t('cookiesPolicyText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('cookiesWhatAre')}</h2>
              <p>{t('cookiesWhatAreText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('cookiesHowWeUse')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('cookiesEssential')}</li>
                <li>{t('cookiesAnalytics')}</li>
                <li>{t('cookiesPreferences')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('cookiesManage')}</h2>
              <p>{t('cookiesManageText')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t('contact')}</h2>
              <p>{t('cookiesContactText')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;