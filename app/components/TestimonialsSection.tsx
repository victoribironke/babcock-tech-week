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
    <section
      style={{
        background: "linear-gradient(135deg, #f0f0ff 0%, #ffffff 100%)",
        padding: "100px 40px",
        color: "#000",
      }}
    >
      <div
        className="testimonials-grid"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "stretch",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Image
            src="/images/venue.png"
            alt="Tech Week Singapore Venue"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right: Testimonial */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "16px",
              color: "#333",
            }}
          >
            What Our Attendees are Saying
          </h3>

          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#ccc",
              marginBottom: "32px",
            }}
          />

          <blockquote
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#111",
              marginBottom: "24px",
              minHeight: "200px",
            }}
          >
            {testimonials[active].quote}
          </blockquote>

          <p
            style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "32px",
            }}
          >
            {testimonials[active].company}
          </p>

          {/* Pagination */}
          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  width: idx === active ? "28px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  background: idx === active ? "#000" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
