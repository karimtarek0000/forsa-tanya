<template>
  <!-- Start form -->
  <b-form @submit.prevent="onSubmit">
    <!-- 1) - Form field -->
    <b-form-row>
      <!-- 1) - Old Password -->
      <b-col cols="12" class="mb-20">
        <b-form-group
          id="input-group-10"
          :label="`${$t('form.label.oldPassword')}`"
          label-for="input-10"
          description=""
          class="position-relative text-18 require"
        >
          <b-form-input
            id="input-10"
            v-model.trim="$v.form.oldPassword.$model"
            :type="changeTypeOldPassword"
            :placeholder="$t('form.placeholder.oldPassword')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 1) - Icon visible -->
          <span
            class="visible position-absolute cursor"
            :style="{
              opacity: optionsTypeInput.visibleOldPassword ? 1 : 0.3,
            }"
            @click="
              optionsTypeInput.visibleOldPassword = !optionsTypeInput.visibleOldPassword
            "
          >
            <GSvg
              :name-icon="
                optionsTypeInput.visibleOldPassword ? 'visible' : 'unvisible'
              "
              title="unvisible"
            />
          </span>
          <!-- 2) - Message Required -->
          <small
            v-if="!$v.form.oldPassword.required && $v.form.oldPassword.$dirty"
            dir="auto"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.require.oldPassword') }}
          </small>
        </b-form-group>
      </b-col>
      <!-- 2) - New Password -->
      <b-col cols="12" class="mb-20">
        <b-form-group
          id="input-group-11"
          :label="`${$t('form.label.newPassword')}`"
          label-for="input-11"
          description=""
          class="position-relative text-18 require"
        >
          <b-form-input
            id="input-11"
            v-model.trim="$v.form.password.$model"
            :type="changeTypePassword"
            :placeholder="$t('form.placeholder.newPassword')"
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
            {{ $t('validation.require.newPassword') }}
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
      <!-- 3) - Confirm Password -->
      <b-col cols="12" class="mb-20">
        <b-form-group
          id="input-group-12"
          :label="`${$t('form.label.confirmPassword')}`"
          label-for="input-12"
          description=""
          class="position-relative text-18 require"
        >
          <b-form-input
            id="input-12"
            v-model.trim="$v.form.confirmPassword.$model"
            :type="changeTypeConfirmPassword"
            :placeholder="$t('form.placeholder.password')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 1) - Icon visible -->
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
import * as Form from '@/mixins/form.js'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
//
export default {
  name: 'ChangePassword',
  mixins: [Form.actionsForm],
  data() {
    return {
      form: {
        oldPassword: '',
        password: '',
        confirmPassword: '',
      },
      disableBtnSubmit: false,
      loading: false,
    }
  },
  validations: {
    form: {
      oldPassword: {
        required,
      },
      password: {
        required,
        minLength: minLength(10),
      },
      confirmPassword: {
        sameAsPassword: sameAs('password'),
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
        this.$store.commit('changeStatusAlert', {
          status: true,
          typeMessage: 'success',
          message: 'changePassword',
        })
      } else {
        this.loading = false
        this.disableBtnSubmit = false
        this.$store.commit('changeStatusAlert', {
          status: true,
          typeMessage: 'error',
          message: 'required',
        })
      }
    },
    // 2) - Change status alert
    changeStatusAlert(status) {
      this.$store.commit('changeStatusAlert', status)
    },
  },
}
</script>

<style lang="scss"></style>
