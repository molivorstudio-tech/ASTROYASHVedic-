import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const credentials = [
  "12+ years of dedicated Vedic chart practice",
  "10,000+ natal charts analyzed across 40+ countries",
  "Trained in Parashari, Jaimini, and KP systems",
];

export function MeetYashSection() {
  return (
    <section
      className="relative py-16 md:py-24 bg-[#0B0E1A] overflow-hidden"
      aria-labelledby="meet-yash-heading"
    >
      {/* Subtle brass glow behind the photo */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── Photo ──────────────────────────────────────────────── */}
          <div className="relative shrink-0 w-56 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden">
            {/* Edge fades to blend grey background */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
              style={{
                boxShadow: "inset 0 0 40px 20px #0B0E1A",
              }}
              aria-hidden="true"
            />
            {/* Brass border accent */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              style={{
                boxShadow: "0 0 0 1px rgba(201,168,76,0.25)",
              }}
              aria-hidden="true"
            />
            <Image
              src="/astrologer.jpg"
              alt="Yash Singh, Vedic astrologer"
              width={400}
              height={534}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* ── Text ───────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            {/* Section label */}
            <span className="inline-flex items-center gap-2 text-brass-400 text-xs font-sans font-medium tracking-widest uppercase justify-center md:justify-start">
              <span className="w-5 h-px bg-brass-400" aria-hidden="true" />
              Your astrologer
            </span>

            <h2
              id="meet-yash-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100 leading-tight"
            >
              Yash Singh
            </h2>

            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
              Yash has spent over a decade studying the ancient grammar of
              Jyotish — not as a hobby, but as a daily practice. He brings
              the precision of classical Vedic calculation and the clarity of
              direct conversation to every reading, whether you are navigating
              a career crossroads, understanding a relationship, or simply
              asking why this particular moment in your life feels the way it
              does.
            </p>

            {/* Credential list */}
            <ul className="flex flex-col gap-2.5" role="list">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 justify-center md:justify-start"
                >
                  <span
                    className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brass-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-slate-400 text-sm font-sans">{c}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brass-300 hover:text-brass-200 text-sm font-sans font-medium transition-colors duration-200 justify-center md:justify-start group"
            >
              Full biography
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
