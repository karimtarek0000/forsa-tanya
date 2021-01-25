export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Forsa Tanya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'mask-icon',
        type: 'image/png',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        type: 'image/png',
        href: '/site.webmanifest',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/style/style.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/statusI18n.js'],

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
      { code: 'ar', iso: 'ar-EG', name: 'ع', file: 'ar.json' },
      { code: 'en', iso: 'en-US', name: 'en', file: 'en.json' },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'ar',
    loadLanguagesAsync: true,
    strategy: 'prefix',
    parsePages: true,
    detectBrowserLanguage: false,
    seo: false,
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
