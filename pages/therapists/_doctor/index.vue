<template>
  <main id="therapist-details">
    <!-- 1) - Loader -->
    <template v-if="loader">
      <Loader />
    </template>
    <!-- 2) - Data -->
    <template v-else>
      <!-- 1) - Details our therapist -->
      <section class="my-5 my-lg-90">
        <b-container fluid="lg" class="px-2 px-lg-0 text-center">
          <b-row
            no-gutters
            class="therapist-details__info align-items-center justify-content-center shadow-card py-lg-3 px-40"
          >
            <!-- 1) - Image -->
            <b-col
              class="therapist-details__info__img overflow-hidden shadow-card flex-grow-0 basis-221 h-221 rounded-circle"
            >
              <img
                class="img-fluid obj-img"
                :src="therapist.image"
                :alt="therapist['doctor_name']"
              />
            </b-col>
            <!-- 2) - Details -->
            <b-col lg="4" class="text-capitalize">
              <!--  -->
              <h1 class="m-0 text-secondary weight-extraBold text-30">
                {{ $t('placeHolder.dr') }}. {{ therapist['doctor_name'] }}
              </h1>
              <!--  -->
              <p class="text-eightenth weight-bolder text-20 m-0">
                {{ therapist['job_title'] }}
              </p>
              <!-- Sessions -->
              <b-row
                no-gutters
                class="justify-content-center my-3 mb-lg-0 mt-lg-2"
              >
                <!-- 1 -->
                <b-col
                  sm="5"
                  lg="8"
                  class="d-flex h-33 align-items-center mb-2"
                >
                  <!-- 1) - Rating -->
                  <b-form-rating
                    v-model="therapist.rating"
                    class="p-0"
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
                    <GSvg
                      class="svg-people"
                      name-icon="people"
                      title="people"
                    />
                    <p class="mb-0 mx-1 text-15">344</p>
                    )
                  </div>
                </b-col>
                <!-- 2 -->
                <b-col
                  sm="4"
                  lg="5"
                  class="d-flex align-items-center justify-content-around"
                >
                  <!--  -->
                  <GSvg
                    class="mx-3 svg-39 svg-session flex-shrink-0"
                    name-icon="sessions"
                    title="sessions"
                  />
                  <!--  -->
                  <div class="weight-bolder d-flex align-items-center">
                    <p
                      class="m-0 text-20 weight-extraBold"
                      v-text="+therapist['sessions_count']"
                    />
                    <p class="m-0 mx-1 text-18 text-sixth">
                      {{ $t('pages.home.sessions') }}
                    </p>
                  </div>
                </b-col>
              </b-row>
            </b-col>
            <!-- 3) - Actions -->
            <b-col
              lg="4"
              class="details h-145 d-flex flex-column align-items-lg-end justify-content-lg-between ml-auto"
            >
              <!--  -->
              <p
                class="text-eightenth weight-extraBold text-25 text-capitalize"
              >
                {{ +therapist.price }} <span>{{ $t('placeHolder.egp') }}</span>
                <span class="weight-bolder text-sixth"
                  >/{{ $t('pages.home.session') }}</span
                >
              </p>
              <!--  -->
              <b-row
                no-gutters
                class="w-88 mx-auto mx-lg-0 justify-content-lg-between"
              >
                <!--  -->
                <b-col class="button-play mr-3">
                  <b-button
                    pill
                    variant="sevententh"
                    class="w-100 h-39 border-sevententh d-flex align-items-center justify-content-center text-primary text-18 weight-bolder text-capitalize"
                  >
                    <GSvg
                      name-icon="play"
                      title="play"
                      class="svg-play flex-shrink-0 svg-16 mx-1"
                    />
                    {{ $t('button.video') }}
                  </b-button>
                </b-col>
                <!--  -->
                <b-col>
                  <b-button
                    pill
                    variant="sevententh"
                    class="w-100 h-39 border-sevententh d-flex align-items-center justify-content-center text-primary text-18 weight-bolder text-capitalize"
                  >
                    {{ $t('button.book') }}
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <!-- 2) - About Therapist -->
      <section>
        <b-container fluid="lg" class="px-2 px-lg-0">
          <b-row no-gutters class="text-capitalize">
            <h2 class="weight-bolder text-25 text-sevententh mx-auto mb-35">
              about therapist
            </h2>
            <p
              class="weight-light text-16 line-2 px-4 text-secondary"
              v-text="therapist['brief_bio']"
            />
          </b-row>
        </b-container>
      </section>
      <!-- 3) - Certifications -->
      <section class="mt-lg-90">
        <b-container
          fluid="lg"
          class="px-2 px-lg-0 text-center text-capitalize"
        >
          <!--  -->
          <h2
            class="weight-bolder text-25 text-sevententh mx-auto my-5 mb-lg-52"
          >
            certifications
          </h2>
          <!--  -->
          <div class="carousel-wrapper">
            <!--  -->
            <VueSlickCarousel v-bind="slickOptions1">
              <div
                v-for="ther in therapist.certificates_slider"
                :key="ther.id"
                class="certifications img-wrapper"
                @click="toggle"
              >
                <img class="img-fluid obj-img" src="@/assets/images/s.png" />
              </div>
            </VueSlickCarousel>
          </div>
        </b-container>
      </section>
      <!-- 4) - Reviews -->
      <section class="mb-5 my-lg-90">
        <b-container
          fluid="lg"
          class="px-2 px-lg-0 text-center text-capitalize"
        >
          <!--  -->
          <h2
            class="weight-bolder text-25 text-sevententh mx-auto my-5 mb-lg-52"
          >
            reviews
          </h2>
          <!--  -->
          <div class="carousel-wrapper">
            <VueSlickCarousel v-bind="slickOptions2">
              <div
                v-for="reviews in therapist.ratings"
                :key="reviews.rate_id"
                class="reviews img-wrapper bg-primary pb-2 pt-5 position-relative"
              >
                <!--  -->
                <div class="shadow-card-review rounded">
                  <!-- SVG -->
                  <GSvg
                    name-icon="quotes"
                    title="quotes"
                    class="svg-70 quotes position-absolute mx-1"
                  />
                  <!-- 1) - Image -->
                  <div
                    class="mx-auto w-110 h-110 rounded-circle position-relative image-avatar"
                  >
                    <img class="img-fluid obj-img" :src="reviews.image" />
                  </div>
                  <!-- 2) - Title -->
                  <h4 class="text-17 weight-bolder marginTop--35 text-seventh">
                    hany ali
                  </h4>
                  <!-- 3) - Quote -->
                  <p class="text-14 line-2 px-3 weight-light">
                    {{ reviews.message }}
                  </p>
                  <!-- 4) - Other options -->
                  <b-row
                    no-gutters
                    class="align-items-center justify-content-between"
                  >
                    <!--  -->
                    <b-col lg="7">
                      <b-form-rating
                        v-model="reviews.rate"
                        class="p-0"
                        readonly
                        size="lg"
                        variant="eighth"
                        :no-border="true"
                      ></b-form-rating>
                    </b-col>
                    <!--  -->
                    <b-col lg="3">
                      <p class="m-0 text-12 text-sixth">
                        {{ reviews.date }}
                      </p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-container>
      </section>
    </template>
    <!-- 3) - View Certifications -->
    <ViewCertification v-if="toggleView" @close="toggleView = $event" />
  </main>
</template>

<script>
//
const sharePropertyScroll = {
  lazyLoad: 'ondemand',
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  autoplaySpeed: 5000,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
}
//
export default {
  async asyncData({ $axios, params }) {
    try {
      const data = await $axios.$get(`/allDoctors/${params.doctor}`)

      return { therapist: data, loader: false }
    } catch {}
  },
  data() {
    return {
      slickOptions1: {
        slidesToShow: 3,
        initialSlide: 3,
        slidesToScroll: 3,
        ...sharePropertyScroll,
        rtl: this.$i18n.locale === 'ar',
        responsive: [
          {
            breakpoint: 696,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      },
      slickOptions2: {
        slidesToShow: 2,
        initialSlide: 1,
        slidesToScroll: 2,
        ...sharePropertyScroll,
        rtl: this.$i18n.locale === 'ar',
        responsive: [
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      },
      rating: 3,
      loader: true,
      toggleView: false,
    }
  },
  methods: {
    toggle() {
      return (this.toggleView = !this.toggleView)
    },
  },
  head() {
    return {
      title: `${this.therapist.doctor_name} / ${this.therapist.job_title}`,
    }
  },
}
</script>

<style lang="scss">
//
.svg-people {
  width: 31px;
  height: 32px;
  fill: var(--twentyOne);
}

//
.svg {
  //
  &-other {
    width: 40px;
    height: 30px;
  }

  //
  &-session {
    fill: var(--twenty);
  }

  &-play {
    fill: var(--ninetenth);
  }
}

//
.slick-dots {
  display: flex !important;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 0;
  margin-top: 50px !important;
  padding: 0;
  //
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    //
    button {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(160, 160, 160, 0.69);
      color: transparent;
      appearance: none;
      border: 0;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .slick-active {
    background-color: #067d62;
    border-radius: 50%;
  }
}

///////////////
//
.certifications.img-wrapper {
  padding: 0 30px;
}

.reviews.img-wrapper {
  width: 400px;
  padding: 0 50px;
  position: relative;

  @media (max-width: 992px) {
    padding: 0 30px;
  }
}

//
.image-avatar {
  z-index: 3;
  top: -44px;
  filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.7));
}

.marginTop--35 {
  margin-top: -35px;
}

.quotes {
  left: 80px;
  top: 0;
  fill: var(--seventh);

  @media (max-width: 900px) {
    left: 50px;
  }
}

//
.view {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(black, 0.5);
  z-index: 9999;
  //
  &-certifications {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 735.5px;
    height: 557px;

    //
    @media (max-width: 800px) {
      top: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      height: auto;
    }
  }
}
</style>
