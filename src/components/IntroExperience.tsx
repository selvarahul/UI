import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import upsideDownPortal from '@/assets/upside-down-portal.jpg';

interface IntroExperienceProps {
  onComplete: () => void;
}

const IntroExperience = ({ onComplete }: IntroExperienceProps) => {
  const [phase, setPhase] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);

    try {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        30,
        audioContext.currentTime + 2
      );
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 2
      );
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 2);

      const oscillator2 = audioContext.createOscillator();
      const gainNode2 = audioContext.createGain();
      oscillator2.connect(gainNode2);
      gainNode2.connect(audioContext.destination);
      oscillator2.type = "sawtooth";
      oscillator2.frequency.setValueAtTime(
        800,
        audioContext.currentTime + 0.5
      );
      oscillator2.frequency.exponentialRampToValueAtTime(
        200,
        audioContext.currentTime + 1.5
      );
      gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode2.gain.linearRampToValueAtTime(
        0.08,
        audioContext.currentTime + 0.6
      );
      gainNode2.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 1.5
      );
      oscillator2.start(audioContext.currentTime + 0.5);
      oscillator2.stop(audioContext.currentTime + 1.5);
    } catch {
      console.log("Audio not available");
    }

    setTimeout(() => setPhase(1), 500);
    setTimeout(() => onComplete(), 3500);
  };

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-void flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-void/50 to-void" />

        {/* Blue ambient light */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, hsl(220 90% 35% / 0.15) 0%, transparent 60%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background:
                  'radial-gradient(circle, hsl(220 90% 65% / 0.6) 0%, hsl(220 90% 45% / 0.2) 100%)',
                boxShadow: '0 0 4px hsl(220 90% 60% / 0.5)',
              }}
              animate={{
                y: [0, -200, -400],
                x: [0, Math.sin(p.id) * 50, Math.sin(p.id) * 100],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Veins */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M0,100 Q100,80 150,150 T250,100 T400,200"
            stroke="hsl(220 90% 45%)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.path
            d="M800,50 Q700,100 650,80 T500,150 T350,100"
            stroke="hsl(220 90% 40%)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </svg>

        {/* Phase 0 */}
        <AnimatePresence>
          {phase === 0 && !isEntering && (
            <motion.div className="text-center relative">
             <motion.button
                  onClick={handleEnter}
                  style={{ fontFamily: "'Irish Grover', cursive" }}
                  className="relative text-3xl md:text-5xl text-blue-400 px-10 py-6 border-2 border-blue-400/60 bg-void/80"
                  animate={{
                    textShadow: [
                      "0 0 10px hsl(220 90% 60% / 0.5)",
                      "0 0 30px hsl(220 90% 60% / 0.8)",
                      "0 0 10px hsl(220 90% 60% / 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ENTER IF YOU DARE
                </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 1 */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.h1
                style={{ fontFamily: "'Irish Grover', cursive" }}
                className="text-5xl md:text-8xl text-blue-400"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(220 90% 60%)",
                    "0 0 5px hsl(220 90% 60%)",
                    "0 0 30px hsl(220 90% 60%)",
                    "none",
                    "0 0 20px hsl(220 90% 60%)",
                  ],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                YOU ARE INVITED...
              </motion.h1>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroExperience;
