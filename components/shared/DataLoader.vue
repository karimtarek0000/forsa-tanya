<template>
  <div class="data-loader">
    <!-- 1) - LOADING -->
    <slot v-if="loading" name="loading" />
    <!-- 2) - ERROR -->
    <slot v-if="error" name="error">some error please try again</slot>
    <!-- 3) - FINALY RENDER DATA -->
    <slot v-if="allData" name="data" :data="allData"></slot>
  </div>
</template>

<script>
export default {
  name: 'DataLoader',
  props: {
    endPoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      error: false,
      allData: null,
    }
  },
  watch: {
    endPoint() {
      this.getData()
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    //
    async getData() {
      // 1) - Loading will be true
      this.loading = true
      // 2) Set error false
      this.error = false
      // 3) Set all data null
      this.allData = null
      //
      try {
        const data = await this.$axios.$get(this.endPoint)
        // 1) - After get data will be loading false
        this.loading = false
        // 2) - Set allData assign data
        this.allData = data
      } catch {
        // 1) - If catch error will be stop loading
        this.loading = false
        // 2) Set error true
        this.error = true
      }
    },
  },
}
</script>

<style lang="scss">
//
.data-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
