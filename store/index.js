export const state = () => ({
    isLoading: true,
    menu: [],
    perks: [],
    home: [],
    commercial: [],
    residential: [],
    category: [],
    service: [],
    yoastPages: [],
    urlPath: 'http://localhost/maxima/backend/',
    visibleResidential: false,
    visibleCommercial: true,
})
export const getters = {
    menu(state) {
        return state.menu
    },
    yoastPages(state) {
        return state.yoastPages
    },
    perks(state) {
        return state.perks
    },
    home(state) {
        return state.home
    },
    category(state) {
        return state.category
    },
    service(state) {
        return state.service
    },
    commercial(state) {
        return state.commercial
    },
    residential(state) {
        return state.residential
    },
    urlPath(state) {
        return state.urlPath
    },
    isLoading(state) {
        return state.isLoading
    },
    visibleCommercial(state) {
        return state.visibleCommercial
    },
    visibleResidential(state) {
        return state.visibleResidential
    },
}
export const mutations = {
    SET_MENU_ITEMS(state, payload) {
        state.menu = payload
    },
    SET_PERKS_ITEMS(state, payload) {
        state.perks = payload
    },
    SET_HOME_ITEMS(state, payload) {
        state.home = payload
    },
    SET_SERVICE_ITEMS(state, payload) {
        state.service = payload
    },
    SET_CATEGORY_ITEMS(state, payload) {
        state.category = payload
    },
    SET_COMMERCIAL_ITEMS(state, payload) {
        let arrayCommercial = []
        let arrayChilds = []
        for (let i = 0; i < payload.length; i++) {
            arrayChilds.push(payload[i])
            if (i % 2 != 0) {
                arrayCommercial.push(arrayChilds)
                arrayChilds = []
            } else {
                if (payload.length - 1 == i) {
                    arrayCommercial.push(arrayChilds)
                }
            }
        }
        state.commercial = arrayCommercial
    },
    SET_RESIDENTIAL_ITEMS(state, payload) {
        let arrayResidential = []
        let arrayChilds = []
        for (let i = 0; i < payload.length; i++) {
            arrayChilds.push(payload[i])
            if (i % 2 != 0) {
                arrayResidential.push(arrayChilds)
                arrayChilds = []
            } else {
                if (payload.length - 1 == i) {
                    arrayResidential.push(arrayChilds)
                }
            }
        }
        state.residential = arrayResidential
    },
    TOGGLE_LOADER(state, payload) {
        state.isLoading = payload
    },
    TOGGLE_VISIBLE_COMMERCIAL(state, payload) {
        state.visibleCommercial = payload
    },
    TOGGLE_VISIBLE_RESIDENTIAL(state, payload) {
        state.visibleResidential = payload
    },
    SET_YOAST_PAGES(state, payload) {
        state.yoastPages = payload
    },
}

export const actions = {
    setMenuItems({ commit }, payload) {
        commit('SET_MENU_ITEMS', payload)
    },
    setPerksItems({ commit }, payload) {
        commit('SET_PERKS_ITEMS', payload)
    },
    setHomeItems({ commit }, payload) {
        commit('SET_HOME_ITEMS', payload)
    },
    setCategoryItems({ commit }, payload) {
        console.log(payload)
        commit('SET_CATEGORY_ITEMS', payload)
    },
    setServiceItems({ commit }, payload) {
        commit('SET_SERVICE_ITEMS', payload)
    },
    setCommercialItems({ commit }, payload) {
        commit('SET_COMMERCIAL_ITEMS', payload)
    },
    setResidentialItems({ commit }, payload) {
        commit('SET_RESIDENTIAL_ITEMS', payload)
    },
    toggleLoader({ commit }, payload) {
        commit('TOGGLE_LOADER', payload)
    },
    toggleCommercial({ commit }, payload) {
        commit('TOGGLE_VISIBLE_COMMERCIAL', payload)
    },
    toggleResidential({ commit }, payload) {
        commit('TOGGLE_VISIBLE_RESIDENTIAL', payload)
    },
    set({ commit }, payload) {
        commit('SET_YOAST_PAGES', payload)
    },
}