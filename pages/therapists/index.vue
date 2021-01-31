<template>
  <main id="therapists bg-primary">
    <!--  -->
    <section class="therapists mt-90">
      <!-- Start Container -->
      <b-container fluid="lg" class="px-2 px-lg-0">
        <!-- 1) - Info -->
        <div class="therapists__info text-center text-capitalize">
          <!--  -->
          <p class="m-0 text-sixtenth text-20">
            {{ $t('pages.therapists.spec&qual') }}
          </p>
          <!--  -->
          <h1 class="weight-extraBold m-0 text-60 text-seventh text-capitalize">
            {{ $t('pages.therapists.head') }}
          </h1>
          <!--  -->
          <p class="text-sixth text-light text-18 mt-29">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <!-- 2) - All Therapists -->
        <AllTherapists />
      </b-container>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Therapists',
  async asyncData({ app }) {
    const { Data } = await app.$axios.$get('/doctors')

    return { dataAllTherapists: Data }
  },
  provide() {
    return {
      allTherapists: this.dataAllTherapists,
    }
  },
  head() {
    return {
      title: this.$t('titles.therapists'),
    }
  },
}
</script>

<style></style>
