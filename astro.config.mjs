// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import markdoc from '@astrojs/markdoc';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: "https://apokaliptium.github.io/",
    integrations: [starlight(
        {
            title: 'Apokaliptium',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/apokaliptium' }],
            sidebar: [
                {
                    label: 'Guides',
                    items: [{ autogenerate: { directory: 'guides' } }],
                },
                {
                    label: 'Concept',
                    items: [{ autogenerate: { directory: 'concept' } }],
                },
                {
                    label: 'Reference',
                    items: [{ autogenerate: { directory: 'reference' } }],
                },
            ],
            credits: true
        }
        ), sitemap(), partytown(), markdoc(), mdx()],
});