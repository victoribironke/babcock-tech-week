export const IMAGES = {
  logo: { src: "/logo.svg", width: 100, height: 100 },
  heroBg: { src: "/images/hero-bg.jpeg", alt: "Tech Week Conference" },
  about: { src: "/images/about.png", alt: "Attendees at Tech Week" },
  venue: { src: "/images/venue.png", alt: "Tech Week Venue" },
  speaker1: { src: "/images/speaker-1.png", alt: "Speaker" },
  stats1: { src: "/images/stats-1.png", alt: "Conference hall crowd" },
  stats2: { src: "/images/stats-2.png", alt: "Speakers on stage" },
  stats3: { src: "/images/stats-3.png", alt: "Exhibition floor" },
  stats4: { src: "/images/stats-4.png", alt: "Audience participation" },
};

export type Sponsor = {
  name: string;
  logo?: string;
  bgClass?: string;
  blend?: boolean;
};

export type Tier = {
  name: string;
  icon: string;
  badgeColor: string;
  cardBg: string;
  cardBorder: string;
  sponsors: Sponsor[];
  cols: string;
  cardSize: string;
  logoSize: string;
  divider?: boolean;
};

export type Partner = {
  name: string;
  description: string;
  logo: string;
  bgClass?: string;
  blend?: boolean;
};

export const PARTNERS: Partner[] = [
  {
    name: "BUCC",
    description: "Babcock University Computer Club",
    logo: "/images/partners/bucc.png",
    bgClass: "bg-slate-900",
  },
  {
    name: "GDG",
    description: "Google Developer Groups",
    logo: "/images/partners/gdg-babcock.webp",
    bgClass: "bg-slate-900",
  },
  {
    name: "IEEE",
    description: "Institute of Electrical & Electronics Engineers",
    logo: "/images/partners/ieee.jpg",
    bgClass: "bg-black",
  },
];

export const SPONSOR_TIERS: Tier[] = [
  {
    name: "HEADLINE PARTNER",
    icon: "👑",
    badgeColor: "bg-black text-white",
    cardBg: "bg-white",
    cardBorder: "",
    sponsors: [
      {
        name: "Paystack",
        logo: "/images/sponsors/headline/paystack.svg",
        blend: true,
      },
    ],
    cols: "grid-cols-1",
    cardSize: "h-40 md:h-56",
    logoSize: "text-3xl md:text-4xl",
  },
  {
    name: "GOLD SPONSOR",
    icon: "🏆",
    badgeColor: "bg-amber-500 text-white",
    cardBg: "bg-amber-50",
    cardBorder: "",
    sponsors: [
      { name: "MTN", logo: "/images/sponsors/gold/mtn.svg", blend: true },
    ],
    cols: "grid-cols-1 md:max-w-2xl mx-auto",
    cardSize: "h-32 md:h-48",
    logoSize: "text-xl md:text-2xl",
  },
  {
    name: "SILVER SPONSOR",
    icon: "🥈",
    badgeColor: "bg-gray-400 text-white",
    cardBg: "bg-white",
    cardBorder: "",
    sponsors: [
      {
        name: "Arravo",
        logo: "/images/sponsors/silver/arravo.png",
        blend: true,
      },
    ],
    cols: "grid-cols-1 md:max-w-xl mx-auto",
    cardSize: "h-28 md:h-40",
    logoSize: "text-lg md:text-xl",
    divider: true,
  },
  {
    name: "ASSOCIATE SPONSORS",
    icon: "🤝",
    badgeColor: "bg-blue-600 text-white",
    cardBg: "bg-blue-50",
    cardBorder: "",
    sponsors: [
      {
        name: "Blue Marina",
        logo: "/images/sponsors/associate/blue-marina.png",
        blend: true,
      },
      {
        name: "Cordros",
        logo: "/images/sponsors/associate/cordros.png",
        blend: true,
      },
      {
        name: "Octico",
        logo: "/images/sponsors/associate/octico.jpg",
        blend: true,
      },
    ],
    cols: "grid-cols-2 md:grid-cols-3",
    cardSize: "h-24 md:h-32",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "EXHIBITORS & STRATEGIC PARTNERS",
    icon: "🚀",
    badgeColor: "bg-teal-600 text-white",
    cardBg: "bg-teal-50",
    cardBorder: "",
    sponsors: [
      {
        name: "Access Holdings",
        logo: "/images/sponsors/exhibitors-and-strategic/access-holdings.svg",
        bgClass: "bg-teal-950",
      },
      {
        name: "Afrinvest",
        logo: "/images/sponsors/exhibitors-and-strategic/afrinvest.png",
        blend: true,
      },
      {
        name: "ARM",
        logo: "/images/sponsors/exhibitors-and-strategic/arm.png",
        blend: true,
      },
      {
        name: "Credit Registry",
        logo: "/images/sponsors/exhibitors-and-strategic/credit-registry.png",
        blend: true,
      },
      {
        name: "OADC",
        logo: "/images/sponsors/exhibitors-and-strategic/oadc.jpg",
        blend: true,
      },
      {
        name: "Quales",
        logo: "/images/sponsors/exhibitors-and-strategic/quales.svg",
        blend: true,
      },
    ],
    cols: "grid-cols-2 md:grid-cols-3",
    cardSize: "h-24 md:h-32",
    logoSize: "text-lg md:text-xl",
  },
  {
    name: "MEDIA PARTNERS",
    icon: "📺",
    badgeColor: "bg-indigo-600 text-white",
    cardBg: "bg-indigo-50",
    cardBorder: "",
    sponsors: [
      {
        name: "NTBTS",
        logo: "/images/sponsors/media/ntbts.jpg",
        bgClass: "bg-black",
      },
    ],
    cols: "grid-cols-1 md:max-w-md mx-auto",
    cardSize: "h-24 md:h-32",
    logoSize: "text-lg md:text-xl",
  },
];
