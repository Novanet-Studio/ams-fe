export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false, // AMS es una SPA total (equivalente a `ssr = false` en cada +page.ts de SvelteKit)

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Avila MultiSport",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      script: [
        {
          innerHTML: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"${process.env.PUBLIC_METRICOOL_HASH ?? ""}"})});`,
        },
      ],
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "motion-v/nuxt",
  ],

  runtimeConfig: {
    public: {
      publicMetricoolHash: process.env.PUBLIC_METRICOOL_HASH,
      kairosApiUrl: process.env.KAIROS_API_URL,
      kairosApiKey: process.env.KAIROS_API_KEY,
    },
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
    },
  },

  icon: {
    class: "icon",
    mode: "css",
    cssLayer: "base",
  },

  fonts: {
    families: [
      {
        name: "Prompt",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
