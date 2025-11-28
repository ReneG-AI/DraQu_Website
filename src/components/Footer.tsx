import { useTranslation } from 'react-i18next';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
  const { t } = useTranslation();
  const handleComingSoon = () => toast(t('comingSoon', { defaultValue: 'Estamos trabajando en esta función' }));
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold bg-gradient-dragon bg-clip-text text-transparent mb-4" aria-label="Go to home">
              DraQu
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('tagline')}
            </p>
            <SocialIcons />
          </div>
          
          {/* Game Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('game')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" onClick={handleComingSoon} className="hover:text-primary transition-colors">{t('howToPlay')}</Link></li>
              <li><Link to="/" onClick={handleComingSoon} className="hover:text-primary transition-colors">{t('systemRequirements')}</Link></li>
              <li><Link to="/" onClick={handleComingSoon} className="hover:text-primary transition-colors">{t('releaseDate')}</Link></li>
              <li><a href="https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('steamPage')}</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t('faq')}</Link></li>
              <li><a href="mailto:altf4studio.official@gmail.com" className="hover:text-primary transition-colors">{t('contactUs')}</a></li>
              <li><Link to="/" onClick={handleComingSoon} className="hover:text-primary transition-colors">{t('bugReports')}</Link></li>
              <li><a href="https://discord.gg/YNyBnuBVWG" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('community')}</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('legal')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">{t('privacyPolicy')}</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">{t('termsOfService')}</a></li>
              <li><a href="/cookies" className="hover:text-primary transition-colors">{t('cookiesPolicy')}</a></li>
              <li><a href="/guidelines" className="hover:text-primary transition-colors">{t('communityGuidelines')}</a></li>
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