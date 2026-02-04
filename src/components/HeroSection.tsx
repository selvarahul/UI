import React from 'react';
import { useWorld } from '@/contexts/WorldContext';
import CountdownTimer from './CountdownTimer';

import titleNormal1 from '@/assets/normalworld.png';
import titleNormal2 from '@/assets/normalworld1.png';

const HeroSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const handleRegisterClick = () => {
    const section = document.getElementById('technical-events');
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-16"
    >
      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Subtitle */}
        <p
          className={`font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6 transition-all duration-700 opacity-0 animate-fade-in ${
            isStrangerWorld ? 'text-red-300/80' : 'text-primary/80'
          }`}
        >
          Department of Computer Science and Engineering proudly presents
        </p>

        {/* ================= IMAGE TITLE SWITCH ================= */}
        <div
          className="relative mx-auto mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Normal World (Before Flip) */}
          <img
            src={titleNormal1}
            alt="NORMAL WORLD"
            className={`mx-auto transition-all duration-700 ease-in-out
              ${isStrangerWorld ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
              w-[280px] sm:w-[420px] md:w-[600px] lg:w-[720px]
            `}
          />

          {/* Stranger World (After Flip) */}
          <img
            src={titleNormal2}
            alt="STRANGER WORLD"
            className={`absolute inset-0 mx-auto transition-all duration-700 ease-in-out
              ${isStrangerWorld ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
              w-[280px] sm:w-[420px] md:w-[600px] lg:w-[720px]
            `}
          />
        </div>

        {/* Tagline */}
        <p
          className={`font-display text-lg md:text-2xl tracking-[0.2em] mb-12 transition-all duration-700 opacity-0 animate-fade-in ${
            isStrangerWorld ? 'text-red-400/90' : 'text-primary/90'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Upside Down of Innovation
        </p>

        {/* CTA Button */}
        <div
          className="mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={handleRegisterClick}
            className={`cta-3d font-display text-lg md:text-xl px-10 py-4 rounded-lg border-2 uppercase tracking-widest transition-all duration-500 transform hover:scale-105 ${
              isStrangerWorld
                ? 'bg-red-600 border-red-400 text-white animate-pulse-glow hover:bg-red-500'
                : 'bg-blue-600 border-blue-400 text-white animate-pulse-glow hover:bg-blue-500'
                
            }`}
            style={{ perspective: '1000px' }}
          >
            Register Now
          </button>
        </div>

        {/* Countdown Timer */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <CountdownTimer />
        </div>
      </div>

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-falling-star transition-all duration-700 ${
              isStrangerWorld ? 'bg-red-500' : 'bg-primary'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
