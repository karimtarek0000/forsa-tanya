export default function ({ app }) {
  app.$axios.setBaseURL('https://immense-reef-23550.herokuapp.com/')
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
}
