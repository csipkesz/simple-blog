// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icons'
  ],

  plugins: [{ src: '~/plugins/lottie', mode: 'client' }],

  googleFonts: {
    prefetch: true,
    download: true,
    families: {
      Poppins: true, 
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ]
})
