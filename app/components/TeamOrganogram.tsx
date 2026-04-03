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
  linkedin?: string;
  x?: string;
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
    role: "Convener/Director",
    image: "/images/speakers/Mujuyi.jpeg",
    linkedin: "https://www.linkedin.com/in/majuyi/",
    x: "https://x.com/majuyitan",
  },
  {
    initials: "KO",
    name: "Obata Onyelukachukwu",
    role: "Lead Organizer",
    image: "/images/speakers/KachiObata.jpeg",
    linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
    x: "https://x.com/kachiobata",
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
      image: "/images/speakers/KachiObata.jpeg",
      linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
      x: "https://x.com/kachiobata",
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
      image: "/images/speakers/KachiObata.jpeg",
      linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
      x: "https://x.com/kachiobata",
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
      image: "/images/Team-Photos/oluwadara-kalejaiye1.jpg",
      linkedin: "https://www.linkedin.com/in/oluwadara-kalejaiye-346095260/",
      x: "https://x.com/dara_kalejaiye1",
    },
  },
  {
    label: "VOLUNTEERS TEAM",
    lead: {
      initials: "AU",
      name: "Archie-Ubong Michael",
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

/* ────────────────── SVG ICON PATHS ────────────────── */

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const X_PATH =
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

/* ──────────────────────── COMPONENTS ──────────────────────── */

function SocialIcons({ person }: { person: Person }) {
  if (!person.linkedin && !person.x) return null;

  return (
    <div className="flex items-center gap-1.5">
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn`}
          className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-white/30 hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d={LINKEDIN_PATH} />
          </svg>
        </a>
      )}
      {person.x && (
        <a
          href={person.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} X`}
          className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-white/30 hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d={X_PATH} />
          </svg>
        </a>
      )}
    </div>
  );
}

function MobileSocialIcons({ person }: { person: Person }) {
  if (!person.linkedin && !person.x) return null;

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn`}
          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d={LINKEDIN_PATH} />
          </svg>
        </a>
      )}
      {person.x && (
        <a
          href={person.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} X`}
          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d={X_PATH} />
          </svg>
        </a>
      )}
    </div>
  );
}

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
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
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
            <SocialIcons person={person} />
          </div>
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
        <MobileSocialIcons person={person} />
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
  const hasCoLeads = team.coLeads && team.coLeads.length > 0;
  const hasSingleCoLead = hasCoLeads && team.coLeads!.length === 1;

  // Teams with exactly 1 co-lead: show lead + co-lead side by side
  // Teams with 2+ co-leads: lead on top, co-leads side by side below
  // Teams with no co-leads: just the lead card centered

  return (
    <div className="flex flex-col items-center w-full">
      <ConnectorLine isVisible={isVisible} delay={baseDelay} />
      <TeamHeading label={team.label} isVisible={isVisible} delay={baseDelay + 80} />
      <ConnectorLine isVisible={isVisible} delay={baseDelay + 160} />

      {!hasCoLeads ? (
        /* Solo lead — centered */
        <div className="w-full max-w-[220px] md:max-w-[240px]">
          <PersonCard
            person={team.lead}
            isVisible={isVisible}
            delay={baseDelay + 240}
          />
        </div>
      ) : hasSingleCoLead ? (
        /* Lead + 1 co-lead — side by side */
        <div className="w-full max-w-[500px]">
          <BranchConnector isVisible={isVisible} delay={baseDelay + 200} />
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <PersonCard
              person={team.lead}
              isVisible={isVisible}
              delay={baseDelay + 280}
            />
            <PersonCard
              person={team.coLeads![0]}
              isVisible={isVisible}
              delay={baseDelay + 360}
            />
          </div>
        </div>
      ) : (
        /* Lead on top, multiple co-leads side by side below */
        <>
          <div className="w-full max-w-[220px] md:max-w-[240px]">
            <PersonCard
              person={team.lead}
              isVisible={isVisible}
              delay={baseDelay + 240}
            />
          </div>

          <ConnectorLine isVisible={isVisible} delay={baseDelay + 320} />

          <div className="w-full max-w-[500px]">
            <BranchConnector isVisible={isVisible} delay={baseDelay + 360} />
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {team.coLeads!.map((cl, i) => (
                <PersonCard
                  key={cl.initials + cl.name}
                  person={cl}
                  isVisible={isVisible}
                  delay={baseDelay + 420 + i * 80}
                />
              ))}
            </div>
          </div>
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
            Meet the people behind Babcock Tech Week — the student 
            organizers making it all happen.
          </p>
        </div>

        {/* ─── Leadership ─── */}
        <div className="flex flex-col items-center mb-4">
          <TeamHeading label="LEADERSHIP" isVisible={isVisible} delay={200} />
          <ConnectorLine isVisible={isVisible} delay={280} />
          <BranchConnector isVisible={isVisible} delay={360} />

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
