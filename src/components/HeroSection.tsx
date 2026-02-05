import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import CountdownTimer from "./CountdownTimer";

import titleNormal1 from "@/assets/normalworld.png";
import titleNormal2 from "@/assets/normalworld1.png";

const HeroSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const handleRegisterClick = () => {
    const section = document.getElementById("technical-events");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "120px 20px 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "'Irish Grover', cursive",
        overflow: "hidden",
      }}
    >
      {/* Google Font Import (INLINE SAFE) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          @keyframes fall {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(600px); opacity: 0; }
          }
        `}
      </style>

      <div
        style={{
          textAlign: "center",
          maxWidth: "1200px",
          zIndex: 2,
        }}
      >
        {/* Subtitle */}
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
            color: isStrangerWorld
              ? "rgba(255,120,120,0.85)"
              : "rgba(120,170,255,0.85)",
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        >
          Department of Computer Science and Engineering proudly presents
        </p>

        {/* ✅ TITLE IMAGE SWITCH (PERFECTLY CENTERED & RESPONSIVE) */}
        <div
          style={{
            position: "relative",
            marginBottom: "24px",
            width: "100%",
            maxWidth: "720px",
            marginInline: "auto",
          }}
        >
          {/* Normal World */}
          <img
            src={titleNormal1}
            alt="Normal World"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              transition: "all 0.7s ease",
              opacity: isStrangerWorld ? 0 : 1,
              transform: isStrangerWorld ? "scale(0.95)" : "scale(1)",
              position: isStrangerWorld ? "absolute" : "relative",
              inset: 0,
            }}
          />

          {/* Stranger World */}
          <img
            src={titleNormal2}
            alt="Stranger World"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              transition: "all 0.7s ease",
              opacity: isStrangerWorld ? 1 : 0,
              transform: isStrangerWorld ? "scale(1)" : "scale(1.05)",
              position: isStrangerWorld ? "relative" : "absolute",
              inset: 0,
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "26px",
            letterSpacing: "0.2em",
            marginBottom: "48px",
            color: isStrangerWorld
              ? "rgba(255,80,80,0.9)"
              : "rgba(120,170,255,0.9)",
            opacity: 0,
            animation: "fadeIn 1s forwards 0.4s",
          }}
        >
          Upside Down of Innovation
        </p>

        {/* CTA Button */}
        <button
          onClick={handleRegisterClick}
          style={{
            padding: "16px 40px",
            fontSize: "18px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            borderRadius: "10px",
            cursor: "pointer",
            border: `2px solid ${
              isStrangerWorld ? "#f87171" : "#60a5fa"
            }`,
            background: isStrangerWorld ? "#b91c1c" : "#1e40af",
            color: "#fff",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.07)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Register Now
        </button>

        {/* Countdown */}
        <div style={{ marginTop: "50px" }}>
          <CountdownTimer />
        </div>
      </div>

      {/* Falling Stars */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: isStrangerWorld ? "red" : "#60a5fa",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animation: `fall ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
