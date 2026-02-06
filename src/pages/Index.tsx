import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { WorldProvider } from "@/contexts/WorldContext";
import { useWorld } from "@/contexts/WorldContext";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import BackgroundLayer from "@/components/BackgroundLayer";
import IntroExperience from "@/components/IntroExperience";

const MainContent = () => {
  const { isStrangerWorld } = useWorld();

  return (
    <div
      className={`min-h-screen relative transition-all duration-700 ${
        isStrangerWorld ? "stranger-world" : ""
      }`}
    >
      <BackgroundLayer />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <EventsSection />
        <ContactSection />
      </div>
    </div>
  );
};

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <WorldProvider>
      <AnimatePresence>
        {showIntro && (
          <IntroExperience onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && <MainContent />}
    </WorldProvider>
  );
};

export default Index;
