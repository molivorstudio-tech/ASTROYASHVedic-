import React from "react";
import Link from "next/link";
import { Compass, Calendar, HeartHandshake, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURED_SERVICES = [
  {
    id: "birth-chart",
    badge: "Most popular",
    title: "Birth Chart & Life Path Reading",
    subtitle: "Full 60-min consultation",
    price: "₹12,499",
    description:
      "A deep-dive exploration of your natal horoscopes, Mahadasha timing, career potential, health indicators, and core karmic themes.",
    features: [
      "60-minute live 1-on-1 audio/video call",
      "PDF Janampatri & Divisional Chart breakdown",
      "Specific Q&A and personalized remedies",
    ],
    icon: Compass,
    cta: "Book consultation",
  },
  {
    id: "annual-forecast",
    badge: "12-month guidance",
    title: "Annual Solar Return Report",
    subtitle: "Yearly transit breakdown",
    price: "₹9,999",
    description:
      "Understand major planetary transits (Saturn, Rahu-Ketu, Jupiter) affecting your upcoming year with month-by-month strategic timing.",
    features: [
      "Comprehensive 25+ page written report",
      "Key dates for career changes & financial moves",
      "30-minute follow-up Q&A session",
    ],
    icon: Calendar,
    cta: "Order annual report",
  },
  {
    id: "synastry-compatibility",
    badge: "Relationship special",
    title: "Synastry & Compatibility Sync",
    subtitle: "Partnership & marriage analysis",
    price: "₹14,999",
    description:
      "Examine joint karmic trajectories, emotional alignment, longevity indicators, and communication strengths between two charts.",
    features: [
      "Dual chart comparison (Ashtakoota & Kuta)",
      "75-minute detailed video consultation",
      "Conflict resolution & harmony remedies",
    ],
    icon: HeartHandshake,
    cta: "Explore compatibility",
  },
];

export function FeaturedServicesSection() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="default">
              Featured readings & reports
            </Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
              Tailored celestial insights
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Choose the reading or report that matches your current life phase and questions.
            </p>
          </div>

          <Link href="/services">
            <Button variant="outline" className="gap-2.5">
              <span>View all services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* 3 Cards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service) => {
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

                <CardFooter>
                  <Link href={`/services#${service.id}`} className="w-full">
                    <Button variant="default" className="w-full justify-between">
                      <span>{service.cta}</span>
                      <ArrowUpRight className="w-4 h-4 text-cosmic-950" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
