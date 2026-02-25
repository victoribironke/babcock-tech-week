"use client";

import Image from "next/image";
import { IMAGES } from "../lib/constants";

export default function AboutSection() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden relative h-[350px] md:h-[500px]">
          <Image
            src={IMAGES.about.src}
            alt={IMAGES.about.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-base font-bold text-lime tracking-widest uppercase mb-4">
            Latest Updates
          </h2>

          <h3 className="text-2xl md:text-[32px] font-bold mb-6 leading-tight">
            Tech Week Singapore: Your Gateway to Asia
          </h3>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            Tech Week Singapore is the most important technology event for
            business in Asia.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            Over 29,000 business leaders and visionaries across all technology
            verticals come together to attend Tech Week Singapore to learn,
            network and shape their organisation&apos;s future. With over 500
            exhibitors, #TWS is your gateway to placing your brand among leading
            solution providers or breaking into the Asia market.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-4">
            Tech Week Singapore will return on{" "}
            <strong className="text-white underline">
              29-30 September 2026
            </strong>
            , presenting five co-located events: Cloud & AI Infrastructure Asia,
            DevOps Live!, Cyber Security World Asia, Data Centre World Asia and
            Big Data & AI World Asia.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
            <a href="#" className="underline text-white">
              eCommerce Expo | DMEXCO Asia
            </a>{" "}
            will return from{" "}
            <strong className="text-white">7-8 April 2027</strong>.
          </p>

          <a
            href="#"
            className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
          >
            BOOK A STAND
          </a>
        </div>
      </div>
    </section>
  );
}
