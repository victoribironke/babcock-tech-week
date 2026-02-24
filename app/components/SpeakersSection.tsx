"use client";

import { useState } from "react";
import Image from "next/image";

const speakers = [
  {
    name: "Dr. Aik Beng Ng",
    title: "Senior Regional Manager",
    company: "NVIDIA AI Technology Center",
    image: "/images/speaker-1.png",
  },
  {
    name: "Dr. David R. Hardoon",
    title: "Global Head, AI Enablement",
    company: "Standard Chartered",
    image: "/images/speaker-1.png",
  },
  {
    name: "Amy Jean Doherty",
    title: "Chief Technology Officer",
    company: "OpenAI APAC",
    image: "/images/speaker-1.png",
  },
];

export default function SpeakersSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-br from-[#f0f0ff] via-white to-[#f5f5ff] py-16 md:py-24 px-4 md:px-10 text-black">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left: Speakers Carousel */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-black">
            2025 Mainstage Speakers
          </h2>

          <div className="flex flex-col md:flex-row gap-5 md:overflow-hidden">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="md:min-w-[260px] md:flex-[0_0_260px] border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-md transition-transform duration-300"
                style={{
                  transform: `translateX(-${active * 280}px)`,
                }}
              >
                <div className="relative h-[260px]">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-base font-bold mb-1.5">{speaker.name}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {speaker.title},{" "}
                    <strong className="text-gray-700">{speaker.company}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="hidden md:flex gap-2 mt-6 justify-center">
            {speakers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2.5 rounded-full border-none cursor-pointer transition-all ${
                  idx === active ? "w-6 bg-gray-700" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div className="pt-0 md:pt-5">
          <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-black leading-tight">
            Bright Minds, Bold Ideas.
          </h2>

          <div className="text-[13px] font-bold tracking-wider uppercase text-gray-700 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-black inline-block" />
            THE MAINSTAGE
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The Mainstage at Tech Week Singapore brought a powerhouse lineup of
            visionaries, from pioneering technologists and enterprise leaders to
            government influencers and ecosystem builders representing NVIDIA,
            OpenAI, The World Bank Group and more.
          </p>

          <div className="text-[13px] font-bold tracking-wider uppercase text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-lime inline-block" />
            GUEST-OF-HONOUR
          </div>

          <a
            href="#"
            className="inline-block bg-black text-white py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-all mt-4"
          >
            MAINSTAGE PROGRAMME 2025
          </a>
        </div>
      </div>
    </section>
  );
}
