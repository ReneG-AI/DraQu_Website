import { useTranslation } from 'react-i18next';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import logoAltF4 from '@/assets/Logo sin fondo ALT F4 GAMES.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t border-border/50 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center text-base md:text-lg font-semibold tracking-[0.2em] text-foreground hover:text-primary transition-colors mb-3"
              aria-label="Go to home"
            >
              DraQu
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              {t('tagline')}
            </p>
            <SocialIcons showSteam />
            <div className="mt-4 flex items-center gap-3">
              <img src={logoAltF4} alt="ALT F4 GAMES" className="h-7 w-auto opacity-80" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">ALT F4 GAMES</span>
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h3 className="font-semibold heading-gradient mb-4">{t('game')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('navHome')}</Link></li>
              <li><Link to="/#nexus" className="hover:text-primary transition-colors">{t('navNexus')}</Link></li>
              <li><Link to="/roadmap" className="hover:text-primary transition-colors">{t('navRoadmap')}</Link></li>
              <li><a href="https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('steamPage')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold heading-gradient mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t('faq')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('contact')}</Link></li>
              <li><a href="https://discord.gg/YNyBnuBVWG" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('community')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold heading-gradient mb-4">{t('legal')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t('termsOfService')}</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">{t('cookiesPolicy')}</Link></li>
              <li><Link to="/guidelines" className="hover:text-primary transition-colors">{t('communityGuidelines')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-6 pt-6 text-center text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
