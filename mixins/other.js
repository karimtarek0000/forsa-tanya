import * as Type from '@/type/index'

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
    // 1) - Status alert
    statusAlert() {
      return this.$store.state.alert
    },
    // 2) - Status confirm
    statusConfirm() {
      return this.$store.state.confirm
    },
  },
  methods: {
    // 1) - Change status alert
    changeStatusAlert(status) {
      this.$store.commit(Type.CHANGE_STATEUS_ALERT, {
        status,
      })
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      //
      this.$store.commit(Type.CHANGE_STATEUS_ALERT, {
        status: false,
      })
    })
  },
}

//
export { goToBack, statusAlert }
