import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z
      .array(
        z.object({
          url: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),
    highlighted: z.boolean().optional().default(false),
    href: z.string().optional(),
    visitable: z.boolean().optional().default(true),
  }),
});

export const collections = {
  projects: projectsCollection,
};
