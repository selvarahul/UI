import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import EventCard from "./EventCard";
import { Code, Brain, BookOpen, Zap, Search, Puzzle, Link } from "lucide-react";

const technicalEvents = [
  {
    id: "hack-the-gate",
    title: "Hack the Gate",
    description:
      "Break through digital barriers in this intense 24-hour hackathon. Build innovative solutions and compete for glory in the upside down of code.",
    icon: <Code size={48} />,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf720nE6suk83cUnnbU8f5ceCJsubffLP_-NHrg3ZZMbvvrtQ/viewform?usp=dialog",
  },
  {
    id: "mindflayer-quest",
    title: "Mindflayer Quest",
    description:
      "Navigate through complex algorithms and data structures. Solve mind-bending puzzles that test your computational thinking.",
    icon: <Brain size={48} />,
    formUrl: "https://forms.gle/MINDFLAYER_FORM",
  },
  {
    id: "upside-down-chronicles",
    title: "Upside-Down Chronicles",
    description:
      "Present your research and innovations in this paper presentation event. Share your discoveries from the depths of technology.",
    icon: <BookOpen size={48} />,
    formUrl: "https://forms.gle/PAPER_PRESENTATION_FORM",
  },
  {
    id: "code-rift",
    title: "Code Rift",
    description:
      "Speed coding challenge where time bends and logic twists. Race against the clock in this competitive programming showdown.",
    icon: <Zap size={48} />,
    formUrl: "https://forms.gle/CODE_RIFT_FORM",
  },
];

const nonTechnicalEvents = [
  {
    id: "hawkins-hunt",
    title: "Hawkins Hunt",
    description:
      "Embark on an epic treasure hunt across campus. Decode clues, solve mysteries, and find hidden portals to the prize.",
    icon: <Search size={48} />,
    formUrl: "https://forms.gle/HAWKINS_HUNT_FORM",
  },
  {
    id: "vecnas-patterns",
    title: "Vecna's Patterns",
    description:
      "Test your logical thinking with pattern recognition challenges. Uncover the hidden sequences before time runs out.",
    icon: <Puzzle size={48} />,
    formUrl: "https://forms.gle/VECNAS_PATTERNS_FORM",
  },
  {
    id: "weknots",
    title: "WeKnots",
    description:
      "Team building and networking event. Form connections, build alliances, and strengthen bonds in this collaborative experience.",
    icon: <Link size={48} />,
    formUrl: "https://forms.gle/WEKNOTS_FORM",
  },
];

const EventsSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');
        `}
      </style>

      {/* TECHNICAL EVENTS */}
      <section
        id="technical-events"
        style={{
          padding: "100px 20px",
          fontFamily: "'Irish Grover', cursive",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                letterSpacing: "0.15em",
                marginBottom: "12px",
                color: isStrangerWorld ? "#ef4444" : "#e5e7eb",
                textShadow: "0 0 12px rgba(255,0,0,0.6)",
              }}
            >
              Technical Events
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: isStrangerWorld
                  ? "rgba(255,150,150,0.6)"
                  : "rgba(200,200,200,0.7)",
              }}
            >
              Dive into the depths of technology
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {technicalEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                icon={event.icon}
                formUrl={event.formUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NON-TECHNICAL EVENTS */}
      <section
        id="non-technical-events"
        style={{
          padding: "100px 20px",
          fontFamily: "'Irish Grover', cursive",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                letterSpacing: "0.15em",
                marginBottom: "12px",
                color: isStrangerWorld ? "#ef4444" : "#e5e7eb",
                textShadow: "0 0 12px rgba(255,0,0,0.6)",
              }}
            >
              Non-Technical Events
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: isStrangerWorld
                  ? "rgba(255,150,150,0.6)"
                  : "rgba(200,200,200,0.7)",
              }}
            >
              Beyond the code lies adventure
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {nonTechnicalEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                icon={event.icon}
                formUrl={event.formUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
