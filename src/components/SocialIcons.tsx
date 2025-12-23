interface SocialIconsProps {
  variant?: 'floating' | 'inline';
  className?: string;
  showSteam?: boolean;
}

const SocialIcons = ({ variant = 'inline', className = '', showSteam = false }: SocialIconsProps) => {
  const iconSize = variant === 'floating' ? 'w-6 h-6' : 'w-5 h-5';
  const containerClass = variant === 'floating' 
    ? `fixed bottom-6 right-6 z-40 flex flex-col space-y-3 ${className}`
    : `flex space-x-4 ${className}`;
  const steamUrl = 'https://store.steampowered.com/app/4031220/DraQu_El_Despertar_de_los_Elementos/';
  const iconBaseClass = variant === 'floating'
    ? 'bg-background/90 backdrop-blur-md border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-primary/5'
    : 'p-2';
  const iconClass = `text-muted-foreground transition-colors ${iconBaseClass}`;

  return (
    <div className={containerClass}>
      <a 
        href="https://discord.gg/YNyBnuBVWG" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Join Discord"
        className={`${iconClass} hover:text-primary`}
      >
        <svg 
          className={iconSize} 
          fill="currentColor" 
          aria-hidden="true" 
          viewBox="0 0 24 24"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
        </svg>
      </a>

      <a 
        href="https://www.youtube.com/@ALTF4STUDIO-y7p3e" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="YouTube"
        className={`${iconClass} hover:text-primary`}
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

      {showSteam && (
        <a 
          href={steamUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Steam"
          className={`${iconClass} hover:text-[#66c0f4]`}
        >
          <svg className={iconSize} viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
