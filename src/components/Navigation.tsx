import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';
import RegistrationModal from './RegistrationModal';
import SocialIcons from './SocialIcons';

const Navigation = () => {
  const { t } = useTranslation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-dragon bg-clip-text text-transparent">
            DraQu
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              {t('play')}
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              {t('lore')}
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              {t('creatures')}
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              {t('community')}
            </Button>
          </div>
          
          {/* Right Side - Language, Social, CTA */}
          <div className="flex items-center space-x-4">
            <SocialIcons className="hidden sm:flex" />
            <LanguageSelector />
            <Button 
              variant="mystic" 
              className="hidden md:inline-flex"
              onClick={() => setIsRegistrationOpen(true)}
            >
              {t('getEarlyAccess')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
      
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </nav>
    </>
  );
};

export default Navigation;