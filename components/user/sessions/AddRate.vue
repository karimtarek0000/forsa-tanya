<template>
  <!-- Start form -->
  <b-form @submit.prevent="onSubmit">
    <!-- 1) - Form field -->
    <b-form-row class="form-rate">
      <!-- 1) - Add rate -->
      <b-col>
        <label class="text-third">{{ $t('form.label.rate') }}</label>
        <div class="text-center text-70 weight-extraBold text-secondary">
          <p class="mb-0 mt-n5">{{ rate }}</p>
        </div>
        <b-form-rating
          v-model="rate"
          size="lg"
          class="rateBox mx-auto border-0"
        ></b-form-rating>
      </b-col>
      <!-- 2) - Name -->
      <b-col cols="12" class="mb-20 mt-3 mt-lg-2">
        <b-form-group
          id="input-group-12"
          :label="`${$t('form.label.name')}`"
          label-for="input-12"
          class="text-18 weight-bolder require"
        >
          <!-- 1) - Input -->
          <b-form-input
            id="input-12"
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
      <!-- 3) - Comment -->
      <b-col cols="12" class="mb-20">
        <b-form-group
          id="input-group-13"
          :label="`${$t('form.label.comment')}`"
          label-for="input-13"
          class="text-18 weight-bolder require"
        >
          <!-- 1) - Input -->
          <b-form-input
            id="input-13"
            v-model.trim="$v.form.comment.$model"
            autocomplete="off"
            :placeholder="$t('form.placeholder.comment')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 2) - Message Required -->
          <small
            v-if="!$v.form.comment.required && $v.form.comment.$dirty"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.require.comment') }}
          </small>
        </b-form-group>
      </b-col>
    </b-form-row>

    <!-- 2) - Submit -->
    <b-button
      type="submit"
      pill
      variant="third"
      class="text-16 w-162 weight-bolder text-capitalize text-primary py-1 d-block mx-auto"
      :disabled="disableBtnSubmit"
    >
      <span v-show="!loading">{{ $t('button.done') }}</span>
      <b-spinner
        v-show="loading"
        variant="primary"
        type="grow"
        label="Spinning"
      ></b-spinner>
    </b-button>
  </b-form>
</template>

<script>
//
import { required, minLength } from 'vuelidate/lib/validators'
//
export default {
  name: 'Rate',
  data() {
    return {
      loading: false,
      disableBtnSubmit: false,
      rate: 0,
      form: {
        name: '',
        comment: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      comment: {
        required,
      },
    },
  },
  destroyed() {
    this.$store.commit('changeStatusAlert', false)
  },
  methods: {
    // 1) - Submit
    onSubmit() {
      // 1) - Loading
      this.loading = true
      // 2) - Disable btn submit
      this.disableBtnSubmit = true
      // 2) - Check all inputs required
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
.rateBox {
  width: 280px;
  //
  .b-rating-icon {
    //
    svg {
      width: 40px;
      height: 40px;
      fill: #ffc850;
    }
  }
}

//
.model {
  .form-rate {
    //
    .form-group {
      @media (min-width: 992px) {
        width: 271px;
      }
    }
  }
}
</style>
