import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import EventCard from "./EventCard";
import { Code, Brain, BookOpen, Zap, Search, Puzzle, Link } from "lucide-react";

const technicalEvents = [
  {
    id: "hack-the-gate",
    title: "Hack the Gate",
    description:
      "Hack The Gate is a technical event where teams solve debugging problems, develop solutions, and design simple UI/UX in different rounds. It challenges participants to think smart, work fast, and prove their real technical skills.",
    icon: <Code size={48} />,
    formUrl: "https://docs.google.com/forms/d/1-qiJYnGQGyfAgg1kAc2BHP44DZOFJDXJbU1BXGwk54w/edit",
  },
  {
    id: "mindflayer-quest",
    title: "Mindflayer Quest",
    description:
      "A brain‑twisting quiz where riddles, patterns, and logic are your weapons. Step into the Mind Flayer’s lair, face its challenges, and prove your intellect can survive the darkness. Only the sharpest minds escape unscathed.",
    icon: <Brain size={48} />,
    formUrl: "https://docs.google.com/forms/d/1fyMRenpf7ZIqVtUAkJZSuvf6k5lo7NnPFcEQlOeLhd8/edit?pli=1ttps://forms.gle/MINDFLAYER_FORM",
  },
  {
    id: "upside-down-chronicles",
    title: "Upside-Down Chronicles",
    description:
      "A technical paper presentation where original ideas face critical questioning. Defend your research, justify your logic, and prove your innovation can survive the Upside Down.",
    icon: <BookOpen size={48} />,
    formUrl: "https://docs.google.com/forms/d/1DKmmFDW4hqOLsVkJcrW1PYyROeKdGEKCc70V6hlafjg/edit",
  },
  {
    id: "code-rift",
    title: "Code Rift",
    description:
      "Vibe Coding Contest tests your coding skills, logical thinking, and ability to build a working application within a limited time. Participants can use approved AI tools but must show originality and clearly explain their code.",
    icon: <Zap size={48} />,
    formUrl: "https://docs.google.com/forms/d/1YqRTE-uqpV541EIAAKjwas2Ma5Rq_xBSv7e1B5O0TLQ/edit",
  },
];

const nonTechnicalEvents = [
  {
    id: "hawkins-hunt",
    title: "Hawkins Hunt",
    description:
      "Embark on an epic treasure hunt across campus. Decode clues, solve mysteries, and find hidden portals to the prize.",
    icon: <Search size={48} />,
    formUrl: "https://docs.google.com/forms/d/1SRH0Kxn8FUDuRHCl_X-jrJMIZXQiYFVYrD3krZXbfYA/edit",
  },
  {
    id: "vecnas-patterns",
    title: "Vecna's Patterns",
    description:
      " A mind‑bending clue‑connecting challenge. Every hint is a thread in a larger puzzle—connect them right, or get lost in the shadows. Sharpen your observation, test your logic, and prove your mind can unravel the mysteries of Hawkins.",
    icon: <Puzzle size={48} />,
    formUrl: "https://docs.google.com/forms/d/14kS37XAQ0_cYMrU1G5Obn2XtlMhTy-ciAVnsR4ey_Po/edit",
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
                textShadow: "0 0 12px #ff000099",
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
