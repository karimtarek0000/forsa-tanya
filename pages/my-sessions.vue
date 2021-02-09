<template>
  <LayoutInfo class="my-sessions">
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
        <span>{{ comp }}</span>
      </b-col>
    </b-row>
    <!--  -->
    <b-row no-gutters>
      <b-col>
        <components :is="selectedComponent">
          <UpComing />
          <Previous />
        </components>
      </b-col>
    </b-row>
  </LayoutInfo>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent: 'UpComing',
      component: ['UpComing', 'Previous'],
    }
  },
  methods: {
    // 1) - When clicked will be change name component, and render a new component
    clickRenderComponent(name) {
      return (this.selectedComponent = name)
    },
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
</style>
