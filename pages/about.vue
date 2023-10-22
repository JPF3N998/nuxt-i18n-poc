<template>
  <div>
    <div style="display: flex;align-items: center;justify-content: space-between;">
      <h1>{{ $t('about') }}</h1>
      <div style="display: flex; column-gap: 1rem;">
        <NuxtLinkLocale to="/">{{ $t('index') }}</NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
