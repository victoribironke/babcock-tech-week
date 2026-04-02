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

/** Card matching SpeakersSection style exactly */
function PersonCard({
  person,
  isVisible,
  delay = 0,
}: {
  person: Person;
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div
      className="group overflow-hidden flex flex-col h-full rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {/* Photo */}
      <div className="relative aspect-square md:aspect-3/4 overflow-hidden bg-gray-200">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500">
            <span className="text-4xl md:text-5xl font-bold opacity-40">
              {person.initials}
            </span>
          </div>
        )}

        {/* Desktop overlay — same clipPath as speakers */}
        <div
          className="hidden md:flex absolute bottom-0 left-0 right-0 bg-[#0a1628]/95 px-4 pb-4 pt-10 min-h-32 flex-col justify-end"
          style={{
            clipPath: "polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <h4 className="text-white text-base font-bold tracking-wide leading-tight mb-1 font-google-sans uppercase">
            {person.name}
          </h4>
          <p className="text-[#c15f3c] text-xs font-semibold tracking-wide uppercase">
            {person.role}
          </p>
          {person.note && (
            <p className="text-gray-400 text-[11px] italic mt-1 tracking-wide normal-case">
              {person.note}
            </p>
          )}
        </div>
      </div>

      {/* Mobile info — shown below photo */}
      <div className="md:hidden px-3 py-3 flex flex-col gap-0.5">
        <h4 className="text-[#0a1628] text-sm font-bold tracking-wide leading-tight font-google-sans uppercase">
          {person.name}
        </h4>
        <span className="text-[#c15f3c] text-[11px] font-semibold tracking-wide uppercase">
          {person.role}
        </span>
        {person.note && (
          <span className="text-gray-400 text-[10px] italic mt-0.5 normal-case">
            {person.note}
          </span>
        )}
      </div>
    </div>
  );
}

/** Connector line between organogram sections */
function ConnectorLine({ isVisible, delay = 0 }: { isVisible: boolean; delay?: number }) {
  return (
    <div className="flex justify-center">
      <div
        className="w-px bg-gray-300 transition-all duration-700 ease-out"
        style={{
          height: isVisible ? "48px" : "0px",
          transitionDelay: `${delay}ms`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}

/** Team heading badge — styled like sponsor tier badges */
function TeamHeading({
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
      <span
        className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm"
        style={{ background: "#0a1628", color: "#ffffff" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        {label}
      </span>
    </div>
  );
}

/** Branch connector for side-by-side cards */
function BranchConnector({ isVisible, delay = 0 }: { isVisible: boolean; delay?: number }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[400px] h-6">
        {/* Horizontal bar */}
        <div
          className="absolute top-0 left-[20%] right-[20%] h-px bg-gray-300 transition-all duration-500"
          style={{
            transitionDelay: `${delay}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          }}
        />
        {/* Left drop */}
        <div
          className="absolute top-0 left-[20%] w-px h-full bg-gray-300 transition-all duration-400"
          style={{ transitionDelay: `${delay + 50}ms`, opacity: isVisible ? 1 : 0 }}
        />
        {/* Right drop */}
        <div
          className="absolute top-0 right-[20%] w-px h-full bg-gray-300 transition-all duration-400"
          style={{ transitionDelay: `${delay + 50}ms`, opacity: isVisible ? 1 : 0 }}
        />
      </div>
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
  const baseDelay = 150 + index * 120;

  return (
    <div className="flex flex-col items-center w-full">
      <ConnectorLine isVisible={isVisible} delay={baseDelay} />
      <TeamHeading label={team.label} isVisible={isVisible} delay={baseDelay + 80} />
      <ConnectorLine isVisible={isVisible} delay={baseDelay + 160} />

      {/* Lead card */}
      <div className="w-full max-w-[220px] md:max-w-[240px]">
        <PersonCard
          person={team.lead}
          isVisible={isVisible}
          delay={baseDelay + 240}
        />
      </div>

      {/* Co-leads */}
      {team.coLeads && team.coLeads.length > 0 && (
        <>
          <ConnectorLine isVisible={isVisible} delay={baseDelay + 320} />

          {team.coLeads.length === 1 ? (
            <div className="w-full max-w-[200px] md:max-w-[220px]">
              <PersonCard
                person={team.coLeads[0]}
                isVisible={isVisible}
                delay={baseDelay + 400}
              />
            </div>
          ) : (
            <div className="w-full max-w-[500px]">
              <BranchConnector isVisible={isVisible} delay={baseDelay + 360} />
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {team.coLeads.map((cl, i) => (
                  <PersonCard
                    key={cl.initials + cl.name}
                    person={cl}
                    isVisible={isVisible}
                    delay={baseDelay + 420 + i * 80}
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
      className="bg-white py-16 md:py-24 px-4 md:px-10 text-black"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Title — same as speakers/sponsors */}
        <div
          className="transition-all duration-800"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
            The Team
          </h2>
          <p className="text-gray-500 text-center text-sm md:text-base mb-16 max-w-[600px] mx-auto">
            Meet the people behind Babcock Tech Week — the students and
            organisers making it all happen.
          </p>
        </div>

        {/* ─── Leadership ─── */}
        <div className="flex flex-col items-center mb-4">
          <TeamHeading label="LEADERSHIP" isVisible={isVisible} delay={200} />

          {/* Branch connector to two leaders side by side */}
          <ConnectorLine isVisible={isVisible} delay={280} />
          <BranchConnector isVisible={isVisible} delay={360} />

          {/* Two leadership cards side by side */}
          <div className="grid grid-cols-2 gap-3 md:gap-5 w-full max-w-[500px]">
            {LEADERSHIP.map((person, i) => (
              <PersonCard
                key={person.name + person.role}
                person={person}
                isVisible={isVisible}
                delay={420 + i * 100}
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

        {/* ─── Bottom flourish ─── */}
        <div
          className="mt-16 flex flex-col items-center transition-all duration-700"
          style={{ transitionDelay: "1500ms", opacity: isVisible ? 1 : 0 }}
        >
          <div className="w-px h-10 bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-300 mt-1" />
          <p className="mt-4 text-xs text-gray-400 tracking-[0.2em] uppercase text-center">
            Babcock Tech Week 2026
          </p>
        </div>
      </div>
    </section>
  );
}
