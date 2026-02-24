"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Tech Week Singapore Conference"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          padding: "0 20px",
          marginTop: "60px",
        }}
      >
        {/* Main Logo Text */}
        <h1
          style={{
            fontSize: "clamp(48px, 6vw, 80px)",
            fontWeight: 800,
            letterSpacing: "12px",
            lineHeight: 1.1,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          TECH WEEK
        </h1>

        {/* SINGAPORE subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "-20px",
          }}
        >
          <div style={{ height: "2px", width: "80px", background: "white" }} />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "12px",
              textTransform: "uppercase",
            }}
          >
            SINGAPORE
          </span>
          <div style={{ height: "2px", width: "80px", background: "white" }} />
        </div>

        {/* Date & Venue */}
        <p
          style={{
            fontSize: "22px",
            fontWeight: 400,
            marginTop: "8px",
            letterSpacing: "1px",
          }}
        >
          29-30 September 2026, Sands Expo Convention Centre
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              background: "rgba(0,0,0,0.85)",
              color: "white",
              padding: "18px 40px",
              borderRadius: "80px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.85)";
            }}
          >
            EXHIBIT NOW
          </a>
          <a
            href="#"
            style={{
              background: "white",
              color: "black",
              padding: "18px 40px",
              borderRadius: "80px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            REGISTER INTEREST FOR 2026
          </a>
        </div>
      </div>
    </section>
  );
}
