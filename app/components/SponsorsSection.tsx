"use client";

import Image from "next/image";
import { SPONSOR_TIERS, PARTNERS } from "../lib/constants";

export default function SponsorsSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-10 text-black">
      <div className="max-w-[900px] mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Our Sponsors & Partners
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base mb-14 max-w-[600px] mx-auto">
          Babcock Tech Week is made possible by the generous support of our
          sponsors and partners.
        </p>

        {/* Brought to you by */}
        <div className="mb-16 w-full">
          <div className="flex justify-center mb-8">
            <span className="bg-lime text-black text-[10px] md:text-xs font-bold tracking-widest uppercase px-8 py-2.5 rounded-full inline-flex items-center shadow-sm">
              BROUGHT TO YOU BY
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className={`${partner.bgClass || "bg-gray-50"} rounded-xl w-[45%] md:w-[320px] h-28 md:h-48 flex items-center justify-center hover:shadow-md transition-shadow relative overflow-hidden`}
              >
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
        {SPONSOR_TIERS.map((tier, i) => (
          <div key={i} className="mb-14 w-full">
            {/* Tier Badge */}
            <div className="flex justify-center mb-8">
              <span
                className={`${tier.badgeColor} text-[10px] md:text-xs font-bold tracking-widest uppercase px-8 py-2.5 rounded-full inline-flex items-center justify-center text-center`}
              >
                {tier.name}
              </span>
            </div>

            {/* Sponsor Cards */}
            <div
              className={`${tier.cols || "flex flex-wrap justify-center w-full"} gap-4 md:gap-6`}
            >
              {tier.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className={`${sponsor.bgClass || `${tier.cardBg} ${tier.cardBorder}`} rounded-xl ${tier.cardSize} flex items-center justify-center hover:shadow-md transition-shadow relative overflow-hidden`}
                >
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
                    <span
                      className={`${tier.logoSize} font-bold text-gray-700 tracking-wide z-10`}
                    >
                      {sponsor.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
