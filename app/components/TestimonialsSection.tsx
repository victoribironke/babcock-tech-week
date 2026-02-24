"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "You'll meet passionate people, learn from the best, and discover impactful solutions. The value lies in the energy, the network, and the collaboration that happens here, at Tech Week Singapore.",
    company: "GM, Ngen Technologies",
  },
  {
    quote:
      "We have been in this exhibition for four consecutive years. This year, we have received a lot of great quality leads, and many people just come by our booth to explore our products. The demographics are awesome.",
    company: "DapuStor",
  },
  {
    quote:
      "We met prospects who were ready to fly to Jakarta and visit our data center infrastructures! We came with the expectations of getting leads, and a couple of follow-ups. But this surprised us!",
    company: "NTT Data",
  },
  {
    quote:
      "The energy was incredible! What amazed me most was the crowd - customers and partners flew in not just from across East Asia, but also from the US, Europe, Australia, and New Zealand.",
    company: "Schneider Electric",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(3);

  return (
    <section className="bg-linear-to-br from-[#f0f0ff] to-white py-16 md:py-24 px-4 md:px-10 text-black">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        {/* Left: Image */}
        <div className="rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-[500px]">
          <Image
            src="/images/venue.png"
            alt="Tech Week Singapore Venue"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Testimonial */}
        <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col justify-center shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            What Our Attendees are Saying
          </h3>

          <div className="w-15 h-0.5 bg-gray-300 mb-8" />

          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 mb-6 min-h-[150px] md:min-h-[200px]">
            {testimonials[active].quote}
          </blockquote>

          <p className="text-sm text-gray-400 mb-8">
            {testimonials[active].company}
          </p>

          {/* Pagination */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-3 rounded-md border-none cursor-pointer transition-all ${
                  idx === active ? "w-7 bg-black" : "w-3 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
