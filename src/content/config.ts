import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.date().optional(),
            tech: z.array(z.string()).optional(),
            cover: image()
                .refine((img) => img.width >= 720, {
                    message: "Cover image must be at least 720 pixels wide!",
                })
                .optional(),
        }),
});

const writingCollection = defineCollection({
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
    work: workCollection,
    writing: writingCollection,
};
