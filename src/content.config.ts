import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string().default("Editorial"),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().optional().default(false),
});

export const collections = {
  destiny: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/destiny" }),
    schema: postSchema,
  }),
  gaming: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/gaming" }),
    schema: postSchema,
  }),
  "tv-movies": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/tv-movies" }),
    schema: postSchema,
  }),
  "world-politics": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/world-politics" }),
    schema: postSchema,
  }),
  sports: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/sports" }),
    schema: postSchema,
  }),
};
