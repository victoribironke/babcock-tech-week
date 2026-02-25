"use client";

import Image from "next/image";
import { IMAGES } from "../lib/constants";

const speakers = [
  {
    name: "Dr. Aik Beng Ng",
    title: "Senior Regional Manager",
    company: "NVIDIA AI Technology Center",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Aravind Srinivas",
    title: "Co-Founder & CEO",
    company: "Perplexity",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Anton Osika",
    title: "Co-Founder & CEO",
    company: "Lovable",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Dr. David R. Hardoon",
    title: "Global Head, AI Enablement",
    company: "Standard Chartered",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Amy Jean Doherty",
    title: "Chief Technology Officer",
    company: "OpenAI APAC",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Alex Kendall",
    title: "Founder & CEO",
    company: "Wayve",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Toyin Ajayi",
    title: "Co-Founder",
    company: "Cityblock Health",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Lucy Liu",
    title: "Co-Founder & President",
    company: "Airwallex",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Max Jaderberg",
    title: "President",
    company: "Isomorphic Labs",
    image: IMAGES.speaker1.src,
  },
  {
    name: "Stella Li",
    title: "EVP & CEO, Americas & Europe",
    company: "BYD",
    image: IMAGES.speaker1.src,
  },
];

export default function SpeakersSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-10 text-black">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center">
          Featured Speakers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group overflow-hidden cursor-pointer flex flex-col h-full rounded-xl"
            >
              {/* Photo + overlaid info */}
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Info bar — trapezoid overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-[#0a1628]/90 px-4 pb-4 pt-8 h-32 flex flex-col justify-end"
                  style={{
                    clipPath: "polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <h4 className="text-white text-sm md:text-[15px] font-bold uppercase tracking-wide leading-tight mb-1">
                    {speaker.name}
                  </h4>
                  <p className="text-gray-400 text-xs leading-snug">
                    {speaker.title}, {speaker.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
