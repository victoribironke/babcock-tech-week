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
      image: "/images/Team-Photos/Adedoja Daniel Ademola.jpg",
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
        image: "/images/Team-Photos/Ezeka Ifeoma Vera.jpg",
      },
    ],
  },
  {
    label: "PRODUCT & BRANDING TEAM",
    lead: {
      initials: "DK",
      name: "Daniel Kadiri",
      role: "Product & Branding Lead",
      image: "/images/Team-Photos/Daniel Kadiri.jpg",
    },
    coLeads: [
      {
        initials: "UV",
        name: "Umaru Victor",
        role: "Co-lead",
        image: "/images/Team-Photos/Umaru Victor.jpg",
      },
      {
        initials: "EO",
        name: "Efegherimoni Oghenetejiri",
        role: "Co-lead",
        image: "/images/Team-Photos/Efegherimoni Oghenetejiri.jpg",
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
        image: "/images/Team-Photos/Olamide Fatunase.jpg",
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
      image: "/images/Team-Photos/Archie Ubong.png",
    },
    coLeads: [
      {
        initials: "AT",
        name: "Alayerogun Tobiloba",
        role: "Co-lead",
        image: "/images/Team-Photos/Alayerogun Tobiloba.jpeg",
      },
    ],
  },
];

/* ──────────────────────── COMPONENTS ──────────────────────── */

function Avatar({
  person,
  size = "md",
  delay = 0,
  isVisible = true,
}: {
  person: Person;
  size?: "sm" | "md" | "lg";
  delay?: number;
  isVisible?: boolean;
}) {
  const dims = {
    sm: { container: "w-9 h-9", text: "text-xs", px: 36 },
    md: { container: "w-11 h-11", text: "text-sm", px: 44 },
    lg: { container: "w-16 h-16", text: "text-base", px: 64 },
  };
  const d = dims[size];

  return (
    <div
      className={`${d.container} rounded-full shrink-0 relative overflow-hidden transition-all duration-700`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.5)",
      }}
    >
      {person.image ? (
        <>
          <Image
            src={person.image}
            alt={person.name}
            width={d.px}
            height={d.px}
            className="w-full h-full object-cover"
          />
          {/* Subtle lime ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-lime/40" />
        </>
      ) : (
        <div
          className={`w-full h-full rounded-full bg-gradient-to-br from-lime to-emerald-500 text-black font-bold flex items-center justify-center ${d.text} shadow-lg shadow-lime/20`}
        >
          {person.initials}
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
          height: isVisible ? "40px" : "0px",
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
      <span className="inline-block text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-white/90 border border-white/15 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

function PersonCard({
  person,
  variant = "lead",
  isVisible,
  delay = 0,
}: {
  person: Person;
  variant?: "lead" | "colead";
  isVisible: boolean;
  delay?: number;
}) {
  const isLead = variant === "lead";

  return (
    <div
      className={`flex items-center gap-3.5 rounded-xl px-5 py-4 transition-all duration-600 ${
        isLead
          ? "bg-white/[0.06] border border-white/10 hover:border-lime/30 hover:bg-white/[0.09]"
          : "bg-white/[0.04] border border-white/8 hover:border-lime/20 hover:bg-white/[0.06]"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <Avatar
        person={person}
        size={isLead ? "md" : "sm"}
        delay={delay}
        isVisible={isVisible}
      />
      <div className="min-w-0">
        <p
          className={`font-bold leading-tight ${
            isLead ? "text-sm md:text-base text-white" : "text-sm text-white/90"
          }`}
        >
          {person.name}
        </p>
        <p
          className={`${
            isLead ? "text-xs md:text-sm text-white/50" : "text-xs text-white/40"
          } leading-snug mt-0.5`}
        >
          {person.role}
        </p>
      </div>
    </div>
  );
}

function NoteText({
  text,
  isVisible,
  delay = 0,
}: {
  text: string;
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <p
      className="text-center text-xs italic text-white/35 mt-1 transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {text}
    </p>
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

  return (
    <div className="flex flex-col items-center">
      {/* Connector from previous section */}
      <ConnectorLine isVisible={isVisible} delay={baseDelay} />

      {/* Team label badge */}
      <TeamBadge label={team.label} isVisible={isVisible} delay={baseDelay + 100} />

      {/* Connector to lead */}
      <ConnectorLine isVisible={isVisible} delay={baseDelay + 200} />

      {/* Lead card */}
      <div className="w-full max-w-[380px]">
        <PersonCard
          person={team.lead}
          variant="lead"
          isVisible={isVisible}
          delay={baseDelay + 300}
        />
      </div>

      {/* Note if present */}
      {team.lead.note && (
        <NoteText text={team.lead.note} isVisible={isVisible} delay={baseDelay + 350} />
      )}

      {/* Co-leads */}
      {team.coLeads && team.coLeads.length > 0 && (
        <>
          <ConnectorLine isVisible={isVisible} delay={baseDelay + 400} />

          {team.coLeads.length === 1 ? (
            <div className="w-full max-w-[360px]">
              <PersonCard
                person={team.coLeads[0]}
                variant="colead"
                isVisible={isVisible}
                delay={baseDelay + 500}
              />
            </div>
          ) : (
            /* Multiple co-leads side by side */
            <div className="w-full max-w-[520px]">
              {/* Branch lines */}
              <div className="flex justify-center mb-0">
                <div className="relative w-full max-w-[400px] h-5">
                  {/* Horizontal bar */}
                  <div
                    className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-lime/40 via-white/10 to-lime/40 transition-all duration-500"
                    style={{
                      transitionDelay: `${baseDelay + 450}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                  {/* Left drop */}
                  <div
                    className="absolute top-0 left-[15%] w-px h-full bg-lime/30 transition-all duration-400"
                    style={{
                      transitionDelay: `${baseDelay + 500}ms`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  />
                  {/* Right drop */}
                  <div
                    className="absolute top-0 right-[15%] w-px h-full bg-lime/30 transition-all duration-400"
                    style={{
                      transitionDelay: `${baseDelay + 500}ms`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

/* ──────────────────────── MAIN PAGE ──────────────────────── */

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

      <div className="relative z-10 max-w-[900px] mx-auto px-5 pt-32 md:pt-40 pb-20 md:pb-32">
        {/* Page heading */}
        <div
          className="text-center mb-16 md:mb-20 transition-all duration-800"
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
          {/* Glow accent */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {LEADERSHIP.map((person, i) => (
              <div
                key={person.name + person.role}
                className="flex flex-col items-center text-center transition-all duration-700"
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                }}
              >
                <Avatar
                  person={person}
                  size="lg"
                  delay={400 + i * 150}
                  isVisible={isVisible}
                />
                <h3 className="text-base md:text-lg font-bold mt-4 leading-tight">
                  {person.name}
                </h3>
                <p className="text-xs md:text-sm text-lime/80 font-medium mt-1 tracking-wide">
                  {person.role}
                </p>
              </div>
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
