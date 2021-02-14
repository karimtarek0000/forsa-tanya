<template>
  <b-row no-gutters>
    <b-col
      v-for="comp in component"
      :key="comp"
      :class="[
        'un-active cursor text-17 weight-bolder py-2 text-capitalize text-center',
        { active: comp === selected },
      ]"
      @click="clickRenderComponent(comp)"
    >
      <span>{{
        comp === component[0]
          ? $t('labels.personalInformation')
          : comp === component[1]
          ? $t('labels.aboutMe')
          : comp === 'EditPersonalProfile'
          ? $t('labels.personalInformation')
          : $t('labels.wallet')
      }}</span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'NavbarProfileDoctor',
  props: {
    component: {
      type: Array,
      required: true,
    },
    selectedComponent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: this.selectedComponent,
    }
  },
  methods: {
    // 1) - When clicked will be change name component, and render a new component
    clickRenderComponent(name) {
      this.selected = name
      this.$emit('changedComponent', this.selected)
    },
  },
}
</script>

<style></style>
