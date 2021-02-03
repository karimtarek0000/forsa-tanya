import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  numeric,
} from 'vuelidate/lib/validators'

export const dataForm = {
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        gender: '',
        age: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(10),
      },
      confirmPassword: {
        sameAsPassword: sameAs('password'),
      },
      age: {
        numeric,
        maxLength: maxLength(2),
      },
    },
  },
}

export const actionsForm = {
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

export default { actionsForm, dataForm }
