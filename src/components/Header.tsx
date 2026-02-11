import React, { useState } from "react";
import { useWorld } from "@/contexts/WorldContext";
import veltechLogo from "@/assets/veltech-logo.png";

const Header: React.FC = () => {
  const { isStrangerWorld } = useWorld();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Events", id: "technical-events" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.7s ease",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(12px)",
            background: isStrangerWorld
              ? "rgba(0,0,0,0.8)"
              : "rgba(15,23,42,0.8)",
            borderBottom: `1px solid ${
              isStrangerWorld
                ? "rgba(239,68,68,0.3)"
                : "rgba(59,130,246,0.2)"
            }`,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={veltechLogo}
                alt="Veltech Logo"
                style={{
                  height: "42px",
                  width: "auto",
                }}
              />

              {/* VELTECH MULTITECH — Times New Roman */}
              <p
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: "13px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: isStrangerWorld
                    ? "#ef4444"
                    : "rgba(226,232,240,0.85)",
                  transition: "color 0.3s ease",
                }}
              >
                VELTECH MULTITECH
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: isStrangerWorld
                      ? "#fecaca"
                      : "rgba(226,232,240,0.85)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = isStrangerWorld
                      ? "#ef4444"
                      : "#3b82f6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isStrangerWorld
                      ? "#fecaca"
                      : "rgba(226,232,240,0.85)")
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "none",
              }}
              className="hamburger-btn"
            >
              <div
                style={{
                  width: "26px",
                  height: "2px",
                  background: isStrangerWorld ? "#ef4444" : "#3b82f6",
                  marginBottom: "6px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "2px",
                  background: isStrangerWorld ? "#ef4444" : "#3b82f6",
                  marginBottom: "6px",
                }}
              />
              <div
                style={{
                  width: "26px",
                  height: "2px",
                  background: isStrangerWorld ? "#ef4444" : "#3b82f6",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: isStrangerWorld
                ? "rgba(0,0,0,0.95)"
                : "rgba(15,23,42,0.95)",
              borderBottom: `1px solid ${
                isStrangerWorld
                  ? "rgba(239,68,68,0.3)"
                  : "rgba(59,130,246,0.3)"
              }`,
              padding: "24px",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "12px 0",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  color: isStrangerWorld ? "#fecaca" : "#e5e7eb",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Responsive Control */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .hamburger-btn {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
