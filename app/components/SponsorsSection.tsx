"use client";

const tiers = [
  {
    name: "HEADLINE PARTNER",
    icon: "👑",
    badgeColor: "bg-black text-white",
    cardBg: "bg-white",
    cardBorder: "border border-gray-200",
    sponsors: [{ name: "TechCorp Global" }],
    cols: "grid-cols-1",
    cardSize: "py-10 md:py-14",
    logoSize: "text-3xl md:text-4xl",
  },
  {
    name: "PLATINUM SPONSOR",
    icon: "💎",
    badgeColor: "bg-gray-800 text-white",
    cardBg: "bg-white",
    cardBorder: "border border-gray-200",
    sponsors: [{ name: "Luno" }],
    cols: "grid-cols-1",
    cardSize: "py-8 md:py-12",
    logoSize: "text-2xl md:text-3xl",
  },
  {
    name: "GOLD SPONSORS",
    icon: "🏆",
    badgeColor: "bg-amber-500 text-white",
    cardBg: "bg-amber-50",
    cardBorder: "border border-amber-100",
    sponsors: [
      { name: "Odoo" },
      { name: "Open Access" },
      { name: "Monica" },
      { name: "BMONI" },
    ],
    cols: "grid-cols-2",
    cardSize: "py-8 md:py-10",
    logoSize: "text-xl md:text-2xl",
  },
  {
    name: "SILVER SPONSORS",
    icon: "🥈",
    badgeColor: "bg-gray-400 text-white",
    cardBg: "bg-white",
    cardBorder: "border border-blue-200",
    sponsors: [
      { name: "Prestmit" },
      { name: "AWS" },
      { name: "Bluebulb" },
      { name: "Ethnos" },
    ],
    cols: "grid-cols-2",
    cardSize: "py-6 md:py-8",
    logoSize: "text-lg md:text-xl",
    divider: true,
  },
  {
    name: "BRONZE SPONSORS",
    icon: "🥉",
    badgeColor: "bg-orange-700 text-white",
    cardBg: "bg-orange-50",
    cardBorder: "border border-orange-100",
    sponsors: [{ name: "Mastercard" }],
    cols: "grid-cols-2",
    cardSize: "py-6 md:py-8",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "MEDIA PARTNERS",
    icon: "📺",
    badgeColor: "bg-indigo-600 text-white",
    cardBg: "bg-indigo-50",
    cardBorder: "border border-indigo-100",
    sponsors: [{ name: "TechCrunch" }, { name: "The Verge" }],
    cols: "grid-cols-2",
    cardSize: "py-6 md:py-8",
    logoSize: "text-lg md:text-xl",
  },
];

const partners = [
  { name: "BUCC", description: "Babcock University Computer Club" },
  { name: "GDG", description: "Google Developer Groups" },
  {
    name: "IEEE",
    description: "Institute of Electrical & Electronics Engineers",
  },
];

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
        <div className="mb-16">
          <div className="flex justify-center mb-6">
            <span className="bg-lime text-black text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full inline-flex items-center gap-2">
              🤝 BROUGHT TO YOU BY
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 border border-gray-200 rounded-xl py-8 md:py-10 px-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-800 mb-1">
                  {partner.name}
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 leading-snug">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Tiers */}
        {tiers.map((tier, i) => (
          <div key={i} className="mb-12">
            {/* Blue divider for silver */}
            {tier.divider && <div className="w-full h-px bg-blue-400 mb-12" />}

            {/* Tier Badge */}
            <div className="flex justify-center mb-6">
              <span
                className={`${tier.badgeColor} text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full inline-flex items-center gap-2`}
              >
                {tier.icon} {tier.name}
              </span>
            </div>

            {/* Sponsor Cards */}
            <div className={`grid ${tier.cols} gap-4`}>
              {tier.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className={`${tier.cardBg} ${tier.cardBorder} rounded-xl ${tier.cardSize} px-6 flex items-center justify-center hover:shadow-md transition-shadow`}
                >
                  <span
                    className={`${tier.logoSize} font-bold text-gray-700 tracking-wide`}
                  >
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
