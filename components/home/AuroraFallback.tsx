import React from "react";

export function AuroraFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-cosmic-950" />

      {/* Central Indigo / Muted Purple Aurora Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-cosmic-900/30 to-transparent blur-[100px] opacity-80" />

      {/* Soft Luminous Amethyst Center Glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amethyst-500/15 via-amethyst-600/5 to-transparent rounded-full blur-[90px] opacity-70" />
    </div>
  );
}
