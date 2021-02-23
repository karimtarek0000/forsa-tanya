<template>
  <main class="profile">
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!--  -->
      <b-row
        no-gutters
        class="px-2 px-lg-3 py-90 justify-content-between align-items-start"
      >
        <!-- 1) - Image -->
        <b-col
          class="info-user shadow-google basis-200 position-relative text-center text-capitalize py-4 mb-5 mb-lg-0 mt-70 flex-grow-0 mx-auto mx-lg-0"
        >
          <!--  -->
          <div>
            <!--  -->
            <div
              class="info-user__image rounded-circle position-absolute overflow-hidden"
            >
              <!--  -->
              <GImage :src-image="srcImg" alt="s" />
            </div>

            <!--  -->
            <h2 class="text-20 weight-extraBold mt-5 text-seventh">
              hend sayed
            </h2>

            <!-- Add more information doctor -->
            <slot name="addElementDoctor" />
            <!--  -->
            <div
              class="svg-session d-flex align-items-center justify-content-center"
            >
              <GSvg class="mx-2" name-icon="session-user" title="sessions" />
              <p class="text-12 mb-0 text-eleventh">
                <span class="d-block w-100">0</span>
                <span class="d-block mt-n1">{{
                  $t('pages.home.sessions')
                }}</span>
              </p>
            </div>

            <!-- Icon edit image profile -->
            <slot name="editImage" />
          </div>
          <!--  -->
          <div class="addElement position-absolute">
            <slot name="addStatusAvailableToggle" />
          </div>
        </b-col>
        <!-- 2) - Info -->
        <b-col
          md="12"
          lg="9"
          class="shadow-google change px-40 py-50 position-relative rounded-20"
        >
          <!--  -->
          <slot />
        </b-col>

        <!-- 3) - Pagination -->
        <b-col lg="9" class="changeDirPagi">
          <slot name="pagination" />
        </b-col>
      </b-row>
    </b-container>
    <!--  -->
    <slot name="other" />
  </main>
</template>

<script>
export default {
  name: 'LayoutInfo',
  props: {
    srcImg: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
//
.addElement {
  width: 100%;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);

  //
  @media (max-width: 992px) {
    bottom: -44px;
  }
  //
  .btn-available__inner {
    padding: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  }
  //
  .btn-available__status {
    font-weight: 500;
  }
}

//
.profile {
  //
  .people {
    width: 30px;
    height: 30px;
  }
}

.changeDirPagi {
  margin-left: auto;
}
</style>
