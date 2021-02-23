<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      titleTemplate: `${this.$t('meta.name')} - %s`,
      htmlAttrs: {
        dir: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        ...i18nSeo.htmlAttrs,
      },
    }
  },
}
</script>

<style></style>
