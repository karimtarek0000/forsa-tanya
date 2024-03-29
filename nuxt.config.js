export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
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

  // Loading
  loading: {
    color: '#707070',
    height: '7px',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/style/style.scss', lang: 'scss' },
    { src: 'vue-slick-carousel/dist/vue-slick-carousel.css', lang: 'css' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/axios.js', '@/plugins/plugins.js'],

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

  //
  styleResources: {
    scss: [
      '~/assets/style/helpers/_design-system.scss',
      '~/assets/style/helpers/_other.scss',
    ],
  },

  //
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
    vuex: {
      syncLocale: true,
      syncMessages: true,
      syncRouteParams: true,
    },
  },

  //
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [],
    directivePlugins: [],
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BFormInput',
      'BButton',
      'BForm',
      'BLink',
      'BSpinner',
      'BFormRating',
      'BFormText',
      'BFormCheckbox',
      'BFormGroup',
      'BFormRow',
      'BFormRadioGroup',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
    },

    transpile: ['fake-authentication'],
  },

  //
  router: {
    middleware: 'statusI18n',
    //
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'userProfile',
    //     path: '/user/profile/:id',
    //     component: resolve(__dirname, 'pages/profile.vue'),
    //   })
    //   routes.push({
    //     name: 'editUserProfile',
    //     path: '/user/edit-profile/:id',
    //     component: resolve(__dirname, 'pages/edit-profile.vue'),
    //   })
    //   routes.push({
    //     name: 'mySessions',
    //     path: '/user/my-sessions/:id',
    //     component: resolve(__dirname, 'pages/my-sessions.vue'),
    //   })
    // },
  },

  //
  pageTransition: {
    name: 'start',
    mode: 'out-in',
  },

  //
  generate: {
    fallback: true,
  },
}
