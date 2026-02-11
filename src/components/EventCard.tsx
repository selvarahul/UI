import React from 'react';
import { useWorld } from '@/contexts/WorldContext';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  formUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  icon,
  formUrl,
}) => {
  const { isStrangerWorld, flippedCardId, flipCard } = useWorld();
  const isFlipped = flippedCardId === id;

  const handleClick = () => {
    flipCard(isFlipped ? null : id);
  };

  return (
    <div
      className="flip-card min-h-[280px] sm:min-h-[320px] cursor-pointer group"
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

        {/* ================= FRONT ================= */}
        <div
          className={`flip-card-front rounded-xl border-2 p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ${
            isStrangerWorld && !isFlipped
              ? 'bg-black/60 border-red-500/40'
              : 'bg-card/60 border-primary/30 card-hover-glow'
          }`}
        >
          <div className="absolute inset-0 stars-bg opacity-20 rounded-xl" />

          {/* ICON */}
          <div
            className={`mb-3 sm:mb-4 transition-all duration-500 ${
              isStrangerWorld ? 'text-red-400' : 'text-primary'
            }`}
          >
            {React.cloneElement(icon, {
              className: 'w-10 h-10 sm:w-12 sm:h-12',
            })}
          </div>

          <h3
            className={`font-display text-lg sm:text-xl font-bold tracking-wide mb-2 sm:mb-3 ${
              isStrangerWorld ? 'text-red-100' : 'text-foreground'
            }`}
          >
            {title}
          </h3>

          <p
            className={`font-body text-xs sm:text-sm ${
              isStrangerWorld ? 'text-red-300/60' : 'text-muted-foreground'
            }`}
          >
            Click to explore
          </p>

          <div
            className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
              isStrangerWorld
                ? 'shadow-[0_0_30px_rgba(239,68,68,0.3),inset_0_0_30px_rgba(239,68,68,0.1)]'
                : 'shadow-[0_0_30px_rgba(96,165,250,0.3),inset_0_0_30px_rgba(96,165,250,0.1)]'
            }`}
          />
        </div>

        {/* ================= BACK ================= */}
        <div className="flip-card-back rounded-xl border-2 border-red-500/60 bg-black/80 p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 red-particles opacity-30" />
          <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-black/40" />

          <div className="relative z-10 w-full max-h-[260px] sm:max-h-[300px] overflow-y-auto px-1 scrollbar-thin scrollbar-thumb-red-500/40">
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-wide mb-3 sm:mb-4 text-red-400 text-glow">
              {title}
            </h3>

            {/* ✅ FULL DESCRIPTION – NO CUT */}
            <p className="font-body text-xs sm:text-sm text-red-100/80 mb-5 leading-relaxed">
              {description}
            </p>

            {/* REGISTER BUTTON */}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block font-display text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-red-600 border border-red-400 text-white uppercase tracking-widest animate-pulse-glow hover:bg-red-500 transition-all duration-300"
            >
              Register Now
            </a>
          </div>

          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-red-500 via-transparent to-red-500 animate-lightning opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
