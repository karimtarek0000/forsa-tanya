<template>
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
        <!-- 2) - Phone Number -->
        <b-col md="6" lg="12" class="text-capitalize">
          <h6 class="text-16 weight-light text-twentyFour">
            {{ $t('form.label.phone') }}
          </h6>
          <p class="text-18 mt-n2 weight-light text-secondary">01234567890</p>
        </b-col>
        <!-- 3) - Email -->
        <b-col md="6" lg="12">
          <h6 class="text-16 weight-light text-twentyFour text-capitalize">
            {{ $t('form.label.email') }}
          </h6>
          <p class="text-18 mt-n2 weight-light text-secondary">
            hend-sayed@yahoo.com
          </p>
        </b-col>
        <!-- 3) - Gender -->
        <b-col md="6" lg="12" class="text-capitalize">
          <h6 class="text-16 weight-light text-twentyFour">
            {{ $t('form.label.gender') }}
          </h6>
          <p class="text-18 mt-n2 weight-light text-secondary">female</p>
        </b-col>
        <!-- 4) - Age -->
        <b-col md="6" lg="12" class="text-capitalize">
          <h6 class="text-16 weight-light text-twentyFour">
            {{ $t('form.label.age') }}
          </h6>
          <p class="text-18 mt-n2 weight-light text-secondary">25 years</p>
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
            @click="closeScreenChangePassword = true"
          >
            {{ $t('button.changePassword') }}
          </b-button>
        </b-col>
      </b-row>
    </b-col>

    <!-- Model Form -->
    <ModelForm
      v-if="closeScreenChangePassword"
      slot="other"
      @closeFullScreen="closeScreenChangePassword = $event"
    >
      <!-- Change password -->
      <ChangePassword />
    </ModelForm>
  </b-row>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data() {
    return {
      closeScreenChangePassword: false,
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
