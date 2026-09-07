/**
 * KundliBackground
 *
 * Purely decorative SVG background: a North-Indian-style Kundli (birth
 * chart) diamond grid, two concentric mandala rings, and scattered nakshatra
 * dots — all rendered as inline SVG so there are zero network fetches.
 *
 * Motion: a very slow rotation on the outer ring, gated behind
 * prefers-reduced-motion. Everything else is static.
 */

import React from "react";

export function KundliBackground() {
  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep indigo base wash */}
      <div className="absolute inset-0 bg-[#0D0F1E]" />

      {/* Warm brass glow top-right — where photo sits */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 68%)",
        }}
      />

      {/* Cool deep-indigo glow left — text side */}
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(55,60,120,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Main Kundli SVG */}
      <svg
        viewBox="0 0 900 900"
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[640px] h-[640px] opacity-[0.09] lg:opacity-[0.13]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── North-Indian diamond grid ────────────────────── */}
        {/* Outer square */}
        <rect x="100" y="100" width="700" height="700" stroke="#C9A84C" strokeWidth="1" />
        {/* Inner square (rotated 45deg = diamond) */}
        <rect
          x="450" y="100"
          width="495" height="495"
          transform="rotate(45 450 450)"
          stroke="#C9A84C" strokeWidth="0.75"
        />
        {/* Horizontal + vertical center lines */}
        <line x1="100" y1="450" x2="800" y2="450" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="450" y1="100" x2="450" y2="800" stroke="#C9A84C" strokeWidth="0.6" />
        {/* Diagonals */}
        <line x1="100" y1="100" x2="800" y2="800" stroke="#C9A84C" strokeWidth="0.5" />
        <line x1="800" y1="100" x2="100" y2="800" stroke="#C9A84C" strokeWidth="0.5" />

        {/* House divider lines (North Indian Kundli — 12 houses) */}
        <line x1="100" y1="100" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="800" y1="100" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="100" y1="800" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="800" y1="800" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.4" />
        {/* Mid-side to center */}
        <line x1="100" y1="450" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.35" />
        <line x1="800" y1="450" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.35" />
        <line x1="450" y1="100" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.35" />
        <line x1="450" y1="800" x2="450" y2="450" stroke="#C9A84C" strokeWidth="0.35" />

        {/* ── Outer mandala ring ───────────────────────────── */}
        <circle cx="450" cy="450" r="340" stroke="#C9A84C" strokeWidth="0.6" strokeDasharray="3 9" className="kundli-rotate" />
        <circle cx="450" cy="450" r="310" stroke="#C9A84C" strokeWidth="0.3" />

        {/* ── Inner mandala ring ───────────────────────────── */}
        <circle cx="450" cy="450" r="180" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="450" cy="450" r="148" stroke="#C9A84C" strokeWidth="0.3" />

        {/* ── 27 Nakshatra tick marks on outer ring ─────────── */}
        {Array.from({ length: 27 }).map((_, i) => {
          const angle = (i / 27) * 2 * Math.PI - Math.PI / 2;
          const r1 = 310;
          const r2 = 325;
          const cx = 450 + r1 * Math.cos(angle);
          const cy = 450 + r1 * Math.sin(angle);
          const cx2 = 450 + r2 * Math.cos(angle);
          const cy2 = 450 + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={cx2} y2={cy2}
              stroke="#C9A84C"
              strokeWidth="0.8"
            />
          );
        })}

        {/* ── 12 Rashi (zodiac) labels on inner ring ───────── */}
        {["Me", "Ve", "Su", "Mo", "Ma", "Ju", "Sa", "Ra", "Ke", "As", "Ke", "Ra"].map((glyph, i) => {
          const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
          const r = 200;
          const x = 450 + r * Math.cos(angle);
          const y = 450 + r * Math.sin(angle);
          return (
            <text
              key={i}
              x={x} y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="13"
              fontFamily="Georgia, serif"
              fill="#C9A84C"
              opacity="0.7"
            >
              {glyph}
            </text>
          );
        })}

        {/* ── Scattered nakshatra star dots ────────────────── */}
        {[
          [140, 180], [760, 220], [200, 700], [720, 680],
          [270, 140], [640, 160], [150, 540], [780, 400],
          [380, 820], [560, 810], [450, 130], [450, 770],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#C9A84C" opacity="0.5" />
        ))}

        {/* Center dot */}
        <circle cx="450" cy="450" r="5" fill="#C9A84C" opacity="0.6" />
        <circle cx="450" cy="450" r="12" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      </svg>

      {/* Secondary smaller Kundli — far left, very faint */}
      <svg
        viewBox="0 0 400 400"
        className="absolute bottom-[-5%] left-[-5%] w-64 h-64 opacity-[0.05] lg:opacity-[0.07]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="40" y="40" width="320" height="320" stroke="#C9A84C" strokeWidth="1" />
        <rect x="200" y="40" width="226" height="226" transform="rotate(45 200 200)" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="#C9A84C" strokeWidth="0.5" />
        <line x1="200" y1="40" x2="200" y2="360" stroke="#C9A84C" strokeWidth="0.5" />
        <line x1="40" y1="40" x2="360" y2="360" stroke="#C9A84C" strokeWidth="0.4" />
        <line x1="360" y1="40" x2="40" y2="360" stroke="#C9A84C" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="3 8" />
        <circle cx="200" cy="200" r="60" stroke="#C9A84C" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="4" fill="#C9A84C" opacity="0.5" />
      </svg>

    </div>
  );
}
