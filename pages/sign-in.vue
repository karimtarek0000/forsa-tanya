<template>
  <section class="sign-in overflow-hidden">
    <!--  -->
    <b-form @submit.prevent="onSubmit">
      <!--  -->
      <b-form-row no-gutters>
        <!-- 1) - Email -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-2"
            :label="`${$t('form.label.email')}`"
            label-for="input-2"
            description=""
            class="text-18"
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              :placeholder="$t('form.placeholder.email')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
              autocomplete="off"
              @input="$v.form.email.$touch()"
            ></b-form-input>
            <!-- 2) - Message Required -->
            <small
              v-if="!$v.form.email.required && $v.form.email.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.email') }}
            </small>
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.email.email"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.error.email') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 2) - Password -->
        <b-col md="6" lg="12">
          <b-form-group
            id="input-group-3"
            :label="`${$t('form.label.password')}`"
            label-for="input-3"
            description=""
            class="position-relative text-18"
          >
            <b-form-input
              id="input-3"
              v-model="form.password"
              :type="changeTypePassword"
              :placeholder="$t('form.placeholder.password')"
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
            <!-- 2) - Message Required -->
            <small
              v-if="!$v.form.password.required && $v.form.password.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.password') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 3) - Remember me -->
        <b-col class="mt-4 mb-5">
          <b-row no-gutters class="align-items-center">
            <b-col class="flex-grow-0 check-box">
              <b-form-checkbox
                id="checkbox-1"
                v-model="form.statusRemember"
                name="checkbox-1"
                value="remember"
                unchecked-value="not-remember"
              />
            </b-col>
            <b-col>
              <span class="text-capitalize text-18">{{
                $t('form.label.remember')
              }}</span>
            </b-col>
          </b-row>
        </b-col>
      </b-form-row>

      <!-- Submit -->
      <b-button
        type="submit"
        pill
        variant="seventh"
        class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
        >{{ $t('button.signIn') }}</b-button
      >

      <!-- Go to another page -->
      <ToAnotherPage
        :title-btn="$t('button.signUp')"
        path="sign-up"
        :message="$t('form.label.dontHaveAccount')"
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
import fakeAuth from 'fake-authentication'
import { required, email } from 'vuelidate/lib/validators'
import * as Type from '@/type/index'
//
export default {
  layout: 'auth',
  middleware: 'checkAuth',
  mixins: [Form.actionsForm],
  data() {
    return {
      form: {
        email: '',
        password: '',
        statusRemember: 'not-remember',
      },
      options: [
        { text: 'female', value: 'female' },
        { text: 'male', value: 'male' },
        { text: 'prefer not to say', value: 'prefer not to say' },
      ],
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  mounted() {
    this.$store.commit(Type.CHANGE_TITLE_PAGE, this.$t('titles.signIn'))
  },
  destroyed() {
    this.$store.commit(Type.CHANGE_STATEUS_ALERT, false)
  },
  methods: {
    async onSubmit() {
      // 1) - Check all inputs required
      this.$v.$touch()
      // 2) - If valid will be do some actions
      try {
        if (!this.$v.$invalid) {
          // 1) - Sign in
          const signIn = await fakeAuth.signIn(
            this.form.email,
            this.form.password
          )
          // 2) - Get info user
          const infoUser = await this.$axios.$get(
            `/users/?email=${this.form.email}`
          )
          // 3) - Set data user info
          this.$store.commit(Type.CHANGE_USER_INFO, {
            status: signIn.uuid,
            name: infoUser[0].name,
          })
          // 4) - Run alert success
          this.$store.commit(Type.CHANGE_STATEUS_ALERT, {
            status: true,
            typeMessage: 'success',
            message: 'correct',
          })
          // 5) - Finaly change router to home
          setTimeout(() => {
            this.$router.push(this.localePath('/'))
          }, 500)
        } else {
          // Run alert error
          this.$store.commit(Type.CHANGE_STATEUS_ALERT, {
            status: true,
            typeMessage: 'error',
            message: 'someError',
          })
        }
      } catch {
        // Run alert not correct
        this.$store.commit(Type.CHANGE_STATEUS_ALERT, {
          status: true,
          typeMessage: 'error',
          message: 'notCorrect',
        })
      }
    },
  },
  head() {
    return {
      title: this.$t('titles.signIn'),
    }
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23057d63'  d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
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
