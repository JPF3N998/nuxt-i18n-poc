<template>
  <div>
  <div style="display: flex;align-items: center;justify-content: space-between;">
    <h1>{{ $t('index') }}</h1>
    <div style="display: flex; column-gap: 1rem;">
      <NuxtLinkLocale to="/about">{{ $t('about') }}</NuxtLinkLocale>
      </div>
  </div>

  <footer>
    <LanguageSwitcher />
  </footer>
  </div>
</template>