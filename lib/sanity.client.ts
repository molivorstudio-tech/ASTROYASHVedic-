import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset, apiVersion, useCdn } from "../sanity/env";
import { BLOG_POSTS, BlogPost as FallbackBlogPost } from "./blog-data";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  category: "Horoscopes" | "Vedic Astrology" | "Relationships" | "Career";
  publishedAt: string;
  readTime?: string;
  excerpt: string;
  gradient?: string;
  author?: { name: string };
  pullQuote?: { text: string; author: string };
  body?: any;
}

export async function getAllPosts(): Promise<FallbackBlogPost[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      return BLOG_POSTS;
    }

    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      "date": publishedAt,
      readTime,
      excerpt,
      gradient,
      "author": author->name,
      pullQuote,
      body
    }`;

    const sanityPosts = await client.fetch(query);
    if (!sanityPosts || sanityPosts.length === 0) {
      return BLOG_POSTS;
    }

    return sanityPosts.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      category: p.category || "Vedic Astrology",
      date: p.date ? new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Aug 2026",
      readTime: p.readTime || "5 min read",
      excerpt: p.excerpt,
      author: p.author || "Yash Singh",
      gradient: p.gradient || "from-amethyst-600/40 via-cosmic-800/60 to-cosmic-950",
      content: Array.isArray(p.body) ? p.body : [p.excerpt],
      rawBody: p.body,
      quote: p.pullQuote,
    }));
  } catch (error) {
    console.warn("Sanity fetch warning, using fallback dataset:", error);
    return BLOG_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<any | undefined> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      return BLOG_POSTS.find((p) => p.slug === slug);
    }

    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      "date": publishedAt,
      readTime,
      excerpt,
      gradient,
      "author": author->name,
      pullQuote,
      body
    }`;

    const p = await client.fetch(query, { slug });
    if (!p) {
      return BLOG_POSTS.find((post) => post.slug === slug);
    }

    return {
      slug: p.slug,
      title: p.title,
      category: p.category || "Vedic Astrology",
      date: p.date ? new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Aug 2026",
      readTime: p.readTime || "5 min read",
      excerpt: p.excerpt,
      author: p.author || "Yash Singh",
      gradient: p.gradient || "from-amethyst-600/40 via-cosmic-800/60 to-cosmic-950",
      content: Array.isArray(p.body) ? p.body : [p.excerpt],
      rawBody: p.body,
      quote: p.pullQuote,
    };
  } catch (error) {
    return BLOG_POSTS.find((post) => post.slug === slug);
  }
}

export async function getRelatedPosts(currentSlug: string, count: number = 3): Promise<FallbackBlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
