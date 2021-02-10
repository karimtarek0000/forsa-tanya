<template>
  <b-row
    no-gutters
    class="card__wrapper py-4 justify-content-between justify-content-lg-center"
  >
    <!-- 1) - All sessions -->
    <template v-if="count.length !== 0">
      <CardUpcoming v-for="c in count" :key="c" />
    </template>
    <!-- 2) - First book session -->
    <template v-else>
      <!--  -->
      <Empty img="how/3.png" alt="empty" />

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
    <!-- 3) - Book session -->
    <!-- <template>

      <b-col sm="6" class="text-center mx-auto py-3 overflow-hidden">
        <p class="text-capitalize text-18 weight-extraBold text-secondary">
          {{ $t('placeHolder.empty') }}
        </p>
        <GImage class="obj-image-height" src-image="how/2.png" alt="test" />
      </b-col>

      <b-col cols="12">
        <b-button
          class="mx-auto px-5 py-1 mt-40 mb-3 w-448 text-14 text-primary text-capitalize d-block"
          pill
          variant="third"
          >{{ $t('button.bookSession') }}</b-button
        >
      </b-col>
    </template> -->
  </b-row>
</template>

<script>
export default {
  name: 'UpComing',
  data() {
    return {
      count: [],
    }
  },
}
</script>

<style></style>
