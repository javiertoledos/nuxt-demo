import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/profile', method: 'get', propertyName: 'data' }
        }
      }
    },
    redirect: {
      login: 'login',
      logout: 'index',
      callback: 'login',
      home: 'index'
    },
    plugins: [
      { src: '~/plugins/authLangRedirect.ts' }
    ]
  },
  middleware: ['auth'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/initApi.ts' },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth'
  ],
  styleResources: {
    scss: [
        '@assets/scss/base.scss'
    ]
  },
  /*
  ** i18n configuration
  */
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        file: 'es.json'
      }
    ],
    defaultLocale: 'en',
    langDir: 'lang/',
    lazy: true,
    parsePages: false,
    pages: {
      login: {
        en: '/login',
        es: '/ingresar'
      },
      index: {
        en: '/',
        es: '/'
      },
      private: {
        en: '/private',
        es: '/privado'
      }
    },
    vueI18n: {
      fallbackLocale: 'en',
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // },
  },

  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000/'
  }
}

export default config
