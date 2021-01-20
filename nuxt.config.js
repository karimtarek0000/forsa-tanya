export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'forsa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/style/style.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    //  Nuxt I18n
    'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Style Resources
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/style/base/_base.scss',
      '~/assets/style/helpers/_design-system.scss',
    ],
  },
  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-EG', name: 'عربي', file: 'ar.json' },
      { code: 'en', iso: 'en-US', name: 'en', file: 'en.json' },
    ],
    lazy: true,
    langDir: 'locales/',
    loadLanguagesAsync: true,
    defaultLocale: 'ar',
    strategy: 'prefix',
    parsePages: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
    },
    seo: false,
    // vuex: {
    //   syncLocale: true,
    //   syncMessages: true,
    //   syncRouteParams: true,
    // },
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // bootstrapVue: {
    //   componentPlugins: [
    //     'LayoutPlugin',
    //     'FormInputPlugin',
    //     'FormRatingPlugin',
    //     'NavbarPlugin',
    //   ],
    //   // components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BFormRating', 'BNavbar']
    // },
    // directivePlugins: ['VBBSidebarPlugin']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    fallback: true,
  },
}
