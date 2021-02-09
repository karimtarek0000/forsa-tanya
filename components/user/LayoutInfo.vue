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
          class="info-user shadow-google basis-200 position-relative text-center text-capitalize px-3 py-4 mb-5 mb-lg-0 mt-70 flex-grow-0 mx-auto mx-lg-0"
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
          lg="9"
          class="shadow-google change px-40 py-50 position-relative rounded-20"
        >
          <slot />
        </b-col>
      </b-row>
    </b-container>
    <slot name="other" />
  </main>
</template>

<script>
export default {
  name: 'LayoutInfo',
}
</script>

<style></style>
