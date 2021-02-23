export default function ({ app }) {
  app.$axios.setBaseURL(
    'https://05bd0feb-f188-4fb8-84c8-6488e9d94004.mock.pstmn.io/api/v1'
  )
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
  app.$axios.setHeader(
    'x-api-key',
    'PMAK-603524540ea84e0034cc84a2-3c390885f2f65fdc8bdbc3672ff672a7a0'
  )
}
