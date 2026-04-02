"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ──────────────────────────── DATA ──────────────────────────── */

type Person = {
  initials: string;
  name: string;
  role: string;
  note?: string;
  image?: string;
  bio?: string;
};

type Team = {
  label: string;
  lead: Person;
  coLeads?: Person[];
};

const LEADERSHIP: Person[] = [
  {
    initials: "DM",
    name: "Dunmade Majuyi O.D.",
    role: "Convener",
    image: "/images/speakers/Mujuyi.jpeg",
  },
  {
    initials: "KO",
    name: "Obata Onyelukachukwu",
    role: "Lead Organizer",
    image: "/images/speakers/KachiObata.jpeg",
  },
];

const TEAMS: Team[] = [
  {
    label: "LOGISTICS TEAM",
    lead: {
      initials: "AA",
      name: "Adedoja Ademola",
      role: "Logistics Lead",
      image: "/images/Team-Photos/adedoja-ademola.jpg",
    },
  },
  {
    label: "PROGRAMS & SCHEDULING TEAM",
    lead: {
      initials: "KO",
      name: "Obata Onyelukachukwu",
      role: "Programs & Scheduling Lead",
      note: "also Lead Organizer",
      image: "/images/speakers/KachiObata.jpeg",
    },
    coLeads: [
      {
        initials: "EI",
        name: "Ezeka Ifeoma",
        role: "Co-lead",
        image: "/images/Team-Photos/ezeka-ifeoma.jpg",
      },
    ],
  },
  {
    label: "PRODUCT & BRANDING TEAM",
    lead: {
      initials: "DK",
      name: "Daniel Kadiri",
      role: "Product & Branding Lead",
      image: "/images/Team-Photos/daniel-kadiri.jpg",
    },
    coLeads: [
      {
        initials: "UV",
        name: "Umaru Victor",
        role: "Co-lead",
        image: "/images/Team-Photos/umaru-victor.jpg",
      },
      {
        initials: "EO",
        name: "Efegherimoni Oghenetejiri",
        role: "Co-lead",
        image: "/images/Team-Photos/efegherimoni-oghenetejiri.jpg",
      },
    ],
  },
  {
    label: "PARTNERSHIPS & EXTERNAL RELATIONS TEAM",
    lead: {
      initials: "KO",
      name: "Obata Onyelukachukwu",
      role: "Partnerships Lead",
      note: "also Lead Organizer",
      image: "/images/speakers/KachiObata.jpeg",
    },
    coLeads: [
      {
        initials: "OF",
        name: "Olamide Fatunase",
        role: "Co-lead",
        image: "/images/Team-Photos/olamide-fatunase.jpg",
      },
    ],
  },
  {
    label: "HACKATHON TEAM",
    lead: {
      initials: "OK",
      name: "Oluwadara Kalejaiye",
      role: "Hackathon Lead",
      // No photo available
    },
  },
  {
    label: "VOLUNTEERS TEAM",
    lead: {
      initials: "AU",
      name: "Archie Ubong",
      role: "Volunteers Lead",
      image: "/images/Team-Photos/archie-ubong.png",
    },
    coLeads: [
      {
        initials: "AT",
        name: "Alayerogun Tobiloba",
        role: "Co-lead",
        image: "/images/Team-Photos/alayerogun-tobiloba.jpeg",
      },
    ],
  },
];

/* ──────────────────────── COMPONENTS ──────────────────────── */

/** Speaker-style photo card with angled overlay */
function PersonCard({
  person,
  variant = "lead",
  isVisible,
  delay = 0,
}: {
  person: Person;
  variant?: "lead" | "colead" | "leadership";
  isVisible: boolean;
  delay?: number;
}) {
  const isLeadership = variant === "leadership";
  const isCoLead = variant === "colead";

  return (
    <div
      className={`group overflow-hidden flex flex-col h-full rounded-xl shadow-sm hover:shadow-xl transition-all duration-600 ${
        isLeadership
          ? "bg-[#0d1117] border border-white/10"
          : "bg-gray-100"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Photo */}
      <div
        className={`relative overflow-hidden ${
          isLeadership
            ? "aspect-square"
            : isCoLead
              ? "aspect-square"
              : "aspect-square md:aspect-3/4"
        } ${person.image ? "" : "bg-gradient-to-br from-lime/20 to-emerald-900/40"}`}
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-lime/60">
              {person.initials}
            </span>
          </div>
        )}

        {/* Angled overlay — always visible (desktop style from speakers) */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-[#0a1628]/95 px-4 pb-4 pt-10 min-h-[5.5rem] flex flex-col justify-end"
          style={{
            clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <h4 className="text-white text-xs md:text-sm font-bold tracking-wide leading-tight mb-0.5 font-google-sans uppercase">
            {person.name}
          </h4>
          <p className="text-lime/80 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
            {person.role}
          </p>
        </div>
      </div>

      {/* Note below card if present */}
      {person.note && (
        <div className={`px-3 py-2 text-center ${isLeadership ? "bg-[#0d1117]" : "bg-gray-100"}`}>
          <span className={`text-[10px] md:text-xs italic tracking-wide ${isLeadership ? "text-white/35" : "text-gray-400"}`}>
            {person.note}
          </span>
        </div>
      )}
    </div>
  );
}

function ConnectorLine({ isVisible, delay = 0 }: { isVisible: boolean; delay?: number }) {
  return (
    <div className="flex justify-center">
      <div
        className="w-px bg-gradient-to-b from-lime/60 to-white/10 transition-all duration-700 ease-out"
        style={{
          height: isVisible ? "48px" : "0px",
          transitionDelay: `${delay}ms`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}

function TeamBadge({
  label,
  isVisible,
  delay = 0,
}: {
  label: string;
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div
      className="flex justify-center transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-white/90 border border-white/15 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

function TeamSection({
  team,
  index,
  isVisible,
}: {
  team: Team;
  index: number;
  isVisible: boolean;
}) {
  const baseDelay = 200 + index * 150;
  const hasMultipleCoLeads = team.coLeads && team.coLeads.length > 1;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Connector from previous section */}
      <ConnectorLine isVisible={isVisible} delay={baseDelay} />

      {/* Team label badge */}
      <TeamBadge label={team.label} isVisible={isVisible} delay={baseDelay + 100} />

      {/* Connector to lead */}
      <ConnectorLine isVisible={isVisible} delay={baseDelay + 200} />

      {/* Lead card — centered, constrained width */}
      <div className="w-full max-w-[220px] md:max-w-[240px]">
        <PersonCard
          person={team.lead}
          variant="lead"
          isVisible={isVisible}
          delay={baseDelay + 300}
        />
      </div>

      {/* Co-leads */}
      {team.coLeads && team.coLeads.length > 0 && (
        <>
          <ConnectorLine isVisible={isVisible} delay={baseDelay + 400} />

          {!hasMultipleCoLeads ? (
            /* Single co-lead */
            <div className="w-full max-w-[200px] md:max-w-[220px]">
              <PersonCard
                person={team.coLeads[0]}
                variant="colead"
                isVisible={isVisible}
                delay={baseDelay + 500}
              />
            </div>
          ) : (
            /* Multiple co-leads side by side */
            <div className="w-full max-w-[480px]">
              {/* Branch connector */}
              <div className="flex justify-center mb-0">
                <div className="relative w-full max-w-[360px] h-5">
                  <div
                    className="absolute top-0 left-[18%] right-[18%] h-px bg-gradient-to-r from-lime/40 via-white/10 to-lime/40 transition-all duration-500"
                    style={{
                      transitionDelay: `${baseDelay + 450}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                  <div
                    className="absolute top-0 left-[18%] w-px h-full bg-lime/30 transition-all duration-400"
                    style={{ transitionDelay: `${baseDelay + 500}ms`, opacity: isVisible ? 1 : 0 }}
                  />
                  <div
                    className="absolute top-0 right-[18%] w-px h-full bg-lime/30 transition-all duration-400"
                    style={{ transitionDelay: `${baseDelay + 500}ms`, opacity: isVisible ? 1 : 0 }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {team.coLeads.map((cl, i) => (
                  <PersonCard
                    key={cl.initials + cl.name}
                    person={cl}
                    variant="colead"
                    isVisible={isVisible}
                    delay={baseDelay + 550 + i * 100}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ──────────────────────── MAIN EXPORT ──────────────────────── */

export default function TeamOrganogram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-5 pt-32 md:pt-40 pb-20 md:pb-32">
        {/* Page heading */}
        <div
          className="text-center mb-14 md:mb-20 transition-all duration-800"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight mb-4 tracking-tight">
            The Team
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-white/20" />
            <span className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase">
              Organisational Structure
            </span>
            <span className="w-10 h-px bg-white/20" />
          </div>
          <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Meet the people behind Babcock Tech Week — the students and organisers making it all happen.
          </p>
        </div>

        {/* ─── Leadership Row ─── */}
        <div
          className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-10 mb-2 transition-all duration-800"
          style={{
            transitionDelay: "200ms",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Glow accent line */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />

          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-[480px] mx-auto">
            {LEADERSHIP.map((person, i) => (
              <PersonCard
                key={person.name + person.role}
                person={person}
                variant="leadership"
                isVisible={isVisible}
                delay={300 + i * 150}
              />
            ))}
          </div>
        </div>

        {/* ─── Team Sections ─── */}
        <div className="flex flex-col items-center">
          {TEAMS.map((team, i) => (
            <TeamSection
              key={team.label}
              team={team}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ─── Bottom Flourish ─── */}
        <div
          className="mt-16 md:mt-24 flex flex-col items-center transition-all duration-700"
          style={{
            transitionDelay: "1800ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-lime/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-lime/40 mt-1" />
          <p className="mt-6 text-xs text-white/30 tracking-[0.2em] uppercase text-center">
            Babcock Tech Week 2026
          </p>
        </div>
      </div>
    </section>
  );
}
