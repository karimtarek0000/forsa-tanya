<template>
  <div>
    <!-- 1) - Navbar -->
    <Navbar />
    <!-- 2) - Routing -->
    <Nuxt />
    <!-- 3) - Footer -->
    <Footer />
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 's',
        },
        ...i18nSeo.meta,
      ],
    }
  },
}
</script>
<style></style>
