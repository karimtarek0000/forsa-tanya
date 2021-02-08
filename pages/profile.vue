<template>
  <main class="profile">
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!--  -->
      <b-row
        no-gutters
        class="px-2 px-lg-3 py-90 justify-content-between align-items-start"
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
          class="shadow-google px-40 py-50 position-relative rounded-20"
        >
          <!-- 1) - Personal Info -->
          <div
            class="overlay-title d-flex align-items-center bg-thirdenth position-absolute"
          >
            <!--  -->
            <h6 class="mb-0 text-primary text-20 weight-bolder text-capitalize">
              {{ $t('labels.personalInformation') }}
            </h6>
          </div>
          <!--  -->
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
                  <p class="text-18 mt-n2 weight-light text-secondary">
                    hend sayed
                  </p>
                </b-col>
                <!-- 2) - Email -->
                <b-col md="6" lg="12">
                  <h6
                    class="text-16 weight-light text-twentyFour text-capitalize"
                  >
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
                  <p class="text-18 mt-n2 weight-light text-secondary">
                    25 years
                  </p>
                </b-col>
                <!-- 4) - Phone Number -->
                <b-col md="6" lg="12" class="text-capitalize">
                  <h6 class="text-16 weight-light text-twentyFour">
                    {{ $t('form.label.phone') }}
                  </h6>
                  <p class="text-18 mt-n2 weight-light text-secondary">
                    01234567890
                  </p>
                </b-col>
                <!-- 5) - Gender -->
                <b-col md="6" lg="12" class="text-capitalize">
                  <h6 class="text-16 weight-light text-twentyFour">
                    {{ $t('form.label.gender') }}
                  </h6>
                  <p class="text-18 mt-n2 weight-light text-secondary">
                    female
                  </p>
                </b-col>
                <!-- 6) - Address -->
                <b-col md="6" lg="12" class="text-capitalize">
                  <h6 class="text-16 weight-light text-twentyFour">
                    {{ $t('form.label.address') }}
                  </h6>
                  <p class="text-18 mt-n2 weight-light text-secondary">
                    25 years
                  </p>
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
                    class="text-16 d-flex align-items-center justify-content-center weight-bolder text-capitalize w-100 text-seventh py-1"
                    @click="
                      $router.push(
                        localeRoute({
                          name: 'editUserProfile',
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
                  >
                    {{ $t('button.changePassword') }}
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('titles.profile')}`,
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
.btn-outline-seventh:hover {
  color: var(--primary) !important;
}

//
.edit-profile {
  width: 29px;
  height: 29px;
}
</style>
