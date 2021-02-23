import * as Type from '@/type/index.js'

export default function ({ app }) {
  // Set Header When change language, and this header will be add every request
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)
  // 1) - Social Media
  app.store.dispatch(Type.SOCIAL_MEDIA)
}
