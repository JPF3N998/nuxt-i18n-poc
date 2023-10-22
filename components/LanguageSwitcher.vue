<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const { locales, locale, setLocale, setLocaleCookie } = useI18n()

async function updateLocale(e: MouseEvent) {
  const { value: newLocale } = (e.target as HTMLInputElement)
  await setLocale(newLocale)
  await setLocaleCookie(newLocale)
}
</script>
<template>
  <div>
    <h1>{{ $t('language selection label') }}</h1>

    <fieldset>
      <legend>Select a locale:</legend>

      <div v-for="localeOpt in locales" :key="(localeOpt as LocaleObject).code" @click="updateLocale">
        <input type="radio" :id="(localeOpt as LocaleObject).code" :name="(localeOpt as LocaleObject).name" :value="(localeOpt as LocaleObject).code" :checked="locale === (localeOpt as LocaleObject).code" />
        <label :for="(localeOpt as LocaleObject).code">{{ (localeOpt as LocaleObject).name }}</label>
      </div>
    </fieldset>
  </div>
</template>
<style>

</style>

