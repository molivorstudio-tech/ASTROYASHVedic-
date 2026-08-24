import React from "react";

export function AuroraOrb() {
  return (
    <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[420px] sm:w-[540px] h-[280px] sm:h-[340px] pointer-events-none z-0 overflow-hidden select-none">
      {/* Outer Amethyst Atmosphere Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amethyst-500/20 via-amethyst-600/8 to-transparent rounded-full blur-[80px] animate-pulse-slow" />

      {/* Inner Luminous Amethyst Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[260px] h-[130px] sm:h-[160px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amethyst-400/25 via-amethyst-500/12 to-transparent rounded-full blur-[45px] animate-pulse-slow" />
    </div>
  );
}
