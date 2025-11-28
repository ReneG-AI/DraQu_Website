import { useTranslation } from 'react-i18next';

const TrailerSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-mystic-purple/5 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-dragon bg-clip-text text-transparent">
            {t('watchTrailer')}
          </h2>
          <p className="text-lg text-mist-light max-w-2xl mx-auto">
            {t('trailerDescription')}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/20 bg-card/50 backdrop-blur-sm">
          {/* Aspect ratio container for responsive video */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yKd9jKCQ7TA"
              title="DraQu Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ancient-gold rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-ethereal-blue rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default TrailerSection;
