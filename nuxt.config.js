// Node enviroment check so 'dev' options are turned to false during production build
const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Will build as an SPA but allow @nuxtjs/pwa to function correctly in dev mode
  mode: 'universal',
  render: {
    ssr: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F11010' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** @nuxtjs/pwa module options
  */
  pwa: {
    manifest: {
      lang: 'en',
      name: "PWATestApp",
      short_name: "PWA/Nuxt - Test App",
      display: 'standalone',
      theme_color: '#F11010',
    },
    workbox: {
      dev: isDev // 
    }
  }
}
