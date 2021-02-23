<template>
  <b-col
    class="card-sessions basis-100 flex-grow-0 mb-20 mb-lg-40 px-2 py-2 bg-thirtyOne"
  >
    <b-row no-gutters class="justify-content-around h-100">
      <!-- 1 -->
      <b-col
        lg="3"
        class="d-flex align-items-center justify-content-center flex-grow-0"
      >
        <div class="image shadow-image rounded-circle overflow-hidden">
          <GImage src-image="therapists/1.png" alt="test" />
        </div>
      </b-col>
      <!-- 2 -->
      <b-col lg="4" class="text-center">
        <!-- 1 -->
        <h3 class="text-20 weight-extraBold text-secondary">Dr. Sara Ahmed</h3>
        <p class="mb-3 mt-n1 text-eightenth text-14 weight-bolder">
          Psychotherapist
        </p>
        <!--  -->
        <b-row no-gutters class="justify-content-center mb-lg-0 mt-lg-2">
          <!-- 1 -->
          <b-col
            cols="12"
            class="d-flex align-items-center justify-content-around"
          >
            <!--  -->
            <div class="d-flex align-items-center">
              <p class="m-0 text-16 text-eightenth weight-extraBold">
                250 {{ $t('placeHolder.egp') }} /
              </p>
              <p class="m-0 mx-1 text-13 text-sixth">
                {{ $t('pages.home.session') }}
              </p>
            </div>
          </b-col>
          <!-- 2 -->
          <b-col class="d-flex align-items-center justify-content-center">
            <p class="text-15 mb-0 weight-bolder text-secondary">21 Jun 2021</p>
            <p class="text-thirtyTwo mb-0 text-13 weight-light mx-1">
              (09:00 Am)
            </p>
          </b-col>
        </b-row>
      </b-col>
      <!-- 3 -->
      <b-col lg="4" class="ml-auto">
        <b-row no-gutters class="h-100">
          <!--  -->
          <b-col
            cols="6"
            lg="12"
            class="mb-auto mx-auto mt-3 mt-lg-0 d-flex h-33 align-items-center justify-content-center"
          >
            <!-- 1) - Rating -->
            <b-form-rating
              v-model="rating"
              class="p-0 bg-thirtyOne"
              readonly
              size="lg"
              variant="eighth"
              :no-border="true"
            ></b-form-rating>
            <!-- 2) - Total -->
            <div
              class="d-flex align-items-center mt-2"
              :style="{ direction: $i18n.locale === 'ar' ? 'ltr' : '' }"
            >
              (
              <GSvg class="people" name-icon="people" title="people" />
              <p class="mb-0 mx-1 text-15">344</p>
              )
            </div>
          </b-col>
          <!--  -->
          <b-col cols="12" class="mt-4 mt-lg-auto mb-1">
            <b-button
              :class="[
                'w-100 position-relative text-16 weight-bolder mx-auto py-0 text-capitalize d-block',
                {
                  'text-third': !star,
                  'text-primary': star,
                  'shadow-google': !star,
                },
              ]"
              pill
              size="sm"
              :variant="star ? 'third' : 'primary'"
              @click="$emit('clickOpenCard')"
              @mouseenter="star = true"
              @mouseleave="star = false"
            >
              <span>rate your session</span>
              <!--  -->
              <div class="star position-absolute">
                <GSvg :name-icon="star ? 'star-fill' : 'star'" title="star" />
              </div>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'CardPrevious',
  data() {
    return {
      rating: 3,
      star: false,
    }
  },
}
</script>

<style lang="scss">
//
.star {
  top: -17px;
  left: 50%;
  transform: translateX(-50%);
  //
  svg {
    width: 16px;
    height: 16px;
  }
}
</style>
