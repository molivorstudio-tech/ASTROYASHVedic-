import React from "react";
import { Clock, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    number: "01",
    title: "Share your birth data",
    description:
      "Provide your exact date, precise time, and city of birth. Exact astronomical coordinates ensure complete planetary accuracy.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Deep chart synthesis",
    description:
      "Yash conducts a thorough analysis combining Dasha cycles, planetary transits, divisional charts, and karmic placement patterns.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "1-on-1 actionable session",
    description:
      "Receive personalized video guidance detailing key timelines, strategic career opportunities, relationship insights, and Vedic remedies.",
    icon: Sparkles,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-cosmic-950/70 relative z-10 border-y border-amethyst-500/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            The consultation process
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            How your journey unfolds
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-sans">
            A seamless three-step experience designed to translate ancient celestial mechanics into practical, empowering guidance.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-amethyst-500/20 bg-cosmic-900/75 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amethyst-500/50 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(153,102,204,0.2)] hover:-translate-y-1 group"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-5xl font-bold amethyst-gradient-text">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl border border-amethyst-500/30 bg-amethyst-500/12 flex items-center justify-center text-amethyst-300 shadow-amethyst-glow group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-amethyst-300" />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="font-serif text-2xl font-semibold text-slate-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>

                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-amethyst-500/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
