<template>
  <b-button
    :to="localePath(path)"
    class="btn-seventh my-3 weight-bolder text-16 text-capitalize px-5"
    pill
    v-text="title"
  />
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    title: {
      type: String,
      default: 'get started',
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
