import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
        }),
});

const workCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            duration: z.string(),
            url: z.string().optional(),
        }),
});

export const collections = {
    blog: blogCollection,
    work: workCollection,
};
