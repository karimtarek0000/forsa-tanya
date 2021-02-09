//
const goToBack = {
  methods: {
    // 1) - Back
    back() {
      this.$router.go(-1)
    },
  },
}

//
const statusAlert = {
  computed: {
    statusAlert() {
      return this.$store.state.statusAlert
    },
  },
  methods: {
    // 1) - Change status alert
    changeStatusAlert(status) {
      this.$store.commit('changeStatusAlert', status)
    },
  },
}

//
export { goToBack, statusAlert }
