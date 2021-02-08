const goToBack = {
  methods: {
    // 1) - Back
    back() {
      this.$router.go(-1)
    },
  },
}
//
export { goToBack }
