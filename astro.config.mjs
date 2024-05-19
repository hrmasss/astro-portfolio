import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://hojayfa.codes",
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
        sitemap(),
    ],
});