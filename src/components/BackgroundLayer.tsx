import React from 'react';
import { useWorld } from '@/contexts/WorldContext';
import normalWorldBg from '@/assets/normal-world-bg.jpg';
import strangerWorldBg from '@/assets/stranger-world-bg.jpg';

const BackgroundLayer: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Normal World Background - Mobile optimized */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isStrangerWorld ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img 
          src={normalWorldBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Stranger World Background - Mobile optimized */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isStrangerWorld ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={strangerWorldBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Dark red overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Stars layer - Normal World */}
      <div className={`absolute inset-0 stars-bg transition-opacity duration-1000 ${
        isStrangerWorld ? 'opacity-0' : 'opacity-40'
      }`} />

      {/* Red particles - Stranger World */}
      <div className={`absolute inset-0 red-particles transition-opacity duration-1000 ${
        isStrangerWorld ? 'opacity-60' : 'opacity-0'
      }`} />

      {/* Lightning effect - Stranger World */}
      <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
        isStrangerWorld ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Lightning cracks */}
        <div 
          className="absolute top-0 left-1/4 w-0.5 h-1/2 bg-gradient-to-b from-red-500/80 via-red-600/40 to-transparent animate-lightning"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-1/4 right-1/3 w-0.5 h-1/3 bg-gradient-to-b from-red-500/60 via-red-600/30 to-transparent animate-lightning"
          style={{ animationDelay: '3s' }}
        />
        <div 
          className="absolute top-0 right-1/4 w-0.5 h-2/5 bg-gradient-to-b from-red-500/70 via-red-600/35 to-transparent animate-lightning"
          style={{ animationDelay: '6s' }}
        />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};

export default BackgroundLayer;
