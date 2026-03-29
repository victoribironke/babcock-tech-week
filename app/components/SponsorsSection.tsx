"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SPONSOR_TIERS, PARTNERS } from "../lib/constants";

// Tier accent colors
const TIER_COLORS: Record<string, { accent: string; badgeBg: string; badgeText: string }> = {
  HEADLINE: { accent: "#374151", badgeBg: "#0a1628", badgeText: "#ffffff" },
  GOLD: { accent: "#d97706", badgeBg: "#d97706", badgeText: "#000000" },
  SILVER: { accent: "#6b7280", badgeBg: "#6b7280", badgeText: "#ffffff" },
  ASSOCIATE: { accent: "#000040", badgeBg: "#000040", badgeText: "#ffffff" },
  EXHIBITOR: { accent: "#0f766e", badgeBg: "#0f766e", badgeText: "#ffffff" },
  MEDIA: { accent: "#4338ca", badgeBg: "#4338ca", badgeText: "#ffffff" },
};

function getTierConfig(tierName: string) {
  for (const key of Object.keys(TIER_COLORS)) {
    if (tierName.includes(key)) return TIER_COLORS[key];
  }
  return { accent: "#0a1628", badgeBg: "#0a1628", badgeText: "#ffffff" };
}

function TierIcon({ tierName }: { tierName: string }) {
  if (tierName.includes("HEADLINE"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    );
  if (tierName.includes("GOLD"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    );
  if (tierName.includes("SILVER"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  if (tierName.includes("ASSOCIATE"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-3-3.87M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="8" cy="7" r="4" />
      </svg>
    );
  if (tierName.includes("EXHIBITOR"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  if (tierName.includes("MEDIA"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  return null;
}

function getCardBg(tierName: string, sponsorBgClass?: string) {
  if (sponsorBgClass) {
    if (sponsorBgClass.includes("teal-950")) return "#042f2e";
    if (sponsorBgClass.includes("black")) return "#000000";
    if (sponsorBgClass.includes("slate-900")) return "#0f172a";
  }
  if (tierName.includes("GOLD")) return "#fef9ef";
  return "#f5f3ef";
}

function getCardBorder(tierName: string, sponsorBgClass?: string) {
  if (sponsorBgClass) return "1px solid transparent";
  if (tierName.includes("GOLD")) return "1px solid #fde68a";
  return "1px solid rgba(0,0,0,0.06)";
}

function getCardSizeClass(tierName: string) {
  if (tierName.includes("HEADLINE")) return "w-full md:w-[520px] h-28 md:h-36";
  if (tierName.includes("EXHIBITOR") || tierName.includes("ASSOCIATE"))
    return "w-[45%] md:w-[220px] h-24 md:h-32";
  return "w-[45%] md:w-[280px] h-24 md:h-36";
}

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sponsor-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const cards = sectionRef.current?.querySelectorAll(".sponsor-fade-in");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 md:px-10 text-black">
      <style>{`
        .sponsor-fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sponsor-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sponsor-card {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sponsor-card .accent-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          height: 3px;
          border-radius: 0 0 2px 2px;
          transform: translateX(-50%) scaleX(0);
          transition: transform 0.4s ease;
          z-index: 10;
        }
        .sponsor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        }
        .sponsor-card:hover .accent-line {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Babcock Tech Week 2026 Sponsors & Partners
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base mb-16 max-w-[600px] mx-auto">
          Babcock Tech Week is made possible by the generous support of our
          sponsors and partners.
        </p>

        {/* Brought to you by */}
        <div className="mb-20 w-full sponsor-fade-in">
          <div className="flex justify-center mb-10">
            <span className="bg-[#0a1628] text-white text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              BROUGHT TO YOU BY
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 w-full">
            {PARTNERS.map((partner, i) => (
              <div
                key={partner.name}
                className="sponsor-card sponsor-fade-in rounded-xl w-[45%] md:w-[280px] h-28 md:h-40 flex items-center justify-center relative overflow-hidden"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  backgroundColor: partner.bgClass?.includes("slate-900") ? "#0f172a" : "#f5f3ef",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span className="accent-line" style={{ background: "#0a1628" }} />
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className={`${partner.name === "IEEE" ? "object-contain p-0" : "object-contain p-4 md:p-8"} ${partner.blend ? "mix-blend-multiply" : ""}`}
                  />
                ) : (
                  <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-800 p-4">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Tiers */}
        {SPONSOR_TIERS.map((tier, i) => {
          const config = getTierConfig(tier.name);
          const cardSizeClass = getCardSizeClass(tier.name);

          return (
            <div key={i} className="mb-20 w-full">
              {/* Tier Badge */}
              <div className="flex justify-center mb-10 sponsor-fade-in">
                <span
                  className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm"
                  style={{ background: config.badgeBg, color: config.badgeText }}
                >
                  <TierIcon tierName={tier.name} />
                  {tier.name}
                </span>
              </div>

              {/* Sponsor Cards */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-5 w-full">
                {tier.sponsors.map((sponsor, j) => (
                  <div
                    key={sponsor.name}
                    className={`sponsor-card sponsor-fade-in rounded-xl ${cardSizeClass} flex items-center justify-center relative overflow-hidden`}
                    style={{
                      transitionDelay: `${j * 80}ms`,
                      backgroundColor: getCardBg(tier.name, sponsor.bgClass),
                      border: getCardBorder(tier.name, sponsor.bgClass),
                    }}
                  >
                    <span className="accent-line" style={{ background: config.accent }} />
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        fill
                        className={`object-contain ${
                          sponsor.paddingClass || "p-4 md:p-8"
                        } ${sponsor.blend ? "mix-blend-multiply" : ""}`}
                      />
                    ) : (
                      <span className="text-lg md:text-xl font-bold text-gray-700 tracking-wide z-10">
                        {sponsor.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
