<template>
  <!-- 2 - Form edit all information -->
  <b-form class="auth" @submit.prevent="onSubmit">
    <!-- 1 - Form -->
    <b-form-row no-gutters>
      <!-- 1) - Name -->
      <b-col md="6" lg="12" class="mb-20 mt-0 mt-lg-20">
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
      <!-- 2) - Phone number -->
      <b-col md="6" lg="12" class="mb-20">
        <b-form-group
          id="input-group-2"
          :label="`${$t('form.label.phone')}`"
          label-for="input-2"
          class="text-18 require"
        >
          <!-- 1) - Input -->
          <b-form-input
            id="input-2"
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
      <!-- 3) - Email -->
      <b-col md="6" lg="12" class="mb-20">
        <b-form-group
          id="input-group-3"
          :label="`${$t('form.label.email')}`"
          label-for="input-3"
          description=""
          class="text-18 require"
        >
          <b-form-input
            id="input-3"
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
      <!-- 4) - Gender -->
      <b-col md="6" lg="12" class="mb-20">
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
      <!-- 3) - Age -->
      <b-col md="6" lg="12" class="mb-20">
        <b-form-group
          id="input-group-4"
          description=""
          :label="$t('form.label.age')"
          label-for="input-4"
          class="text-18 require"
        >
          <b-form-input
            id="input-4"
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
    </b-form-row>
    <!-- 2) - Submit - Cancel -->
    <b-row no-gutters class="my-5">
      <!-- Submit -->
      <b-col>
        <b-button
          type="submit"
          pill
          variant="third"
          class="text-16 mb-2 mb-lg-0 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
          :disabled="disableBtnSubmit"
        >
          <span v-show="!loading">{{ $t('button.saveChanged') }}</span>
          <b-spinner
            v-show="loading"
            variant="primary"
            type="grow"
            label="Spinning"
          ></b-spinner>
        </b-button>
      </b-col>
      <!-- Cancel -->
      <b-col>
        <b-button
          type="button"
          pill
          variant="third"
          class="text-16 weight-bolder text-capitalize text-primary py-1 w-269 d-block mx-auto"
          @click="back"
          >{{ $t('button.cancel') }}
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
} from 'vuelidate/lib/validators'
import { goToBack, statusAlert } from '@/mixins/other.js'
//
export default {
  mixins: [goToBack, statusAlert],
  data() {
    return {
      form: {
        name: this.$route.params.id,
        email: '',
        phone: '',
        gender: 'female',
        age: '',
        image: null,
      },
      statusBtnChanged: true,
      optionsGender: [
        { text: `${this.$t('form.gender.female')}`, value: 'female' },
        { text: `${this.$t('form.gender.male')}`, value: 'male' },
      ],
      loading: false,
      disableBtnSubmit: true,
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
    },
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.disableBtnSubmit = false
      },
    },
  },
  destroyed() {
    this.$store.commit('changeStatusAlert', false)
  },
  methods: {
    //
    onSubmit() {
      this.loading = true
      this.disableBtnSubmit = false
      // 1) - Check all inputs required
      this.$v.$touch()
      // 2) - If valid will be do some actions
      if (!this.$v.$invalid) {
        // eslint-disable-next-line no-console
        console.log('valid')
        this.$store.commit('changeStatusAlert', false)
      } else {
        this.loading = false
        this.disableBtnSubmit = false
        this.$store.commit('changeStatusAlert', true)
      }
    },
  },
}
</script>

<style lang="scss">
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
