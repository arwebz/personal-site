const axiosDev = {
  baseURL: 'http://localhost:3000',
}
const axiosProd = {
  baseURL: 'https://www.martinfrackerjr.com'
}

module.exports = {
  head: {
    title: 'Martin Fracker, Jr.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    emailUser: process.env.EMAIL_USER
  },
  modules: [
    '@nuxtjs/font-awesome',
    'nuxtent'
  ],
  css: [
    'prismjs/themes/prism-tomorrow.css',
    { src: '~/styles.less', lang: 'less' }
  ],
  plugins: [
    '~/plugins/buefy',
    '~/plugins/page'
  ],
  loading: { color: '#77dd77', height: '5px' },
  router: {
    linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-active',
    middleware: 'page'
  },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.devtool = 'source-map'
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  watchers: {
    webpack: {
      poll: true
    }
  }
}
