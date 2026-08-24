"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { StaticStarfield } from "@/components/layout/StaticStarfield";

const ThreeStarfield = dynamic(
  () => import("@/components/layout/ThreeStarfield"),
  {
    ssr: false,
    loading: () => <StaticStarfield />,
  }
);

export function CosmicBackground() {
  const [use3D, setUse3D] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;

    if (!prefersReducedMotion && !isMobile) {
      setUse3D(true);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Ambient Amethyst & Cosmic Radial Glow Layers */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amethyst-500/15 via-cosmic-800/10 to-transparent rounded-full blur-[120px] opacity-70 animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-l from-cosmic-700/20 via-cosmic-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 3D Starfield or Static Fallback */}
      {mounted && use3D ? <ThreeStarfield /> : <StaticStarfield />}
    </div>
  );
}
