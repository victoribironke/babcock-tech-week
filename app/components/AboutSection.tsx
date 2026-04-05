"use client";

import Image from "next/image";
import { IMAGES } from "../lib/constants";

export default function AboutSection() {
  return (
    <section 
      className="bg-black py-16 md:py-24 px-4 md:px-10"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
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
            Babcock Tech Week: Driving Innovation in Africa
          </h3>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            Babcock Tech Week is the premier technology event at Babcock
            University, bringing together students, industry leaders, and
            innovators from across Africa.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            Over 28,000 attendees, tech enthusiasts, and visionaries across all
            technology verticals come together at Babcock Tech Week to learn,
            network, and shape the future of technology. With over 400
            exhibitors, #BTW is your gateway to connecting with leading solution
            providers and the next generation of tech talent.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-4">
            Babcock Tech Week 2026 returns on{" "}
            <strong className="text-white underline">
              22-29 March 2026
            </strong>
            , featuring exhibitions, workshops, hackathons, panel discussions,
            and keynote sessions from global tech leaders.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
            Don&apos;t miss the opportunity to be part of West Africa&apos;s
            largest student-led technology event.
          </p>

          <a
            href="#"
            className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
