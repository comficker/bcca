// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {enabled: true},
  // @ts-ignore
  runtimeConfig: {
    public: {
      apiBase: process.env.API,
      domain: process.env.DOMAIN
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/custom.css',
    '@unocss/reset/tailwind.css',
  ],
  sourcemap: {
    server: true,
    client: true,
  }
})
