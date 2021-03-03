export default function ({ app }) {
  app.$axios.setBaseURL('https://glacial-springs-86113.herokuapp.com/')
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
}
