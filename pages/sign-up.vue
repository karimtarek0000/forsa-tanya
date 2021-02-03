<template>
  <section class="sign-up overflow-hidden">
    <!--  -->
    <b-form @submit="onSubmit">
      <!--  -->
      <b-form-row no-gutters>
        <!-- 1) - Name -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-1"
            :label="`${$t('form.label.name')}*`"
            label-for="input-1"
            class="text-18"
          >
            <!-- 1) - Input -->
            <b-form-input
              id="input-1"
              v-model.trim="$v.form.name.$model"
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
            :label="`${$t('form.label.email')}*`"
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

        <!-- 3) - Password -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            id="input-group-3"
            :label="`${$t('form.label.password')}*`"
            label-for="input-3"
            description=""
            class="position-relative text-18"
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
            :label="`${$t('form.label.confirmPassword')}*`"
            label-for="input-4"
            description=""
            class="position-relative text-18"
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

        <!-- 5) - Gender -->
        <b-col md="6" lg="12" class="mb-53">
          <b-form-group
            v-slot="{ ariaDescribedby }"
            :label="$t('form.label.gender')"
          >
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
            :label="$t('form.label.age')"
            label-for="input-5"
            class="text-18"
          >
            <b-form-input
              id="input-5"
              v-model="$v.form.age.$model"
              :placeholder="$t('form.placeholder.age')"
              class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
              autocomplete="off"
            ></b-form-input>
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

      <!-- Submit -->
      <b-button
        type="submit"
        pill
        :disabled="true"
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
//
export default {
  layout: 'auth',
  mixins: [Form.dataForm, Form.actionsForm],
  data() {
    return {
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
