<template>
  <!--  -->
  <b-row no-gutters class="position-relative">
    <!-- 1) - Speciality -->
    <b-col cols="12" class="text-capitalize">
      <h6 class="text-16 weight-light text-twentyFour">speciality</h6>
      <p class="text-18 mt-n2 weight-light text-secondary">psychotherapist</p>
    </b-col>
    <!-- 2) - Years of experience -->
    <b-col cols="12" class="text-capitalize">
      <h6 class="text-16 weight-light text-twentyFour">years of experience</h6>
      <p class="text-18 mt-n2 weight-light text-secondary">5 years</p>
    </b-col>
    <!-- 3) - Bio -->
    <b-col cols="12">
      <h6 class="text-16 weight-light text-twentyFour text-capitalize">bio</h6>
      <p class="text-18 mt-n2 weight-light text-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </b-col>
    <!-- 4) - Fees -->
    <b-col cols="12" class="text-capitalize">
      <h6 class="text-16 weight-light text-twentyFour">fees</h6>
      <p class="text-18 mt-n2 weight-light text-secondary">250 EGP/Session</p>
    </b-col>
    <!-- 5) - Video -->
    <b-col cols="12" class="text-capitalize">
      <h6 class="text-16 weight-light text-twentyFour">Video</h6>
      <p class="text-18 mt-n2 weight-light text-secondary">link</p>
    </b-col>
    <!-- 6) - Certifications -->
    <b-col cols="12" class="text-capitalize">
      <h6 class="text-16 weight-light text-twentyFour">certifications</h6>
      <!--  -->
      <AllCertificate />
    </b-col>
    <!--  -->
    <b-col cols="12" class="edit-btn mt-3 mt-lg-0">
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
        <span>edit</span>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8],
    }
  },
  provide() {
    return {
      allCertificate: this.data,
    }
  },
}
</script>

<style lang="scss">
//
.edit-profile {
  width: 29px;
  height: 29px;
}

//
.edit-btn {
  @media (min-width: 992px) {
    position: absolute;
    top: 0;
    right: 10px;
    width: 100px;
  }
}
</style>
