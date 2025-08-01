import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import SocialIcons from './SocialIcons';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-dragon bg-clip-text text-transparent mb-4">
              DraQu
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('tagline')}
            </p>
            <SocialIcons />
          </div>
          
          {/* Game Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('game')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('howToPlay')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('systemRequirements')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('releaseDate')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('steamPage')}</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('faq')}</a></li>
              <li><a href="mailto:renegarciaeduca@gmail.com" className="hover:text-primary transition-colors">{t('contactUs')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('bugReports')}</a></li>
              <li><a href="https://discord.gg/xjpnAEBmfy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('community')}</a></li>
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