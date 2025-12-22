import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tavern_DraQu.png";
import CountdownTimer from '@/components/CountdownTimer';
import logoDraqu from '@/assets/Logo DraQu_Sin fondo.png';

const HeroSection = () => {
  const { t } = useTranslation();
  const steamUrl = "https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/";
  const chips = [
    "heroChipCoop",
    "heroChipCards",
  ];

  return (
    <>
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: 'fixed' }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ancient-gold rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-ethereal-blue rounded-full opacity-80 animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-ping" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-ancient-gold rounded-full opacity-60 animate-ping" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-8 md:pt-12 pb-12">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h1 className="-mb-1 flex items-center justify-center">
            <span className="sr-only">{t('heroTitle')}</span>
            <img
              src={logoDraqu}
              alt="DraQu"
              className="h-[clamp(10rem,22vw,22rem)] w-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            />
          </h1>

          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2 className="text-2xl md:text-3xl text-ancient-gold">
              {t('heroSubtitle')}
            </h2>
            <p className="text-base md:text-lg text-mist-light max-w-2xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ancient-gold tracking-[0.08em] drop-shadow-[0_12px_36px_rgba(244,196,48,0.4)]">
              {t('steamSectionSubtitle')}
            </p>
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full border border-border/60 bg-background/70 text-xs md:text-sm text-foreground/90"
              >
                {t(chip)}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="hero"
            className="w-full sm:w-auto bg-[#1b2838] text-white hover:bg-[#223548]"
            asChild
          >
            <a href={steamUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-[#66c0f4]" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                />
              </svg>
              {t('ctaWishlist')}
            </a>
          </Button>
          <Button
            variant="ethereal"
            className="w-full sm:w-auto bg-[#5865F2] text-white hover:bg-[#4752C4]"
            asChild
          >
            <a href="#community" className="inline-flex items-center gap-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
              </svg>
              {t('ctaCommunity')}
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-mist-light animate-bounce-subtle cursor-pointer hover:text-ancient-gold transition-colors duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
    </section>
    </>
  );
};

export default HeroSection;
