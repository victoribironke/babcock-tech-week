"use client";

import Image from "next/image";
import { IMAGES } from "../lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-175 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroBg.src}
          alt={IMAGES.heroBg.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 px-5 mt-15">
        <Image
          src={IMAGES.logo.src}
          alt="Logo"
          width={IMAGES.logo.width}
          height={IMAGES.logo.height}
          className="w-72 lg:w-96"
        />

        {/* Date & Venue */}
        <p className="text-lg md:text-xl font-normal mt-2 tracking-wide">
          22-29 March 2026, Babcock University
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 md:gap-5 mt-4 flex-wrap justify-center">
          <a
            href="/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-4 px-8 md:px-10 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase hover:bg-gray-200 transition-all cursor-pointer shadow-lg"
          >
            VIEW SCHEDULE
          </a>
          <a
            href="mailto:babcocktechweek@gmail.com"
            className="bg-black/85 text-white py-4 px-8 md:px-10 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase border border-white/20 hover:bg-white/15 transition-all cursor-pointer backdrop-blur-sm"
          >
            PARTNER WITH US
          </a>
        </div>

        {/* Hackathon Registration Card */}
        <div className="w-full max-w-xl mx-auto mt-12 bg-white/80 rounded-2xl shadow-2xl px-6 py-8 flex flex-col items-center gap-4 border border-black/10 backdrop-blur-xl">
          <span className="inline-block bg-black/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow">
            Hackathon
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-black mb-1">
            Registration Now Open!
          </h3>
          <p className="text-base md:text-lg text-black/80 mb-3">
            What's your ₦10,000,000 idea?
          </p>
          <a
            href="/hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/90 text-white py-3 px-8 md:px-10 rounded-full text-sm md:text-base font-extrabold tracking-widest uppercase shadow-lg hover:bg-black transition-all duration-200 hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="/hackathon/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-black/60 underline hover:text-black mt-2"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
}
