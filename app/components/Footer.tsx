"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#000", color: "white" }}>
      {/* Newsletter Section */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "60px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}
          >
            Stay Updated
          </h3>
          <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "24px" }}>
            Subscribe to our newsletter for the latest updates on Tech Week
            Singapore.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: "80px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "14px",
                outline: "none",
                maxWidth: "360px",
              }}
            />
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "80px",
                background: "white",
                color: "black",
                border: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e0e0e0")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Co-Located Shows Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          {[
            "Cloud & AI Infrastructure",
            "Dev Ops Live",
            "Cyber Security World",
            "Big Data & AI World",
            "Data Centre World",
          ].map((show) => (
            <a
              key={show}
              href="#"
              style={{
                color: "#aaa",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {show}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
        }}
      >
        {/* Venue & Dates */}
        <div>
          <h4
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            VENUE & DATES
          </h4>
          <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.8 }}>
            TUESDAY 29 SEPTEMBER 2026
            <br />
            09:00 - 17:00 SGT
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#aaa",
              lineHeight: 1.8,
              marginTop: "8px",
            }}
          >
            WEDNESDAY 30 SEPTEMBER 2026
            <br />
            09:00 - 17:00 SGT
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#aaa",
              lineHeight: 1.8,
              marginTop: "12px",
              fontWeight: 600,
            }}
          >
            SANDS EXPO CONVENTION CENTER, SINGAPORE
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            QUICK LINKS
          </h4>
          {[
            "CONTACT US",
            "REGISTER YOUR INTEREST 2026",
            "EXHIBIT AT THE SHOW",
            "ABOUT CLOSERSTILL MEDIA",
          ].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#aaa",
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Global Portfolio */}
        <div>
          <h4
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            GLOBAL PORTFOLIO
          </h4>
          {[
            "TECH SHOW LONDON",
            "TECH WEEK SINGAPORE",
            "TECH WEEK SHANGHAI",
            "TECH SHOW MADRID",
            "TECH SHOW PARIS",
          ].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#aaa",
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Organised By + Social */}
        <div>
          <h4
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            ORGANISED BY
          </h4>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "20px",
              letterSpacing: "2px",
            }}
          >
            CloserStill Media
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "16px" }}>
            {["Facebook", "LinkedIn", "YouTube", "Instagram"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#aaa",
                    fontSize: "14px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "white";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "#aaa";
                  }}
                >
                  {platform[0]}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            fontSize: "12px",
            color: "#666",
          }}
        >
          {[
            "© Copyright 2025",
            "Privacy Policy",
            "Sitemap",
            "Terms & Conditions",
            "Cookie Policy",
            "Accessibility Statement",
          ].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "#666", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#aaa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
