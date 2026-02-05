import React from "react";
import { useWorld } from "@/contexts/WorldContext";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const coordinators = [
    {
      type: "Staff Coordinator",
      name: "Dr. John Smith",
      phone: "+91 98765 43210",
      email: "john.smith@college.edu",
    },
    {
      type: "Student Coordinator",
      name: "Jane Doe",
      phone: "+91 98765 43211",
      email: "jane.doe@college.edu",
    },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');
        `}
      </style>

      <section
        id="contact"
        style={{
          padding: "70px 20px", // 🔽 reduced top spacing
          fontFamily: "'Irish Grover', cursive",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Heading */}
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
              Contact Us
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: isStrangerWorld
                  ? "rgba(255,150,150,0.6)"
                  : "rgba(200,200,200,0.7)",
              }}
            >
              Connect with the coordinators
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Coordinator Cards */}
            {coordinators.map((coord, index) => (
              <div
                key={index}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  border: `2px solid ${
                    isStrangerWorld
                      ? "rgba(239,68,68,0.4)"
                      : "rgba(59,130,246,0.3)"
                  }`,
                  background: isStrangerWorld
                    ? "rgba(0,0,0,0.6)"
                    : "rgba(30,41,59,0.6)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.5s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    letterSpacing: "0.1em",
                    marginBottom: "16px",
                    color: isStrangerWorld ? "#f87171" : "#60a5fa",
                  }}
                >
                  {coord.type}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "12px",
                    color: isStrangerWorld ? "#fee2e2" : "#e5e7eb",
                  }}
                >
                  {coord.name}
                </p>

                <a
                  href={`tel:${coord.phone}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    marginBottom: "8px",
                    textDecoration: "none",
                    color: isStrangerWorld
                      ? "rgba(252,165,165,0.8)"
                      : "rgba(203,213,225,0.9)",
                  }}
                >
                  <Phone size={16} />
                  {coord.phone}
                </a>

                <a
                  href={`mailto:${coord.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: isStrangerWorld
                      ? "rgba(252,165,165,0.8)"
                      : "rgba(203,213,225,0.9)",
                  }}
                >
                  <Mail size={16} />
                  {coord.email}
                </a>
              </div>
            ))}

            {/* Follow Us */}
            <div
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: `2px solid ${
                  isStrangerWorld
                    ? "rgba(239,68,68,0.4)"
                    : "rgba(59,130,246,0.3)"
                }`,
                background: isStrangerWorld
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(30,41,59,0.6)",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  letterSpacing: "0.1em",
                  color: isStrangerWorld ? "#f87171" : "#60a5fa",
                }}
              >
                Follow Us
              </h3>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  border: `1px solid ${
                    isStrangerWorld
                      ? "rgba(239,68,68,0.3)"
                      : "rgba(59,130,246,0.3)"
                  }`,
                  color: isStrangerWorld ? "#fecaca" : "#e5e7eb",
                }}
              >
                <Instagram size={24} />
                @innovate8_cse
              </a>
            </div>

            {/* Find Us */}
            <div
              style={{
                padding: "24px",
                borderRadius: "16px",
                border: `2px solid ${
                  isStrangerWorld
                    ? "rgba(239,68,68,0.4)"
                    : "rgba(59,130,246,0.3)"
                }`,
                background: isStrangerWorld
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(30,41,59,0.6)",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  letterSpacing: "0.1em",
                  color: isStrangerWorld ? "#f87171" : "#60a5fa",
                }}
              >
                Find Us
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  color: isStrangerWorld
                    ? "rgba(254,202,202,0.8)"
                    : "rgba(203,213,225,0.8)",
                  fontSize: "14px",
                }}
              >
                <MapPin size={18} />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vel+Tech+Rangarajan+Dr+Sagunthala+R%26D+Institute+of+Science+and+Technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>
                    Department of CSE VTMT<br />
                    Engineering College,<br />
                    City, State - 600001
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "80px",
              paddingTop: "24px",
              textAlign: "center",
              borderTop: `1px solid ${
                isStrangerWorld
                  ? "rgba(239,68,68,0.3)"
                  : "rgba(59,130,246,0.3)"
              }`,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                letterSpacing: "0.05em",
                color: isStrangerWorld ? "#fecaca" : "#e0f2fe",
                textShadow: isStrangerWorld
                  ? "0 0 8px rgba(239,68,68,0.6)"
                  : "0 0 8px rgba(59,130,246,0.5)",
              }}
            >
              <span style={{ opacity: 0.7 }}>Special thanks to</span>
              <br />
              <strong style={{ fontSize: "15px" }}>
                Dr. R. Saravanan, M.E., Ph.D.
              </strong>
              <br />
              <span style={{ opacity: 0.75 }}>
                Head of the Department
              </span>
            </p>

            <p
              style={{
                fontSize: "14px",
                color: isStrangerWorld
                  ? "rgba(252,165,165,0.5)"
                  : "rgba(203,213,225,0.6)",
              }}
            >
              © 2026 INNOVATE8 - Department of Computer Science and Engineering
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
