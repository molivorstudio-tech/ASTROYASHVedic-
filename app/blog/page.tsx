import React from "react";
import Link from "next/link";
import { Sparkles, Clock, Calendar, ArrowUpRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata = {
  title: "Blog & Astrological Insights | Astroyash",
  description: "Read practical Vedic astrology guides, weekly horoscopes, relationship synastry articles, and planetary timing breakdowns by Yash Singh.",
};

const CATEGORIES = ["All", "Horoscopes", "Vedic Astrology", "Relationships", "Career"];

export default function BlogIndexPage() {
  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 relative z-10">
      {/* 1. Header Section (Simpler page-header pattern matching About page) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="default" className="gap-2 py-1.5 px-4">
            <Sparkles className="w-3.5 h-3.5 text-amethyst-300" />
            <span>Astrology Articles & Insights</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            Cosmic Wisdom & <span className="amethyst-gradient-text">Transit Forecasts</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
            Practical Vedic astrology guides, weekly horoscopes, and planetary timing breakdowns by Yash Singh.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Row (Visual/Static Pills) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {CATEGORIES.map((cat, idx) => (
            <Badge
              key={idx}
              variant={idx === 0 ? "amethyst" : "outline"}
              className="cursor-pointer text-xs sm:text-sm py-1.5 px-4 transition-all duration-200 hover:border-amethyst-500/60"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      {/* 3. Post Grid (6 Cards) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col justify-between overflow-hidden group hover:border-amethyst-500/50 transition-all duration-300"
            >
              <div>
                {/* Cover Image Placeholder with CSS Gradient & Cosmic Styling */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative flex items-center justify-center p-6 border-b border-cosmic-800/80 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-cosmic-950/30 backdrop-blur-[2px]" />
                  <div className="relative z-10 text-center space-y-2">
                    <Badge variant="default" className="text-xs bg-cosmic-950/80 backdrop-blur-md">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-3 pt-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amethyst-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amethyst-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-xl font-bold font-serif leading-snug group-hover:text-amethyst-300 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </div>

              <CardFooter className="pt-4 border-t border-cosmic-800/60 mt-4">
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Badge
                    variant="outline"
                    className="w-full justify-between py-2 text-amethyst-300 group-hover:bg-amethyst-500/15 group-hover:border-amethyst-500/40 transition-colors"
                  >
                    <span>Read full article</span>
                    <ArrowUpRight className="w-4 h-4 text-amethyst-300" />
                  </Badge>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Footer CTA Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amethyst-500/20 bg-cosmic-900/70 p-10 md:p-14 text-center space-y-6 backdrop-blur-xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
              Want personalized insights for your chart?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Explore your unique Dasha timelines, planetary transits, and personal life path with Yash Singh.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book">
              <Badge variant="amethyst" className="py-2.5 px-6 text-sm gap-2 cursor-pointer">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a reading</span>
              </Badge>
            </Link>
            <Link href="/services">
              <Badge variant="outline" className="py-2.5 px-6 text-sm gap-2 cursor-pointer">
                <BookOpen className="w-4 h-4 text-amethyst-400" />
                <span>Browse consultation packages</span>
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
