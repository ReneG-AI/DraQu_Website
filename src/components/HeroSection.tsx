import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-tavern.jpg";
import RegistrationModal from './RegistrationModal';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ancient-gold rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-ethereal-blue rounded-full opacity-80 animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-ping" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-ancient-gold rounded-full opacity-60 animate-ping" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-dragon bg-clip-text text-transparent leading-tight">
          DraQu
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-semibold text-ancient-gold mb-4">
          Awakening of the Elements
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-mist-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Enter a world where dragons soar and elemental magic flows through every card. 
          Cooperate with fellow adventurers in this mystical card game inspired by ancient wisdom.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="mystic" 
            className="w-full sm:w-auto"
            onClick={() => setIsRegistrationOpen(true)}
          >
            {t('enterTavern')}
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" />
            {t('watchTrailer')}
          </Button>
        </div>
        
        {/* Coming Soon Badge */}
        <div className="mt-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-mystic-purple/20 border border-mystic-purple/40 text-sm font-medium text-foreground">
            <span className="w-2 h-2 bg-ethereal-blue rounded-full mr-2 animate-pulse"></span>
            Coming to Steam Soon
          </span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-mist-light animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </section>
    </>
  );
};

export default HeroSection;