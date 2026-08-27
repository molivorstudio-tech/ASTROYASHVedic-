import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Horoscopes", value: "Horoscopes" },
          { title: "Vedic Astrology", value: "Vedic Astrology" },
          { title: "Relationships", value: "Relationships" },
          { title: "Career", value: "Career" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time Estimate",
      type: "string",
      description: "e.g., '5 min read'",
    }),
    defineField({
      name: "gradient",
      title: "Cover Gradient Style",
      type: "string",
      description: "Tailwind gradient class placeholder",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "pullQuote",
      title: "Featured Pull-Quote",
      type: "object",
      fields: [
        { name: "text", title: "Quote Text", type: "string" },
        { name: "author", title: "Quote Attribution", type: "string" },
      ],
    }),
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      category: "category",
    },
    prepare(selection) {
      const { title, author, category } = selection;
      return {
        title,
        subtitle: `${category || "Uncategorized"} • ${author || "Yash Singh"}`,
      };
    },
  },
});
