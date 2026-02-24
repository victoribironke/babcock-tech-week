"use client";

import Image from "next/image";
import { IMAGES } from "../lib/constants";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Tech Week Singapore Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />
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
        <p className="text-lg md:text-[22px] font-normal mt-2 tracking-wide">
          29-30 September 2026, Sands Expo Convention Centre
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-5 mt-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-white text-black py-4.5 px-10 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-all cursor-pointer"
          >
            EXHIBIT NOW
          </a>
          <a
            href="#"
            className="bg-black/85 text-white py-4.5 px-10 rounded-full text-sm font-bold tracking-widest uppercase border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
          >
            REGISTER INTEREST FOR 2026
          </a>
        </div>
      </div>
    </section>
  );
}
