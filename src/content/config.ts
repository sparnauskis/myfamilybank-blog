import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    author: z.string().default('MyFamilyBank team'),
    cover_image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cta_text: z.string().optional(),
    cta_url: z.string().optional(),
  }),
});

export const collections = { blog };
