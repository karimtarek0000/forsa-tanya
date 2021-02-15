<template>
  <b-row
    no-gutters
    class="alert text-primary px-5 text-capitalize direction-ltr rounded position-fixed align-items-center justify-content-center bg-youtube"
  >
    <!-- 1) - Info -->
    <b-col cols="12" class="mb-3">
      <p class="mb-0 py-2">
        {{ $t(`alert.${message}`, { element: element }) }}
      </p>
    </b-col>
    <!-- 2) - Actions -->
    <b-col cols="12" class="d-flex">
      <b-button
        variant="primary"
        class="text-capitalize"
        @click="statusConfirm = true"
        >delete</b-button
      >
      <b-button
        variant="outline-primary"
        class="text-capitalize mx-3"
        @click="statusConfirm = false"
        >cancel</b-button
      >
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    message: {
      type: String,
      required: true,
    },
    element: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      statusConfirm: null,
    }
  },
  watch: {
    statusConfirm(status) {
      if (status) {
        this.$store.commit('changeStatusConfirm', status)
        this.$store.commit('changeConfirm', { status: false })
        this.statusConfirm = null
      } else {
        this.statusConfirm = null
        this.$store.commit('changeConfirm', { status: false })
      }
    },
  },
}
</script>

<style></style>
