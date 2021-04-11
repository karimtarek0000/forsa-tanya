export default function ({ app }) {
  app.$axios.setBaseURL('https://vast-savannah-07462.herokuapp.com/')
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
}
