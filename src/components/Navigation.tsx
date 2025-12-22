import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import logoDraqu from '@/assets/Logo DraQu_Sin fondo.png';

const Navigation = () => {
  const { t } = useTranslation();
  const steamUrl = 'https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-start">
            <Link to="/" className="inline-flex items-center" aria-label="Go to home">
                <img
                  src={logoDraqu}
                  alt="DraQu"
                  className="h-12 sm:h-14 md:h-16 w-auto"
                />
            </Link>
            <div className="flex items-center gap-3 md:hidden">
              <Button
                variant="mystic"
                className="bg-[#1b2838] text-white hover:bg-[#223548]"
                asChild
              >
                <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#66c0f4]" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                    />
                  </svg>
                  {t('ctaWishlist')}
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors" asChild>
              <a href="#nexus">{t('navNexus')}</a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors" asChild>
              <Link to="/faq">{t('faq')}</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            <Button
              variant="mystic"
              className="hidden md:inline-flex bg-[#1b2838] text-white hover:bg-[#223548]"
              asChild
            >
              <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-[#66c0f4]" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                  />
                </svg>
                {t('ctaWishlist')}
              </a>
            </Button>
            <SocialIcons className="hidden sm:flex" />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
