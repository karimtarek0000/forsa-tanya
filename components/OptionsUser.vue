<template>
  <b-row no-gutters class="options-users mr-4">
    <!-- If User log out  -->
    <template v-if="statusUser">
      <b-col>
        <b-link class="text-primary" :to="localePath('sign-in')">{{
          $t('button.signIn')
        }}</b-link>
      </b-col>
    </template>
    <template v-else>
      <b-col>
        <b-row
          no-gutters
          class="h-100 flex-column flex-lg-row align-items-center"
        >
          <!-- 1) - User options -->
          <b-col
            class="mx-2 my-3 my-lg-0 cursor d-flex flex-column flex-lg-row align-items-center position-relative order-0 order-lg-1"
            @click.stop="toggleOptionsUser"
          >
            <!-- 1) - User -->
            <p
              class="mb-0 text-capitalize direction-ltr order-1 mx-lg-2 order-lg-0 text-16 weight-bolder text-primary d-flex align-items-center"
            >
              karim
              <GSvg
                class="svg-arrow d-block d-lg-none"
                :name-icon="statusOptionsUser ? 'angle-up' : 'angle-down'"
                title="angle down"
              />
            </p>
            <!-- 2) - Svg -->
            <GSvg name-icon="user" title="user" />
            <!-- 3) - Options -->
            <div
              :class="[
                'options-user bg-primary position-absolute shadow-optionsUser py-lg-3 text-14 weight-light px-3',
                {
                  'options-user--active': statusOptionsUser,
                  'options-user--none': !statusOptionsUser,
                },
              ]"
            >
              <b-link
                class="text-secondary py-2 px-lg-2 d-block text-capitalize"
              >
                <GSvg name-icon="user2" title="user" />
                <span class="ml-2">my profile</span>
              </b-link>
              <b-link
                class="text-secondary py-2 px-lg-2 d-block text-capitalize"
              >
                <GSvg name-icon="session-user" title="session user" />
                <span class="ml-2">my sessions</span>
              </b-link>
              <div class="text-secondary py-2 px-lg-2 d-block text-capitalize">
                <GSvg name-icon="log-out" title="log out" />
                <span class="ml-2">log out</span>
              </div>
            </div>
          </b-col>
          <!-- 2) - Notification -->
          <b-col
            class="notification cursor order-3"
            @click.stop="toggleNotification"
          >
            <!-- 1) - Icon notification -->
            <GSvg
              :name-icon="statusNotification ? 'bell' : 'bell-not'"
              :title="statusNotification ? 'notification' : 'not notification'"
            />
            <!-- 2) - Count notification -->
            <span
              v-if="statusNotification"
              class="count-notification text-13 rounded-circle w-25 h-25 text-primary bg-eightenth d-flex justify-content-center align-items-center position-absolute"
              >{{ countNotitcation }}</span
            >
            <!-- 3) - All notification -->
            <div
              :class="[
                'all-notification shadow-optionsUser bg-primary position-absolute',
                {
                  'all-notification--active': statusNotifi,
                  'all-notification--none': !statusNotifi,
                },
              ]"
            >
              <!--  -->
              <template v-if="statusNotification">
                <p
                  v-for="(data, index) in d"
                  :key="index"
                  class="pt-3 px-4 text-14 cursor-default"
                >
                  {{ data.message }}
                  <span class="weight-bolder text-secondary"
                    >Dr. {{ data.doctor }}</span
                  >
                  <span class="weight-bolder text-youtube"
                    >at {{ data.time }}</span
                  >
                  <span>{{ data.date }}</span>
                </p>
              </template>
              <!--  -->
              <template v-else>
                <span class="cursor-default d-block text-center py-4 px-3"
                  >Not notification yet</span
                >
              </template>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: 'OptionsUser',
  props: {
    statusToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      statusNotifi: false,
      statusOptionsUser: false,
      // d: [
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      //   {
      //     message: 'You have session with',
      //     doctor: 'Sara Ahmed',
      //     date: '21 Jun 2021',
      //     time: '09:00 Am',
      //   },
      // ],
      d: [],
    }
  },
  computed: {
    // 1) - Status user
    statusUser() {
      return this.$store.state.userLogIn
    },
    // 2) - Status array notification
    statusNotification() {
      return this.d.length !== 0
    },
    // 3) - Count notification
    countNotitcation() {
      return this.d.length
    },
  },
  watch: {
    //
    statusNotifi(n) {
      if (n) this.statusOptionsUser = false
    },
    //
    statusOptionsUser(n) {
      if (n) this.statusNotifi = false
    },
    //
    statusToggle(n) {
      if (!n) {
        this.statusNotifi = false
        this.statusOptionsUser = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      if (this.statusNotifi || this.statusOptionsUser) {
        this.statusNotifi = false
        this.statusOptionsUser = false
      }
    })
  },
  methods: {
    // 1) - Toggle notification
    toggleNotification() {
      this.statusNotifi = !this.statusNotifi
      this.$emit('togglerNotification', this.statusNotifi)
    },
    // 2) - Toggle options user
    toggleOptionsUser() {
      this.statusOptionsUser = !this.statusOptionsUser
    },
  },
}
</script>

<style lang="scss" scoped>
//
a.text-primary:hover,
a.text-primary:focus {
  color: var(--primary) !important;
  text-decoration: none;
}

//
a.text-secondary:hover,
a.text-secondary:focus {
  color: var(--primary) !important;
  text-decoration: none;

  @media (max-width: 992px) {
    color: var(--secondary) !important;
  }
}

//
svg {
  width: 30px;
  height: 30px;
  fill: white;
}

//
.count-notification {
  top: -7px;
  right: -5px;

  //
  @media (max-width: 992px) {
    right: 49px;
  }
}

//
.options-user {
  width: 220px;
  top: 35px;
  right: 0;
  overflow: hidden;
  will-change: max-height;
  z-index: 9999;

  //
  > *:hover {
    //
    @media (hover: hover) {
      background-color: var(--twentySix);
      color: var(--primary) !important;
    }
  }

  @media (max-width: 992px) {
    width: 200px;
    max-height: 0px;
    right: -62px;
    top: 58px;
    transition: max-height 0.8s ease-in-out;
  }

  //
  &--active {
    @media (max-width: 992px) {
      max-height: 300px;
    }
  }

  //
  &--none {
    //
    @media (min-width: 992px) {
      display: none;
    }
  }
}

//
.notification {
  position: relative;
  //
  @media (max-width: 992px) {
    position: absolute;
    top: 60px;
    right: -154px;
    width: 100%;
    //
    svg {
      fill: var(--fifth);
    }
  }
}

//
.svg-change {
  @media (max-width: 992px) {
    width: 40px;
    height: 40px;
  }
}

.svg-arrow {
  width: 20px;
  height: 20px;
}

//
.all-notification {
  width: 260px;
  top: 35px;
  right: 0;
  max-height: 234px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;
  will-change: transform;

  // Change scroll bar
  @include changeScrollBar();

  //
  p {
    // Before
    &::before {
      content: '-';
      position: absolute;
      display: block;
      left: 10px;
      width: 100%;
    }
  }

  //
  @media (max-width: 992px) {
    width: 200px;
    top: -60px;
    right: 85px;
    z-index: 9999;
    max-height: 2000px;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.7s ease-in-out;
  }

  //
  &--active {
    //
    @media (max-width: 992px) {
      transform: translateX(0);
    }
  }

  //
  &--none {
    //
    @media (min-width: 992px) {
      display: none;
    }
  }
}
</style>
