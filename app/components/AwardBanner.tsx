"use client";

export default function AwardBanner() {
  return (
    <section
      style={{
        background: "#000",
        padding: "40px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background:
            "linear-gradient(135deg, #1a0a00 0%, #2a1a05 30%, #1a0a00 60%, #2a1a05 100%)",
          border: "1px solid #c9a530",
          borderRadius: "8px",
          padding: "32px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left laurels */}
        <span style={{ fontSize: "40px" }}>🏆</span>

        {/* SMA Logo Area */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "6px",
              lineHeight: 1,
            }}
          >
            SMA
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#c9a530",
              letterSpacing: "2px",
              marginTop: "4px",
            }}
          >
            2025
          </div>
          <div
            style={{
              fontSize: "8px",
              color: "#888",
              letterSpacing: "2px",
              marginTop: "4px",
              textTransform: "uppercase",
            }}
          >
            Singapore MICE Awards
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "60px", background: "#c9a530" }} />

        {/* Award Text */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "12px",
              color: "#c9a530",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Winner
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#c9a530",
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: 1.2,
              marginTop: "4px",
            }}
          >
            LARGE TRADE SHOW OF THE YEAR
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#aaa",
              marginTop: "6px",
              letterSpacing: "1px",
            }}
          >
            TECH WEEK SINGAPORE 2024
          </div>
          <div
            style={{
              fontSize: "9px",
              color: "#666",
              marginTop: "2px",
              letterSpacing: "1px",
            }}
          >
            CLOSERSTILL MEDIA
          </div>
        </div>

        {/* Right trophy */}
        <span style={{ fontSize: "40px" }}>🏆</span>
      </div>
    </section>
  );
}
