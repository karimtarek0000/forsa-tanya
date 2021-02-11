<template>
  <LayoutInfo src-img="therapists/1.png" class="my-sessions">
    <!-- 1 - Add more information specific only doctor not user -->
    <template slot="addElementDoctor">
      <!--  -->
      <b-col
        cols="12"
        class="mb-2 d-flex h-33 align-items-center justify-content-center"
      >
        <!-- 1) - Rating -->
        <b-form-rating
          v-model="rating"
          class="p-0 bg-primary"
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
    </template>
    <!-- 2 - Add statua button toggle specific doctor not user -->
    <template slot="addStatusAvailableToggle">
      <StatusAvailableBtn v-model="s" />
    </template>
    <!-- 3 - Navbar profile doctor -->
    <NavbarProfileDoctor
      :component="component"
      :selected-component="selectedComponent"
      @changedComponent="selectedComponent = $event"
    />
    <!-- 4 - Render component -->
    <b-row no-gutters class="px-5 py-4">
      <b-col>
        <components :is="selectedComponent">
          <PersonalInfo />
          <AboutMe />
          <Wallet />
        </components>
      </b-col>
    </b-row>
  </LayoutInfo>
</template>

<script>
//
import Validate from '@/mixins/validatePage.js'
//
export default {
  mixins: [Validate],
  data() {
    return {
      selectedComponent: 'PersonalInfo',
      component: ['PersonalInfo', 'AboutMe', 'Wallet'],
      rating: 3,
      s: true,
    }
  },
  head() {
    return {
      title: 'personal info',
    }
  },
}
</script>

<style lang="scss">
/*  */
.change {
  overflow: hidden;
  padding: 0 !important;
}

//
.my-sessions {
  .un-active {
    background-color: var(--primary);
    color: var(--third);
  }
  // Active
  .active {
    background-color: var(--third);
    color: var(--primary);
  }
}

//
.card-sessions {
  height: 160px;
  width: 707px;
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

//
.card__wrapper {
  padding: 0 10px;
  @media (min-width: 1199px) {
    padding: 0 70px;
  }
}
</style>
