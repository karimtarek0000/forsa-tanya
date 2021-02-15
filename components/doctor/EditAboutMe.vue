<template>
  <!-- 2 - Form edit all information -->
  <b-form class="auth" @submit.prevent="onSubmit">
    <!-- 1 - Form -->
    <b-form-row no-gutters>
      <!-- 1) - Speciality -->
      <b-col md="6" lg="12" class="mb-20 mt-0 mt-lg-20">
        <b-form-group
          id="input-group-1"
          :label="`${$t('form.label.speciality')}`"
          label-for="input-1"
          class="text-18 require"
        >
          <!-- 1) - Input -->
          <b-form-input
            id="input-1"
            v-model.trim="$v.form.speciality.$model"
            autocomplete="off"
            :placeholder="$t('form.placeholder.speciality')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 2) - Message Required -->
          <small
            v-if="!$v.form.speciality.required && $v.form.speciality.$dirty"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.require.speciality') }}
          </small>
        </b-form-group>
      </b-col>
      <!-- 2) - Years of experience  -->
      <b-col md="6" lg="12" class="mb-20">
        <b-form-group
          id="input-group-2"
          :label="`${$t('form.label.yearsExperience')}`"
          label-for="input-2"
          class="text-18 require"
        >
          <!-- 1) - Input -->
          <b-form-input
            id="input-2"
            v-model.trim="$v.form.yearsExperience.$model"
            autocomplete="off"
            :placeholder="$t('form.placeholder.yearsExperience')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 2) - Message Required -->
          <small
            v-if="
              !$v.form.yearsExperience.required &&
              $v.form.yearsExperience.$dirty
            "
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.require.yearsExperience') }}
          </small>
          <!-- 3) - Message Error -->
          <small
            v-if="
              !$v.form.yearsExperience.maxLength &&
              $v.form.yearsExperience.$dirty
            "
            dir="auto"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

            {{
              $t('validation.error.yearsExperience', {
                max: $v.form.yearsExperience.$params.maxLength.max,
              })
            }}
          </small>
          <!-- 4) - Message Error -->
          <small
            v-if="
              !$v.form.yearsExperience.numeric && $v.form.yearsExperience.$dirty
            "
            dir="auto"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />

            {{ $t('validation.error.age.number') }}
          </small>
        </b-form-group>
      </b-col>
      <!-- 3) - Bio -->
      <b-col
        md="6"
        lg="12"
        class="mb-29 position-relative d-flex flex-column textArea"
      >
        <label for="bio" class="text-18 mb-3">{{ $t('form.label.bio') }}</label>
        <textarea
          id="bio"
          v-model="$v.form.bio.$model"
          class="border-top-0 border-right-0 border-left-0 text-twentyFour border-twentyThree"
          :placeholder="$t('form.placeholder.bio')"
        ></textarea>
        <!-- 2) - Message Required -->
        <small
          v-if="!$v.form.bio.required && $v.form.bio.$dirty"
          class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
        >
          <!-- Icon -->
          <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
          {{ $t('validation.require.bio') }}
        </small>
      </b-col>
      <!-- 4) - Fees -->
      <b-col md="6" lg="12" class="mb-20">
        <b-form-group
          id="input-group-4"
          :label="`${$t('form.label.fees')}`"
          label-for="input-4"
          class="text-18 require"
        >
          <b-form-input
            id="input-4"
            v-model.trim="$v.form.fees.$model"
            autocomplete="off"
            type="text"
            :placeholder="$t('form.placeholder.fees')"
            class="border-top-0 px-0 border-right-0 border-left-0 rounded-0 border-bottom border-twentyThree"
          ></b-form-input>
          <!-- 2) - Message Required -->
          <small
            v-if="!$v.form.fees.required && $v.form.fees.$dirty"
            dir="auto"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.require.fees') }}
          </small>
          <!-- 3) - Message Error -->
          <small
            v-if="!$v.form.fees.numeric"
            dir="auto"
            class="text-12 text-secondary weight-light bg-thirty px-3 py-2 d-block w-100"
          >
            <!-- Icon -->
            <GSvg name-icon="wrong" class="svg-validate" title="wrong" />
            {{ $t('validation.error.age.number') }}
          </small>
        </b-form-group>
      </b-col>
      <!-- 5) - Upload video -->
      <b-col cols="12" class="text-capitalize mb-20">
        <p class="text-18 mb-3 weight-light text-secondary">video</p>
        <!-- Component upload video -->
        <UploadVideo @uploadVideo="getVideo" />
      </b-col>
      <!-- 6) - Certifications -->
      <b-col cols="12" class="text-capitalize mb-20">
        <h6 class="weight-light text-secondary text-18 mb-3">certifications</h6>
        <!--  -->
        <div class="d-flex flex-column flex-lg-row justify-content-between">
          <!-- 1) - Add Image -->
          <AddImage
            type="regtengle"
            class="mb-4 mb-lg-0"
            @addImage="getImage"
          />
          <!-- 2) - All Certification -->
          <AllCertificate
            :status-remove-image="true"
            class="setRow--change"
            @removeImage="beforeDelete"
          />
        </div>
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
import { required, maxLength, numeric } from 'vuelidate/lib/validators'
import { goToBack } from '@/mixins/other.js'
//
export default {
  name: 'EditAboutMe',
  mixins: [goToBack],
  data() {
    return {
      form: {
        speciality: '',
        yearsExperience: '',
        bio: '',
        fees: '',
      },
      data: [1, 2, 3, 4, 5, 6, 7, 8],
      loading: false,
      disableBtnSubmit: true,
      placeHolder: null,
    }
  },
  provide() {
    return {
      allCertificate: this.data,
    }
  },
  computed: {
    // 1) - Status confirm delete
    statusConfirmDelete() {
      return this.$store.state.statusConfirm
    },
  },
  validations: {
    form: {
      speciality: {
        required,
      },
      yearsExperience: {
        required,
        numeric,
        maxLength: maxLength(2),
      },
      bio: {
        required,
      },
      fees: {
        required,
        numeric,
      },
    },
  },
  watch: {
    //
    form: {
      deep: true,
      handler() {
        this.disableBtnSubmit = false
      },
    },
    //
    statusConfirmDelete(status) {
      if (status) {
        this.removeImage(this.placeHolder)
        this.$store.commit('changeStatusConfirm', null)
      }
    },
  },
  destroyed() {
    //
    this.$store.commit('changeConfirm', {
      status: false,
    })
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
    //
    getImage(value) {
      this.$store.commit('changeStatusAlert', {
        status: true,
        typeMessage: 'success',
        message: 'uploadedImage',
      })
    },
    //
    getVideo(video) {
      //
      if (!video) {
        this.$store.commit('changeStatusAlert', {
          status: true,
          typeMessage: 'error',
          message: 'videoLength',
        })
      } else {
        this.$store.commit('changeStatusAlert', {
          status: true,
          typeMessage: 'success',
          message: 'uploadedVideo',
        })
      }
    },
    //
    removeImage(id) {
      // eslint-disable-next-line no-console
      console.log(id)
    },
    //
    beforeDelete(id) {
      this.placeHolder = id
      //
      this.$store.commit('changeConfirm', {
        status: true,
        message: 'confirmDelete',
        element: id,
      })
    },
  },
}
</script>

<style lang="scss">
//
.textArea {
  //
  textarea {
    min-height: 177px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    resize: none;

    //
    @include changeScrollBar();

    //
    &::placeholder {
      text-transform: capitalize;
    }

    //
    &:focus {
      outline: none;
    }
  }
}

//
.setRow--change {
  max-width: 70%;
  //
  @media (max-width: 992px) {
    max-width: 100%;
  }
}
</style>
