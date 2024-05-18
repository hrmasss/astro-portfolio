import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            pubDate: z.date().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

export const collections = {
    blog: blogCollection,
};
