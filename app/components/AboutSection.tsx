"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      style={{
        background: "#000",
        padding: "100px 40px",
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            height: "500px",
          }}
        >
          <Image
            src="/images/about.png"
            alt="Attendees at Tech Week Singapore"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#C8D433",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Latest Updates
          </h2>

          <h3
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "24px",
              lineHeight: 1.3,
            }}
          >
            Tech Week Singapore: Your Gateway to Asia
          </h3>

          <p
            style={{
              fontSize: "15px",
              color: "#ccc",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Tech Week Singapore is the most important technology event for
            business in Asia.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#ccc",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Over 29,000 business leaders and visionaries across all technology
            verticals come together to attend Tech Week Singapore to learn,
            network and shape their organisation&apos;s future. With over 500
            exhibitors, #TWS is your gateway to placing your brand among leading
            solution providers or breaking into the Asia market.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#ccc",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            Tech Week Singapore will return on{" "}
            <strong style={{ color: "white", textDecoration: "underline" }}>
              29-30 September 2026
            </strong>
            , presenting five co-located events: Cloud & AI Infrastructure Asia,
            DevOps Live!, Cyber Security World Asia, Data Centre World Asia and
            Big Data & AI World Asia.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#ccc",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            <a href="#" style={{ textDecoration: "underline", color: "white" }}>
              eCommerce Expo | DMEXCO Asia
            </a>{" "}
            will return from{" "}
            <strong style={{ color: "white" }}>7-8 April 2027</strong>.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "white",
              color: "black",
              padding: "16px 36px",
              borderRadius: "80px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            BOOK A STAND
          </a>
        </div>
      </div>
    </section>
  );
}
