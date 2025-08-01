import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const DiscordSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-discord rounded-full p-6 shadow-xl">
              <svg 
                className="w-16 h-16 text-white" 
                fill="currentColor" 
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M26.6,7.5c-2.3-1.1-4.8-2-7.4-2.3c-0.3,0.5-0.6,1.1-0.8,1.7c-2.5-0.4-5-0.4-7.4,0c-0.2-0.6-0.5-1.1-0.8-1.7c-2.6,0.3-5.1,1.2-7.4,2.3C1,13.3,0.1,19,1.2,24.6c2.7,2,5.8,3.6,9.1,4.3c0.7-1,1.3-2,1.8-3.1c-1.1-0.3-2.1-0.8-3-1.5c0.2-0.2,0.4-0.5,0.6-0.8c2.7,2,6.2,2,8.9,0c0.2,0.3,0.4,0.6,0.6,0.8c-0.9,0.7-1.9,1.2-3,1.5c0.5,1.1,1.1,2.1,1.8,3.1c3.3-0.7,6.4-2.3,9.1-4.3C31.9,19,31,13.3,26.6,7.5z M11.6,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C13.6,18,12.7,19,11.6,19z M20.4,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C22.4,18,21.5,19,20.4,19z"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-dragon bg-clip-text text-transparent mb-6">
            {t('discordTitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('discordSubtitle')}
          </p>
          
          <Button 
            variant="mystic" 
            size="lg"
            className="text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://discord.gg/xjpnAEBmfy', '_blank', 'noopener,noreferrer')}
          >
            <svg 
              className="w-6 h-6 mr-3" 
              fill="currentColor" 
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M26.6,7.5c-2.3-1.1-4.8-2-7.4-2.3c-0.3,0.5-0.6,1.1-0.8,1.7c-2.5-0.4-5-0.4-7.4,0c-0.2-0.6-0.5-1.1-0.8-1.7c-2.6,0.3-5.1,1.2-7.4,2.3C1,13.3,0.1,19,1.2,24.6c2.7,2,5.8,3.6,9.1,4.3c0.7-1,1.3-2,1.8-3.1c-1.1-0.3-2.1-0.8-3-1.5c0.2-0.2,0.4-0.5,0.6-0.8c2.7,2,6.2,2,8.9,0c0.2,0.3,0.4,0.6,0.6,0.8c-0.9,0.7-1.9,1.2-3,1.5c0.5,1.1,1.1,2.1,1.8,3.1c3.3-0.7,6.4-2.3,9.1-4.3C31.9,19,31,13.3,26.6,7.5z M11.6,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C13.6,18,12.7,19,11.6,19z M20.4,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C22.4,18,21.5,19,20.4,19z"/>
            </svg>
            {t('joinDiscord')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;