"use client";

export default function ShowsCtaSection() {
  const shows = [
    { name: "CLOUD & AI\nINFRASTRUCTURE", color: "#E8505B", icon: "☁️" },
    { name: "DEVOPS\nLIVE", color: "#FF6B35", icon: "⚡" },
    { name: "CYBER SECURITY\nWORLD", color: "#7B68EE", icon: "🛡️" },
    { name: "DATA CENTRE\nWORLD", color: "#4ECDC4", icon: "🏢" },
    { name: "BIG DATA\n& AI WORLD", color: "#95E616", icon: "📊" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0a2e 0%, #000 100%)",
        padding: "100px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "24px",
            lineHeight: 1.3,
          }}
        >
          Tech Week Singapore will return from 29-30 September 2026
        </h2>

        <p style={{ fontSize: "16px", color: "#ccc", marginBottom: "8px" }}>
          Tech Week Singapore brings together five incredible events, including
        </p>
        <p style={{ fontSize: "15px", color: "#aaa", marginBottom: "32px" }}>
          Cloud & AI Infrastructure Asia, DevOps Live, Cyber Security World
          Asia, Big Data & AI World Asia & Data Centre World Asia
        </p>

        <p
          style={{
            color: "#C8D433",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "48px",
          }}
        >
          Select your preferred show below for more details:
        </p>

        {/* Show Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {shows.map((show) => (
            <a
              key={show.name}
              href="#"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                color: "white",
                textDecoration: "none",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <span
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${show.color}, ${show.color}88)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                {show.icon}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  lineHeight: 1.4,
                }}
              >
                {show.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
