<template>
  <section class="sign-up overflow-hidden">
    <!--  -->
    <b-form @submit="onSubmit" @reset="onReset">
      <!--  -->
      <b-form-row no-gutters>
        <!-- 1) - Name -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-1"
            description=""
            label="Name*"
            label-for="input-1"
            class="text-18"
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              placeholder="Enter Your Name"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- 2) - Email -->
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

        <!-- 3) - Password -->
        <b-col md="6" lg="12" class="mb-53">
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

        <!-- 4) - Confirm Password -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-4"
            label="Confirm Password*"
            label-for="input-4"
            description=""
            class="position-relative text-18"
          >
            <b-form-input
              id="input-4"
              v-model="form.confirmPassword"
              :type="changeTypeConfirmPassword"
              placeholder="Enter Your Password"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!--  -->
            <span
              class="visible position-absolute cursor"
              :style="{
                opacity: optionsTypeInput.visibleConfirmPassword ? 1 : 0.3,
              }"
              @click="
                optionsTypeInput.visibleConfirmPassword = !optionsTypeInput.visibleConfirmPassword
              "
            >
              <GSvg
                :name-icon="
                  optionsTypeInput.visibleConfirmPassword
                    ? 'visible'
                    : 'unvisible'
                "
                title="unvisible"
              />
            </span>
          </b-form-group>
        </b-col>

        <!-- 5) - Gender -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group v-slot="{ ariaDescribedby }" label="Gender">
            <b-form-radio-group
              id="radio-group-1"
              v-model="form.gender"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="radio-options"
              class="text-capitalize text-twentyFour text-16 weight-light"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>

        <!-- 6) - Age -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-1"
            description=""
            label="Age"
            label-for="input-5"
            class="text-18"
          >
            <b-form-input
              id="input-5"
              v-model="form.name"
              placeholder="Enter Your Age"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>

      <!-- Submit -->
      <b-button
        type="submit"
        pill
        :disabled="true"
        variant="seventh"
        class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
        >register</b-button
      >

      <!-- Go to another page -->
      <ToAnotherPage
        title-btn="sign in"
        path="sign-in"
        message="already have an account ?"
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
        name: '',
        password: '',
        confirmPassword: '',
        gender: '',
      },
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
.custom-radio .custom-control-label::before {
  background-color: transparent;
}

/* This is the checked state */
.custom-radio .custom-control-input:checked ~ .custom-control-label::before,
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-color: var(--secondary);
  border-radius: 50%;
}

/* active state i.e. displayed while the mouse is being pressed down */
/* .custom-radio .custom-control-input:active ~ .custom-control-label::before {
  color: #fff;
  background-color: #ff0000;
} */

/* the shadow; displayed while the element is in focus */
.custom-radio .custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(255, 123, 255, 0.25);
}
</style>
