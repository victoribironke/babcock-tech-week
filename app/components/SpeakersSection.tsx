"use client";

import { useState } from "react";
import Image from "next/image";

const speakers = [
  {
    name: "Dr. Aik Beng Ng",
    title: "Senior Regional Manager",
    company: "NVIDIA AI Technology Center",
    image: "/images/speaker-1.png",
  },
  {
    name: "Dr. David R. Hardoon",
    title: "Global Head, AI Enablement",
    company: "Standard Chartered",
    image: "/images/speaker-1.png",
  },
  {
    name: "Amy Jean Doherty",
    title: "Chief Technology Officer",
    company: "OpenAI APAC",
    image: "/images/speaker-1.png",
  },
];

export default function SpeakersSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f0f0ff 0%, #ffffff 50%, #f5f5ff 100%)",
        padding: "100px 40px",
        color: "#000",
      }}
    >
      <div
        className="speakers-grid"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* Left: Speakers Carousel */}
        <div>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "40px",
              color: "#000",
            }}
          >
            2025 Mainstage Speakers
          </h2>

          <div
            className="speakers-carousel"
            style={{ display: "flex", gap: "20px", overflow: "hidden" }}
          >
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="speaker-card"
                style={{
                  minWidth: "260px",
                  flex: "0 0 260px",
                  border: "1px solid #ddd",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  transform: `translateX(-${active * 280}px)`,
                }}
              >
                <div style={{ position: "relative", height: "260px" }}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    {speaker.name}
                  </h4>
                  <p
                    style={{ fontSize: "13px", color: "#666", lineHeight: 1.5 }}
                  >
                    {speaker.title},{" "}
                    <strong style={{ color: "#333" }}>{speaker.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "24px",
              justifyContent: "center",
            }}
          >
            {speakers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  width: idx === active ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: idx === active ? "#333" : "#ccc",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div style={{ paddingTop: "20px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "32px",
              color: "#000",
              lineHeight: 1.2,
            }}
          >
            Bright Minds, Bold Ideas.
          </h2>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#333",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#000",
                display: "inline-block",
              }}
            />
            THE MAINSTAGE
          </div>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            The Mainstage at Tech Week Singapore brought a powerhouse lineup of
            visionaries, from pioneering technologists and enterprise leaders to
            government influencers and ecosystem builders representing NVIDIA,
            OpenAI, The World Bank Group and more.
          </p>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#333",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#C8D433",
                display: "inline-block",
              }}
            />
            GUEST-OF-HONOUR
          </div>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#000",
              color: "white",
              padding: "16px 36px",
              borderRadius: "80px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              marginTop: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#333";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000";
            }}
          >
            MAINSTAGE PROGRAMME 2025
          </a>
        </div>
      </div>
    </section>
  );
}
