<template>
  <LayoutInfo src-img="other/3.jpg" class="my-sessions">
    <b-row no-gutters>
      <b-col
        v-for="comp in component"
        :key="comp"
        :class="[
          'un-active cursor text-19 weight-bolder py-2 text-capitalize text-center',
          { active: comp === selectedComponent },
        ]"
        @click="clickRenderComponent(comp)"
      >
        <span>{{ comp == 'UpComing' ? 'upcoming' : comp }}</span>
      </b-col>
    </b-row>
    <!--  -->
    <b-row no-gutters class="setMaxHeight">
      <b-col>
        <components
          :is="selectedComponent"
          @openCard="closeScreenChangePassword = $event"
        >
          <UpComing />
          <Previous />
        </components>
      </b-col>
    </b-row>

    <!--  -->
    <ModelForm
      v-if="closeScreenChangePassword"
      slot="other"
      @closeFullScreen="closeScreenChangePassword = $event"
    >
      <!-- Add Rate -->
      <AddRate />
    </ModelForm>
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
      selectedComponent: 'UpComing',
      component: ['UpComing', 'Previous'],
      closeScreenChangePassword: false,
    }
  },
  methods: {
    // 1) - When clicked will be change name component, and render a new component
    clickRenderComponent(name) {
      return (this.selectedComponent = name)
    },
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

//
.setMaxHeight {
  max-height: 448px;
  overflow-y: auto;
  //
  @include changeScrollBar();
}
</style>
