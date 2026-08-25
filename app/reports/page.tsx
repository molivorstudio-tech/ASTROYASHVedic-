"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  BookOpen,
  FileText,
  Clock,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Gem,
  HelpCircle,
  Cpu,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function ReportsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const DIFFERENTIATOR_CARDS = [
    {
      title: "No live call required",
      description: "Receive full written analysis delivered straight to your email without needing to schedule or attend a video call.",
      icon: Mail,
    },
    {
      title: "Delivered in 3–5 business days",
      description: "Carefully authored by Yash with exact planetary dasha calculations and divisional harmonic chart breakdowns.",
      icon: Clock,
    },
    {
      title: "20+ Page PDF reference",
      description: "Permanent digital document featuring your natal horoscopes, transit timing windows, and personalized remedies.",
      icon: BookOpen,
    },
  ];

  const REPORT_PRODUCTS = [
    {
      id: "birth-chart-report",
      badge: "Most Comprehensive",
      title: "Birth Chart & Life Path Report",
      subtitle: "25+ Page Written PDF • 3-5 Days Delivery",
      price: "₹7,499",
      description:
        "An in-depth written exploration of your natal horoscopes, Mahadasha timing, career potential, health indicators, and core karmic lessons.",
      features: [
        "Full 25+ page PDF digital report delivered via email",
        "Janampatri & Divisional Chart (D-9 Navamsha) breakdown",
        "10-year Mahadasha & Antardasha planetary timeline",
        "Personalized Vedic remedies, mantras & gemstone advice",
      ],
      icon: FileText,
    },
    {
      id: "annual-solar-return-report",
      badge: "12-Month Transit",
      title: "Annual Solar Return Report",
      subtitle: "25+ Page Written PDF • 3-5 Days Delivery",
      price: "₹9,999",
      description:
        "Understand major planetary transits (Saturn, Jupiter, Rahu-Ketu shifts) affecting your upcoming year with month-by-month strategic timing.",
      features: [
        "Comprehensive 25+ page written annual transit report",
        "Month-by-month financial, career & relationship timing",
        "Major planetary transit impact analysis (Saturn/Jupiter)",
        "Yearly remedial guidance for transit mitigation",
      ],
      icon: Calendar,
    },
    {
      id: "compatibility-synastry-report",
      badge: "Partnership Analysis",
      title: "Compatibility & Synastry Report",
      subtitle: "20+ Page Written PDF • 3-5 Days Delivery",
      price: "₹8,999",
      description:
        "Detailed dual natal chart comparison analyzing Ashtakoota compatibility, emotional alignment, joint karmic trajectories, and marriage timing.",
      features: [
        "Dual chart comparison PDF report for couples",
        "Ashtakoota & Kuta scoring with qualitative analysis",
        "Longevity, emotional sync & communication breakdown",
        "Practical remedies for relationship harmony",
      ],
      icon: HeartHandshake,
    },
    {
      id: "muhurta-auspicious-timing-report",
      badge: "Event Timing",
      title: "Muhurta & Auspicious Timing Report",
      subtitle: "15+ Page Written PDF • 3-5 Days Delivery",
      price: "₹4,999",
      description:
        "Written date recommendation report for upcoming weddings, business launches, real estate purchases, or major life milestone events.",
      features: [
        "15+ page written Muhurta recommendation report",
        "Top 3 auspicious date & time windows with Panchang analysis",
        "Inauspicious planetary periods to avoid (Rahu Kalam/Gulik)",
        "Step-by-step ritual timing instructions",
      ],
      icon: Compass,
    },
    {
      id: "gemstone-remedial-report",
      badge: "Vedic Prescription",
      title: "Gemstone & Remedial Guidance Report",
      subtitle: "15+ Page Written PDF • 3-5 Days Delivery",
      price: "₹3,999",
      description:
        "Written prescription evaluating planetary afflictions, auspicious gemstones (Ratna), mantra recommendations, and daily lifestyle remedies.",
      features: [
        "15+ page written remedial PDF document",
        "Precise gemstone recommendation (carat weight, metal, finger)",
        "Planetary mantra & Yantra instructions",
        "Charity & lifestyle alignment recommendations",
      ],
      icon: Gem,
    },
  ];

  const HOW_REPORTS_WORK_STEPS = [
    {
      number: "01",
      title: "Submit your birth details",
      description: "Provide your exact date, precise time, and city of birth at checkout, along with your primary life questions.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Personal chart synthesis",
      description: "Yash manually authors your natal horoscope analysis, Mahadasha timelines, and planetary transits.",
      icon: Cpu,
    },
    {
      number: "03",
      title: "Receive PDF via email",
      description: "Your multi-page digital PDF report is delivered straight to your email inbox within 3–5 business days.",
      icon: Mail,
    },
    {
      number: "04",
      title: "Optional follow-up Q&A",
      description: "Submit written clarification questions via email within 7 days of delivery for complete peace of mind.",
      icon: Sparkles,
    },
  ];

  const FAQ_ITEMS = [
    {
      question: "How does a written report differ from a live consultation?",
      answer:
        "Written reports are asynchronous digital PDF documents delivered via email within 3–5 days. They require no live video call or appointment scheduling. Live consultations on /services are real-time 1-on-1 video sessions.",
    },
    {
      question: "What is the typical delivery turnaround time?",
      answer:
        "Reports are delivered straight to your email inbox within 3 to 5 business days after submitting your accurate birth details.",
    },
    {
      question: "What format and length will my report be?",
      answer:
        "Reports are delivered as high-resolution PDF documents ranging from 15 to 25+ pages depending on the report selected, complete with natal chart diagrams, Dasha timelines, and remedies.",
    },
    {
      question: "Can I ask follow-up questions after receiving my report?",
      answer:
        "Yes! Email follow-up questions regarding your written report are accepted for 7 days after delivery at no additional charge.",
    },
    {
      question: "Do I need exact birth details for a written report?",
      answer:
        "Yes. Accurate birth date, precise birth time, and city of birth are essential for calculating ascendant degrees, Dasha periods, and divisional charts.",
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32 relative z-10">
      {/* 1. Hero Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-16">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <FileText className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Written Reports Catalog</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            In-Depth Async <span className="amethyst-gradient-text">Astrology Reports</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
            Comprehensive written analysis delivered as a private PDF to your inbox — no live call required.
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

      {/* 2. Report Catalog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="catalog">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            Digital PDF Deliverables
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Order Your Written Report
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose your written analysis package. PDF reports are authored by Yash and emailed within 3–5 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REPORT_PRODUCTS.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                className="flex flex-col justify-between relative group hover:border-amethyst-500/50"
              >
                <div>
                  <CardHeader className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <Badge variant="default" className="text-xs font-semibold">
                        {product.badge}
                      </Badge>
                      <div className="w-11 h-11 rounded-xl border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300 shadow-amethyst-glow">
                        <IconComponent className="w-5 h-5 text-amethyst-300" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl pt-2">{product.title}</CardTitle>
                      <CardDescription className="text-xs text-amethyst-300/90 font-medium tracking-wide">
                        {product.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
                        {product.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ report</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {product.description}
                    </p>

                    <ul className="space-y-3 pt-3 border-t border-cosmic-800/80">
                      {product.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amethyst-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="pt-6">
                  <Link href={`/order?report=${product.id}`} className="w-full">
                    <Button variant="default" className="w-full justify-between">
                      <span>Order report</span>
                      <ArrowUpRight className="w-4 h-4 text-cosmic-950" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. How Reports Work Process Section */}
      <section className="py-16 bg-cosmic-950/70 border-y border-amethyst-500/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
              Simple Async Process
            </Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              How Reports Work
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-sans">
              Four straightforward steps to receiving your personalized written astrology PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_REPORTS_WORK_STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-amethyst-500/20 bg-cosmic-900/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amethyst-500/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-4xl font-bold amethyst-gradient-text">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300">
                      <IconComponent className="w-5 h-5 text-amethyst-300" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Report FAQs Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>Report FAQs</span>
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-sans">
            Everything you need to know about ordering and receiving written PDF reports.
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

      {/* 5. Closing CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amethyst-500/20 bg-cosmic-900/70 p-10 md:p-16 text-center space-y-8 backdrop-blur-xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              Prefer a live video consultation instead?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              If you&apos;d like to discuss your natal chart interactively in real-time, explore our 1-on-1 live video consultation sessions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2.5">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a live reading</span>
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2.5">
                <BookOpen className="w-4 h-4 text-amethyst-400" />
                <span>Browse live services</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
