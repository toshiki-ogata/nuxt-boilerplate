export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['@/assets/scss/_font.scss', '@/assets/scss/_global.scss'],
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  },
  plugins: [],
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],
  build: {}
}
