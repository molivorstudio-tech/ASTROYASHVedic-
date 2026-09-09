import React from "react";
import Link from "next/link";
import { Calendar, BookOpen, Star, Award, Users } from "lucide-react";
import { KundliBackground } from "@/components/home/KundliBackground";

/* ─── Stat Bar Item ─────────────────────────────────────────────────────── */
function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-1 sm:px-6 sm:first:pl-0 sm:last:pr-0">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-brass-400 shrink-0" aria-hidden="true" />
        <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-ivory-100 leading-none whitespace-nowrap">
          {value}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-slate-300 tracking-wide font-sans uppercase leading-tight">
        {label}
      </span>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="hero-section relative overflow-hidden bg-[#0D0F1E] min-h-[88vh] flex items-center justify-center"
      aria-label="Introduction"
    >
      {/* Vedic Kundli decorative background */}
      <KundliBackground />

      {/* Parchment grain texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
        aria-hidden="true"
      />

      {/* Content — centered, text-first */}
      <div className="hero-content-surface relative isolate z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center hero-text-col space-y-5 sm:space-y-7">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 border border-brass-500/40 rounded px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brass-400 shrink-0" aria-hidden="true" />
          <span className="text-brass-300 text-xs font-sans font-medium tracking-widest uppercase">
            Authentic Vedic &amp; Evolutionary Astrology
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory-100 leading-[1.07]">
          Unlock the{" "}
          <span className="brass-gradient-text">Cosmic Blueprint</span>
          {" "}of Your Destiny
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-200 max-w-2xl font-sans leading-relaxed font-normal">
          Gain profound clarity on career transitions, relationship dynamics,
          and life timing through precision natal chart analysis and planetary
          transit forecasts.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-1">
          <Link href="/book" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded bg-brass-500 hover:bg-brass-400 text-[#0D0F1E] text-sm font-sans font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-400">
              <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
              Book a reading
            </button>
          </Link>
          <Link href="/reports" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded border border-brass-500/50 hover:border-brass-400 text-brass-300 hover:text-brass-200 text-sm font-sans font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-400 bg-transparent">
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              Browse reports
            </button>
          </Link>
        </div>

        {/* Stat bar — bare columns, brass dividers, no glass */}
        <div className="w-full pt-5 mt-1 border-t border-brass-500/20 grid grid-cols-3 sm:flex items-start sm:items-center justify-center sm:divide-x divide-brass-500/20 gap-2 sm:gap-0">
          <Stat icon={Users} value="10,000+" label="Charts analyzed" />
          <Stat icon={Award} value="12+ Years" label="Vedic experience" />
          <Stat icon={Star}  value="4.9 / 5"  label="Client satisfaction" />
        </div>
      </div>

      {/* Bottom fade to page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0E1A 0%, transparent 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
