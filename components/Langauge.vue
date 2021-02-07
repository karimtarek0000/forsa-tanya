<template>
  <!-- 4) - Language -->
  <select v-model="selected" class="language">
    <option
      v-for="lang in generateAllLanguages"
      :key="lang.value"
      :value="lang.value"
      v-text="lang.text"
    />
  </select>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
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

<style lang="scss" scoped>
// Language
.language {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  padding: 0px 7px;
  width: 36px;
  height: 36px;
  border: 0;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 0;
  text-transform: uppercase;

  //
  @supports (text-align-last: center) {
    text-align-last: center;
    padding: 0;
  }

  //
  @media (max-width: 992px) {
    width: 95%;
    margin: 10px auto;
  }

  //
  &:focus {
    outline: none;
  }
}
</style>
