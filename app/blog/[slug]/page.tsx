import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Quote, ArrowUpRight, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from "@/lib/blog-data";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Astroyash" };

  return {
    title: `${post.title} | Astroyash Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-24 relative z-10">
      {/* 1. Back Link & Article Header */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-amethyst-300 hover:text-amethyst-200 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>

        <div className="space-y-6">
          <Badge variant="default" className="text-xs">
            {post.category}
          </Badge>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-slate-100 leading-[1.15]">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 border-y border-amethyst-500/20 py-4">
            <span className="flex items-center gap-2 text-slate-200 font-medium">
              <User className="w-4 h-4 text-amethyst-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amethyst-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amethyst-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Article Content Body */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
        {post.content.slice(0, 2).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {/* Mid-Article Pull-Quote */}
        {post.quote && (
          <div className="my-10 rounded-2xl border border-amethyst-500/30 bg-cosmic-900/80 p-8 text-center relative overflow-hidden backdrop-blur-xl">
            <Quote className="w-10 h-10 text-amethyst-500/25 mx-auto mb-3" />
            <blockquote className="font-serif text-xl sm:text-3xl font-semibold text-slate-100 leading-snug">
              &ldquo;<span className="amethyst-gradient-text">{post.quote.text}</span>&rdquo;
            </blockquote>
            <span className="block pt-4 text-xs uppercase tracking-widest text-amethyst-400 font-semibold">
              — {post.quote.author}
            </span>
          </div>
        )}

        {post.content.slice(2).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </section>

      {/* 3. Closing CTA Strip */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amethyst-500/20 bg-cosmic-900/70 p-8 sm:p-12 text-center space-y-6 backdrop-blur-xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <Badge variant="outline" className="text-amethyst-300 border-amethyst-500/40">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span>Personalized Reading</span>
            </Badge>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-100">
              Explore your personal natal chart
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a live 1-on-1 reading with Yash Singh for tailored insights into your career timing, relationships, and Mahadasha periods.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2.5">
                <Calendar className="w-4 h-4 text-cosmic-950" />
                <span>Book a reading</span>
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2.5">
                <BookOpen className="w-4 h-4 text-amethyst-400" />
                <span>Browse consultation packages</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Related Posts Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-cosmic-800 pb-4">
            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Related Articles
            </h3>
            <Link
              href="/blog"
              className="text-xs sm:text-sm text-amethyst-300 hover:text-amethyst-200 transition-colors font-medium"
            >
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost) => (
              <Card
                key={relPost.slug}
                className="flex flex-col justify-between overflow-hidden group hover:border-amethyst-500/50 transition-all duration-300"
              >
                <div>
                  <div
                    className={`h-36 w-full bg-gradient-to-br ${relPost.gradient} relative flex items-center justify-center p-4 border-b border-cosmic-800/80`}
                  >
                    <Badge variant="default" className="text-xs bg-cosmic-950/80 backdrop-blur-md">
                      {relPost.category}
                    </Badge>
                  </div>

                  <CardHeader className="space-y-2 pt-4">
                    <CardTitle className="text-lg font-bold font-serif leading-snug group-hover:text-amethyst-300 transition-colors line-clamp-2">
                      {relPost.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-xs text-slate-300 line-clamp-2">
                      {relPost.excerpt}
                    </CardDescription>
                  </CardContent>
                </div>

                <CardFooter className="pt-3 border-t border-cosmic-800/60 mt-3">
                  <Link href={`/blog/${relPost.slug}`} className="w-full">
                    <Badge
                      variant="outline"
                      className="w-full justify-between py-1.5 text-xs text-amethyst-300 group-hover:bg-amethyst-500/15 transition-colors"
                    >
                      <span>Read article</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amethyst-300" />
                    </Badge>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
