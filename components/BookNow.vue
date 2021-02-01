<template>
  <b-row
    no-gutters
    class="view-book justify-content-center align-items-center position-fixed"
  >
    <!-- View Book Wrapper -->
    <div class="view-book__wrapper">
      <!--  -->
      <div @click="closeView">
        <GSvg class="view-book-close" name-icon="close" title="close" />
      </div>
      <!--  -->
      <span
        v-if="trigger"
        class="overlay position-fixed d-block"
        @click="trigger = false"
      />
      <!-- View Book -->
      <div class="view-book__inner d-block position-absolute p-4">
        <!-- Handling Panding, Error -->
        <!--  -->
        <Loader v-if="$fetchState.pending" />
        <!--  -->
        <div v-else-if="$fetchState.error" class="text-capitalize text-center">
          <span>try again reload!</span>
        </div>
        <!--  -->
        <template v-else>
          <!-- 1) - All Informations -->
          <b-row no-gutters class="justify-content-center align-items-center">
            <!-- 1) - Image -->
            <b-col
              lg="4"
              class="basis-167 h-167 flex-grow-0 shadow-image rounded-circle overflow-hidden"
            >
              <img
                class="img-fluid obj-img"
                :src="dataTheriabist.image"
                :alt="dataTheriabist.doctor_name"
              />
            </b-col>
            <!-- Info -->
            <b-col lg="5" class="text-center">
              <!-- 1) - Name -->
              <h3
                class="m-0 text-secondary text-capitalize weight-extraBold text-20"
              >
                {{ $t('placeHolder.dr') }}. {{ dataTheriabist.doctor_name }}
              </h3>
              <!-- 2) - Job -->
              <p class="text-eightenth mb-1 weight-bolder text-14">
                {{ dataTheriabist.job_title }}
              </p>
              <!--  -->
              <b-col
                sm="5"
                lg="12"
                class="d-flex h-33 mx-auto justify-content-center align-items-center mb-2"
              >
                <!-- 1) - Rating -->
                <b-form-rating
                  v-model="dataTheriabist.rating"
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
                  <GSvg class="svg-people" name-icon="people" title="people" />
                  <p class="mb-0 mx-1 text-12">344</p>
                  )
                </div>
              </b-col>
              <!--  -->
              <p class="text-15 weight-extraBold mb-1 text-secondary">
                {{ +dataTheriabist.price }} EGP/Session
              </p>
              <!--  -->
              <b-col
                class="d-flex align-items-center justify-content-center px-0"
              >
                <!--  -->
                <GSvg
                  class="mx-1 svg-session flex-shrink-0"
                  name-icon="sessions"
                  title="sessions"
                />
                <!--  -->
                <p class="m-0 text-12 weight-bolder">
                  200 {{ $t('pages.home.sessions') }}
                </p>
              </b-col>
            </b-col>
          </b-row>
          <!-- 2) - Actions -->
          <b-row
            no-gutters
            class="mt-4 align-items-center justify-content-between"
          >
            <!-- 1) - Today -->
            <b-col lg="7" class="mb-2 mb-lg-0">
              <b-row no-gutters class="justify-content-between">
                <b-col v-for="(day, index) in days" :key="day" cols="6">
                  <b-button
                    pill
                    variant="primary"
                    :class="[
                      'w-90 border-third view-book-btn mb-2 mb-md-0 text-14 weight-bolder text-capitalize',
                      {
                        'bg-third text-primary': index === clickedDay,
                        'text-third': index !== clickedDay,
                      },
                    ]"
                    @click="pickedInDay(index)"
                  >
                    {{
                      day === 'today'
                        ? $t('button.today')
                        : $t('button.tomorrow')
                    }}
                  </b-button>
                </b-col>
              </b-row>
            </b-col>

            <!-- 3) - Calendar -->
            <b-col class="d-flex justify-content-center align-items-center">
              <!-- 1) - Show Calendar -->
              <span
                id="datepicker-trigger"
                class="shadow-calendar cursor flex-grow-1 position-relative text-center text-twentyTwo weight-bolder text-capitalize px-4 py-1"
              >
                <!--  -->
                <AirbnbStyleDatepicker
                  :trigger-element-id="'datepicker-trigger'"
                  class="direction-ltr"
                  :mode="'single'"
                  :fullscreen-mobile="false"
                  :trigger="trigger"
                  :show-shortcuts-menu-trigger="false"
                  :date-one="date"
                  :months-to-show="1"
                  :enabled-dates="ard"
                  @closed="trigger = false"
                  @opened="trigger = true"
                  @date-one-selected="date = $event"
                />
                <!--  -->
                {{ formatDate }}
              </span>
              <!-- 2) -->

              <div>
                <GSvg
                  class="svg-calendar mx-2"
                  name-icon="calendar"
                  title="calendar"
                />
              </div>
            </b-col>
          </b-row>
          <!-- 3) - Appointments -->
          <div class="mt-4">
            <!-- 1) - Title -->
            <h4 class="text-capitalize text-seventh text-16 weight-extraBold">
              {{ $t('labels.appointments') }}
            </h4>
            <!--  -->
            <b-row no-gutters class="justify-content-between mt-3">
              <!--  -->
              <b-col
                v-for="(
                  appointments, index
                ) in dataTheriabist.all_doctor_sessions"
                :key="appointments.id"
                class="basis-182 flex-sm-grow-0 mb-3"
              >
                <b-button
                  pill
                  variant="primary"
                  :class="[
                    'w-100 border-third view-book-btn mb-2 mb-md-0 text-14 weight-bolder text-capitalize',
                    {
                      'bg-third text-primary': index === clickedAppointments,
                      'text-third': index !== clickedAppointments,
                    },
                  ]"
                  @click="pickedTime(index, appointments['time_from'])"
                >
                  {{ appointments['time_from'] }}
                </b-button>
              </b-col>
            </b-row>
          </div>
          <!-- 4) - Book Now -->
          <b-button
            pill
            variant="bookNow"
            class="btn-block border-third mb-2 mb-md-0 text-primary text-18 weight-extraBold text-capitalize"
            :disabled="true"
          >
            {{ $t('button.bookNow') }}
          </b-button>
        </template>
      </div>
    </div>
  </b-row>
</template>

<script>
//
import { format } from 'date-fns'
//
export default {
  name: 'BookNow',
  props: {
    id: {
      type: Number,
      required: true,
    },
    show: Boolean,
  },
  async fetch() {
    const { Data } = await this.$axios.$get(`/doctors/${this.id}`)
    //
    this.dataTheriabist = Data
  },
  data() {
    return {
      dataTheriabist: null,
      days: ['today', 'tomorrow'],
      clickedDay: 0,
      clickedAppointments: null,
      selectedUser: {
        date: null,
        time: null,
      },
      value: '',
      dateFormat: 'D MMM YYYY',
      date: null,
      ard: ['2021-02-19', '2021-02-20'],
      trigger: false,
    }
  },
  computed: {
    formatDate() {
      return this.date ? format(this.date, this.dateFormat) : 'select date'
    },
  },
  created() {
    //
    const closeView = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.closeView()
      }
    }
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.addEventListener('keydown', closeView)
    //
    this.$once('hook:destroyed', () =>
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.removeEventListener('keydown', closeView)
    )
  },
  mounted() {
    // this.pickedInDay(0)
  },
  methods: {
    // 1) - PickedInDay
    // pickedInDay(index) {
    //   // 1) - Set index to indexClicked
    //   this.clickedDay = index
    //   Moment.locale(this.$i18n.locale)
    //   //
    //   const getTypeDay = this.days[index]
    //   const today = Moment().format('DD MMMM YYYY')
    //   const tomorrow = Moment().add(1, 'days').format('DD MMMM YYYY')
    //   // Check if clicked today or not
    //   getTypeDay === 'today'
    //     ? (this.selectedUser.date = today)
    //     : (this.selectedUser.date = tomorrow)
    // },
    // 2 - PickedTime
    pickedTime(index, time) {
      this.clickedAppointments = index
      this.selectedUser.time = time
    },
    //
    // formatDates(dateOne) {
    //   let formattedDates = ''
    //   if (dateOne) {
    //     formattedDates = format(dateOne, this.dateFormat)
    //   }
    //   return formattedDates
    // },
    // Close view
    closeView() {
      this.$emit('closeViewBook', false)
    },
  },
}
</script>

<style lang="scss">
//
.view-book {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.5);
  z-index: 9999;

  //
  &__inner {
    width: 673px;
    background-color: white;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    max-height: 497px;
    min-height: 497px;
    overflow-y: auto;

    //
    @media (max-width: 992px) {
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 90%;
    }
  }

  &__wrapper {
    max-height: 497px;
    min-height: 497px;
  }

  ///////////////////////////
  // SVG
  .svg {
    //
    &-session {
      width: 25px;
      height: 25px;
      fill: var(--eightenth);
    }
    //
    &-calendar {
      width: 39px;
      height: 41px;
      pointer-events: none;
    }
  }

  ///////////////////////////
  // Other
  .overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 3;
    height: 100%;
    pointer-events: none;
  }

  &-close {
    position: absolute;
    top: 80px;
    right: 100px;
    width: 40px;
    height: 40px;
    fill: var(--primary);
    z-index: 10;
    cursor: pointer;

    //
    @media (max-width: 992px) {
      top: 15px;
      right: 15px;
    }
  }
}

//
.view-book-btn:hover {
  @media (hover: hover) {
    background-color: var(--third);
    color: var(--primary) !important;
  }
}

.view-book-btn:active {
  background-color: var(--third);
  color: var(--primary) !important;
}

//
.asd__wrapper {
  z-index: 99999 !important;
  top: 35px !important;
  left: 50% !important;
  transform: translateX(-50%);
  //
  @media (min-width: 992px) {
    top: -25px !important;
    left: -100px !important;
    transform: translateX(0);
  }

  @media (max-width: 444px) {
    top: 44px !important;
    left: 62% !important;
    transform: translateX(-50%);
  }
}
</style>
