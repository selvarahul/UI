import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface WorldContextType {
  isStrangerWorld: boolean;
  flippedCardId: string | null;
  flipCard: (cardId: string | null) => void;
}

const WorldContext = createContext<WorldContextType | undefined>(undefined);

export const WorldProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const flipCard = useCallback((cardId: string | null) => {
    setFlippedCardId(cardId);
  }, []);

  const isStrangerWorld = flippedCardId !== null;

  return (
    <WorldContext.Provider value={{ isStrangerWorld, flippedCardId, flipCard }}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = (): WorldContextType => {
  const context = useContext(WorldContext);
  if (context === undefined) {
    throw new Error('useWorld must be used within a WorldProvider');
  }
  return context;
};
