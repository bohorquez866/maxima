export const state = () => ({
    isLoading: true,
    menu: [],
    perks: [],
    home: [],
    commercial: [],
    residential: [],
    category: [],

    urlPath: 'http://localhost/maxima/backend/',
})

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
}

export const getters = {
    menu(state) {
        return state.menu
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
        commit('SET_CATEGORY_ITEMS', payload)
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
}