"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, BookOpen, Layers } from "lucide-react";

interface HouseData {
  number: number;
  sanskrit: string;
  devanagari: string;
  name: string;
  karaka: string;
  path: string;
  textPos: { x: number; y: number };
  themes: ("career" | "love" | "wealth" | "karma")[];
  significance: string;
  yashApproach: string;
}

const HOUSES: HouseData[] = [
  {
    number: 1,
    sanskrit: "Tanu Bhava",
    devanagari: "तनु भाव",
    name: "Self, Vitality & Temperament",
    karaka: "Surya (Sun)",
    path: "M 200 0 L 300 100 L 200 200 L 100 100 Z",
    textPos: { x: 200, y: 105 },
    themes: ["career", "karma"],
    significance: "The physical constitution, foundational worldview, head, and overarching life direction.",
    yashApproach:
      "The Lagna (Ascendant) sets your soul's primary filter. I assess its ruling lord, dignity, and incoming aspects to decode whether you navigate obstacles through friction, diplomacy, or intellectual mastery.",
  },
  {
    number: 2,
    sanskrit: "Dhana Bhava",
    devanagari: "धन भाव",
    name: "Wealth, Speech & Family Lineage",
    karaka: "Guru (Jupiter)",
    path: "M 0 0 L 200 0 L 100 100 Z",
    textPos: { x: 100, y: 48 },
    themes: ["wealth"],
    significance: "Accumulated liquid assets, family inheritance, early childhood values, and the power of speech.",
    yashApproach:
      "I evaluate the 2nd house to measure financial retention rather than just raw income. A fortified 2nd house shields against economic instability during challenging transits.",
  },
  {
    number: 3,
    sanskrit: "Sahaja Bhava",
    devanagari: "सहज भाव",
    name: "Courage, Willpower & Enterprise",
    karaka: "Mangal (Mars)",
    path: "M 0 0 L 100 100 L 0 200 Z",
    textPos: { x: 45, y: 105 },
    themes: ["career"],
    significance: "Younger siblings, creative manual skills, entrepreneurial grit, short travel, and personal agency.",
    yashApproach:
      "An Upachaya (growth) house. It reveals whether you possess the raw stamina to endure the grueling zero-to-one phase of building an independent vocation or business.",
  },
  {
    number: 4,
    sanskrit: "Sukha Bhava",
    devanagari: "सुख भाव",
    name: "Emotional Peace & Real Estate",
    karaka: "Chandra (Moon)",
    path: "M 0 200 L 100 100 L 200 200 L 100 300 Z",
    textPos: { x: 100, y: 205 },
    themes: ["karma", "love"],
    significance: "The maternal bond, landed property, domestic happiness, ancestral roots, and deep psychological calm.",
    yashApproach:
      "The foundational Moksha house. Afflictions here manifest as perpetual internal restlessness, regardless of external career triumph. Restoring 4th-house harmony is essential for grounded living.",
  },
  {
    number: 5,
    sanskrit: "Putra Bhava",
    devanagari: "पुत्र भाव",
    name: "Intellect, Romance & Purva Punya",
    karaka: "Guru (Jupiter)",
    path: "M 0 200 L 100 300 L 0 400 Z",
    textPos: { x: 45, y: 305 },
    themes: ["love", "karma"],
    significance: "Past-life karmic credit (Purva Punya), children, speculative acumen, creative intelligence, and divine mantras.",
    yashApproach:
      "Your reservoir of cosmic merit. When planetary dasha cycles trigger the 5th house, individuals experience sudden breakthroughs, artistic inspiration, and organic romantic connection.",
  },
  {
    number: 6,
    sanskrit: "Ari Bhava",
    devanagari: "अरि भाव",
    name: "Overcoming Adversaries, Health & Debts",
    karaka: "Mangal & Shani",
    path: "M 0 400 L 100 300 L 200 400 Z",
    textPos: { x: 100, y: 365 },
    themes: ["career"],
    significance: "Daily workplace dynamics, immune strength, litigations, debts, and competitive endurance.",
    yashApproach:
      "Classical Jyotish honors malefic planets in the 6th house because they bestow unyielding resilience. I analyze this house to diagnose how you navigate workplace conflict and physiological stress.",
  },
  {
    number: 7,
    sanskrit: "Yuvati Bhava",
    devanagari: "युवती भाव",
    name: "Marriage, Partnerships & Contracts",
    karaka: "Shukra (Venus)",
    path: "M 200 400 L 100 300 L 200 200 L 300 300 Z",
    textPos: { x: 200, y: 305 },
    themes: ["love"],
    significance: "The spouse, legal unions, business co-founders, contractual alliances, and the public mirror.",
    yashApproach:
      "The ultimate counter-balance to the 1st house. I cross-reference the 7th house with your Navamsha (D9 chart) to reveal subconscious relationship patterns and marital longevity.",
  },
  {
    number: 8,
    sanskrit: "Randhra Bhava",
    devanagari: "रन्ध्र भाव",
    name: "Transformation, Secrets & Longevity",
    karaka: "Shani (Saturn)",
    path: "M 200 400 L 300 300 L 400 400 Z",
    textPos: { x: 300, y: 365 },
    themes: ["karma", "wealth"],
    significance: "Karmic upheaval, longevity, unearned inheritances, esoteric research, and psychological alchemy.",
    yashApproach:
      "The house of sudden transformation. While often feared in pop astrology, a fortified 8th house unlocks profound occult intuition, research brilliance, and the capacity to resurrect life after collapse.",
  },
  {
    number: 9,
    sanskrit: "Dharma Bhava",
    devanagari: "धर्म भाव",
    name: "Higher Truth, Mentors & Fortune",
    karaka: "Guru & Surya",
    path: "M 400 400 L 300 300 L 400 200 Z",
    textPos: { x: 355, y: 305 },
    themes: ["karma", "career"],
    significance: "Fortune (Bhagya), teachers, ethical orientation, spiritual pilgrimages, and philosophical clarity.",
    yashApproach:
      "The most auspicious Trikona house. When the 9th lord is strong, divine grace cushions difficult life transits, ensuring you find the right advisor or moral compass at pivotal crossroads.",
  },
  {
    number: 10,
    sanskrit: "Karma Bhava",
    devanagari: "कर्म भाव",
    name: "Career Apex, Status & Public Action",
    karaka: "Budh, Surya, Guru, Shani",
    path: "M 400 200 L 300 300 L 200 200 L 300 100 Z",
    textPos: { x: 300, y: 205 },
    themes: ["career", "wealth"],
    significance: "Public reputation, career zenith, authority, societal contribution, and executive leadership.",
    yashApproach:
      "The highest point in the sky at birth. I synthesize the 10th house with the Dashamsha (D10 career chart) and your Amatyakaraka planet to pinpoint the precise season for career elevation.",
  },
  {
    number: 11,
    sanskrit: "Labha Bhava",
    devanagari: "लाभ भाव",
    name: "Gains, Aspirations & Global Networks",
    karaka: "Guru (Jupiter)",
    path: "M 400 200 L 300 100 L 400 0 Z",
    textPos: { x: 355, y: 105 },
    themes: ["wealth", "career"],
    significance: "Cash flow realization, realization of grand ambitions, high-value networks, and elder siblings.",
    yashApproach:
      "The house of fulfilled desires. Any planet transiting or stationed here carries the mandate to manifest concrete worldly gains during its operational planetary period.",
  },
  {
    number: 12,
    sanskrit: "Vyaya Bhava",
    devanagari: "व्यय भाव",
    name: "Liberation, Foreign Lands & Solitude",
    karaka: "Shani & Ketu",
    path: "M 400 0 L 300 100 L 200 0 Z",
    textPos: { x: 300, y: 48 },
    themes: ["karma"],
    significance: "Subconscious dream realms, foreign migration, isolation, hospitals/retreats, and ultimate liberation (Moksha).",
    yashApproach:
      "What must be released so spiritual expansion can occur. In contemporary practice, prominent 12th houses routinely indicate prosperous careers in foreign countries or international commerce.",
  },
];

type ThemeFilter = "all" | "career" | "love" | "wealth" | "karma";

const THEME_TABS: { id: ThemeFilter; label: string }[] = [
  { id: "all", label: "Complete Kundli (All 12)" },
  { id: "career", label: "Career & Status" },
  { id: "love", label: "Love & Marriage" },
  { id: "wealth", label: "Wealth & Gains" },
  { id: "karma", label: "Karmic Evolution" },
];

export function KundliExplorerSection() {
  const [selectedHouse, setSelectedHouse] = useState<number>(1);
  const [activeTheme, setActiveTheme] = useState<ThemeFilter>("all");

  const currentData = HOUSES.find((h) => h.number === selectedHouse) || HOUSES[0];

  const isHighlighted = (house: HouseData) => {
    if (activeTheme === "all") return true;
    return house.themes.includes(activeTheme);
  };

  return (
    <section
      className="relative py-20 md:py-32 bg-[#090C16] border-y border-brass-500/20 overflow-hidden"
      aria-labelledby="kundli-explorer-heading"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, rgba(13,15,30,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 border border-brass-500/40 rounded px-3.5 py-1">
            <Compass className="w-3.5 h-3.5 text-brass-400" aria-hidden="true" />
            <span className="text-brass-300 text-xs font-sans font-medium tracking-widest uppercase">
              Classical Diagnostic Grammar
            </span>
          </div>

          <h2
            id="kundli-explorer-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-100 tracking-tight leading-tight"
          >
            The Anatomy of Your <span className="brass-gradient-text">Kundli</span>
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
            A Vedic birth chart is not a vague fortune cookie; it is a sacred geometrical matrix of twelve houses (*Bhavas*),
            each governing a precise dimension of human experience. Explore each quadrant to understand how Yash decodes your blueprint.
          </p>

          {/* Theme Filters */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {THEME_TABS.map((tab) => {
              const isActive = activeTheme === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTheme(tab.id)}
                  className={`text-xs sm:text-sm font-sans px-4 py-2 rounded transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brass-500 text-[#0B0E1A] font-semibold shadow-sm"
                      : "bg-[#111629] text-slate-300 border border-brass-500/30 hover:border-brass-400/70 hover:text-ivory-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Grid: SVG Diagram Left + Analytical Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* ── LEFT: Interactive North Indian Chart (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[480px] aspect-square p-2 bg-[#0D1224] rounded-2xl border border-brass-500/30 shadow-2xl">
              {/* Outer decorative accents */}
              <div className="absolute inset-1 rounded-xl border border-brass-500/15 pointer-events-none" />

              <svg
                viewBox="0 0 400 400"
                className="w-full h-full select-none cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Active house gradient */}
                  <linearGradient id="activeHouseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#8A6E24" stopOpacity="0.25" />
                  </linearGradient>

                  {/* Matching theme gradient */}
                  <linearGradient id="themeHouseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.08" />
                  </linearGradient>
                </defs>

                {/* Draw each house polygon */}
                {HOUSES.map((house) => {
                  const isSelected = selectedHouse === house.number;
                  const highlighted = isHighlighted(house);

                  let fill = "rgba(16, 21, 38, 0.4)";
                  if (isSelected) {
                    fill = "url(#activeHouseGrad)";
                  } else if (highlighted && activeTheme !== "all") {
                    fill = "url(#themeHouseGrad)";
                  }

                  let stroke = isSelected
                    ? "#EDD98A"
                    : highlighted
                    ? "rgba(201, 168, 76, 0.45)"
                    : "rgba(201, 168, 76, 0.18)";
                  let strokeWidth = isSelected ? "2" : "0.9";

                  return (
                    <g
                      key={house.number}
                      onClick={() => setSelectedHouse(house.number)}
                      className="transition-all duration-200 group"
                    >
                      <path
                        d={house.path}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        className="transition-all duration-200 group-hover:opacity-90"
                      />

                      {/* House number label */}
                      <text
                        x={house.textPos.x}
                        y={house.textPos.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Georgia, serif"
                        fontSize={isSelected ? "17" : "14"}
                        fontWeight={isSelected ? "bold" : "600"}
                        fill={isSelected ? "#FDFAF3" : highlighted ? "#DEC263" : "#717A94"}
                        className="pointer-events-none transition-all duration-150"
                      >
                        {house.number}
                      </text>

                      {/* House Sanskrit tag below number for central kendras */}
                      {isSelected && (
                        <circle
                          cx={house.textPos.x}
                          cy={house.textPos.y + 16}
                          r="2.5"
                          fill="#EDD98A"
                          className="pointer-events-none animate-pulse"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              <div className="text-center pt-2 pb-1">
                <span className="text-[11px] text-slate-400 font-sans tracking-wide">
                  Click any of the 12 quadrants to inspect its classical significance
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Analytical Detail Card (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#101528] rounded-2xl border border-brass-500/35 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Corner brass ornamental accent */}
              <div
                className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at top right, #C9A84C 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* House Identity Header */}
              <div className="flex items-start justify-between gap-4 border-b border-brass-500/20 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-brass-400 text-xs font-sans tracking-wider uppercase font-semibold">
                      House {currentData.number} • {currentData.devanagari}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mt-1">
                    {currentData.sanskrit}
                  </h3>
                  <p className="text-sm font-sans text-brass-300/90 font-medium">
                    {currentData.name}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-brass-500/15 border border-brass-500/40 flex items-center justify-center shrink-0">
                  <span className="font-serif text-2xl font-bold text-brass-300">
                    {currentData.number}
                  </span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="space-y-4 py-5 border-b border-brass-500/20">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans block mb-1">
                    Cosmic Karaka (Significator)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161E38] border border-brass-500/20 text-brass-200 text-xs font-sans">
                    <Sparkles className="w-3 h-3 text-brass-400" />
                    {currentData.karaka}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans block mb-1">
                    Core Signification
                  </span>
                  <p className="text-slate-300 text-sm font-sans leading-relaxed">
                    {currentData.significance}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brass-400 font-sans block mb-1">
                    Yash’s Reading Methodology
                  </span>
                  <p className="text-ivory-100/90 text-sm font-sans leading-relaxed bg-[#0B0E1A]/80 p-3.5 rounded-lg border border-brass-500/20 italic">
                    &ldquo;{currentData.yashApproach}&rdquo;
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-brass-500 hover:bg-brass-400 text-[#0B0E1A] text-xs font-sans font-semibold tracking-wide transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Analyze this house in your chart
                </Link>

                <Link
                  href="/services"
                  className="text-xs font-sans text-brass-300 hover:text-brass-200 inline-flex items-center gap-1 transition-colors"
                >
                  View consultation types
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
