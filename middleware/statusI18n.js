import * as Type from '@/type/index.js'

export default function ({ app }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    //
    if (process.browser) {
      document.dir = newLocale === 'en' ? 'ltr' : 'rtl'
    }
  }

  // 2) - Social Media
  app.store.dispatch(Type.SOCIAL_MEDIA)
}
