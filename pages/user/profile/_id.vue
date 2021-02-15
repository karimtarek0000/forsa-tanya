<template>
  <LayoutInfo src-img="other/3.jpg">
    <!-- 1) - Personal Info -->
    <div
      class="overlay-title d-flex align-items-center bg-thirdenth position-absolute"
    >
      <!--  -->
      <h6 class="mb-0 text-primary text-20 weight-bolder text-capitalize">
        {{ $t('labels.personalInformation') }}
      </h6>
    </div>
    <!-- 2) - All field -->
    <b-row no-gutters class="h-100">
      <!-- 1 -->
      <b-col lg="8">
        <!--  -->
        <b-row no-gutters>
          <!-- 1) - Name -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.name') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">hend sayed</p>
          </b-col>
          <!-- 2) - Email -->
          <b-col md="6" lg="12">
            <h6 class="text-16 weight-light text-twentyFour text-capitalize">
              {{ $t('form.label.email') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">
              hend-sayed@yahoo.com
            </p>
          </b-col>
          <!-- 3) - Age -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.age') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">25 years</p>
          </b-col>
          <!-- 4) - Phone Number -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.phone') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">01234567890</p>
          </b-col>
          <!-- 5) - Gender -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.gender') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">female</p>
          </b-col>
          <!-- 6) - Address -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.address') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">25 years</p>
          </b-col>
          <!-- 7) - Have you ever had psychotherapy before?  -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.ques.hadPsychotherapyBefore') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">no</p>
          </b-col>
          <!-- 8) - How did you know forsa tanya  -->
          <b-col md="6" lg="12" class="text-capitalize">
            <h6 class="text-16 weight-light text-twentyFour">
              {{ $t('form.label.ques.howDidYouKnowForsaTanya') }}
            </h6>
            <p class="text-18 mt-n2 weight-light text-secondary">none</p>
          </b-col>
        </b-row>
      </b-col>
      <!-- 2 -->
      <b-col class="mt-2 mt-lg-0">
        <!--  -->
        <b-row no-gutters class="h-100">
          <!--  -->
          <b-col md="6" lg="12">
            <b-button
              type="button"
              pill
              variant="primary"
              class="text-16 mb-2 mb-md-0 d-flex align-items-center justify-content-center weight-bolder text-capitalize w-100 text-seventh py-1"
              @click="
                $router.push(
                  localeRoute({
                    name: 'user-edit-profile-id',
                    params: { id: 'karim' },
                  })
                )
              "
            >
              <GSvg
                class="edit-profile mx-2"
                name-icon="edit-profile"
                title="edit profile"
              />
              <span>{{ $t('button.editProfile') }}</span>
            </b-button>
          </b-col>
          <!--  -->
          <b-col md="6" lg="12" class="mt-auto">
            <b-button
              type="button"
              pill
              variant="outline-seventh"
              class="text-16 weight-bolder text-capitalize w-100 text-seventh py-1"
              @click="closeScreenChangePassword = true"
            >
              {{ $t('button.changePassword') }}
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Model Form -->
    <ModelForm
      v-if="closeScreenChangePassword"
      slot="other"
      @closeFullScreen="closeScreenChangePassword = $event"
    >
      <!-- Change password -->
      <ChangePassword />
    </ModelForm>
  </LayoutInfo>
</template>

<script>
//
import Validate from '@/mixins/validatePage.js'
//
export default {
  mixins: [Validate],
  data() {
    return {
      closeScreenChangePassword: false,
    }
  },
  head() {
    return {
      title: `${this.$t('titles.profile')}`,
    }
  },
}
</script>

<style lang="scss">
//
.btn-outline-seventh:hover {
  color: var(--primary) !important;
}

//
.edit-profile {
  width: 29px;
  height: 29px;
}
</style>
