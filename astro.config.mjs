import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "@/utils/remark-reading-time.mjs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
    ],
});
