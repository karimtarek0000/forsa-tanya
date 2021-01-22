export default function ({ app }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    //
    if (process.browser) {
      document.dir = newLocale === 'en' ? 'ltr' : 'rtl'
    }
  }
}
