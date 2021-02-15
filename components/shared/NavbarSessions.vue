<template>
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
      <!--  -->
      <span>{{
        comp === 'UpComing' || comp === 'UpComingDoctor'
          ? 'upcoming'
          : comp === 'Previous' || comp === 'PreviousDoctor'
          ? 'Previous'
          : comp
      }}</span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'NavbarSessions',
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
  methods: {
    // 1) - When clicked will be change name component, and render a new component
    clickRenderComponent(name) {
      this.$emit('sendNameComponent', name)
    },
  },
}
</script>

<style></style>
