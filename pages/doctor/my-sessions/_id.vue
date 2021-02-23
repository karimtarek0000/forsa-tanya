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
    <!-- 3) - Navbar sessions -->
    <NavbarSessions
      :component="component"
      :selected-component="selectedComponent"
      @sendNameComponent="selectedComponent = $event"
    />
    <!-- 4) - Render components -->
    <b-row no-gutters class="px-2 px-lg-5">
      <b-col>
        <components
          :is="selectedComponent"
          @openCard="closeScreenChangePassword = $event"
        >
          <UpComingDoctor />
          <PreviousDoctor />
        </components>
      </b-col>
    </b-row>

    <!-- 5) - Pagination -->
    <Pagination
      v-if="selectedComponent === component[1]"
      slot="pagination"
      :total="1000"
      :current-page="page"
      :per-page="10"
      @changePage="page = $event"
    >
      <!-- Add icon prev -->
      <GSvg slot="prev" name-icon="angle-left" title="prev" />
      <!-- Add icon next -->
      <GSvg slot="next" name-icon="angle-right" title="next" />
    </Pagination>
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
      selectedComponent: 'UpComingDoctor',
      component: ['UpComingDoctor', 'PreviousDoctor'],
      s: false,
      rating: 3,
      page: 1,
    }
  },
  head() {
    return {
      title: `${this.$t('titles.mySessions')}`,
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
.pagination {
  //
  .pagination__btn {
    width: 43px;
    height: 43px;
    border-radius: 50%;
  }
  //
  svg {
    width: 25px;
    height: 25px;
    fill: var(--sixth);
  }
}
</style>
