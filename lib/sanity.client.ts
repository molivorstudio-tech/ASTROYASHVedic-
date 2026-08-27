import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset, apiVersion, useCdn } from "../sanity/env";

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

export interface SanityBlogPost {
  slug: string;
  title: string;
  category: "Horoscopes" | "Vedic Astrology" | "Relationships" | "Career";
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  gradient?: string;
  content: string[];
  rawBody?: any;
  quote?: {
    text: string;
    author: string;
  };
}

export async function getAllPosts(): Promise<SanityBlogPost[]> {
  try {
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
    if (!sanityPosts || sanityPosts.length === 0) return [];

    return sanityPosts.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      category: p.category || "Vedic Astrology",
      date: p.date
        ? new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : "Aug 2026",
      readTime: p.readTime || "5 min read",
      excerpt: p.excerpt,
      author: p.author || "Yash Singh",
      gradient: p.gradient || "from-amethyst-600/40 via-cosmic-800/60 to-cosmic-950",
      content: Array.isArray(p.body) ? p.body : [p.excerpt],
      rawBody: p.body,
      quote: p.pullQuote,
    }));
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityBlogPost | undefined> {
  try {
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
    if (!p) return undefined;

    return {
      slug: p.slug,
      title: p.title,
      category: p.category || "Vedic Astrology",
      date: p.date
        ? new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : "Aug 2026",
      readTime: p.readTime || "5 min read",
      excerpt: p.excerpt,
      author: p.author || "Yash Singh",
      gradient: p.gradient || "from-amethyst-600/40 via-cosmic-800/60 to-cosmic-950",
      content: Array.isArray(p.body) ? p.body : [p.excerpt],
      rawBody: p.body,
      quote: p.pullQuote,
    };
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}) from Sanity:`, error);
    return undefined;
  }
}

export async function getRelatedPosts(currentSlug: string, count: number = 3): Promise<SanityBlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
