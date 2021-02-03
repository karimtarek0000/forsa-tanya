<template>
  <section class="sign-in overflow-hidden">
    <!--  -->
    <b-form @submit="onSubmit" @reset="onReset">
      <!--  -->
      <b-form-row no-gutters>
        <!-- 1) - Email -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-2"
            label="Email*"
            label-for="input-2"
            description=""
            class="text-18"
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              placeholder="Enter Your Email"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- 2) - Password -->
        <b-col md="6" lg="12">
          <b-form-group
            id="input-group-3"
            label="Password*"
            label-for="input-3"
            description=""
            class="position-relative text-18"
          >
            <b-form-input
              id="input-3"
              v-model="form.password"
              :type="changeTypePassword"
              placeholder="Enter Your Password"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!--  -->
            <span
              class="visible position-absolute cursor"
              :style="{
                opacity: optionsTypeInput.visiblePassword ? 1 : 0.3,
              }"
              @click="
                optionsTypeInput.visiblePassword = !optionsTypeInput.visiblePassword
              "
            >
              <GSvg
                :name-icon="
                  optionsTypeInput.visiblePassword ? 'visible' : 'unvisible'
                "
                title="unvisible"
              />
            </span>
          </b-form-group>
        </b-col>

        <!-- 3) - Remember me -->
        <b-col class="mt-4 mb-5">
          <b-row no-gutters class="align-items-center">
            <b-col class="flex-grow-0">
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="remember"
                unchecked-value="not_remember"
              />
            </b-col>
            <b-col>
              <span class="text-capitalize text-18">remember me</span>
            </b-col>
          </b-row>
        </b-col>
      </b-form-row>

      <!-- Submit -->
      <b-button
        type="submit"
        pill
        :disabled="true"
        variant="seventh"
        class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
        >sign in</b-button
      >

      <!-- Go to another page -->
      <ToAnotherPage
        title-btn="sign up"
        path="sign-up"
        message="don't have an account ?"
      />

      <!--  -->
      <!--  -->
      <!-- Split -->
      <p
        class="split mx-auto mt-4 position-relative text-seventh text-16 weight-light"
      >
        or
      </p>
      <!--  -->
      <!--  -->

      <!--  -->
      <!-- google -->
      <b-button
        type="button"
        pill
        variant="twentySeven"
        class="text-13 weight-light text-capitalize text-secondary shadow-google py-1 w-269 d-flex align-items-center justify-content-center mx-auto mb-3"
      >
        <GSvg class="svg-other-submit mx-1" name-icon="gmail" title="gmail" />
        <span>continue with gmail</span>
      </b-button>

      <!-- facebook -->
      <b-button
        type="button"
        pill
        variant="twentyEight"
        class="text-13 weight-light text-capitalize text-primary shadow-facebook py-1 w-269 d-flex align-items-center justify-content-center mx-auto mb-3"
      >
        <GSvg
          class="svg-other-submit mx-1"
          name-icon="facebook2"
          title="facebook"
        />
        <span>continue with facebook</span>
      </b-button>

      <!-- Apple -->
      <b-button
        type="button"
        pill
        variant="secondary"
        class="text-13 weight-light text-capitalize text-primary shadow-apple py-1 w-269 d-flex align-items-center justify-content-center mx-auto"
      >
        <GSvg class="svg-other-submit mx-1" name-icon="apple" title="apple" />
        <span>continue with facebook</span>
      </b-button>
    </b-form>
  </section>
</template>

<script>
// Mixin
import Form from '@/mixins/form.js'
//
export default {
  layout: 'auth',
  mixins: [Form],
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      selectedCheck: [],
      status: 'not_remember',
      options: [
        { text: 'female', value: 'female' },
        { text: 'male', value: 'male' },
        { text: 'prefer not to say', value: 'prefer not to say' },
      ],
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style>
/*  */
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: transparent !important;
}

/*  */
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath  d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
  background-color: white !important;
  border: 1px solid var(--twentyNine);
  border-radius: 3px;
}

/*  */
.custom-checkbox
  .custom-control-input:checked:focus
  ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 255, 0, 0.25);
}

/*  */
.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
}

/*  */
.custom-checkbox .custom-control-input:active ~ .custom-control-label::before {
  background-color: transparent;
}
</style>
