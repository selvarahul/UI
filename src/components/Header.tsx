import React from 'react';
import { useWorld } from '@/contexts/WorldContext';

const Header: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700">
      <div className={`backdrop-blur-md border-b transition-all duration-700 ${
        isStrangerWorld 
          ? 'bg-black/80 border-red-500/30' 
          : 'bg-background/80 border-primary/20'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`font-display text-2xl font-bold tracking-wider transition-all duration-700 ${
              isStrangerWorld ? 'text-red-500 text-glow' : 'text-primary text-glow'
            }`}>
              INNOVATE<span className="text-foreground">8</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Events', id: 'technical-events' },
              { label: 'Contact Us', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-body text-sm uppercase tracking-widest nav-link-glow transition-all duration-300 ${
                  isStrangerWorld 
                    ? 'text-red-100 hover:text-red-400' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
