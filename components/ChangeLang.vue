<template>
  <b-form-select
    v-model="selected"
    :options="generateAllLanguages"
    class="select-lang border border-primary text-uppercase"
  ></b-form-select>
</template>

<script>
export default {
  name: 'ChangeLang',
  data() {
    return {
      userIn: true,
      selected: this.$i18n.locale,
    }
  },
  computed: {
    //
    generateAllLanguages() {
      return this.$i18n.locales.map((lang) => ({
        value: lang.code,
        text: lang.name,
      }))
    },
  },
  watch: {
    //
    selected(newValue) {
      this.$i18n.setLocale(newValue)
    },
  },
}
</script>

<style lang="scss">
//
.select-lang {
  width: 36px;
  height: 36px;
  background: transparent;
  color: var(--primary);
  padding: 0px 6px;
  border-radius: 0;
}
</style>
