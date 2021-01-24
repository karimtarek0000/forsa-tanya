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
  head() {
    return {
      title: this.$t('titles.home'),
    }
  },
}
</script>

<style lang="scss">
main {
  @media only screen and (max-width: 992px) {
    margin-top: 60px;
  }
}
</style>
