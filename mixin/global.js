import axios from 'axios'
export default {
    data() {
        return {
            url: 'wp-json/menus/v1/menus/Navbar',
            urlPerks: 'wp-json/acf/v3/options/options',
            urlHome: 'wp-json/acf/v3/pages',
            urlService: 'wp-json/wp/v2/service?per_page=100',
            urlCategory: 'wp-json/wp/v2/categoria',
            menu: null,
        }
    },
    computed: {
        menuDos() {
            return this.$store.getters.menu
        },
        optionsData() {
            return this.$store.getters.perks
        },

        urlPath() {
            return this.$store.getters.urlPath
        },
    },
    mounted() {
        this.getMenu()
        this.getPerks()
        this.getHomePage()
        this.getServiceData()
        this.getCategoryData()
    },

    methods: {
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
        getServiceData() {
            axios
                .get(`${this.urlPath}${this.urlHome}`)
                .then((response) => {
                    const finalData = response.data
                    this.$store.commit('SET_SERVICES_ITEMS', finalData)
                })
                .catch((error) => error)
        },
        getCategoryData() {
            axios
                .get(`${this.urlPath}${this.urlCategory}`)
                .then((response) => {
                    const finalData = response.data
                    console.log(finalData)
                    this.$store.commit('SET_CATEGORY_ITEMS', finalData)
                })
                .catch((error) => error)
        },
    },
}