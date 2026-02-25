"use client";

import { IMAGES } from "../lib/constants";

export default function NewsSection() {
  const articles = [
    {
      title:
        "Tech Week Singapore 2025: Government leaders and tech giants converge to discuss the impact of AI",
      date: "22 Sept 2025",
      source: "Tech Week Singapore",
      excerpt:
        "Guest of Honour Mr Tan Kiat How, Senior Minister of State for Digital Development and Information will be speaking at the opening ceremony...",
      image: IMAGES.heroBg.src,
    },
    {
      title:
        "Tech Week Singapore 2025: Tech and AI converge with key sectors to power innovations across the region",
      date: "13 Aug 2025",
      source: "",
      excerpt:
        "Tech Week Singapore returns this October with Guest of Honour, Mr Tan Kiat How, Senior Minister of State for Digital Development and Information...",
      image: IMAGES.stats1.src,
    },
  ];

  return (
    <section className="bg-linear-to-br from-[#f5f5ff] to-white py-16 md:py-24 px-4 md:px-10 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href="#"
              className="block bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Article Image */}
              <div
                className="w-full h-48 md:h-[260px] bg-center bg-cover relative"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug mb-3 text-gray-900">
                  {article.title}
                </h3>

                <p className="text-[13px] text-gray-400 mb-3">
                  {article.date}
                  {article.source && ` | ${article.source}`}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <span className="text-sm font-semibold text-black underline">
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
