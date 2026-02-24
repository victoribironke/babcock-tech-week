"use client";

export default function NewsSection() {
  const articles = [
    {
      title:
        "Tech Week Singapore 2025: Government leaders and tech giants converge to discuss the impact of AI",
      date: "22 Sept 2025",
      source: "Tech Week Singapore",
      excerpt:
        "Guest of Honour Mr Tan Kiat How, Senior Minister of State for Digital Development and Information will be speaking at the opening ceremony...",
      image: "/images/hero-bg.png",
    },
    {
      title:
        "Tech Week Singapore 2025: Tech and AI converge with key sectors to power innovations across the region",
      date: "13 Aug 2025",
      source: "",
      excerpt:
        "Tech Week Singapore returns this October with Guest of Honour, Mr Tan Kiat How, Senior Minister of State for Digital Development and Information...",
      image: "/images/stats-1.png",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f5f5ff 0%, #ffffff 100%)",
        padding: "100px 40px",
        color: "#000",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="news-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          {articles.map((article, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              {/* Article Image */}
              <div
                style={{
                  width: "100%",
                  height: "260px",
                  background: `url(${article.image}) center/cover no-repeat`,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Article Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: "12px",
                    color: "#111",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "12px",
                  }}
                >
                  {article.date}
                  {article.source && ` | ${article.source}`}
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {article.excerpt}
                </p>

                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#000",
                    textDecoration: "underline",
                  }}
                >
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
