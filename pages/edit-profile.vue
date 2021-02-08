<template>
  <main class="profile">
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!--  -->
      <b-row
        no-gutters
        class="px-2 px-lg-5 py-90 justify-content-between align-items-start"
      >
        <!-- 1) - Image user -->
        <b-col
          class="info-user shadow-google basis-200 position-relative text-center text-capitalize px-3 py-4 mb-5 mb-lg-0 mt-70 flex-grow-0 mx-auto"
        >
          <div
            class="info-user__image rounded-circle position-absolute overflow-hidden"
          >
            <!--  -->
            <GImage src-image="other/3.jpg" alt="s" />
          </div>
          <!--  -->
          <div class="edit cursor position-absolute">
            <GSvg name-icon="edit" title="edit" />
          </div>
          <!--  -->
          <h2 class="text-20 weight-extraBold mt-5 text-seventh">hend sayed</h2>
          <div
            class="svg-session d-flex align-items-center justify-content-center"
          >
            <GSvg class="mx-2" name-icon="session-user" title="sessions" />
            <p class="text-12 mb-0 text-eleventh">
              <span class="d-block w-100">0</span>
              <span class="d-block mt-n1">{{ $t('pages.home.sessions') }}</span>
            </p>
          </div>
        </b-col>
        <!-- 2) - Info user -->
        <b-col
          md="12"
          lg="8"
          class="shadow-google px-40 py-50 position-relative rounded-20 auth"
        >
          <b-form @submit.prevent="onSubmit">
            <!--  -->
            <b-form-row no-gutters>
              <!-- Personal Info -->
              <div
                class="overlay-title d-flex align-items-center bg-thirdenth position-absolute"
              >
                <!--  -->
                <h6
                  class="mb-0 text-primary text-20 weight-bolder text-capitalize"
                >
                  personal info
                </h6>
              </div>
              <!-- 1) - Name -->
              <b-col md="6" lg="12" class="mb-40 mt-0 mt-lg-29">
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.name') }}
                  </small>
                  <!-- 3) - Message Error -->
                  <small
                    v-if="!$v.form.name.minLength && $v.form.name.$dirty"
                    dir="auto"
                    class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
                  >
                    <!-- Icon -->
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />

                    {{
                      $t('validation.error.name', {
                        min: $v.form.name.$params.minLength.min,
                      })
                    }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 2) - Email -->
              <b-col md="6" lg="12" class="mb-40">
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.email') }}
                  </small>
                  <!-- 3) - Message Error -->
                  <small
                    v-if="!$v.form.email.email"
                    dir="auto"
                    class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
                  >
                    <!-- Icon -->
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.error.email') }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 3) - Age -->
              <b-col md="6" lg="12" class="mb-40">
                <b-form-group
                  id="input-group-3"
                  description=""
                  :label="$t('form.label.age')"
                  label-for="input-3"
                  class="text-18 require"
                >
                  <b-form-input
                    id="input-3"
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.age') }}
                  </small>
                  <!-- 2) - Message Error -->
                  <small
                    v-if="!$v.form.age.maxLength && $v.form.age.$dirty"
                    dir="auto"
                    class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
                  >
                    <!-- Icon -->
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.error.age.number') }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 4) - Phone number -->
              <b-col md="6" lg="12" class="mb-40">
                <b-form-group
                  id="input-group-4"
                  :label="`${$t('form.label.phone')}`"
                  label-for="input-4"
                  class="text-18 require"
                >
                  <!-- 1) - Input -->
                  <b-form-input
                    id="input-4"
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.phone') }}
                  </small>
                  <!-- 3) - Message Error -->
                  <small
                    v-if="!$v.form.phone.minLength && $v.form.phone.$dirty"
                    dir="auto"
                    class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
                  >
                    <!-- Icon -->
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />

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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />

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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />

                    {{ $t('validation.error.age.number') }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 5) - Gender -->
              <b-col md="6" lg="12" class="mb-40">
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
              <!-- 6) - Address -->
              <b-col md="6" lg="12" class="mb-40">
                <b-form-group
                  id="input-group-5"
                  :label="`${$t('form.label.address')}`"
                  label-for="input-5"
                  class="text-18 require"
                >
                  <!-- 1) - Input -->
                  <b-form-input
                    id="input-5"
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.address') }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 7) - Question - hadPsychotherapyBefore -->
              <b-col md="6" lg="12" class="mb-40">
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
              <!-- 8) - Question - WhatIsYourDiagnosis -->
              <b-col md="6" lg="12" class="mb-40">
                <b-form-group
                  id="input-group-6"
                  :label="`${$t('form.label.ques.whatIsYourDiagnosis')}`"
                  label-for="input-6"
                  class="text-18 require"
                >
                  <!-- 1) - Input -->
                  <b-form-input
                    id="input-6"
                    v-model.trim="$v.form.ques.whatIsYourDiagnosis.$model"
                    :placeholder="
                      $t('form.placeholder.ques.whatIsYourDiagnosis')
                    "
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
                    <GSvg
                      name-icon="wrong"
                      class="svg-validate"
                      title="wrong"
                    />
                    {{ $t('validation.require.ques.whatIsYourDiagnosis') }}
                  </small>
                </b-form-group>
              </b-col>
              <!-- 9) - Question - HowDidYouKnowForsaTanya  -->
              <b-col md="6" lg="12" class="mb-40 specific">
                <b-form-group
                  id="input-group-7"
                  :label="`${$t('form.label.ques.howDidYouKnowForsaTanya')}`"
                  label-for="input-7"
                  class="text-18"
                >
                  <!-- 1) - Input -->
                  <b-form-input
                    id="input-7"
                    v-model.trim="form.ques.HowDidYouKnowForsaTanya"
                    :placeholder="
                      $t('form.placeholder.ques.howDidYouKnowForsaTanya')
                    "
                    autocomplete="off"
                    class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form>
          <!-- 2) - Actions -->
          <b-row no-gutters>
            <!-- Submit -->
            <b-col>
              <b-button
                type="submit"
                pill
                variant="seventh"
                class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
                :disabled="statusBtnChanged"
                >{{ $t('button.saveChanged') }}</b-button
              >
            </b-col>
            <!-- Cancel -->
            <b-col>
              <b-button
                type="button"
                pill
                variant="seventh"
                class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
                @click="back"
                >{{ $t('button.cancel') }}</b-button
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  numeric,
} from 'vuelidate/lib/validators'
import * as Form from '@/mixins/form.js'
import { goToBack } from '@/mixins/other.js'

//
export default {
  mixins: [Form.actionsForm, goToBack],
  data() {
    return {
      form: {
        name: this.$route.params.id,
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
      statusBtnChanged: true,
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
  watch: {
    form: {
      deep: true,
      handler() {
        this.statusBtnChanged = false
      },
    },
  },
  methods: {
    //
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
      title: `${this.$t('titles.editProfile')}`,
    }
  },
}
</script>

<style lang="scss">
//
.profile {
  //
  .svg-session {
    //
    svg {
      width: 44px;
      height: 44px;
    }
  }

  //
  .rounded-20 {
    border-radius: 20px;
  }

  //
  .info-user {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

    //
    &__image {
      top: -88px;
      left: 50%;
      transform: translateX(-50%);
      width: 156px;
      height: 156px;
    }
  }
}

//
.overlay-title {
  top: -14px;
  left: 0;
  width: 100%;
  height: 50px;
  border-radius: 100px;

  h6 {
    text-indent: 40px;
  }
}

//
.edit {
  top: 41px;
  right: 47px;

  //
  svg {
    width: 30px;
    height: 30px;
  }
}

//
.auth {
  //
  .require > label::after {
    display: none;
  }
}
</style>
