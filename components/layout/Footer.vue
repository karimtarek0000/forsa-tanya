<template>
  <footer class="bg-tenth pt-5">
    <!-- Start Container -->
    <b-container fluid="lg" class="px-2 px-lg-0">
      <!-- Start Row 1 -->
      <b-row no-gutters>
        <!-- 1) - Footer info -->
        <b-col lg="4">
          <!-- 1) - Logo -->
          <Logo />
          <!-- 2) - Description -->
          <p class="width-90 mt-3 text-14 weight-light">
            We earned a reputation of being good at what we do. Let us take your
            online shop to new dimension in success!
          </p>
          <!-- 3) - Social media -->
          <b-row no-gutters class="width-80 mt-4">
            <b-link
              v-for="(social, index) in socialMedia"
              :key="social.name"
              :class="`wrapper-icon d-flex justify-content-center align-items-center rounded-circle bg-${socialIcons[index]}`"
              :href="social.value"
            >
              <GSvg :name-icon="socialIcons[index]" :title="social.name" />
            </b-link>
          </b-row>
        </b-col>
        <!-- 2) - Form -->
        <b-col class="mx-lg-10">
          <b-row no-gutters>
            <!-- 1) - Form Footer -->
            <b-col lg="12" class="mt-5">
              <FormFooter />
            </b-col>
            <!-- 2) - Other Info -->
            <b-col class="mt-4">
              <b-row no-gutters>
                <!--  -->
                <b-col md="6" class="text-capitalize">
                  <h4 class="text-eleventh text-20 weight-extraBold">
                    {{ $t('footer.contactsUs') }}
                  </h4>
                  <ul class="list-unstyled">
                    <li class="mb-2">phone</li>
                    <li>email</li>
                  </ul>
                </b-col>
                <!--  -->
                <b-col md="6" class="text-capitalize">
                  <h4 class="text-eleventh text-20 weight-extraBold">
                    {{ $t('footer.help') }}
                  </h4>
                  <ul class="list-unstyled text-capitalize">
                    <li class="text-uppercase mb-2">faq</li>
                    <li class="mb-2">privacy policy</li>
                    <li>terms & conditions</li>
                  </ul>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- End Row 1 -->
    </b-container>

    <!--  -->
    <b-row no-gutters class="bg-twelveth py-3">
      <b-container fluid="lg" class="px-2 px-lg-0">
        <p class="m-0 text-sixth text-center text-14">
          {{ $t('footer.copyright') }} &copy; {{ year }} {{ $t('meta.name') }}
          {{ $t('footer.allRights') }}
        </p>
      </b-container>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialIcons: ['twitter', 'facebook', 'instagram', 'youtube'],
    }
  },
  computed: {
    socialMedia() {
      return this.$store.state.social
    },
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss">
// Footer
footer {
  // SVG
  svg {
    width: 18px;
    height: 18px;
    fill: var(--primary);
  }

  .wrapper-icon {
    width: 36px;
    height: 36px;

    //
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  ul {
    padding: 0;
  }

  //
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle,
  .btn-primary:focus,
  .btn-primary.focus {
    background-color: var(--third);
    color: var(--primary);
  }

  //
  .btn-primary:hover {
    @media (hover: hover) {
      background-color: var(--third);
      color: var(--primary);
    }
  }
}

/////////////////////
// Other Classes
.rounded-left {
  border-radius: 5px 0 0 5px;
}
.rounded-right {
  border-radius: 0 5px 5px 0;
}
</style>
