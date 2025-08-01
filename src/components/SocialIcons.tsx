interface SocialIconsProps {
  variant?: 'floating' | 'inline';
  className?: string;
}

const SocialIcons = ({ variant = 'inline', className = '' }: SocialIconsProps) => {
  const iconSize = variant === 'floating' ? 'w-6 h-6' : 'w-5 h-5';
  const containerClass = variant === 'floating' 
    ? `fixed bottom-6 right-6 z-40 flex flex-col space-y-3 ${className}`
    : `flex space-x-4 ${className}`;

  return (
    <div className={containerClass}>
      <a 
        href="https://discord.gg/xjpnAEBmfy" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Join Discord"
        className={`text-muted-foreground hover:text-primary transition-colors ${
          variant === 'floating' 
            ? 'bg-background/90 backdrop-blur-md border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-primary/5' 
            : 'p-2'
        }`}
      >
        <svg 
          className={iconSize} 
          fill="currentColor" 
          aria-hidden="true" 
          viewBox="0 0 32 32"
        >
          <path d="M26.6,7.5c-2.3-1.1-4.8-2-7.4-2.3c-0.3,0.5-0.6,1.1-0.8,1.7c-2.5-0.4-5-0.4-7.4,0c-0.2-0.6-0.5-1.1-0.8-1.7c-2.6,0.3-5.1,1.2-7.4,2.3C1,13.3,0.1,19,1.2,24.6c2.7,2,5.8,3.6,9.1,4.3c0.7-1,1.3-2,1.8-3.1c-1.1-0.3-2.1-0.8-3-1.5c0.2-0.2,0.4-0.5,0.6-0.8c2.7,2,6.2,2,8.9,0c0.2,0.3,0.4,0.6,0.6,0.8c-0.9,0.7-1.9,1.2-3,1.5c0.5,1.1,1.1,2.1,1.8,3.1c3.3-0.7,6.4-2.3,9.1-4.3C31.9,19,31,13.3,26.6,7.5z M11.6,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C13.6,18,12.7,19,11.6,19z M20.4,19c-1.1,0-2-1-2-2.1c0-1.2,0.9-2.1,2-2.1c1.1,0,2,1,2,2.1C22.4,18,21.5,19,20.4,19z"/>
        </svg>
      </a>

      <a 
        href="https://youtube.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="YouTube"
        className={`text-muted-foreground hover:text-primary transition-colors ${
          variant === 'floating' 
            ? 'bg-background/90 backdrop-blur-md border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-primary/5' 
            : 'p-2'
        }`}
      >
        <svg 
          className={iconSize} 
          fill="currentColor" 
          aria-hidden="true" 
          viewBox="0 0 32 32"
        >
          <path d="M31.2,8.2c-0.4-1.6-1.6-2.8-3.1-3.1C25.1,4.7,16,4.7,16,4.7s-9.1,0-12.1,0.4C2.4,5.4,1.2,6.6,0.8,8.2C0.4,10.2,0.4,16,0.4,16s0,5.8,0.4,7.8c0.4,1.6,1.6,2.8,3.1,3.1C6.9,27.3,16,27.3,16,27.3s9.1,0,12.1-0.4c1.6-0.3,2.8-1.5,3.1-3.1c0.4-2,0.4-7.8,0.4-7.8S31.6,10.2,31.2,8.2z M12.9,21.1v-10l8.7,5L12.9,21.1z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;