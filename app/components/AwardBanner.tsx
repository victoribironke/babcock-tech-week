"use client";

export default function AwardBanner() {
  return (
    <section className="bg-black py-10 px-4 md:px-10 flex justify-center">
      <div className="max-w-[900px] w-full bg-linear-to-br from-[#1a0a00] via-gold-dark to-[#1a0a00] border border-gold rounded-lg px-4 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative overflow-hidden flex-wrap">
        {/* Left trophy */}
        <span className="text-4xl">🏆</span>

        {/* SMA Logo Area */}
        <div className="text-center">
          <div className="text-3xl font-extrabold text-white tracking-[6px] leading-none">
            SMA
          </div>
          <div className="text-[10px] text-gold tracking-widest mt-1">2025</div>
          <div className="text-[8px] text-gray-400 tracking-widest mt-1 uppercase">
            Singapore MICE Awards
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-15 bg-gold" />

        {/* Award Text */}
        <div className="text-center">
          <div className="text-xs text-gold italic font-medium">Winner</div>
          <div className="text-xl md:text-2xl font-extrabold text-gold tracking-widest uppercase leading-tight mt-1">
            LARGE TRADE SHOW OF THE YEAR
          </div>
          <div className="text-[11px] text-gray-400 mt-1.5 tracking-wider">
            TECH WEEK SINGAPORE 2024
          </div>
          <div className="text-[9px] text-gray-500 mt-0.5 tracking-wider">
            CLOSERSTILL MEDIA
          </div>
        </div>

        {/* Right trophy */}
        <span className="text-4xl">🏆</span>
      </div>
    </section>
  );
}
