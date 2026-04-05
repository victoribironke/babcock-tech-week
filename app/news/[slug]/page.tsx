import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NEWS_ARTICLES } from "../../lib/newsData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Babcock Tech Week`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;

  const currentIndex = NEWS_ARTICLES.findIndex((a) => a.slug === slug);
  if (currentIndex === -1) notFound();

  const article = NEWS_ARTICLES[currentIndex];
  const nextIndex = (currentIndex + 1) % NEWS_ARTICLES.length;
  const nextArticle = NEWS_ARTICLES[nextIndex];

  return (
    <>
      <Header scrollThreshold={60} />
      <main style={{
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)",
        backgroundSize: "32px 32px",
        color: "#000",
        minHeight: "100vh"
      }}>
        {/* SHOW NEWS Banner Bar */}
        <div
          style={{
            background: "#1c1c1c", // Dark grey taken from Singapore Tech Week
            padding: "110px 16px 50px", // Larger size to accommodate transparent header
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#fff",
              margin: 0,
              fontFamily: "'Incompleeta', sans-serif",
            }}
          >
            Show News
          </h1>
        </div>

        {/* Article Content */}
        <article
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "48px 20px 60px",
          }}
        >
          {/* Date */}
          <p
            style={{
              fontSize: 13,
              color: "#999",
              marginBottom: 16,
              fontFamily: "'Google Sans', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {article.date}
          </p>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: 36,
              color: "#111",
              fontFamily: "'Incompleeta', sans-serif",
            }}
          >
            {article.title}
          </h2>

          {/* Hero Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              marginBottom: 40,
              overflow: "hidden",
              borderRadius: 0,
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 860px) 100vw, 860px"
              priority
            />
          </div>

          {/* Article Body Paragraphs */}
          <div
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#333",
              fontFamily: "'Google Sans', sans-serif",
            }}
          >
            {article.content.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: 20 }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#e0e0e0",
              margin: "48px 0 36px",
            }}
          />

          {/* View the article CTA */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 40px",
                border: "2px solid #000",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#000",
                background: "transparent",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "'Google Sans', sans-serif",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              className="view-article-btn"
            >
              View the article
            </a>
          </div>

          {/* Next Article Arrow */}
          <div style={{ textAlign: "center" }}>
            <Link
              href={`/news/${nextArticle.slug}`}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                color: "#666",
                fontSize: 12,
                fontFamily: "'Google Sans', sans-serif",
                letterSpacing: "0.06em",
                transition: "color 0.2s ease",
              }}
              className="next-article-link"
              title={`Next: ${nextArticle.title}`}
            >
              {/* Forward Arrow SVG */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "transform 0.2s ease" }}
                className="next-arrow-icon"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      </main>
      <Footer />

      <style>{`
        .view-article-btn:hover {
          background: #000 !important;
          color: #fff !important;
        }
        .next-article-link:hover {
          color: #000 !important;
        }
        .next-article-link:hover .next-arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}
