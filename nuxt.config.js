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
    '@nuxtjs/axios',
    'nuxtent'
  ],
  plugins: [
    '~/plugins/buefy',
    '~/plugins/page',
    '~/plugins/prism',
    '~/plugins/styles'
  ],
  loading: { color: '#77dd77', height: '5px' },
  router: {
    linkExactActiveClass: 'is-active',
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
        config.devtool = 'source-map'
      }
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
