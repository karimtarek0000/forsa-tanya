<template>
  <LayoutInfo src-img="other/3.jpg" class="my-sessions">
    <!--  -->
    <NavbarSessions
      :component="component"
      :selected-component="selectedComponent"
      @sendNameComponent="selectedComponent = $event"
    />
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

  head() {
    return {
      title: `${this.$t('titles.mySessions')}`,
    }
  },
}
</script>

<style></style>
