"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  BookOpen,
  Compass,
  ShieldCheck,
  Award,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Briefcase,
  HeartHandshake,
  Gem,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const DIFFERENTIATOR_CARDS = [
  {
    title: "Personalized to your chart",
    description: "Calculated using exact astronomical birth coordinates, divisional harmonic charts (D-9, D-10), and Dasha timelines.",
    icon: Compass,
  },
  {
    title: "Practical, actionable guidance",
    description: "No fatalistic fluff. Clear, strategic life guidance paired with realistic, empowering remedies.",
    icon: ShieldCheck,
  },
  {
    title: "12+ years Vedic experience",
    description: "Deep mastery of classical Parashari and Jaimini Jyotish systems applied to modern career and personal decisions.",
    icon: Award,
  },
];

const CONSULTATION_SERVICES = [
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
      "Immediate strategic action plan",
    ],
    icon: Clock,
  },
];

const FAQ_ITEMS = [
  {
    question: "What birth details do I need to provide before booking?",
    answer:
      "You will need your exact date of birth, precise time of birth (from a birth certificate or hospital record if possible), and city/country of birth. Precise birth time is critical for accurate ascendant (lagna) and divisional chart calculations.",
  },
  {
    question: "How are the live consultation sessions conducted?",
    answer:
      "All live sessions are conducted 1-on-1 via video call (Zoom or Google Meet). You will receive a calendar link immediately after booking. Full audio/video recordings and chart PDFs are emailed to you after the session.",
  },
  {
    question: "Can I ask questions about multiple life areas in one reading?",
    answer:
      "Yes! Full birth chart readings (such as the 60-min Birth Chart & Life Path Reading) cover career, relationships, health, finances, and spiritual timing. You are encouraged to bring your top personal questions.",
  },
  {
    question: "What if I don't know my exact time of birth?",
    answer:
      "If your birth time is unknown within a few hours, Prashna (Vedic Horary Astrology) or birth time rectification techniques can be used during an Express Consult or specialized reading.",
  },
  {
    question: "What is your rescheduling or cancellation policy?",
    answer:
      "Sessions can be rescheduled free of charge up to 24 hours prior to the scheduled call. Cancellations made with at least 24-hour notice receive a full refund or credit toward a future report.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32 relative z-10">
      {/* 1. Hero Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-16">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Consultation Packages</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            Precision Vedic Astrology <span className="amethyst-gradient-text">Consultations</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
            Empowering life guidance tailored to your exact astronomical birth coordinates and planetary timing.
          </p>
        </div>

        {/* Header Hero Differentiators - 3 Stacked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {DIFFERENTIATOR_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <Card key={idx} className="bg-cosmic-900/80 border-amethyst-500/25 p-6 hover:border-amethyst-500/50">
                <CardHeader className="space-y-3 p-0 pb-3">
                  <div className="w-10 h-10 rounded-lg border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300">
                    <IconComponent className="w-5 h-5 text-amethyst-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-100">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm text-slate-300 leading-relaxed font-sans">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 2. Full Consultation Offerings Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="offerings">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            Live 1-on-1 Sessions
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Choose Your Consultation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select the live session package aligned with your present life decisions and planetary transits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONSULTATION_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between relative group hover:border-amethyst-500/50"
              >
                <div>
                  <CardHeader className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <Badge variant="default" className="text-xs font-semibold">
                        {service.badge}
                      </Badge>
                      <div className="w-11 h-11 rounded-xl border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300 shadow-amethyst-glow">
                        <IconComponent className="w-5 h-5 text-amethyst-300" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl pt-2">{service.title}</CardTitle>
                      <CardDescription className="text-xs text-amethyst-300/90 font-medium tracking-wide">
                        {service.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                        {service.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ session</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <ul className="space-y-3 pt-3 border-t border-cosmic-800/80">
                      {service.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amethyst-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="pt-6">
                  <Link href="/book" className="w-full">
                    <Button variant="default" className="w-full justify-between">
                      <span>Book consultation</span>
                      <ArrowUpRight className="w-4 h-4 text-cosmic-950" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. FAQ / What to Expect Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>Pre-Booking Clarity</span>
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            What to Expect
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-sans">
            Common questions about preparing for your reading and session logistics.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-amethyst-500/20 bg-cosmic-900/80 backdrop-blur-xl transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amethyst-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-cosmic-800/60 pt-4 font-sans animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amethyst-500/20 bg-cosmic-900/70 p-10 md:p-16 text-center space-y-8 backdrop-blur-xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              Ready to explore your natal chart?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Book a live 1-on-1 reading or order an annual solar return forecast report tailored to your exact birth coordinates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2.5">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a reading</span>
              </Button>
            </Link>

            <Link href="/reports" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2.5">
                <BookOpen className="w-4 h-4 text-amethyst-400" />
                <span>Browse reports</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
