import { useTranslation } from 'react-i18next';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import logoDraqu from '@/assets/Logo DraQu_Sin fondo.png';
import logoAltF4 from '@/assets/Logo sin fondo ALT F4 GAMES.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4" aria-label="Go to home">
              <img src={logoDraqu} alt="DraQu" className="h-12 md:h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('tagline')}
            </p>
            <SocialIcons />
            <div className="mt-5 flex items-center gap-3">
              <img src={logoAltF4} alt="ALT F4 GAMES" className="h-8 w-auto opacity-80" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">ALT F4 GAMES</span>
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('game')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/#nexus" className="hover:text-primary transition-colors">{t('navNexus')}</Link></li>
              <li><Link to="/#roadmap" className="hover:text-primary transition-colors">{t('navRoadmap')}</Link></li>
              <li><a href="https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('steamPage')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t('faq')}</Link></li>
              <li><a href="mailto:altf4studio.official@gmail.com" className="hover:text-primary transition-colors">{t('contactUs')}</a></li>
              <li><a href="https://discord.gg/YNyBnuBVWG" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('community')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('legal')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t('termsOfService')}</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">{t('cookiesPolicy')}</Link></li>
              <li><Link to="/guidelines" className="hover:text-primary transition-colors">{t('communityGuidelines')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
