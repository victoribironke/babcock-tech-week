import Image from "next/image";

const stats = [
  { number: "28,526", label: "attendees visited Tech Week Singapore 2025" },
  { number: "488+", label: "International speakers and thought-leaders" },
  { number: "466+", label: "Global tech and solution providers" },
  { number: "80%", label: "would attend again in 2026" },
];

const images = [
  { src: "/images/stats-1.png", alt: "Conference hall crowd" },
  { src: "/images/stats-2.png", alt: "Speakers on stage" },
  { src: "/images/stats-3.png", alt: "Exhibition floor" },
  { src: "/images/stats-4.png", alt: "Audience participation" },
];

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="border border-white/15 rounded-3xl py-8 md:py-12 px-5 md:px-8 flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-5xl font-bold mb-3">{number}</div>
      <div className="text-sm text-gray-300 leading-relaxed">{label}</div>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-3xl overflow-hidden relative min-h-[200px] md:min-h-[220px] aspect-[4/3]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {/* Row 1: Stat, Image, Stat, Image */}
        <StatCard number={stats[0].number} label={stats[0].label} />
        <ImageCard src={images[0].src} alt={images[0].alt} />
        <StatCard number={stats[1].number} label={stats[1].label} />
        <ImageCard src={images[1].src} alt={images[1].alt} />

        {/* Row 2: Image, Stat, Image, Stat */}
        <ImageCard src={images[2].src} alt={images[2].alt} />
        <StatCard number={stats[2].number} label={stats[2].label} />
        <ImageCard src={images[3].src} alt={images[3].alt} />
        <StatCard number={stats[3].number} label={stats[3].label} />
      </div>
    </section>
  );
}
