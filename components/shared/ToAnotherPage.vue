<template>
  <div
    class="my-3 d-flex justify-content-center text-12 text-center weight-light"
  >
    <!--  -->
    <p class="text-sixth" v-text="message" />
    <!--  -->
    <b-link
      class="text-third mx-1 text-capitalize"
      :to="localePath(path)"
      v-text="titleBtn"
    />
    >
  </div>
</template>

<script>
export default {
  name: 'ToAnotherPage',
  props: {
    message: {
      type: String,
      default: '',
    },
    titleBtn: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
