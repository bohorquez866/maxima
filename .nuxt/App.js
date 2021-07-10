import Vue from 'vue'
import {
    decode,
    parsePath,
    withoutBase,
    withoutTrailingSlash,
    normalizeURL,
} from 'ufo'

import {
    getMatchedComponentsInstances,
    getChildrenComponentInstancesUsingFetch,
    promisify,
    globalHandleError,
    urlJoin,
    sanitizeComponent,
} from './utils'
import NuxtError from './components/nuxt-error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'
import axios from 'axios'
import '..\\scss\\styles.css'

import _6f6c098b from './layouts/default.vue'

const layouts = { _default: sanitizeComponent(_6f6c098b) }

export default {
    render(h, props) {
        const loadingEl = h('NuxtLoading', { ref: 'loading' })

        const layoutEl = h(this.layout || 'nuxt')
        const templateEl = h(
            'div', {
                domProps: {
                    id: '__layout',
                },
                key: this.layoutName,
            }, [layoutEl]
        )

        const transitionEl = h(
            'transition', {
                props: {
                    name: 'layout',
                    mode: 'out-in',
                },
                on: {
                    beforeEnter(el) {
                        // Ensure to trigger scroll event after calling scrollBehavior
                        window.$nuxt.$nextTick(() => {
                            window.$nuxt.$emit('triggerScroll')
                        })
                    },
                },
            }, [templateEl]
        )

        return h(
            'div', {
                domProps: {
                    id: '__nuxt',
                },
            }, [loadingEl, h(NuxtBuildIndicator), transitionEl]
        )
    },

    data: () => ({
        isOnline: true,

        layout: null,
        layoutName: '',

        nbFetching: 0,

        //urls
        url: 'wp-json/menus/v1/menus/Navbar',
        urlPerks: 'wp-json/acf/v3/options/options',
        urlHome: 'wp-json/acf/v3/pages',
        urlService: 'wp-json/wp/v2/service?per_page=100',
        urlCommercial: 'wp-json/wp/v2/service?filter[categoria]=commercial&filter[posts_per_page]=20&filter[orderby]=date&order=asc',
        urlResidential: 'wp-json/wp/v2/service?filter[categoria]=residential&filter[posts_per_page]=20&filter[orderby]=date&order=asc',
        urlCategory: 'wp-json/wp/v2/categoria',
        menu: null,
    }),

    beforeCreate() {
        Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
    },
    created() {
        // Add this.$nuxt in child instances
        this.$root.$options.$nuxt = this

        if (process.client) {
            // add to window so we can listen when ready
            window.$nuxt = this

            this.refreshOnlineStatus()
                // Setup the listeners
            window.addEventListener('online', this.refreshOnlineStatus)
            window.addEventListener('offline', this.refreshOnlineStatus)
        }
        // Add $nuxt.error()
        this.error = this.nuxt.error
            // Add $nuxt.context
        this.context = this.$options.context
    },
    beforeMount() {
        this.getMenu()
        this.getPerks()
        this.getHomePage()
        this.getCategoryData()
        this.getResidentialData()
        this.getCommercialData()
    },
    async mounted() {
        this.$loading = this.$refs.loading
    },

    watch: {
        'nuxt.err': 'errorChanged',
    },

    computed: {
        isOffline() {
            return !this.isOnline
        },

        isFetching() {
            return this.nbFetching > 0
        },
        //api data
        menuDos() {
            return this.$store.getters.menu
        },
        optionsData() {
            return this.$store.getters.perks
        },
        commercialInfo() {
            return this.$store.getters.commercial
        },
        residentialInfo() {
            return this.$store.getters.residential
        },
        urlPath() {
            return this.$store.getters.urlPath
        },
    },

    methods: {
        refreshOnlineStatus() {
            if (process.client) {
                if (typeof window.navigator.onLine === 'undefined') {
                    // If the browser doesn't support connection status reports
                    // assume that we are online because most apps' only react
                    // when they now that the connection has been interrupted
                    this.isOnline = true
                } else {
                    this.isOnline = window.navigator.onLine
                }
            }
        },

        async refresh() {
            const pages = getMatchedComponentsInstances(this.$route)

            if (!pages.length) {
                return
            }
            this.$loading.start()

            const promises = pages.map((page) => {
                const p = []

                // Old fetch
                if (page.$options.fetch && page.$options.fetch.length) {
                    p.push(promisify(page.$options.fetch, this.context))
                }
                if (page.$fetch) {
                    p.push(page.$fetch())
                } else {
                    // Get all component instance to call $fetch
                    for (const component of getChildrenComponentInstancesUsingFetch(
                            page.$vnode.componentInstance
                        )) {
                        p.push(component.$fetch())
                    }
                }

                if (page.$options.asyncData) {
                    p.push(
                        promisify(page.$options.asyncData, this.context).then((newData) => {
                            for (const key in newData) {
                                Vue.set(page.$data, key, newData[key])
                            }
                        })
                    )
                }

                return Promise.all(p)
            })
            try {
                await Promise.all(promises)
            } catch (error) {
                this.$loading.fail(error)
                globalHandleError(error)
                this.error(error)
            }
            this.$loading.finish()
        },
        errorChanged() {
            if (this.nuxt.err) {
                if (this.$loading) {
                    if (this.$loading.fail) {
                        this.$loading.fail(this.nuxt.err)
                    }
                    if (this.$loading.finish) {
                        this.$loading.finish()
                    }
                }

                let errorLayout = (NuxtError.options || NuxtError).layout

                if (typeof errorLayout === 'function') {
                    errorLayout = errorLayout(this.context)
                }

                this.setLayout(errorLayout)
            }
        },

        setLayout(layout) {
            if (layout && typeof layout !== 'string') {
                throw new Error(
                    '[nuxt] Avoid using non-string value as layout property.'
                )
            }

            if (!layout || !layouts['_' + layout]) {
                layout = 'default'
            }
            this.layoutName = layout
            this.layout = layouts['_' + layout]
            return this.layout
        },
        loadLayout(layout) {
            if (!layout || !layouts['_' + layout]) {
                layout = 'default'
            }
            return Promise.resolve(layouts['_' + layout])
        },
        //here you get your API RESPONSE
        getMenu() {
            axios
                .get(`${this.urlPath}${this.url}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_MENU_ITEMS', finalData.items)
                })
                .catch((error) => error)
        },
        getPerks() {
            axios
                .get(`${this.urlPath}${this.urlPerks}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_PERKS_ITEMS', finalData.acf)
                })
                .catch((error) => error)
        },
        getHomePage() {
            axios
                .get(`${this.urlPath}${this.urlHome}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_HOME_ITEMS', finalData)
                })
                .catch((error) => error)
        },

        getCategoryData() {
            axios
                .get(`${this.urlPath}${this.urlCategory}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_CATEGORY_ITEMS', finalData)
                })
                .catch((error) => error)
        },
        getResidentialData() {
            axios
                .get(`${this.urlPath}${this.urlResidential}`)
                .then((response) => {
                    const finalData = response.data
                    console.log(finalData)
                    this.$store.commit('SET_RESIDENTIAL_ITEMS', finalData)
                })
                .catch((error) => error)
        },
        getCommercialData() {
            axios
                .get(`${this.urlPath}${this.urlCommercial}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_COMMERCIAL_ITEMS', finalData)
                })
                .catch((error) => error)
        },
    },

    components: {
        NuxtLoading,
    },
}