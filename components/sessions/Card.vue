<template>
  <b-col
    class="card-sessions basis-100 flex-grow-0 mb-20 mb-lg-40 px-2 py-2 bg-thirtyOne"
  >
    <b-row no-gutters class="justify-content-around">
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
        <p class="mb-0 mt-n1 text-eightenth text-14 weight-bolder">
          Psychotherapist
        </p>
        <!--  -->
        <b-row no-gutters class="justify-content-center my-3 mb-lg-0 mt-lg-2">
          <!-- 1 -->
          <b-col
            cols="7"
            md="6"
            lg="10"
            class="d-flex mx-auto h-33 align-items-center mb-2"
          >
            <!-- 1) - Rating -->
            <b-form-rating
              v-model="rating"
              class="p-0 bg-thirtyOne"
              readonly
              size="md"
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
          <!-- 2 -->
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
        </b-row>
      </b-col>
      <!-- 3 -->
      <b-col lg="4">
        <b-row no-gutters class="h-100">
          <b-col
            cols="12"
            class="mb-auto d-flex align-items-center justify-content-center"
          >
            <p class="text-18 weight-extraBold text-secondary">21 Jun 2021</p>
            <p class="text-thirtyTwo text-16 weight-bolder mx-1">(09:00 Am)</p>
          </b-col>
          <b-col cols="12" class="mt-auto">
            <b-button
              class="w-162 mx-auto text-capitalize d-block"
              pill
              variant="third"
              >{{ $t('button.join') }}</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      rating: 4,
    }
  },
}
</script>

<style lang="scss">
//
.card-sessions {
  height: 160px;
  width: 700px;
  border-radius: 20px;

  //
  @media (max-width: 1199px) {
    height: auto;
  }

  //
  .image {
    width: 134px;
    height: 134px;
  }

  //
  .people {
    width: 30px;
    height: 30px;
  }
}
</style>
