import * as Type from '@/type/index.js'

export default function ({ app }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    //
    if (process.browser) {
      document.dir = newLocale === 'en' ? 'ltr' : 'rtl'
    }
  }

  // Set Header When change language, and this header will be add every request
  app.$axios.setHeader('Accept-Language', app.store.getters.getLang)

  // 1) - Social Media
  app.store.dispatch(Type.SOCIAL_MEDIA)
}
