import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TESTIMONIALS = [
  {
    quote:
      "Yash's analysis of my Saturn Mahadasha transition was unnervingly accurate. His strategic advice gave me the confidence to pivot my career path right before a major breakthrough.",
    author: "Priya Sharma",
    location: "London, UK",
    readingType: "Birth chart & career consultation",
    stars: 5,
  },
  {
    quote:
      "The annual forecast report was a game changer for our business expansion. The precise timing window Yash highlighted for our product launch aligned perfectly with our growth metrics.",
    author: "Marcus Vance",
    location: "San Francisco, USA",
    readingType: "Annual solar return report",
    stars: 5,
  },
  {
    quote:
      "Empathetic, deep, and grounded in real wisdom. No fatalistic fluff—just genuine Vedic astrology paired with practical life guidance. Highly recommended!",
    author: "Ananya Deshmukh",
    location: "Mumbai, India",
    readingType: "Synastry & life guidance",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-cosmic-950/80 border-t border-amethyst-500/15 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
            Client experiences
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100">
            Words from seekers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-sans">
            Real feedback from individuals who have found clarity and direction through Astroyash consultations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-8 bg-cosmic-900/80 hover:border-amethyst-500/45 relative"
            >
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between">
                  {/* Solid Filled Star Rating */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star
                        key={i}
                        fill="#B380D9"
                        className="w-4 h-4 text-amethyst-300"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amethyst-500/25" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic font-sans font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </CardContent>

              <div className="pt-6 border-t border-cosmic-800/80 mt-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-amethyst-500/40 bg-amethyst-500/15 flex items-center justify-center font-serif font-bold text-amethyst-300 text-lg shadow-amethyst-glow">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-slate-100">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.location} • <span className="text-amethyst-300 font-medium">{item.readingType}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
