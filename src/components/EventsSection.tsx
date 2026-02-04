import React from 'react';
import { useWorld } from '@/contexts/WorldContext';
import EventCard from './EventCard';
import { Code, Brain, BookOpen, Zap, Search, Puzzle, Link } from 'lucide-react';

const technicalEvents = [
  {
    id: 'hack-the-gate',
    title: 'Hack the Gate',
    description: 'Break through digital barriers in this intense 24-hour hackathon. Build innovative solutions and compete for glory in the upside down of code.',
    icon: <Code className="w-12 h-12" />,
  },
  {
    id: 'mindflayer-quest',
    title: 'Mindflayer Quest',
    description: 'Navigate through complex algorithms and data structures. Solve mind-bending puzzles that test your computational thinking.',
    icon: <Brain className="w-12 h-12" />,
  },
  {
    id: 'upside-down-chronicles',
    title: 'Upside-Down Chronicles',
    description: 'Present your research and innovations in this paper presentation event. Share your discoveries from the depths of technology.',
    icon: <BookOpen className="w-12 h-12" />,
  },
  {
    id: 'code-rift',
    title: 'Code Rift',
    description: 'Speed coding challenge where time bends and logic twists. Race against the clock in this competitive programming showdown.',
    icon: <Zap className="w-12 h-12" />,
  },
];

const nonTechnicalEvents = [
  {
    id: 'hawkins-hunt',
    title: 'Hawkins Hunt',
    description: 'Embark on an epic treasure hunt across campus. Decode clues, solve mysteries, and find hidden portals to the prize.',
    icon: <Search className="w-12 h-12" />,
  },
  {
    id: 'vecnas-patterns',
    title: "Vecna's Patterns",
    description: 'Test your logical thinking with pattern recognition challenges. Uncover the hidden sequences before time runs out.',
    icon: <Puzzle className="w-12 h-12" />,
  },
  {
    id: 'weknots',
    title: 'WeKnots',
    description: 'Team building and networking event. Form connections, build alliances, and strengthen bonds in this collaborative experience.',
    icon: <Link className="w-12 h-12" />,
  },
];

const EventsSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  return (
    <>
      {/* Technical Events */}
      <section id="technical-events" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-wider mb-4 transition-all duration-700 ${
              isStrangerWorld ? 'text-red-500 text-glow' : 'text-foreground text-glow'
            }`}>
              Technical Events
            </h2>
            <p className={`font-body text-lg transition-all duration-700 ${
              isStrangerWorld ? 'text-red-200/60' : 'text-muted-foreground'
            }`}>
              Dive into the depths of technology
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {technicalEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                icon={event.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Technical Events */}
      <section id="non-technical-events" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-wider mb-4 transition-all duration-700 ${
              isStrangerWorld ? 'text-red-500 text-glow' : 'text-foreground text-glow'
            }`}>
              Non-Technical Events
            </h2>
            <p className={`font-body text-lg transition-all duration-700 ${
              isStrangerWorld ? 'text-red-200/60' : 'text-muted-foreground'
            }`}>
              Beyond the code lies adventure
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {nonTechnicalEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                icon={event.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
