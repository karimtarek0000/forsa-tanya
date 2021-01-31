export default function ({ app }) {
  app.$axios.setBaseURL('https://sam-construction.com/forsa_tanya/api')
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
}
