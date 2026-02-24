"use client";

const shows = [
  { name: "CLOUD & AI INFRASTRUCTURE", color: "#E8505B", icon: "☁️" },
  { name: "DEV OPS LIVE", color: "#FF6B35", icon: "⚡" },
  { name: "CYBER SECURITY WORLD", color: "#7B68EE", icon: "🛡️" },
  { name: "BIG DATA & AI WORLD", color: "#4ECDC4", icon: "📊" },
  { name: "DATA CENTRE WORLD", color: "#95E616", icon: "🏢" },
];

const gradientColors = [
  "#95E616",
  "#4ECDC4",
  "#FF6B35",
  "#E8505B",
  "#7B68EE",
  "#00BCD4",
];

export default function CoLocatedBar() {
  return (
    <div
      className="colocated-bar"
      style={{
        background: "rgba(0,0,0,0.9)",
        padding: "20px 40px 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Tech Week Logo */}
        <div
          style={{
            border: "1px solid white",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            lineHeight: 1.3,
            flexShrink: 0,
          }}
        >
          <div>TECH WEEK</div>
          <div
            style={{
              fontSize: "8px",
              letterSpacing: "4px",
              textAlign: "center",
            }}
          >
            SINGAPORE
          </div>
        </div>

        {/* Shows */}
        {shows.map((show) => (
          <a
            key={show.name}
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${show.color}, ${show.color}88)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              {show.icon}
            </span>
            {show.name}
          </a>
        ))}
      </div>

      {/* Gradient Line */}
      <div
        style={{
          height: "4px",
          background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
