<template>
  <b-row
    no-gutters
    class="card__wrapper py-4 justify-content-between justify-content-lg-center"
  >
    <template v-if="count.length !== 0">
      <CardPrevious v-for="c in count" :key="c" @clickOpenCard="openCard" />
    </template>

    <template v-else>
      <!--  -->
      <Empty title="noBooked" img="how/3.png" alt="empty" />
      <!--  -->
      <b-col cols="12">
        <b-button
          class="mx-auto px-5 py-1 mt-40 mb-3 w-448 text-14 text-primary text-capitalize d-block"
          pill
          variant="third"
          >{{ $t('button.firstSession') }}</b-button
        >
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: 'Previous',
  data() {
    return {
      count: [1, 2],
    }
  },
  methods: {
    openCard() {
      this.$emit('openCard', true)
    },
  },
}
</script>

<style></style>
