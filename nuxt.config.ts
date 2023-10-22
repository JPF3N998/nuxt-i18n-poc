// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtI18nOptions } from "@nuxtjs/i18n/dist/module"
import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables"

const DEFAULT_LOCALE = 'en-us'

const locales: LocaleObject[]  = [
  {
    code: 'en-us',
    name: 'English (US)',
    iso: 'en-us',
    file: 'en-us.json'
  },
  {
    code: 'es-cr',
    name: 'Español (Costa Rica)',
    iso: 'es-cr',
    file: 'es-cr.json'
  }
]

const i18n: NuxtI18nOptions = {
  lazy: true,
  langDir: 'locales/',
  defaultLocale: DEFAULT_LOCALE,
  strategy: "prefix_except_default",
  locales
}

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n,
  devtools: { enabled: true }
})
