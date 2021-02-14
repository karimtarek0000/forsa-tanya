<template>
  <b-row
    ref="allCertificate"
    no-gutters
    class="flex-nowrap setRow"
    @mousedown="mouseDown"
    @mousemove="mouseMove"
    @mouseleave="mouseLeave"
    @mouseup="mouseUp"
  >
    <b-col
      v-for="cert in allCertificate"
      :key="cert"
      class="setBasisCertificate user-select cursor position-relative flex-grow-0 flex-shrink-0"
    >
      <!--  -->
      <GImage src-image="s.png" alt="title" />
      <!--  -->
      <div
        v-if="statusRemoveImage"
        slot="addClose"
        class="removeImage rounded-circle d-flex justify-content-center align-items-center bg-primary position-absolute"
        @click="removeImage(cert)"
      >
        <span>&times;</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'AllCertificate',
  props: {
    statusRemoveImage: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['allCertificate'],
  data() {
    return {
      status: false,
      startDownX: null,
      scrollLeft: null,
    }
  },
  methods: {
    // 1
    mouseDown(e) {
      // 1
      this.status = true
      // 2
      this.startDownX = e.pageX - this.$refs.allCertificate.offsetLeft
      // 3
      this.scrollLeft = this.$refs.allCertificate.scrollLeft
    },
    // 2
    mouseMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX = e.pageX - this.$refs.allCertificate.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.allCertificate.scrollLeft = this.scrollLeft - div
    },
    //
    mouseLeave() {
      // 1
      this.status = false
    },
    //
    mouseUp() {
      // 1
      this.status = false
    },
    //
    removeImage(index) {
      this.$emit('removeImage', index)
    },
  },
}
</script>

<style lang="scss">
//
.removeImage {
  top: -3px;
  right: -5px;
  width: 25px;
  height: 25px;
  font-size: 20px;
}

//
.setRow {
  //
  > div {
    margin-right: 25px;
  }
}
</style>
