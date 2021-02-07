<template>
  <section class="sign-up overflow-hidden">
    <!--  -->
    <b-form @submit.prevent="onSubmit">
      <!--  -->
      <b-form-row no-gutters>
        <!-- 1) - Name -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-1"
            :label="`${$t('form.label.name')}`"
            label-for="input-1"
            class="text-18 require"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-1"
              v-model.trim="$v.form.name.$model"
              autocomplete="off"
              :placeholder="$t('form.placeholder.name')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 2) - Message Required -->
            <small
              v-if="!$v.form.name.required && $v.form.name.$dirty"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.name') }}
            </small>
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.name.minLength && $v.form.name.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

              {{
                $t('validation.error.name', {
                  min: $v.form.name.$params.minLength.min,
                })
              }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 2) - Email -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-2"
            :label="`${$t('form.label.email')}`"
            label-for="input-2"
            description=""
            class="text-18 require"
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              autocomplete="off"
              type="email"
              :placeholder="$t('form.placeholder.email')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
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

        <!-- 3) - Password -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-3"
            :label="`${$t('form.label.password')}`"
            label-for="input-3"
            description=""
            class="position-relative text-18 require"
          >
            <b-form-input
              id="input-3"
              v-model.trim="$v.form.password.$model"
              :type="changeTypePassword"
              :placeholder="$t('form.placeholder.password')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 1) - Icon visible -->
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
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.password.minLength && $v.form.password.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{
                $t('validation.error.password', {
                  length: $v.form.password.$params.minLength.min,
                })
              }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 4) - Confirm Password -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-4"
            :label="`${$t('form.label.confirmPassword')}`"
            label-for="input-4"
            description=""
            class="position-relative text-18 require"
          >
            <b-form-input
              id="input-4"
              v-model.trim="$v.form.confirmPassword.$model"
              :type="changeTypeConfirmPassword"
              :placeholder="$t('form.placeholder.password')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 1) - Icon Visible -->
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
            <!-- 2) - Message Error -->
            <small
              v-if="
                !$v.form.confirmPassword.sameAsPassword &&
                $v.form.confirmPassword.$dirty
              "
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.error.confirmPassword') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 5) - Phone number -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-5"
            :label="`${$t('form.label.phone')}`"
            label-for="input-1"
            class="text-18 require"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-5"
              v-model.trim="$v.form.phone.$model"
              autocomplete="off"
              :placeholder="$t('form.placeholder.phone')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 2) - Message Required -->
            <small
              v-if="!$v.form.phone.required && $v.form.phone.$dirty"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.phone') }}
            </small>
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.phone.minLength && $v.form.phone.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

              {{
                $t('validation.error.phone-min', {
                  min: $v.form.phone.$params.minLength.min,
                })
              }}
            </small>
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.phone.maxLength && $v.form.phone.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

              {{
                $t('validation.error.phone-max', {
                  max: $v.form.phone.$params.maxLength.max,
                })
              }}
            </small>
            <!-- 4) - Message Error -->
            <small
              v-if="!$v.form.phone.numeric && $v.form.phone.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

              {{ $t('validation.error.age.number') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 6) - Gender -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            v-slot="{ ariaDescribedby }"
            :label="$t('form.label.gender')"
          >
            <b-form-radio-group
              id="radio-group-1"
              v-model="form.gender"
              :options="optionsGender"
              :aria-describedby="ariaDescribedby"
              name="radio-options-gender"
              class="text-capitalize text-twentyFour text-16 weight-light"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>

        <!-- 7) - Age -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-6"
            description=""
            :label="$t('form.label.age')"
            label-for="input-6"
            class="text-18 require"
          >
            <b-form-input
              id="input-6"
              v-model="$v.form.age.$model"
              :placeholder="$t('form.placeholder.age')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
              autocomplete="off"
            ></b-form-input>
            <!-- 1) - Message Required -->
            <small
              v-if="!$v.form.age.required && $v.form.age.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.age') }}
            </small>
            <!-- 2) - Message Error -->
            <small
              v-if="!$v.form.age.maxLength && $v.form.age.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{
                $t('validation.error.age.length', {
                  length: $v.form.age.$params.maxLength.max,
                })
              }}
            </small>
            <!-- 3) - Message Error -->
            <small
              v-if="!$v.form.age.numeric && $v.form.age.$dirty"
              dir="auto"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.error.age.number') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 8) - Address -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-7"
            :label="`${$t('form.label.address')}`"
            label-for="input-7"
            class="text-18 require"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-7"
              v-model.trim="$v.form.address.$model"
              :placeholder="$t('form.placeholder.address')"
              autocomplete="off"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 2) - Message Required -->
            <small
              v-if="!$v.form.address.required && $v.form.address.$dirty"
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.address') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 9) - Question - hadPsychotherapyBefore -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            v-slot="{ ariaDescribedby }"
            :label="$t('form.label.ques.hadPsychotherapyBefore')"
            class="w-100"
          >
            <b-form-radio-group
              id="radio-group-2"
              v-model="form.ques.hadPsychotherapyBefore"
              :options="optionsHadPsychotherapyBefore"
              :aria-describedby="ariaDescribedby"
              name="radio-options-HadPsychotherapyBefore"
              class="text-capitalize text-twentyFour text-16 weight-light"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>

        <!-- 10) - Question - WhatIsYourDiagnosis -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-8"
            :label="`${$t('form.label.ques.whatIsYourDiagnosis')}`"
            label-for="input-8"
            class="text-18 require"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-8"
              v-model.trim="$v.form.ques.whatIsYourDiagnosis.$model"
              :placeholder="$t('form.placeholder.ques.whatIsYourDiagnosis')"
              autocomplete="off"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
            <!-- 2) - Message Required -->
            <small
              v-if="
                !$v.form.ques.whatIsYourDiagnosis.required &&
                $v.form.ques.whatIsYourDiagnosis.$dirty
              "
              class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
            >
              <!-- Icon -->
              <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
              {{ $t('validation.require.ques.whatIsYourDiagnosis') }}
            </small>
          </b-form-group>
        </b-col>

        <!-- 11) - Question - HowDidYouKnowForsaTanya  -->
        <b-col md="6" lg="12" class="mb-53 specific">
          <b-form-group
            id="input-group-9"
            :label="`${$t('form.label.ques.howDidYouKnowForsaTanya')}`"
            label-for="input-9"
            class="text-18"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-9"
              v-model.trim="form.ques.HowDidYouKnowForsaTanya"
              :placeholder="$t('form.placeholder.ques.howDidYouKnowForsaTanya')"
              autocomplete="off"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>

      <!-- Submit -->
      <b-button
        type="submit"
        pill
        variant="seventh"
        class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
        >{{ $t('button.register') }}</b-button
      >

      <!-- Go to another page -->
      <ToAnotherPage
        :title-btn="$t('button.signIn')"
        path="sign-in"
        :message="$t('form.label.haveAccount')"
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
    </b-form>
  </section>
</template>

<script>
// Mixin
import * as Form from '@/mixins/form.js'
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  numeric,
} from 'vuelidate/lib/validators'
//
export default {
  layout: 'auth',
  mixins: [Form.actionsForm],
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: 'prefer not to say',
        age: '',
        address: '',
        ques: {
          hadPsychotherapyBefore: false,
          whatIsYourDiagnosis: '',
          HowDidYouKnowForsaTanya: '',
        },
      },
      optionsGender: [
        { text: `${this.$t('form.gender.female')}`, value: 'female' },
        { text: `${this.$t('form.gender.male')}`, value: 'male' },
        {
          text: `${this.$t('form.gender.notSay')}`,
          value: 'prefer not to say',
        },
      ],
      optionsHadPsychotherapyBefore: [
        { text: `${this.$t('form.placeholder.yes')}`, value: true },
        { text: `${this.$t('form.placeholder.no')}`, value: false },
      ],
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
      phone: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      age: {
        required,
        numeric,
        maxLength: maxLength(2),
      },
      address: {
        required,
      },
      ques: {
        whatIsYourDiagnosis: {
          required,
        },
      },
    },
  },
  mounted() {
    this.$store.commit('changeTitlePage', this.$t('titles.signUp'))
  },
  destroyed() {
    this.$store.commit('changeStatusAlert', false)
  },
  methods: {
    onSubmit() {
      // 1) - Check all inputs required
      this.$v.$touch()
      // 2) - If valid will be do some actions
      if (!this.$v.$invalid) {
        // eslint-disable-next-line no-console
        console.log('valid')
        this.$store.commit('changeStatusAlert', false)
      } else {
        this.$store.commit('changeStatusAlert', true)
      }
    },
  },
  head() {
    return {
      title: this.$t('titles.signUp'),
    }
  },
}
</script>

<style>
.custom-radio .custom-control-label::before {
  background-color: transparent;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before,
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-color: white;
  border-radius: 50%;
  content: '';
  border: 1px solid #00000066;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  content: '';
  width: 10px;
  height: 10px;
  background: var(--seventh);
  top: 49%;
  left: -21px;
  transform: translateY(-60%);
  border: 1px solid var(--twentyNine);
}

/* the shadow; displayed while the element is in focus */
.custom-radio .custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(255, 123, 255, 0.25);
}

/*  */
.specific > .form-group {
  width: 100%;
}
</style>
