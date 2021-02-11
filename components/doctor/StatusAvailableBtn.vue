<template>
  <div class="btn-available">
    <!--  -->
    <div class="btn-available__inner">
      <!--  -->
      <div
        :class="[
          'btn-available__toggler',
          { 'btn-available__toggler--active': toggle },
        ]"
        @click="toggle = !toggle"
      >
        <span
          :class="[
            'btn-available__toggler__toggle',
            { 'btn-available__toggler__toggle--active': toggle },
          ]"
        ></span>
      </div>
      <!--  -->
      <p class="btn-available__status">
        {{ toggle ? $t('labels.available') : $t('labels.unavailable') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusAvailableBtn',
  model: {
    prop: 'statusToggle',
    event: 'changeStatusToggle',
  },
  props: {
    statusToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: this.statusToggle,
    }
  },
  watch: {
    toggle(n) {
      this.$emit('changeStatusToggle', n)
    },
  },
}
</script>

<style lang="scss">
//
.btn-available {
  display: flex;
  justify-content: center;
  align-items: center;
  //
  &__inner {
    display: flex;
    align-items: center;
  }
  //
  &__toggler {
    position: relative;
    width: 45px;
    height: 24px;
    border-radius: 200px;
    margin: 0 10px;
    overflow: hidden;
    background-color: #dfdfdf;
    transition: background-color 0.5s ease-in-out;
    will-change: background-color;
    cursor: pointer;

    //
    &--active {
      background-color: #3ec555;
    }

    //
    &__toggle {
      position: absolute;
      display: block;
      top: 50%;
      left: 1px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      transform: translateY(-50%);
      transition: left 0.5s ease-in-out;
      will-change: left;
      background-color: white;

      //
      &--active {
        left: 21px;
      }
    }
  }
  //
  &__status {
    min-width: 100px;
    margin: 0;
    text-transform: capitalize;
    user-select: none;
  }
}
</style>
