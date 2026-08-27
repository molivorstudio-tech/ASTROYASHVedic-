import { createClient } from "@sanity/client";
import { BLOG_POSTS } from "../lib/blog-data";
import { projectId, dataset, apiVersion } from "../sanity/env";

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ Error: SANITY_API_TOKEN environment variable is not defined.");
  console.error("Please add SANITY_API_TOKEN to your .env or .env.local file.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function seed() {
  console.log("🌱 Starting Sanity content seeding...");

  // 1. Seed or find Author document ("Yash Singh")
  const authorDoc = {
    _type: "author",
    _id: "author-yash-singh",
    name: "Yash Singh",
    slug: { _type: "slug", current: "yash-singh" },
    bio: "Vedic astrologer with 12+ years experience specializing in natal chart analysis, planetary transit timing, and practical remedial guidance.",
  };

  await client.createOrReplace(authorDoc);
  console.log("✅ Seeded author: Yash Singh");

  // 2. Seed 6 Blog Posts as published documents
  for (const post of BLOG_POSTS) {
    const postDoc = {
      _type: "post",
      _id: `post-${post.slug}`,
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      category: post.category,
      excerpt: post.excerpt,
      publishedAt: new Date(post.date).toISOString(),
      readTime: post.readTime,
      gradient: post.gradient,
      author: {
        _type: "reference",
        _ref: "author-yash-singh",
      },
      pullQuote: post.quote
        ? {
            text: post.quote.text,
            author: post.quote.author,
          }
        : undefined,
      body: post.content.map((paragraph, index) => ({
        _key: `block-${index}`,
        _type: "block",
        style: "normal",
        children: [
          {
            _key: `span-${index}`,
            _type: "span",
            text: paragraph,
            marks: [],
          },
        ],
      })),
    };

    await client.createOrReplace(postDoc);
    console.log(`✅ Seeded post: ${post.title}`);
  }

  console.log("🎉 Seeding complete! All 6 posts are published in Sanity.");
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
