import React from "react";

export function StaticStarfield() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
      {/* SVG Starfield & Constellation Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cosmic-grid-static"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="rgba(153, 102, 204, 0.04)"
              strokeWidth="0.5"
            />
            <circle cx="20" cy="30" r="0.75" fill="#9966CC" opacity="0.6" />
            <circle cx="80" cy="70" r="1" fill="#FFFFFF" opacity="0.5" />
            <circle cx="100" cy="20" r="0.5" fill="#B380D9" />
            <circle cx="40" cy="90" r="0.8" fill="#9966CC" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#cosmic-grid-static)" />

        <g stroke="rgba(153, 102, 204, 0.18)" strokeWidth="0.6" fill="none">
          <polyline points="150,100 210,130 270,110 330,160 400,140" />
          <circle cx="150" cy="100" r="2" fill="#B380D9" />
          <circle cx="210" cy="130" r="1.5" fill="#9966CC" />
          <circle cx="270" cy="110" r="2.5" fill="#FFFFFF" />
          <circle cx="330" cy="160" r="1.5" fill="#9966CC" />
          <circle cx="400" cy="140" r="2" fill="#B380D9" />

          <polyline points="85% 250, 89% 300, 83% 360, 88% 420" />
          <polyline points="82% 310, 85% 320, 88% 330" strokeDasharray="3 3" />
          <circle cx="85%" cy="250" r="2.5" fill="#B380D9" />
          <circle cx="89%" cy="300" r="2" fill="#9966CC" />
          <circle cx="83%" cy="360" r="1.8" fill="#FFFFFF" />
          <circle cx="88%" cy="420" r="2.2" fill="#B380D9" />
        </g>
      </svg>
    </div>
  );
}
