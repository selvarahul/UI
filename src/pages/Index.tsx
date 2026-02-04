import { WorldProvider } from "@/contexts/WorldContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import BackgroundLayer from "@/components/BackgroundLayer";
import { useWorld } from "@/contexts/WorldContext";

const MainContent = () => {
  const { isStrangerWorld } = useWorld();

  return (
    <div className={`min-h-screen relative transition-all duration-700 ${
      isStrangerWorld ? 'stranger-world' : ''
    }`}>
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
  return (
    <WorldProvider>
      <MainContent />
    </WorldProvider>
  );
};

export default Index;
