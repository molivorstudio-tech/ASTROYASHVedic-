"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AuroraFallback } from "@/components/home/AuroraFallback";
import { AuroraOrb } from "@/components/home/AuroraOrb";

const AuroraShader = dynamic(() => import("@/components/home/AuroraShader"), {
  ssr: false,
  loading: () => null,
});

export function AuroraHeroBackground() {
  const [mounted, setMounted] = useState(false);
  const [useShader, setUseShader] = useState(false);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;

    if (!prefersReducedMotion && !isMobile) {
      setUseShader(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Checkpoint 1: Guaranteed Static CSS Gradient Foundation */}
      <AuroraFallback />

      {/* Luminous Pulsing Orb Behind Headline */}
      <AuroraOrb />

      {/* Checkpoint 2: Animated GLSL Shader Layer (Desktop & Motion Enabled) */}
      {mounted && useShader && (
        <AuroraShader onError={() => setUseShader(false)} />
      )}
    </div>
  );
}
