<template>
  <main>
    <!-- 1) - Header -->
    <Header />
    <!-- 2) - How -->
    <How />
    <!-- 3) - Our Therapists -->
    <OurTherapists />
    <!-- 4) - Payment Methods -->
    <PaymentMethods />
  </main>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get('/top')

    return { dataOurTherapists: data }
  },
  provide() {
    return {
      dataOurTherapists: this.dataOurTherapists,
    }
  },
  head() {
    return {
      title: this.$t('titles.home'),
    }
  },
}
</script>

<style></style>
