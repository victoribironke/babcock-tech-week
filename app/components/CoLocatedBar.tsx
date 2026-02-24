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
    <div className="hidden md:block bg-black/90 relative z-10 pt-5 px-4 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-5 pb-5">
        {/* Tech Week Logo */}
        <div className="border border-white px-4 py-2 text-[13px] font-bold tracking-widest leading-tight shrink-0">
          <div>TECH WEEK</div>
          <div className="text-[8px] tracking-[4px] text-center">SINGAPORE</div>
        </div>

        {/* Shows */}
        {shows.map((show) => (
          <a
            key={show.name}
            href="#"
            className="flex items-center gap-2.5 text-white text-[11px] font-bold tracking-wider uppercase hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-base"
              style={{
                background: `linear-gradient(135deg, ${show.color}, ${show.color}88)`,
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
        className="h-1 rounded-sm"
        style={{
          background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
        }}
      />
    </div>
  );
}
