export default function({ $axios, redirect, store }) {
    function retreiveData(res) {
        let urls = [{
                url: 'wp-json/menus/v1/menus/Navbar',
                action: 'SET_MENU_ITEMS',
                responseObj: res.items,
            },

            {
                url: 'wp-json/acf/v3/options/options',
                action: 'SET_PERKS_ITEMS',
                responseObj: res.acf,
            },

            {
                url: 'wp-json/acf/v3/pages',
                action: 'SET_HOME_ITEMS',
                responseObj: res,
            },

            {
                url: 'wp-json/wp/v2/service?per_page=100',
                action: 'SET_SERVICE_ITEMS',
                responseObj: res,
            },

            {
                url: 'wp-json/wp/v2/service?filter[categoria]=commercial&filter[posts_per_page]=20&filter[orderby]=date&order=asc',
                action: 'SET_COMMERCIAL_ITEMS',
                responseObj: res,
            },

            {
                url: 'wp-json/wp/v2/service?filter[categoria]=residential&filter[posts_per_page]=20&filter[orderby]=date&order=asc',
                action: 'SET_RESIDENTIAL_ITEMS',
                responseObj: res,
            },

            {
                url: 'wp-json/wp/v2/categoria',
                action: 'SET_CATEGORY_ITEMS',
                responseObj: res,
            },
        ]
        urls.forEach(function(urlLink) {
            $axios
                .get(`http://localhost/maxima/backend/${urlLink.url}`)
                .then((res) => {
                    data = res
                    const finalData = urlLink.responseObj
                    store.commit(`${urlLink.action}`, finalData)
                })

            .catch((error) => error)
        })
    }
    retreiveData()
}