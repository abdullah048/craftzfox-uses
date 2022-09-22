import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://craftzfox.vercel.app',
  integrations: [sitemap(), react(), image()]
})
