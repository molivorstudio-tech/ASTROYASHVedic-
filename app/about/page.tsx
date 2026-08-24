import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, BookOpen, Award, Users, Compass, ShieldCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Yash | Astroyash Vedic Astrology",
  description: "Learn about Yash's 12+ years of Vedic astrology experience, classical Jyotish expertise, and empowering life path guidance philosophy.",
};

const EXPERTISE_CARDS = [
  {
    title: "12+ Years Experience",
    description: "Over a decade dedicated to empirical natal chart synthesis, Mahadasha timing, and transit forecasting.",
    icon: Award,
  },
  {
    title: "10,000+ Charts Analyzed",
    description: "Delivered in-depth astrological consultations for individuals, entrepreneurs, and couples across 25+ countries.",
    icon: Users,
  },
  {
    title: "Classical Jyotish Mastery",
    description: "Specialized in traditional Parashari & Jaimini systems, divisional charts (D-9, D-10), and Ashtakavarga scoring.",
    icon: Compass,
  },
  {
    title: "Practical Remedial Guidance",
    description: "Empowering, non-fatalistic advice featuring practical lifestyle adjustments, planetary mantras, and strategic timing.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 space-y-20 md:space-y-28 relative z-10">
      {/* 1. Page Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
            <span>About Yash</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            Ancient Wisdom for <span className="amethyst-gradient-text">Modern Life Paths</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
            12+ years of Vedic astrology experience, precision transit forecasting, and non-fatalistic karmic guidance.
          </p>
        </div>
      </section>

      {/* 2. Story & Biography Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
              Decoding the Celestial Blueprint
            </h2>

            <p>
              My journey into Vedic astrology (Jyotish — literally &ldquo;the science of light&rdquo;) began over twelve years ago with a single compelling question: how do astronomical planetary mechanics correlate with the turning points of human experience?
            </p>

            <p>
              Deep immersion in classical Sanskrit texts, Parashari techniques, and Jaimini sutras revealed that astrology is not a tool for fortune-telling or fatalistic predictions. Rather, it is a sophisticated, mathematical map of karmic cycles, Mahadasha timelines, and planetary transits.
            </p>

            <p>
              Today, I work as a solo practitioner with clients around the globe — from startup founders navigating high-stakes career pivots to individuals seeking clarity on personal relationships. My approach pairs rigorous traditional technique with empathetic, practical counsel that respects your free will.
            </p>
          </div>

          {/* Side Highlight / Stats Box */}
          <div className="lg:col-span-5">
            <Card className="bg-cosmic-900/90 border-amethyst-500/30 p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-amethyst-400 font-semibold">
                  Practitioner Core Values
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  The Astroyash Standard
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amethyst-400 mt-2 shrink-0" />
                  <span><strong>Mathematical Precision:</strong> Exact birth time coordinates and divisional harmonic charts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amethyst-400 mt-2 shrink-0" />
                  <span><strong>Empowering Free Will:</strong> Planetary transits highlight weather; you choose how to navigate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amethyst-400 mt-2 shrink-0" />
                  <span><strong>Actionable Remedies:</strong> Realistic guidance without fear-mongering or fatalism.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Credentials & Expertise Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            Credentials & Specialization
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Pillars of Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <Card key={idx} className="flex flex-col justify-between hover:border-amethyst-500/50">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300 shadow-amethyst-glow">
                    <IconComponent className="w-6 h-6 text-amethyst-300" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. Philosophy Pull-Quote */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amethyst-500/30 bg-cosmic-900/80 p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-xl">
          <Quote className="w-12 h-12 text-amethyst-500/20 mx-auto mb-4" />
          <blockquote className="font-serif text-2xl sm:text-4xl font-semibold text-slate-100 leading-snug max-w-3xl mx-auto">
            &ldquo;Astrology does not lock you into a rigid fate — it reveals the <span className="amethyst-gradient-text">cosmic weather</span> so you can navigate your life path with mastery, timing, and peace of mind.&rdquo;
          </blockquote>
          <span className="block pt-6 text-sm uppercase tracking-widest text-amethyst-400 font-semibold">
            — Yash Singh
          </span>
        </div>
      </section>

      {/* 5. Closing CTA Section */}
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
