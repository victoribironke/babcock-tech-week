"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-t border-white/10 py-12 md:py-16 px-4 md:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-6">
            Subscribe to our newsletter for the latest updates on Tech Week
            Singapore.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3.5 px-5 rounded-full border border-white/20 bg-white/5 text-white text-sm outline-none md:max-w-[360px]"
            />
            <button className="py-3.5 px-8 rounded-full bg-white text-black border-none text-[13px] font-bold tracking-wider cursor-pointer hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Co-Located Shows Bar */}
      <div className="border-t border-b border-white/10 py-5 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-4 md:gap-8 flex-wrap text-xs font-semibold tracking-wider">
          {[
            "Cloud & AI Infrastructure",
            "Dev Ops Live",
            "Cyber Security World",
            "Big Data & AI World",
            "Data Centre World",
          ].map((show) => (
            <a
              key={show}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {show}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-[1200px] mx-auto py-12 md:py-16 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Venue & Dates */}
        <div>
          <h4 className="text-[13px] font-bold tracking-widest mb-5 uppercase">
            VENUE &amp; DATES
          </h4>
          <p className="text-[13px] text-gray-400 leading-relaxed">
            TUESDAY 29 SEPTEMBER 2026
            <br />
            09:00 - 17:00 SGT
          </p>
          <p className="text-[13px] text-gray-400 leading-relaxed mt-2">
            WEDNESDAY 30 SEPTEMBER 2026
            <br />
            09:00 - 17:00 SGT
          </p>
          <p className="text-[13px] text-gray-400 leading-relaxed mt-3 font-semibold">
            SANDS EXPO CONVENTION CENTER, SINGAPORE
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[13px] font-bold tracking-widest mb-5 uppercase">
            QUICK LINKS
          </h4>
          {[
            "CONTACT US",
            "REGISTER YOUR INTEREST 2026",
            "EXHIBIT AT THE SHOW",
            "ABOUT CLOSERSTILL MEDIA",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-[13px] text-gray-400 mb-3 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Global Portfolio */}
        <div>
          <h4 className="text-[13px] font-bold tracking-widest mb-5 uppercase">
            GLOBAL PORTFOLIO
          </h4>
          {[
            "TECH SHOW LONDON",
            "TECH WEEK SINGAPORE",
            "TECH WEEK SHANGHAI",
            "TECH SHOW MADRID",
            "TECH SHOW PARIS",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-[13px] text-gray-400 mb-3 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Organised By + Social */}
        <div>
          <h4 className="text-[13px] font-bold tracking-widest mb-5 uppercase">
            ORGANISED BY
          </h4>
          <p className="text-xl font-bold mb-5 tracking-widest">
            CloserStill Media
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {["Facebook", "LinkedIn", "YouTube", "Instagram"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 text-sm hover:border-white hover:text-white transition-all"
                >
                  {platform[0]}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-4 md:gap-6 flex-wrap text-xs text-gray-500">
          {[
            "© Copyright 2025",
            "Privacy Policy",
            "Sitemap",
            "Terms & Conditions",
            "Cookie Policy",
            "Accessibility Statement",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
