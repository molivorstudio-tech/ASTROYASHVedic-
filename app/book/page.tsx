import React from "react";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  HeartHandshake,
  Calendar,
  Gem,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export const metadata = {
  title: "Book a Vedic Consultation | Astroyash",
  description: "Select your personalized Vedic astrology reading with Yash Singh. Real-time 1-on-1 natal chart analysis, relationship synastry, career timing, and practical remedies.",
};

const CONSULTATION_PACKAGES = [
  {
    id: "birth-chart",
    badge: "Most popular",
    title: "Birth Chart & Life Path Reading",
    subtitle: "Full 60-min live consultation",
    price: "₹12,499",
    description:
      "A comprehensive 1-on-1 exploration of your natal horoscope, Mahadasha planetary timing, career trajectory, health indicators, and core karmic lessons.",
    features: [
      "60-minute live 1-on-1 video session (recording provided)",
      "PDF Janampatri & Divisional Chart (D-9 Navamsha) breakdown",
      "Specific Q&A on personal questions & timing",
      "Personalized Vedic remedies & gemstone guidance",
    ],
    icon: Compass,
    isPopular: true,
  },
  {
    id: "career-business",
    badge: "Strategic Timing",
    title: "Career & Business Astrology",
    subtitle: "60-min live consultation",
    price: "₹13,999",
    description:
      "Tailored specifically for founders, executives, and professionals navigating major career pivots, business launches, or financial timing.",
    features: [
      "60-minute strategic career timing session",
      "Divisional Chart D-10 (Dasamsha) analysis for profession",
      "Optimal dates for job changes, launches & investments",
      "Remedies for workplace challenges & obstacle removal",
    ],
    icon: Briefcase,
    isPopular: false,
  },
  {
    id: "synastry-compatibility",
    badge: "Relationship Special",
    title: "Synastry & Marriage Matching",
    subtitle: "75-min live consultation",
    price: "₹14,999",
    description:
      "Detailed dual natal chart comparison analyzing Ashtakoota compatibility, emotional alignment, joint karmic trajectories, and marriage timing.",
    features: [
      "75-minute dual chart video consultation for couples or individuals",
      "Ashtakoota & Kuta scoring with deep qualitative analysis",
      "Longevity, emotional sync & communication breakdown",
      "Practical remedies for relationship harmony",
    ],
    icon: HeartHandshake,
    isPopular: false,
  },
  {
    id: "annual-solar-return",
    badge: "12-Month Guidance",
    title: "Annual Solar Return Forecast",
    subtitle: "60-min live session + written report",
    price: "₹9,999",
    description:
      "Understand major planetary transits (Saturn, Jupiter, Rahu-Ketu shifts) affecting your upcoming year with month-by-month strategic timing.",
    features: [
      "60-minute live annual forecast video session",
      "Comprehensive 25+ page written annual transit report",
      "Key monthly timing windows for financial & personal moves",
      "Yearly remedial guidance for transit mitigation",
    ],
    icon: Calendar,
    isPopular: false,
  },
  {
    id: "gemstone-remedies",
    badge: "Vedic Remedies",
    title: "Gemstone & Remedial Guidance",
    subtitle: "45-min live consultation",
    price: "₹7,999",
    description:
      "Focused session evaluating planetary afflictions, auspicious gemstones (Ratna), mantra recommendations, and practical daily lifestyle remedies.",
    features: [
      "45-minute remedial guidance video call",
      "Precise gemstone recommendation (carat weight, metal, finger)",
      "Planetary mantra & Yantra instructions",
      "Charity & lifestyle alignment remedies",
    ],
    icon: Gem,
    isPopular: false,
  },
  {
    id: "urgent-single-question",
    badge: "Express Consult",
    title: "Urgent Single-Question Consult",
    subtitle: "30-min express live consultation",
    price: "₹5,999",
    description:
      "Fast-track session focused strictly on one immediate life decision, contract signing, relationship dilemma, or pressing timing question.",
    features: [
      "30-minute focused video consultation",
      "Direct answer to one primary life question",
      "Prashna (Horary) chart analysis if birth time is unknown",
      "Targeted remedial suggestion for fast resolution",
    ],
    icon: Clock,
    isPopular: false,
  },
];

export default function BookPage() {
  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 relative z-10">
      {/* 1. Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Select Your Reading</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.08]">
            Choose Your <span className="amethyst-gradient-text">Consultation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed">
            Select the consultation package tailored to your current life season. All sessions are conducted live 1-on-1 with Yash Singh via Zoom with complete video recordings provided.
          </p>

          {/* Value props bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 text-xs font-sans text-slate-300">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#101424] border border-amethyst-500/20">
              <Video className="w-4 h-4 text-amethyst-300" />
              <span>Live 1-on-1 Zoom Session</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#101424] border border-amethyst-500/20">
              <FileText className="w-4 h-4 text-amethyst-300" />
              <span>Full Video Recording &amp; Charts</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#101424] border border-amethyst-500/20">
              <ShieldCheck className="w-4 h-4 text-amethyst-300" />
              <span>100% Confidential Reading</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Packages Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONSULTATION_PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className={`glass-panel flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.isPopular
                    ? "border-amethyst-500/60 shadow-amethyst-glow"
                    : "border-amethyst-500/20 hover:border-amethyst-500/40"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="amethyst" className="text-xs px-4 py-1 shadow-md">
                      Recommended
                    </Badge>
                  </div>
                )}

                <CardHeader className="space-y-4 pt-8">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amethyst-500/15 border border-amethyst-500/30 flex items-center justify-center text-amethyst-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {pkg.badge}
                    </Badge>
                  </div>

                  <div>
                    <CardTitle className="font-serif text-2xl font-bold text-slate-100">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-amethyst-300 font-sans mt-1">
                      {pkg.subtitle}
                    </CardDescription>
                  </div>

                  <div className="pt-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-sans ml-2">/ consultation</span>
                  </div>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="py-4 border-t border-amethyst-500/15">
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-amethyst-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 pb-6">
                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className="w-full"
                  >
                    <Button
                      className={`w-full gap-2 text-xs font-semibold py-3 ${
                        pkg.isPopular ? "" : "btn-editorial-outline"
                      }`}
                    >
                      <span>Select &amp; continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Reassurance Strip */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#101424] border border-amethyst-500/20 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-slate-100">
            Unsure Which Reading Fits Your Situation?
          </h3>
          <p className="text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
            Send a general inquiry with your primary questions. Yash will review your requirements and suggest the optimal consultation length.
          </p>
          <div className="pt-2">
            <Link href="/contact?package=general-inquiry">
              <Button variant="outline" className="text-xs gap-2">
                <span>Send general inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
