// https://nuxt.com/docs/api/configuration/nuxt-config
import lang from "./lang/language";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss",  "@nuxtjs/i18n"],

  i18n: {
    locales: lang,
    defaultLocale: "en",
    defaultDirection: "ltr",
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
  },
});
