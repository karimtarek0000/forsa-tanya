<template>
  <section class="sign-up overflow-hidden">
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
              v-model="form.passord"
              type="email"
              placeholder="Enter Your Password"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!--  -->
            <span class="visible position-absolute cursor" style="opacity: 0.3">
              <GSvg name-icon="visible" title="visible" />
            </span>
          </b-form-group>
        </b-col>

        <!-- 4) - Confirm Password -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-3"
            label="Confirm Password*"
            label-for="input-4"
            description=""
            class="position-relative text-18"
          >
            <b-form-input
              id="input-4"
              v-model="form.passord"
              type="email"
              placeholder="Enter Your Password"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!--  -->
            <span class="visible position-absolute cursor" style="opacity: 0.3">
              <GSvg name-icon="visible" title="visible" />
            </span>
          </b-form-group>
        </b-col>

        <!-- 5) - Gender -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group v-slot="{ ariaDescribedby }" label="Gender">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected"
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
        variant="twentySix"
        class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
        >register</b-button
      >

      <!-- Go to another page -->
      <toAnotherPage
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
import toAnotherPage from '~/components/shared/toAnotherPage.vue'
export default {
  components: { toAnotherPage },
  layout: 'auth',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
      selected: '',
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

<style lang="scss">
//
.visible {
  top: 38px;
  right: 0px;

  svg {
    width: 20px;
    height: 20px;
  }
}

//
.svg-other-submit {
  width: 16px;
  height: 16px;
}

//
.form-group {
  @media (min-width: 992px) {
    width: 271px;
  }
}

//
.split {
  width: fit-content;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 197px;
    height: 0.5px;
    transform: translateY(-50%);
    background-color: rgba(#c2c2c2, 0.4);
  }
  //
  &::after {
    right: -250px;
  }
  &::before {
    left: -250px;
  }
}

//
.custom-control-input:checked ~ .custom-control-label:before {
  color: #fff;
  border-color: var(--twentyFour);
  background-color: var(--twentyFour);
}

.custom-control-label::before {
  border: 1px solid var(--twentyFour);
}

.col-form-label {
  font-size: 18px;
}
</style>
