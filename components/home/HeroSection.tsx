import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, BookOpen, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraHeroBackground } from "@/components/home/AuroraHeroBackground";

export function HeroSection() {
  return (
    <section className="relative pt-14 pb-24 md:pt-24 md:pb-36 overflow-hidden min-h-[88vh] flex items-center justify-center">
      {/* Aurora + Luminous Orb WebGL & Static Fallback Background */}
      <AuroraHeroBackground />

      {/* Main Hero Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-10">
          {/* Eyebrow Badge (Sentence case, rounded-lg, modest tracking-wide) */}
          <Badge variant="default" className="gap-2.5 py-2 px-5 text-xs sm:text-sm animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-amethyst-300" />
            <span className="text-amethyst-200 font-medium tracking-wide">Authentic Vedic & Evolutionary Astrology</span>
          </Badge>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100 leading-[1.08] drop-shadow-md">
            Unlock the <span className="amethyst-gradient-text">Cosmic Blueprint</span> of Your Destiny
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-sans leading-relaxed font-normal">
            Gain profound clarity on career transitions, relationship dynamics, and life timing through precision natal chart analysis and planetary transit forecasts.
          </p>

          {/* Luxury Sentence Case CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto pt-3">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-3 text-sm">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a reading</span>
              </Button>
            </Link>

            <Link href="/reports" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-3 text-sm">
                <BookOpen className="w-4 h-4 text-amethyst-300" />
                <span>Browse reports</span>
              </Button>
            </Link>
          </div>

          {/* Key Metrics / Trust Bar */}
          <div className="pt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl border-t border-amethyst-500/20">
            <div className="flex flex-col items-center space-y-1.5 p-5 rounded-2xl glass-panel hover:border-amethyst-500/40 transition-all duration-300">
              <div className="flex items-center gap-2.5 text-amethyst-300">
                <Users className="w-5 h-5 text-amethyst-300" />
                <span className="font-serif text-3xl font-bold text-slate-100">10,000+</span>
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">Charts analyzed</span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 p-5 rounded-2xl glass-panel hover:border-amethyst-500/40 transition-all duration-300">
              <div className="flex items-center gap-2.5 text-amethyst-300">
                <Award className="w-5 h-5 text-amethyst-300" />
                <span className="font-serif text-3xl font-bold text-slate-100">12+ Years</span>
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">Vedic experience</span>
            </div>

            <div className="flex flex-col items-center space-y-1.5 p-5 rounded-2xl glass-panel hover:border-amethyst-500/40 transition-all duration-300">
              <div className="flex items-center gap-2.5 text-amethyst-300">
                <Star fill="#B380D9" className="w-5 h-5 text-amethyst-300" />
                <span className="font-serif text-3xl font-bold text-slate-100">4.9 / 5</span>
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">Client satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
