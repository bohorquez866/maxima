export default function({ $axios, redirect, store }) {
    function retreiveData() {
        let baseURL = 'http://www.maxima.amgbusiness.us/'
        $axios
            .get(`${baseURL}backend/wp-json/menus/v1/menus/Navbar`)
            .then((response) => {
                const finalData = response.data
                store.commit('SET_MENU_ITEMS', finalData.items)
            })

        .catch((error) => error)

        //* options
        $axios
            .get(`${baseURL}backend/wp-json/acf/v3/options/options`)
            .then((response) => {
                const finalData = response.data
                store.commit('SET_PERKS_ITEMS', finalData.acf)
            })

        .catch((error) => error)

        //* pages
        $axios
            .get(`${baseURL}backend/wp-json/acf/v3/pages`)
            .then((response) => {
                const finalData = response.data
                store.commit('SET_HOME_ITEMS', finalData)
            })

        .catch((error) => error)

        //*    SERVICES
        $axios
            .get(`${baseURL}backend/wp-json/wp/v2/service?per_page=100`)
            .then((response) => {
                const finalData = response.data
                store.commit('SET_SERVICE_ITEMS', finalData)
            })

        .catch((error) => error)

        //* commercial
        $axios
            .get(
                `${baseURL}backend/wp-json/wp/v2/service?filter[categoria]=commercial&filter[posts_per_page]=20&filter[orderby]=date&order=asc`
            )
            .then((response) => {
                const finalData = response.data
                store.commit('SET_COMMERCIAL_ITEMS', finalData)
            })

        .catch((error) => error)

        //* residential
        $axios
            .get(
                `${baseURL}backend/wp-json/wp/v2/service?filter[categoria]=residential&filter[posts_per_page]=20&filter[orderby]=date&order=asc`
            )
            .then((response) => {
                const finalData = response.data
                store.commit('SET_RESIDENTIAL_ITEMS', finalData)
            })

        .catch((error) => error)

        //* category
        $axios
            .get(`${baseURL}backend/wp-json/wp/v2/categoria`)
            .then((response) => {
                const finalData = response.data
                store.commit('SET_CATEGORY_ITEMS', finalData)
            })

        .catch((error) => error)
    }
    retreiveData()
}