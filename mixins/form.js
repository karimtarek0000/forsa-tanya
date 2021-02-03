export default {
  data() {
    return {
      optionsTypeInput: {
        visiblePassword: false,
        visibleConfirmPassword: false,
      },
    }
  },
  computed: {
    //
    changeTypePassword() {
      return this.optionsTypeInput.visiblePassword ? 'text' : 'password'
    },
    //
    changeTypeConfirmPassword() {
      return this.optionsTypeInput.visibleConfirmPassword ? 'text' : 'password'
    },
  },
}
