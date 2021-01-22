<template>
  <div>
    <!-- 1) - Navbar -->
    <Navbar />
    <!-- 2) - Routing -->
    <Nuxt />
    <!-- 3) - Footer -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
      },
    }
  },
}
</script>
<style></style>
