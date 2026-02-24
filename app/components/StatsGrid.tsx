import Image from "next/image";

const stats = [
  { number: "28,526", label: "attendees visited Tech Week Singapore 2025" },
  { number: "488+", label: "International speakers and thought-leaders" },
  { number: "466+", label: "Global tech and solution providers" },
  { number: "80%", label: "would attend again in 2026" },
];

const images = [
  { src: "/images/stats-1.png", alt: "Conference hall crowd" },
  { src: "/images/stats-2.png", alt: "Speakers on stage" },
  { src: "/images/stats-3.png", alt: "Exhibition floor" },
  { src: "/images/stats-4.png", alt: "Audience participation" },
];

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="stat-card"
      style={{
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "24px",
        padding: "48px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "48px", fontWeight: 700, marginBottom: "12px" }}>
        {number}
      </div>
      <div style={{ fontSize: "14px", color: "#ccc", lineHeight: 1.5 }}>
        {label}
      </div>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="stat-image"
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        minHeight: "220px",
        aspectRatio: "4/3",
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section
      style={{
        background: "#000",
        padding: "80px 40px",
      }}
    >
      <div
        className="stats-grid"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "20px",
        }}
      >
        {/* Row 1: Stat, Image, Stat, Image */}
        <StatCard number={stats[0].number} label={stats[0].label} />
        <ImageCard src={images[0].src} alt={images[0].alt} />
        <StatCard number={stats[1].number} label={stats[1].label} />
        <ImageCard src={images[1].src} alt={images[1].alt} />

        {/* Row 2: Image, Stat, Image, Stat */}
        <ImageCard src={images[2].src} alt={images[2].alt} />
        <StatCard number={stats[2].number} label={stats[2].label} />
        <ImageCard src={images[3].src} alt={images[3].alt} />
        <StatCard number={stats[3].number} label={stats[3].label} />
      </div>
    </section>
  );
}
