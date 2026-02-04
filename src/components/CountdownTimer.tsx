import React, { useState, useEffect } from 'react';
import { useWorld } from '@/contexts/WorldContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const { isStrangerWorld } = useWorld();
  
  // Set target date to 30 days from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className={`countdown-box rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] text-center transition-all duration-700 ${
            isStrangerWorld 
              ? 'border-red-500/50 bg-black/60' 
              : 'border-primary/50 bg-card/50'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`font-display text-3xl md:text-4xl font-bold transition-all duration-700 ${
            isStrangerWorld ? 'text-red-500 text-glow' : 'text-primary text-glow'
          }`}>
            {formatNumber(unit.value)}
          </div>
          <div className={`font-body text-xs uppercase tracking-wider mt-2 transition-all duration-700 ${
            isStrangerWorld ? 'text-red-200/60' : 'text-muted-foreground'
          }`}>
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
