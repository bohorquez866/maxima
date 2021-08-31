export default {
    loading: '@/components/Loader.vue',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Maxima Limpieza | Maintenance Service',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['./scss/styles.css', 'aos/dist/aos.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/node_modules/vue-awesome-swiper' },
        { src: './node_modules/vue-lazyload/', ssr: false },
        { src: './plugins/lazy.js', ssr: false },
        { src: './plugins/global.client.js' },
        { src: '@/node_modules/vee-validate' },
        { src: '@/node_modules/vue-silentbox' },
        { src: '~/plugins/aos', ssr: false },
        { src: '~/plugins/directives.client', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    transition: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate/dist/rules'],
        extend(config, ctx) {},
        vendor: ['aos'],
    },
}