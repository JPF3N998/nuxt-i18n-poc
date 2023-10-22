// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtI18nOptions } from "@nuxtjs/i18n/dist/module"

const DEFAULT_LOCALE = 'en-us'

const i18n: NuxtI18nOptions = {
  lazy: true,
  defaultLocale: DEFAULT_LOCALE,
  strategy: "prefix_except_default"
}

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n,
  devtools: { enabled: true }
})
