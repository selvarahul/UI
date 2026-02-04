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
      {/* Google Font Import */}
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
            fontSize: "16px", // ⬆ increased
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: "26px",
            color: isStrangerWorld
              ? "rgba(255,120,120,0.85)"
              : "rgba(120,170,255,0.85)",
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        >
          Department of Computer Science and Engineering proudly presents
        </p>

        {/* Title Image Switch */}
        <div
          style={{
            position: "relative",
            marginBottom: "28px",
          }}
        >
          <img
            src={titleNormal1}
            alt="Normal World"
            style={{
              width: "760px", // ⬆ slightly bigger
              maxWidth: "92%",
              transition: "all 0.7s ease",
              opacity: isStrangerWorld ? 0 : 1,
              transform: isStrangerWorld ? "scale(0.95)" : "scale(1)",
            }}
          />

          <img
            src={titleNormal2}
            alt="Stranger World"
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: "760px", // ⬆ slightly bigger
              maxWidth: "92%",
              transition: "all 0.7s ease",
              opacity: isStrangerWorld ? 1 : 0,
              transform: isStrangerWorld ? "scale(1)" : "scale(1.05)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "30px", // ⬆ increased
            letterSpacing: "0.22em",
            marginBottom: "54px",
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
            padding: "18px 46px", // ⬆ increased
            fontSize: "20px", // ⬆ increased
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            borderRadius: "12px",
            cursor: "pointer",
            border: `2px solid ${
              isStrangerWorld ? "#f87171" : "#60a5fa"
            }`,
            background: isStrangerWorld ? "#b91c1c" : "#1e40af",
            color: "#fff",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Register Now
        </button>

        {/* Countdown */}
        <div style={{ marginTop: "56px" }}>
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
              width: "5px", // ⬆ slightly bigger
              height: "5px",
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
